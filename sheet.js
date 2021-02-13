function callbackOrnekAksiyon(isim,callback){
    callback(isim)
}

let zipla = (e)=>{
    console.log(`${e} kullanicisi aksiyon yapiyor : zipla`)
}

function hopla(e){
    console.log(`${e} kullanicisi aksiyon yapiyor : hopla`)
}

callbackOrnekAksiyon("bektas",zipla)
callbackOrnekAksiyon("alperen",hopla)