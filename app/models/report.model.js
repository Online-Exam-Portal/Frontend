const sql = require("./db.js");

exports.getReport = async function(req,res){

        let procedure = `CALL getReport()`;//stored procedure called
//SELECT result.test_id, test_topic, result.student_id, s_name, score FROM result, tests, students WHERE result.student_id=students.student_id AND result.test_id = tests.test_id;
        sql.query(procedure, (err, result) => {

            if (err) {
              console.log("Error report: ", err);
              return;
            }
            console.log("Report : ", result);
          
            res.send(result[0]);
          });
  
}