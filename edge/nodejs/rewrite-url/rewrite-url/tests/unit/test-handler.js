'use strict';

const chai = require('chai');
const expect = chai.expect;

var event = {
 "Records": [
    {
      "cf": {
        "config": {
          "distributionDomainName": "d111111abcdef8.cloudfront.net",
          "distributionId": "EDFDVBD6EXAMPLE",
          "eventType": "origin-request",
          "requestId": "4TyzHTaYWb1GX1qTfsHhEqV6HUDd_BzoBZnwfnvQc_1oF26ClkoUSEQ=="
        },
        "request": {
          "clientIp": "203.0.113.178",
          "headers": {
            "x-forwarded-for": [
              {
                "key": "X-Forwarded-For",
                "value": "203.0.113.178"
              }
            ],
            "user-agent": [
              {
                "key": "User-Agent",
                "value": "Amazon CloudFront"
              }
            ],
            "via": [
              {
                "key": "Via",
                "value": "2.0 2afae0d44e2540f472c0635ab62c232b.cloudfront.net (CloudFront)"
              }
            ],
            "host": [
              {
                "key": "Host",
                "value": "example.org"
              }
            ],
            "cache-control": [
              {
                "key": "Cache-Control",
                "value": "no-cache, cf-no-cache"
              }
            ]
          },
          "method": "GET",
          "origin": {
            "custom": {
              "customHeaders": {},
              "domainName": "example.org",
              "keepaliveTimeout": 5,
              "path": "",
              "port": 443,
              "protocol": "https",
              "readTimeout": 30,
              "sslProtocols": [
                "TLSv1",
                "TLSv1.1",
                "TLSv1.2"
              ]
            }
          },
          "querystring": "",
          "uri": "/"
        }
      }
    }
  ]
};

var context;

describe('Tests index', function () {
  before(function() {
    var fs = require('fs')
    fs.copyFileSync('app.js', 'appTmp.js');
    var inputFile = fs.readFileSync('app.js', 'utf8');
    var outputFile = inputFile.replace(/INPUT_URL_MAPPING/g, "{\"www.example.com\": \"www.replaced.com\"}");
    fs.writeFileSync('app.js',outputFile);
  });

  after(function() {
    var fs = require('fs')
    fs.copyFileSync('appTmp.js', 'app.js');
    fs.unlinkSync('appTmp.js');
    console.log('delete file successfully');
  });

  it('verifies successful request', async () => {
    const app = require('../../app.js');
    app.handler(event, context, function(error, data) {
      if (error) {
        console.log(error); // an error occurred
      } else {
        console.log(data); // request succeeded
        expect(data.origin.custom.domainName).to.equal("www.replaced.com");
        expect(data.headers['host'][0].value).to.equal("www.replaced.com");
      }
    });
  });
});
