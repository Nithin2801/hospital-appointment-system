const router = require("express").Router();
const {
  getAllUsers,
  getAllAppointments
} = require("../controllers/adminController");

router.get("/users", getAllUsers);
router.get("/appointments", getAllAppointments);

module.exports = router;
