const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)";
  db.query(sql, [name, email, hashedPassword, role], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User registered" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email=?", [email], (err, result) => {
    if (result.length === 0) return res.status(404).json("User not found");

    const user = result[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json("Wrong password");

    const token = jwt.sign({ id: user.id, role: user.role }, "secretkey");
    res.json({ token, role: user.role });
  });
};
