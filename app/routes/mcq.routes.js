module.exports = app => {
    const mcq = require("../controllers/mcq.controller.js");
  
    // Create a new Customer
    app.post("/mcq", mcq.create);
  
    // Retrieve all Customers
    app.get("/mcq", mcq.findAll);
  
    // Retrieve a single Customer with customerId
   // app.get("/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    app.put("/mcq/:question_id", mcq.update);
  
    // Delete a Customer with customerId
    //app.delete("/customers/:customerId", customers.delete);
  
    // Create a new Customer
    //app.delete("/customers", customers.deleteAll);
  };