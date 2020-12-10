module.exports = app => {
    const mcq = require("../controllers/mcq.controller.js");
    const tests = require("../controllers/tests.controller.js");
    const user = require("../models/user.model");
    const login = require("../models/login.model");
    const result = require("../models/result.model");
    const emp = require('../models/employee');
    const report = require('../models/report.model');

    // Create a new 
    app.post("/mcq", mcq.create);
    app.post("/tests", tests.create);
    app.post("/register", user.register);
    app.post("/login", login.login);
    app.post("/result", result.result);
    app.post("/emp", emp.employee);

    // Retrieve all 
    app.get("/mcq", mcq.findAll);
    app.get("/tests", tests.findAllTests);
    app.get("/report", report.getReport);

    // Retrieve a single Customer with customerId
   // app.get("/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    app.put("/mcq/:question_id", mcq.update);
  
    // Delete a Customer with customerId
    app.delete("/mcq/:question_id", mcq.delete);
  
    // Create a new Customer
    //app.delete("/customers", customers.deleteAll);
  };