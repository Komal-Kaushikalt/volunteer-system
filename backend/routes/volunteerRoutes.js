const router = require("express").Router();
const Volunteer = require("../models/Volunteer");

router.post("/volunteer", async (req, res) => {
  try {
    console.log("🔥 ROUTE HIT");
    console.log("Incoming Data:", req.body);

    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();

    res.status(201).json({
      message: "Data saved successfully ✅",
      data: newVolunteer
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error ❌" });
  }
});

module.exports = router;