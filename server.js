const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
 

const userRoutes =require("./routes/userRoutes.js");
const imageRoutes =require("./controller/uploadFile.js")


const app = express();
const port = process.env.PORT;

//cors policy
app.use(cors());

//json
app.use(express.json());

//for Loading Routes
app.use("/api/v3/app",userRoutes)
app.use("/api/v3/app",imageRoutes)
 
 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
