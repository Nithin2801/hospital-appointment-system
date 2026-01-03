const db = require("../config/db");

exports.getAllUsers = (req, res) => {
  db.query("SELECT id, name, email, role FROM users", (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getAllAppointments = (req, res) => {
  db.query("SELECT * FROM appointments", (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};
