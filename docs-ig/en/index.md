# Amazon CloudFront Extensions 

Amazon CloudFront Extensions includes three components: Lambda@Edge & CloudFront Functions collection, CloudFront Security Automations with Amazon WAF and Amazon Shield, and CloudFront Real-time Log Monitoring API. The solution aims to help customers use CloudFront more conveniently.
Please refer to [workshop](https://awslabs.github.io/aws-cloudfront-extensions/workshop/cn/) to get familiar with CloudFront Extensions.

## One stop to find Lambda@Edge and CloudFront Function for different use cases

This component provides a collection of  Lambda@Edge and CloudFront Functions for common CloudFront use cases, such as redirect, authentication verification, pre-warm, and resizing image.

#### Lambda@Edge

|    **Name**   | **Description**    | **Example** |
|------------------|--------------------|--------------------|
| [Authentication with Cognito](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/authentication-with-cognito) | Integrate with Cognito to provide authentication service. | - |
| [Add security headers](https://github.com/awslabs/aws-cloudfront-extensions/blob/main/edge/nodejs/add-security-headers) | Add security headers into response after successful authentication. | Add 'strict-transport-security' to force browser using HTTPS. |
| [Serve content based on device type](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/serving-based-on-device) | Redirect to the different version of an object based on the type of device that the user is using. | Redirect to specific url if the request device is mobile. |
| [Cross origin resource sharing](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/cross-origin-resource-sharing) | Support CORS (Cross Origin Resource Sharing) by Lambda@Edge. | Add headers such as 'access-control-allow-origin', 'access-control-allow-headers'. |
| [Modify response status code](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/modify-response-status-code)  | Modify response status code to another status code. | Modify status code from 200 to 206. |
| [Modify response header](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/modify-response-header) | Modify response header as per configuration. | - |
| [Access origin by weight rate](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/access-origin-by-weight-rate) | Forward request to multiple origin regarding to pre-configured weight for each origin.| - |
| [Failover to alternative origin](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/multiple-origin-IP-retry) | Failover to alternative IP from pre-configured list, and return from success IP. Otherwise, retry until last one. | - |
| [Support 302 from origin](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/http302-from-origin) | Process 302 response from origin, then access the redirected URL and return the response. | - |
| [Pre-warm](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/python/prewarm) | This Lambda will prewarm static content in specific pop. | Prewarm content only in North America. |
| [Resize picture](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/resize-picture) | Resize pictures on the fly according to dimensions passed by the query parameter. | Resize a picture from 1000x1000 to 200x300. |
| [Anti-hotlinking](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/anti-hotlinking) | Protect against hotlinking. Users need to specify a referer allow list which supports wild card, and the request is rejected if the referer is not in the allow list. | Only allow the requests from *.example.com. |
| [Standardize query string](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/normalize-query-string) | Standardize the query string before CloudFront forwards requests to your origin, thus improving the cache hit ratio. | Update https://d111111abcdef8.cloudfront.net/images/image.jpg?Type=demo&Color=red to https://d111111abcdef8.cloudfront.net/images/image.jpg?color=red&type=demo. |
| [Authentication with Alibaba Cloud](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/authentication-with-aliyun-cdn-typeA) | This solution provided by Goclouds Data is designed to achieve Alibaba Cloud CDN authentication. | - |
| [Rewrite host for custom origin](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/rewrite-url) | Rewrite host for custom origin. | - |
| [Serverless load balancer](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/python/serverless-load-balancer) | The serverless load balancer solution will load balance for your origin via Lambda@Edge which is deployed upon CloudFront origin request. | - |
| [Custom response with new URL](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/custom-response-with-replaced-url) | Replace the response content with a new content. | Replace the url "www.original.com" to "www.new.com" in the response. |


#### CloudFront Functions
|    **Name**   | **Description**    | **Example** |
|------------------|--------------------|--------------------|
| [Add security headers](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/add-security-headers) | Add several response headers to enable web browsers security features. | Add 'strict-transport-security' to force browser using HTTPS. | 
| [Cross origin resource sharing](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/cross-origin-resource-sharing) | Support CORS (Cross Origin Resource Sharing) by CloudFront Function. | Add headers such as 'access-control-allow-origin', 'access-control-allow-headers'. |
| [Add cache control headers](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/add-cache-control-header) | Add a Cache-Control header for the browser so that content can be cached locally in the browser. | - |
| [Add origin headers](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/add-origin-header) | Add an Origin header if it is not present in the incoming request. The Origin header is part of [Cross-Origin resource sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS), a mechanism using HTTP headers to tell browsers to give a web application running at one origin access to selected resources from a different origin. | - |
| [Add true client IP headers](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/add-true-client-ip-header) | Add a True-Client-IP header to include the IP address of a client connecting to CloudFront. Without this header, connections from CloudFront to your origin contain the IP address of the CloudFront server making the request to your origin, not the IP address of the client connected to CloudFront. | - |
| [Redirect based on country](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/redirect-based-on-country) | Redirect a user to a country-specific version of a site based on the country of the user. | - |
| [Default dir index](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/default-dir-index) | Append index.html to the end of URLs that do not include a filename or extension. | Update https://d111111abcdef8.cloudfront.net to https://d111111abcdef8.cloudfront.net/index.html. |
| [Verify JSON web token](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/verify-jwt) | Validate a JSON Web Token (JWT) in the query string of the incoming request. | - |
| [Customize request host](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/function/js/custom-host) | Replaces host with the value in the customized header. | The user may define a header awscustomhost.  |


## CloudFront Security Automations with Amazon WAF and Amazon Shield

CloudFront Extensions provides a template that allows you to use Amazon WAF and Amazon Shield on CloudFront, it will automatically deploy a set of WAF rules and Shield protection groups into your account to secure your web applications against below attacks.

  - SQL Injection and XSS: The solution configures two native WAF rules that are designed to protect against common SQL injection or cross-site scripting (XSS) patterns in the URI, query string, or body of a request.
  - HTTP flood: This component protects against attacks that consist of a large number of requests from a particular IP address, such as a web-layer DDoS attack or a brute-force login attempt.
  - Bad Bots: This component automatically sets up a honeypot, which is a security mechanism intended to lure and deflect an attempted attack.
  - Scanners and Probes: This component parses application access logs searching for suspicious behavior, such as an abnormal amount of errors generated by an origin. It then blocks those suspicious source IP addresses for a customer-defined period of time.
  - IP Reputation Lists: IP Lists Parser Lambda function which checks third-party IP reputation lists hourly for new ranges to block.
  - Deny list and allow list: This component creates two specific WAF rules that allow you to manually insert IP addresses that you want to block or allow.

## CloudFront Real-time Log Monitoring API

CloudFront Extensions provides a monitoring API, which obtains metrics such as cache hit rate and download rate by analyzing CloudFront real-time logs, and outputs them through RESTful API.

This solution can satisfy flexible customization requirements, and customize indicator logic from real-time logs according to your specific requirements, which can be implemented by SQL statements in Athena. The following 10 reference metrics are provided:

- request: the number of requests from the client to CloudFront
- requestOrigin: the number of requests back to the origin
- statusCode: the status code from the client to CloudFront
- statusCodeOrigin: the status code of the back-to-origin
- bandwidth: the bandwidth from the client to CloudFront
- bandwidthOrigin: bandwidth back to origin
- chr: cache hit rate calculated by the number of requests
- chrBandWith: cache hit ratio calculated by bandwidth
- downloadSpeed: download speed from client to CloudFront
- downloadSpeedOrigin: the download speed of the back-to-origin

The above reference indicators effectively supplement the current CloudWatch monitoring indicators for CloudFront, which can help you understand the operation of CloudFront from multiple dimensions. For the default built-in monitoring metrics of CloudFront, refer to [Monitoring CloudFront with Amazon CloudWatch](https://docs.aws.amazon.com/zh_cn/AmazonCloudFront/latest/DeveloperGuide/monitoring-using-cloudwatch.html).

This implementation guide describes architectural considerations and configuration steps for deploying CloudFront Extensions in the Amazon Web Services Cloud. It includes links to an Amazon Web Services [CloudFormation][cloudformation] template that launches and configures the services required to deploy this solution using Amazon Web Services best practices for security and availability.

The guide is intended for IT architects, and developers who have practical experience architecting in the Amazon Web Services Cloud. Please refer to [workshop](https://awslabs.github.io/aws-cloudfront-extensions/workshop/cn/) to get familiar with CloudFront Extensions.

[cloudformation]: https://aws.amazon.com/en/cloudformation/

