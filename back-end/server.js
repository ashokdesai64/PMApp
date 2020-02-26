const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 4200;

router.get('/', function (req, res, next) {
    res.send('Welcome to the Kushy API');
});

//routes(app);

app.listen(port);

console.log('Kushy API server started on: ' + port);