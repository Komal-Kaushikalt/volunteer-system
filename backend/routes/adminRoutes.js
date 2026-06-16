const router = require("express").Router();
const User = require("../models/User");

// GET ALL USERS
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// UPDATE STATUS
router.put("/user/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(user);
});

module.exports = router;