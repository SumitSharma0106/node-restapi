const express = require("express");
const app = express();

require("../config/DBConfig");

const usrRoutes=require("./routes/usr");

app.use("/api/usr",usrRoutes);

app.listen(4000, () => console.log("Server up and running on port 4000"));