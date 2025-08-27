const express = require('express');
const connectDB = require('./DB/connect')
const userRoutes = require("./Routes/user.routes");
require('dotenv').config();
console.log(process.env);
const PORT = 8082;

const app = express();

connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
});