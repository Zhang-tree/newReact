const express = require('express');
const app = express();
const bp = require('body-parser');
app.use(bp.urlencoded({
    extended: false
}));
const cors = require('cors');
app.use(cors());
app.all('*', function (mes, res, next) {
    res.setHeader('Access-Control-Allow-Origin',
        'http://localhost:3000')
    next();
})
app.use(express.static('./'));

app.listen(3000, function () {
    console.log('服务器开启监听，3000...')
})
