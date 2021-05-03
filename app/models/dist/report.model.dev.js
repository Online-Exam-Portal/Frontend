"use strict";

var sql = require("./db.js");

exports.getReport = function _callee(req, res) {
  var procedure;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          procedure = "CALL getReport()"; //stored procedure called
          //SELECT result.test_id, test_topic, result.student_id, s_name, score 
          //FROM result, tests, students 
          //WHERE result.student_id=students.student_id 
          //AND result.test_id = tests.test_id;

          sql.query(procedure, function (err, result) {
            if (err) {
              console.log("Error report: ", err);
              return;
            }

            console.log("Report : ", result);
            res.send(result[0]);
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};