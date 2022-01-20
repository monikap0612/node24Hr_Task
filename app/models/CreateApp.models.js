'use strict';
const AWS = require ('../config/awsdb.config.js'),
uuid = require('uuid'),
docClient = new AWS.DynamoDB.DocumentClient();

var table = "App";


module.exports = function (event,callback) {
    const data = JSON.parse(event.body);
    var params = {
        TableName:table,
        Item:{
            "app_id":uuid.v1(),
            "app_name": data.app_name,
            "img": data.img,
            "description": data.description,
            "total_user": data.total_user,
        }
    };
    
    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
        }
    });    
}