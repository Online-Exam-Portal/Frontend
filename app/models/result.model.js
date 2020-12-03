const sql = require("./db.js");

exports.register = async function(req,res){
  
        var result={
            "result_id": req.body.result_id,
            "student_id":req.body.student_id,
            "test_id": req.body.test_id,
            "score": req.body.score
        }

        sql.query('INSERT INTO result SET ?',result, function (error, results, fields) {
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