const db = require("../config/db");

exports.bookAppointment = (req, res) => {
  const { patient_id, doctor_name, date, time } = req.body;
  const sql = "INSERT INTO appointments VALUES (NULL,?,?,?,?, 'pending')";
  db.query(sql, [patient_id, doctor_name, date, time], () => {
    res.json("Appointment booked");
  });
};

exports.getAppointments = (req, res) => {
  db.query("SELECT * FROM appointments", (err, data) => {
    res.json(data);
  });
};

exports.updateStatus = (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const sql = "UPDATE appointments SET status=? WHERE id=?";
  db.query(sql, [status, id], () => {
    res.json("Status updated");
  });
};
