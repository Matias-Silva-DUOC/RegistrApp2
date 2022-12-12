const express = require('express');
const ejs = require('ejs')
const path= require('path')
const qrcode = require('qrcode')

const app = express();
const port = process.env.port || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'view'))

app.get('/', (req, res, next) => {
    res.render("index");
});

app.post('/scan', (req, res, next) => {
    const input_text = req.body.text;
    // console.log(input_text);
    qrcode.toDataURL(input_text,(err, src) => {
        res.render("scan", {
            qr_code: src,
        })
    })
})

app.listen(port, console.log(`listening on port ${port}`));


// nodemon
// npm i nodemon -g
// https://youtu.be/KF-XVrYohfg?t=305