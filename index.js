const express = require('express');
const routeOrder = require('./routes/orders');
const helmet = require('helmet');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
//app.use(helmet());
app.use('/', routeOrder);

app.listen(3001);