const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const order = req.body;

  res.json({
    message: "Order placed successfully ✅",
    order
  });
});

module.exports = router;
