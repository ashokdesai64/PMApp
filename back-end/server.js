const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 4200;

router.get('/', function (req, res, next) {
    res.send('Welcome to the PM API');
});

app.listen(port);

console.log('PM API server started on: ' + port);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes');
routes(app);