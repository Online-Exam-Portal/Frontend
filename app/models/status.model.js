const sql = require("./db.js");

exports.getStatus = async function(req,res){
        //trigger used for creating student_status
        /**
         * | status  | INSERT | result | BEGIN
IF NEW.score >= 8 THEN INSERT INTO student_status VALUES(NEW.student_id, "DISTINCTION");
ELSEIF NEW.score >= 5 THEN INSERT INTO student_status VALUES(NEW.student_id, "PASS");
ELSE INSERT INTO student_status VALUES(NEW.student_id, "FAIL");
END IF;
END | AFTER  | 2020-12-10 23:18:14.63 
         * 
         */
        sql.query("SELECT student_status.student_id, students.s_name, student_status.status FROM student_status, students WHERE student_status.student_id=students.student_id", (err, result) => {

            if (err) {
              console.log("Error report: ", err);
              return;
            }
            console.log("Report : ", result);
          
            res.send(result);
          });
  
}