const createApp = require("../models/CreateApp.models");
const getApp = require("../models/getApp.models");

exports.create = (event, context, callback) => {
        // Validate request
        if (!event.body) {
            res.status(400).send({
              message: "Content can not be empty!"
            });
          }
    
    createApp(event,callback);
}

exports.get = (event, context, callback) => {
  getApp(null,callback);
}
