const sql = require("./db.js");

async function getID() {

        var id = undefined;

        sql.query("SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'quiz' AND TABLE_NAME = 'result' ", (err, res) => {

          if (err) {
            console.log("Error result: ", err);
            result(null, err);
            return;
          }
          console.log("next : ", parseInt(res[0]["AUTO_INCREMENT"]));
          id = parseInt(res[0]["AUTO_INCREMENT"]);
          console.log("typeof : " + typeof(id))

        });
  
        return id;

}


exports.result = async function(req,res){
  
        const id = await getID()
  
        var result={
            "result_id": id,
            "student_id":req.body.student_id,
            "test_id": req.body.test_id,
            "score": req.body.score
        }

        console.log("typeof s : " + typeof(req.body.student_id))

        
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