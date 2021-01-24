

function newHasta(isimParametre){
    isimParametre = isimParametre + " hasta "
    return {
        isim:isimParametre,
        sayName:function(){
            console.log(this,"this")
            console.log(this.isim,"isim")
        }
    }
}

let hasta = newHasta("alperen")
let hasta2 = newHasta("bektas")


console.log(hasta,"yaratilan hasta objesi");
hasta.sayName()
hasta2.sayName()