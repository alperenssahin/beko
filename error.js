

// console.log("hata yakalama js")


let meyvesepeti = {armut: {text:"armut"}}


let olmasiGerekenMeyveler = ["elma","armut","kiraz"]


for(let meyve of olmasiGerekenMeyveler){
    try{
        // console.log(meyvesepeti[meyve].text,"try");
    }catch (e) {
        // console.log(e);
        meyvesepeti[meyve] = {text:meyve}
    }
}
// console.log(meyvesepeti,"res");
let user = null


try{
    if (Math.random() > 0.5){
        user = {name:"alperen"}
    }else {
        throw new Error("MY ERROR")
    }
    console.log(user.name);
}catch (e) {
    console.log(e);
}

console.log("FINISHED")


let myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (Math.random() > 0.5){
            resolve({name:"alperen"})
        }else {
            reject(new Error("MY ERROR"))
        }
    },2000)
})

myPromise.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

