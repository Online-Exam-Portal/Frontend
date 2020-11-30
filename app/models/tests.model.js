const sql = require("./db.js");

const TESTS = function(tests) {
    this.test_id = tests.test_id;
    this.test_topic = tests.test_topic;
};

  TESTS.getAllTests = (result) => {
    sql.query("SELECT * FROM tests", (err, res) => {
      
      if (err) {
        console.log("Error get all: ", err);
        result(null, err);
        return;
      }
      console.log("All Tests : ", res);
      result(null, res);
    });
  }

  module.exports = TESTS;