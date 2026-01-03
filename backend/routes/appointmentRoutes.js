const router = require("express").Router();
const {
  bookAppointment,
  getAppointments
} = require("../controllers/appointmentController");

router.post("/book", bookAppointment);
router.get("/", getAppointments);
router.put("/update/:id", require("../controllers/appointmentController").updateStatus);


module.exports = router;
