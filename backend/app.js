require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const loginRouter = require('./routes/loginRouter')
const homeRouter = require('./routes/homeRouter')
const loggerRouter = require('./routes/loggerRouter')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
// app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({
    origin: "*"
}))

app.use("/parking/api", loginRouter);
app.use("/parking/api/home", homeRouter);
app.use("/parking/api/logs", loggerRouter);

const PORT = process.env.PORT
const DBURL = process.env.MONGODB_URL

app.listen(PORT, ()=> {
    console.log(`Connected to port: ${PORT}`);
})

mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
});