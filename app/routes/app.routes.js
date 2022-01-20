module.exports = app =>{
    const dApps = require("../controller/App.controller");
    var router = require("express").Router();
    
    // Create a new Tutorial
    router.post("/create", dApps.create);

  // Retrieve all Tutorials
    router.get("/AllDapps",dApps.get);

    app.use('/api', router);
}