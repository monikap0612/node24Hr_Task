'use strict';
const AWS = require ('../config/awsdb.config.js');

var dynamodb = AWS.DynamoDB();

var params = {
    TableName = "App",
    KeySchema: [
        { AttributeName: "app_id", KeyType: "HASH"},  //Partition key
   ],
    AttributeDefinitions: [
        { AttributeName: "app_id", AttributeType: "S" },
        { AttributeName: "app_name", AttributeType: "S" },
        { AttributeName: "img", AttributeType: "S" },
        { AttributeName: "description", AttributeType: "S" },
        { AttributeName: "total_user", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};
dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});