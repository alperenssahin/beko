class Hastane{
    constructor() {
        this.kuyrukBasi = null
        this.hastaSayisi = 0;
    }

    add(hasta){
        if(this.hastaSayisi === 0){
            this.kuyrukBasi = hasta;
        }else{
            let tmp = this.kuyrukBasi;
            while (tmp.sonrakiHasta !== null){
                if(hasta.oncelik > tmp.oncelik){
                    console.log(tmp === this.kuyrukBasi);
                    if(tmp === this.kuyrukBasi){
                        let tmp2 = this.kuyrukBasi
                        this.kuyrukBasi = hasta
                        hasta.sonrakiHasta = tmp2
                    }else{

                    }
                }
                tmp = tmp.sonrakiHasta;
            }


            // if(this.kuyrukBasi.oncelik < hasta.oncelik){
            //     let tmp = this.kuyrukBasi
            //     this.kuyrukBasi = hasta
            //     hasta.sonrakiHasta = tmp
            // }else{
            //     this.kuyrukBasi.sonrakiHasta = hasta
            // }
        }
        this.hastaSayisi++;
    }
}

class Hasta{
    constructor(isim,yas,oncelik) {
        this.isim = isim
        this.yas = yas
        this.oncelik = oncelik
        this.sonrakiHasta = null;
    }
}

let hasta1 = new Hasta("bektas",23,2);

let hastane = new Hastane()

hastane.add(hasta1)

console.log(hastane);

let hasta2 = new Hasta("alperen",23,0);

hastane.add(hasta2)

console.log(hastane);

let hasta3 = new Hasta("imge'",23,3);

hastane.add(hasta3)

console.log(hastane);

