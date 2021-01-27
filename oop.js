class Insan{
     constructor(isim,yas) {
         // console.log("Insan Constructor");
         this.isim = isim;
         this.yas = yas;
     }

     sayName(){
         console.log("Benim adim "+ this.isim);
     }
}

class Hasta extends Insan{
    constructor(isim,yas,onceligi) {
        // console.log("hasta constructor-1");
        super(isim,yas)
        // console.log("hasta constructor-2");
        this.oncelik = onceligi;
        this.sonrakiHasta = null;
    }
}

class Doktor extends Insan{
    constructor(isim,yas,polikinlik) {
        super(isim,yas)
        this.polikinlik = polikinlik;
    }
}


class Fucker extends Insan{
    constructor(isim,yas) {
        super(isim,yas);
    }
    fuck(insan){
        console.log("fucker "+ insan.isim + " 'i fuckti");
    }
}


let hasta = new Hasta("alperen",12,2);
let doktor = new Doktor("Bektas",23,"agrilar ve sancilar")


let fucker  = new Fucker("jony",34);
fucker.fuck(doktor)
fucker.fuck(hasta)

let insan = new Insan("göt",23)

fucker.fuck(insan)


// console.log(hasta.isim);
// hasta.sayName();
// doktor.sayName()