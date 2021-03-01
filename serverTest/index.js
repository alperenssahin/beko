const express = require('express')
const app = express()
const cors = require('cors');
const fs = require("fs");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(bodyParser.json())



app.get('/', function (req, res) {
	console.log("kok")
   res.sendFile('/Users/alperensahin/Desktop/beko/serverTest/index.html');
})

app.get('/alperen/:urun', function (req, res) {
	console.log("alperen "+ req.params.urun)
    let html = fs.readFileSync("/Users/alperensahin/Desktop/beko/serverTest/alperen.html",{encoding:"utf-8"})
    html = html.replace("xxxxx",req.params.urun)
    res.send(html);
})

app.get('/alperen', function (req, res) {
    res.sendFile('/Users/alperensahin/Desktop/beko/serverTest/alperen.html');

})

app.post('/alperen', function (req, res) {
    let html = fs.readFileSync("/Users/alperensahin/Desktop/beko/serverTest/alperen.html",{encoding:"utf-8"})
    html = html.replace("xxxxx",req.body.benimanahtarim)
    html = html.replace("nnn",req.body.count)
    res.send(html);
})

app.get('/urun', function (req, res) {
    res.json({urunler:["Patates","Domates","Elma","Armut"]});
})

app.post('/fiyatlar', function (req, res) {
    let stok = {
        "Patates":{
            fiyat:10,
            stok:20,
        },"Domates":{fiyat:54,
            stok:23,},
        "Elma":{fiyat:64,
            stok:220,},
        "Armut":{fiyat:66,
            stok:77,}
    }
    res.json(stok[req.body.urun]);
})

let count = 0;

app.post("/store", function (req, res) {
    //...database baglantisi
    count = req.body.count;
    res.json({status: "done"});
});

app.get("/count", function (req, res) {
    //...database baglantisi
    res.json({myCount: count});
});


console.log("app listening") 
app.listen(3000)