const router = require("express").Router();
const user = require("../Models/user");

router.post("/add", async (req, res) => {
  try {
    // Create a new user instance based on the request body
    const newUser = new user({
      name: req.body.name,
      age: req.body.age,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    console.log("savedUser", savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
