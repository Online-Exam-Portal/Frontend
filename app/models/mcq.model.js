const sql = require("./db.js");


// constructor
const MCQ = function(mcq) {
  this.question_id = mcq.question_id;
  this.question = mcq.question;
  this.optionA = mcq.optionA;
  this.optionB = mcq.optionB;
  this.optionC = mcq.optionC;
  this.optionD = mcq.optionD;
  this.correct_option = mcq.correct_option;
  this.test_id = mcq.test_id;
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


MCQ.updateById = (id, mcq, result) => {

  console.log("ID" + id)

  sql.query(
    "UPDATE mcq SET question = ?, optionA = ?, optionB = ?, optionC = ?, optionD = ?, correct_option = ?  WHERE question_id = ?",
    [mcq.question, mcq.optionA, mcq.optionB, mcq.optionC, mcq.optionD, mcq.correct_option, id],
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
      //console.log("updated customer: ", { id: id, ...customer });
      //result(null, { id: id, ...customer });

      console.log("updated mcq: ", { id: id, ...mcq });
      result(null, { id: id, ...mcq });
    }
  );
};

MCQ.remove = (id, result) => {
  sql.query("DELETE FROM mcq WHERE question_id = ?", id, (err, res) => {
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

    console.log("deleted question with id: ", id);
    result(null, res);
  });
};

module.exports = MCQ;