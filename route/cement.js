const express = require("express");
const router = express.Router();

const cements = [
  { id: 1, name: "Ultratech", price: 420 },
  { id: 2, name: "ACC", price: 400 },
  { id: 3, name: "Ramco", price: 410 },
  { id: 4, name: "Dalmia", price: 395 }
];

router.get("/", (req, res) => {
  res.json(cements);
});

module.exports = router;
