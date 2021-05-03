const sql = require("./db.js");

exports.getReport = async function(req,res){

        let procedure = `CALL getReportNew()`;
/*
mysql> DELIMITER &&
mysql> CREATE PROCEDURE getReportNew()
    -> BEGIN
    ->   SELECT result.test_id, test_topic, result.student_id, s_name, score, tests.teacher_id 
    ->   FROM result, tests, students
    ->   WHERE result.student_id=students.student_id
    ->   AND result.test_id = tests.test_id;
    -> END &&
Query OK, 0 rows affected (0.07 sec)
 */

        sql.query(procedure, (err, result) => {

            if (err) {
              console.log("Error report: ", err);
              return;
            }
            console.log("Report : ", result);
          
            res.send(result[0]);
          });
  
}