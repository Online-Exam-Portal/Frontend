const TESTS = require("../models/tests.model.js");

exports.findAllTests = (req, res) => {

  TESTS.getAllTests((err, data) => { //here, this function is passed and is called as result(err, data) in model
      if(err)
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving tests."
        });
      else res.send(data);
  });

};

// Create and Save a new TEST
exports.create = (req, res) => {
    
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  // Create a MCQ
  const newTEST = new TESTS({
    test_id : req.body.test_id,
    test_topic : req.body.test_topic,
  });
  
  // Save MCQ in the database
  TESTS.create(newTEST, (err, data) => {
    if(err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the TEST."
      });
    else res.send(data);
  });

};
