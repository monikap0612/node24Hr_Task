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
 [
        {
            "app_id":1,
            "app_name":"DeFi Swap",
            "description":"Swap your digital assets",
            "total_users":"200",
        },
        {
            "app_id":2,
            "app_name":"Doc sign",
            "description":"sign contract seamleassly",
            "total_users":"1K",
        },
]
