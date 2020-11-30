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

/*
const newTESTS = new TESTS({
      test_id : req.body.test_id,
      test_topic : req.body.test_topic,
    });
*/