const REP = require("../models/report.model");

exports.getReport = (req, res) => {

  REP.getAllReports((err, data) => { //here, this function is passed and is called as result(err, data) in model
      if(err)
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving tests."
        });
      else res.send(data);
  });

};