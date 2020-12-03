const sql = require("./db.js");
const bcrypt = require('bcrypt');

exports.register = async function(req,res){
    var saltRounds = 10; 

    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);

    if(req.body.role=="teacher") {

        var teacher={
            "teacher_id": req.body.id,
            "t_name":req.body.name,
            "t_password":encryptedPassword
        }

        sql.query('INSERT INTO teachers SET ?',teacher, function (error, results, fields) {
            if (error) {
              res.send({
                "code":400,
                "failed":error
              })
            } else {
              res.send({
                "code":200,
                "success":"user registered sucessfully"
                  });
              }
          });


    }else {
        var student={
            "student_id": req.body.id,
            "s_name":req.body.name,
            "s_password":encryptedPassword
        }

        sql.query('INSERT INTO students SET ?',student, function (error, results, fields) {
            if (error) {
              res.send({
                "code":400,
                "failed":error
              })
            } else {
              res.send({
                "code":200,
                "success":"user registered sucessfully"
                  });
              }
          });
    }
  
}