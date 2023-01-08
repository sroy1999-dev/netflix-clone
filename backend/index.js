const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Database connection successful");
}).catch((err) => {
    if(err) throw err;
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server started successfully at port ${port}`);
})