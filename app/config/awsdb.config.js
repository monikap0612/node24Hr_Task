// import the aws sdk to use the DynamoDB
// libraries in the app
const AWS = require('aws-sdk');

// update the region to 
// where DynamoDB is hosted
AWS.config.update({ 
    region: 'us-west-2',

    endpoint: "http://localhost:8000"
});

module.exports =  AWS;