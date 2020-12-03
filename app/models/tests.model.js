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

  TESTS.create = (newTEST, result) => {
    //INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
    sql.query("INSERT INTO tests SET ?", newTEST, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Created a new test: ", { test_id: res.insertId, ...newTEST });
      result(null, { test_id: res.insertId, ...newTEST });
    });
  };


  module.exports = TESTS;