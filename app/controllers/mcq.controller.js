const MCQ = require("../models/mcq.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    
    // Create a Customer
    const newMCQ = new MCQ({
      question : req.body.question,
      optionA : req.body.optionA,
      optionB : req.body.optionB,
      optionC : req.body.optionC,
      optionD : req.body.optionD,
      correct_option : req.body.correct_option,
      test_id : req.body.test_id,
    });
    
    // Save Customer in the database
    MCQ.create(newMCQ, (err, data) => {
      if(err)
        res.status(500).send({
          message: err.message || "Some error occurred while creating the MCQ."
        });
      else res.send(data);
    });

};

// Retrieve all mcqs from the database.
exports.findAll = (req, res) => {

    MCQ.getAll((err, data) => { //here, this function is passed and is called as result(err, data) in model
        if(err)
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving MCQs."
          });
        else res.send(data);
    });
  
};




// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  MCQ.updateById(
    req.params.question_id,
    new MCQ(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found MCQ with id ${req.params.question_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating MCQ with id " + req.params.question_id
          });
        }
      } else res.send(data);
    }
  );
  
};

exports.delete = (req, res) => {

  MCQ.remove(req.params.question_id, (err, data) => {

    console.log(req.params.question_id)
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found mcq with id ${req.params.question_id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete mcq with id " + req.params.question_id
        });
      }
    } else res.send({ message: `mcq was deleted successfully!` });
  });
};

