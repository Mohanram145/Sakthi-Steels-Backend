const express = require("express");
const cors = require("cors");

const cementRoutes = require("./routes/cement");
const orderRoutes = require("./routes/order");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cements", cementRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Sakthi Steels Backend Running 🚚");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
