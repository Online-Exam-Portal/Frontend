const sql = require("./db.js");

exports.employee = async function(req,res){
  
    var result={
        "emp_id": req.body.emp_id,
        "emp_name":req.body.emp_name,
    }

    sql.query('INSERT INTO employee SET ?',result, function (error, results, fields) {
        if (error) {
          res.send({
            "code":400,
            "msg":error
          })
        } else {
          res.send({
            "code":200,
            "msg":"Result added sucessfully"
              });
          }
      });

}