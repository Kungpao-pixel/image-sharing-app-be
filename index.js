const express = require("express");
const app = express();
const cors = require('cors')

const bodyParser = require("body-parser");
const router = require("./routes/index.js");
const PORT = 3000;

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router)


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
