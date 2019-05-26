# ssm-parameters-getter-lambda

To retrieve parameters from AWS Systems Manager's Parameter Store. 

# Use case

The best use case is to place this before the state in a Step Function's workflow that accepts configuration as input such as username and password. As such, the application secrets are kept safely in AWS Parameter Store rather than in the Step Function's state machine code.


# Parameters Access Restriction

Following the principle of least privilege, there are two options that allows restriction on the AWS Lambda function to access certain parameters from the Parameters Store.

1. ParametersPrefix - Only allow access to parameters with certain prefix in the Parameters Store. 
2. Tag Keys List - Only allow access to parameters with certain tags for the parameters. Allows comma-delimited list of tag keys.


# Sample Input and Output
## Input 
```
{
  "param": [
    "random-input-a",
    "random-input-b"
  ],
  "withDecryption": true
}
```
## Output
```
{
  "random-input-a": "<Value from Parameter Store>"
  "random-input-b": "<Value from Parameter Store>"
}
```

# Deployment

Deploy manually using the source code: index.js or deploy it directly from AWS Serverless Application Repository with name: `ssm-parameters-getter-lambda`. Remember to check `Show apps that create custom IAM roles or resource policies` as if this Lambda requires additional role. 


# References:
- How to publish on SAR - https://docs.aws.amazon.com/serverlessrepo/latest/devguide/serverlessrepo-how-to-publish.html
- Documentation on SAR Template - https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md