const express = require('express');
const app = express();
const port = 4002;
const cors = require("cors");
const result = {};

app.use(cors());
app.get('/', (req, res) => res.send('Welcome to Webhook API!'));
app.get("/result", (req, res) => res.send(result));
app.listen(port, () => console.log(`Webhook API is listening on ${port}!`));