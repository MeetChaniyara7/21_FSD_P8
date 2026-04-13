const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// Connect DB (replace with your MongoDB URL)
mongoose.connect("mongodb://127.0.0.1:27017/test");

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});