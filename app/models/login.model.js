const sql = require("./db.js");
const bcrypt = require('bcrypt');


exports.login = async function(req,res){
    
    var id= req.body.id;
    var password = req.body.password;
    var role = req.body.role;

    if(role=="teacher") {
        sql.query('SELECT * FROM teachers WHERE teacher_id = ?',[id], async function (error, results, fields) {
            if (error) {
              res.send({
                "code":400,
                "msg":error
              })
            }else{
              if(results.length >0){
                console.log(results[0])
                const comparision = await bcrypt.compare(password, results[0].t_password)
                if(comparision){
                    res.send({
                      "code":200,
                      "msg":"login sucessfull"
                    })
                }
                else{
                  res.send({
                       "code":204,
                       "msg":"ID and password does not match"
                  })
                }
              }
              else{
                res.send({
                  "code":206,
                  "msg":"ID does not exits"
                    });
              }
            }
            });
    }
    else {
        sql.query('SELECT * FROM students WHERE student_id = ?',[id], async function (error, results, fields) {
            if (error) {
              res.send({
                "code":400,
                "msg":error
              })
            }else{
              if(results.length >0){
                console.log(results[0])
                const comparision = await bcrypt.compare(password, results[0].s_password)
                if(comparision){
                    res.send({
                      "code":200,
                      "msg":"login sucessfull"
                    })
                }
                else{
                  res.send({
                       "code":204,
                       "msg":"ID and password does not match"
                  })
                }
              }
              else{
                res.send({
                  "code":206,
                  "msg":"ID does not exits"
                    });
              }
            }
            });
    }


   
  }