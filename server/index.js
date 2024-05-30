require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth");
const db = require("./db/db");

//database
db();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

const port = process.env.port || 8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});
