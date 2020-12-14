const sql = require("./db.js");

exports.getStatus = async function(req,res){

        sql.query("SELECT * FROM student_status", (err, result) => {

            if (err) {
              console.log("Error report: ", err);
              return;
            }
            console.log("Report : ", result);
          
            res.send(result);
          });
  
}