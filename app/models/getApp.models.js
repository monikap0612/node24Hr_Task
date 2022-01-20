const AWS = require ('../config/awsdb.config.js');

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "App";


module.exports = function (event,callback) {
    var params = {
        TableName:table,
    };
    
    //console.log("Adding a new item...");

    docClient.get(params, (error, result) => {
        if (error) {
           // console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t fetch the users.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
        callback(null, response);
    });   
}