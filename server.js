const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const routes = require('./public/routes/router');

// app.use(express.static('./public/css'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

// jade
// app.set('view engine', 'jade');
// app.set('views', './jade');

app.listen(port, () => {
    console.log(`Connected ${port}`);
});
