module.exports = app => {
    const mcq = require("../controllers/mcq.controller.js");
    const tests = require("../controllers/tests.controller.js");
    // Create a new 
    app.post("/mcq", mcq.create);
  
    // Retrieve all 
    app.get("/mcq", mcq.findAll);
    app.get("/tests", tests.findAllTests);
  
    // Retrieve a single Customer with customerId
   // app.get("/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    app.put("/mcq/:question_id", mcq.update);
  
    // Delete a Customer with customerId
    app.delete("/mcq/:question_id", mcq.delete);
  
    // Create a new Customer
    //app.delete("/customers", customers.deleteAll);
  };