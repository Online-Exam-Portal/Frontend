const sql = require("./db.js");

exports.getReport = async function(req,res){
    
    

        let procedure = `CALL getReport()`;//stored procedure called

        sql.query(procedure, (err, result) => {

            if (err) {
              console.log("Error report: ", err);
              
              return;
            }
            console.log("Report : ", result);
          
            res.send(result[0]);
          });

          

   
  
}