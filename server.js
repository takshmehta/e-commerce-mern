//importing all libraries
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");

//port
const port = process.env.PORT || 8000;

//monodb configuration
const db = process.env.mongoURL;
//Attempt to connect with database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection with mongoDB is sucessfull."))
  .catch((err) => console.log(err));
//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//myroutes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);

//listening
app.listen(port, () => console.log(`Server is up and running at ${port}`));
