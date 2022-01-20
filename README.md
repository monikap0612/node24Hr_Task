### A repository created from Amazon's DynamoDB + NodeJS tutorial.


# Library installation

- express
    - npm install express 
- aws sdk
    - npm install aws-sdk

# Structure

- app
    -config
        - awsdb.config.js : (AWS configuration)
    -controllers
        - App.controller.js (Manage api crud operation)
    -models
        - createApp.models.js
        - createTable.models.js
        - getApp.models.js
    -routes
        - app.routes.js ( perform routing operation)
    -server.js

# JSON:
 

# API Endpoints:

1. /allDapps

API Response

- { statusCode: 200,
    Items:[
        {
            "app_id":1,
            "img":"",
            "app_name":"DeFi Swap",
            "description":"Swap your digital assets",
            "total_users":"200",
        },
        {
            "app_id":2,
            "img":"",
            "app_name":"Doc sign",
            "description":"sign contract seamleassly",
            "total_users":"1K",
        },
]
}


2. /createDapp
Parameter
        {
            "app_name":"DeFi Swap",
            "description":"Swap your digital assets",
            "total_users":"200",
        }
        


Response:
{
    statusCode: 200,
    Items:{
            "app_name":"DeFi Swap",
            "description":"Swap your digital assets",
            "total_users":"200",
        }

}

