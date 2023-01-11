const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    if(err) throw err;
});

app.use("/api/auth", authRoute);

app.listen(9000, () => {
    console.log("Server started successfully.");
});