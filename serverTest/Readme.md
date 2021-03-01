# Install

    - Yeni proje olusturma (server)
    yeni klasor ac 
    
    mkdir xxxxx
    cd xxxxx

    npm init
    npm install express

//

    -server dosyasi index.js-

    const express = require('express')
    const app = express()

    //eklentiler buradan baslar
    
    app.get('/', function (req, res) {
        console.log("kok")
        res.send('Helloworld');
    })
    console.log("uygulama dinleniyor")
    app.listen(3000)

     -server dosyasi index.js-

//

    node index.js //...
    //uygulama dinleniyor

bu asamada browser ile http://127.0.0.1:3000 adresine gidince "helloworld" yazacak


# post

post atmak icin
    
    npm i body-parser

sonrasinda index js dosyasina assagidaki eklemeler
    
    ....
    
    var bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    
    ....

.. (back-end)

    //post blogu eklenmeli
    app.post('/store', function (req, res) {
        console.log("kok")
        res.json({store:req.body.count});
    })

.. ornek post istegi olusturma (front-end)

    //gelen istegin datasi {count:0}
    axios.post("http://127.0.0.1:3000/store",{count:0}).then(s=>{
        //...
    })

.. cors hatasi

    npm i cors -S

sonrasinda index js dosyasina assagidaki eklemeler
    
    ....
    
    const cors = require('cors');
    app.use(cors());
    
    ....


dosya servis etme

    app.get('/', function (req, res) {
	    console.log("kok")
        res.sendFile('/dosya/yolu/index.html');
    })

dosya degistirip yayinlama

    app.post('/alperen', function (req, res) {
        let html = fs.readFileSync("/Users/alperensahin/Desktop/beko/serverTest/alperen.html",{encoding:"utf-8"})
        html = html.replace("xxxxx",req.body.benimanahtarim)
        html = html.replace("nnn",req.body.count)
        res.send(html);
    })







