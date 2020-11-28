const sql = require("./db.js");


// constructor
const MCQ = function(mcq) {
  this.question = mcq.question;
  this.optionA = mcq.optionA;
  this.optionB = mcq.optionB;
  this.optionC = mcq.optionC;
  this.optionD = mcq.optionD;
  this.correct_option = mcq.correct_option;
};


MCQ.getAll = (result) => {

  sql.query("SELECT * FROM mcq", (err, res) => {
    
    if (err) {
      console.log("Error get all: ", err);
      result(null, err);
      return;
    }
    console.log("All MCQs : ", res);
    result(null, res);
  });

};

MCQ.create = (newMCQ, result) => {
  //INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
  sql.query("INSERT INTO mcq SET ?", newMCQ, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a new MCQ: ", { question_id: res.insertId, ...newMCQ });
    result(null, { question_id: res.insertId, ...newMCQ });
  });
};


/*not required as of now
MCQ.findById = (ID, result) => {

  sql.query(`SELECT * FROM mcq WHERE question_id = ${ID}`, (err, res) => {
    if (err) {
      console.log("Find by Id Error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found the specified question: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Customer with the id
    //         error               data
    result({ kind: "Not found" }, null);
  });

};*/



/*
MCQ.updateById = (id, mcq, result) => {
  sql.query(
    "UPDATE mcq SET question = ?, optionA = ?, optionB = ?, optionC = ?, optionD = ?, correct_option = ?  WHERE question_id = ?",
    [mcq.question, mcq.optionA, mcq.optionB, mcq.optionC, mcq.optionD, mcq.correct_option],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated mcq: ", { question_id: question_id, ...mcq });
      result(null, { question_id: question_id, ...mcq });
    }
  );
};
*/
module.exports = MCQ;