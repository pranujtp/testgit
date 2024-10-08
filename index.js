const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '7mb', extended: false }));
app.use(cors());

app.get('/test', function (req, res) {
    res.status(200).send({ msg: "Deployment Success" });
});

app.post('/users', function (req, res) {
    res.status(200).send({ msg: "Users api working good" });
});

app.listen(process.env.PORT);