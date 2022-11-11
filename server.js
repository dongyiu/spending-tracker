const express = require('express');
const session = require("express-session");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const { readFileSync } = require('fs');
const mongoose = require("mongoose")
const mongoPath = 'mongodb://iya:dogiscute@107.152.41.246:27017/testdb?authSource=admin'
const { Schema, model } = require('mongoose');
const port = 8000

app.use(bodyparser.json())
    .use(bodyparser.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, "/public")))
    .use(session({
        secret: "life_is_shot_so_live_like_you_gonna_die_trmmrow",
        resave: false,
        saveUninitialized: false
    }))
    var cors = require('cors');
    app.use(cors({
        'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
        'exposedHeaders': ['sessionId'],
        'origin': '*',
        'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'preflightContinue': false,
      }));


app.get('/', async function(req, res) {
  res.send('hello')
})


/////////////// mongo starts here ///////////////
mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('Connected to the database!');
}).catch((err) => {
    console.log(err);
});

const Stocks = new Schema({
    date : {
        type : String,
        required : true,
        unique : true,
    },
    buyingList : [] // [{ name : '', quantity : '', left : '', price : '' }]
});
const Stock = model('Stocks', Stocks);

app.post('/create', async function(req, res) {
    const body = req.body
    const newStock = new Stock({ date : body.date })
    await newStock.save()
})

app.post('/fullList', async function(req, res) {
    const body = req.body
    const allStock = await Stock.find()
    res.send(allStock)
})

app.post('/addItem', async function(req, res) {
    const body = req.body
    const foundStock = await Stock.findOne({ date : body.date })
    foundStock.buyingList.push(body.info)
    await foundStock.save()
    res.send(foundStock)
})

app.post('/removeItem', async function(req, res) {
    const body = req.body
    const foundStock = await Stock.findOne({ date : body.date })
    foundStock.buyingList = body.info
    await foundStock.save()
    res.send(foundStock)
})

app.post('/editItem', async function(req, res) {
    const body = req.body
    const foundStock = await Stock.findOne({ date : body.date })
    foundStock.buyingList = body.info
    await foundStock.save()
    res.send(foundStock)
})

app.post('/deleteDate', async function(req, res) {
    const body = req.body
    const foundStock = await Stock.findOne({ date : body.date })
    await foundStock.delete()
    res.send(true)
})

app.post('/removeStock', async function(req, res) {
    const body = req.body
    await Promise.all(body.map(async (a, index) => {
        setTimeout(async () => {
            let used = Number(a.use)
            let run = true
            await Promise.all(a.date.map(async b => {
                const stockk = await Stock.findOne({ date : b })
                const foundStock = stockk.buyingList.find(c => c.name == a.name)
                await stockk.buyingList.pull(foundStock)
                // console.log(foundStock.left - a.use >= foundStock.q)
                // console.log(used >= 1)
                // console.log(run == true)
                if(foundStock.left - a.use >= 0 && used >= 1 && run == true) {
                    foundStock.left = Number(foundStock.left) - Number(a.use)
                    used = used - Number(a.use)
                    run = false
                    // console.log(`[first] removing ${Number(foundStock.left) - Number(a.use)} from ${foundStock.left}`)
                }
                else {
                    const remainder = Number(foundStock.left)
                    used = Number(used) - Number(remainder)
                    foundStock.left = Number(foundStock.left) - Number(remainder)
                    // console.log(`[Second] removing ${Number(foundStock.left) - Number(remainder)} from ${foundStock.left}\nRemainder: ${remainder}, Used : ${used}`)
                }
                await stockk.buyingList.push(foundStock)
                await stockk.save()
            }))
        }, 300 * index);
    }))
    res.send(true)
})

app.listen(port);
console.log('Server is listening on port ' + port);