class Hasta{
    constructor(isimParametre,yasParametere,oncelikParametre) {
        this.isim = isimParametre
        this.yas = yasParametere
        this.oncelik = oncelikParametre
        this.sonrakiHasta = null;
    }

    toString(){
        return `Hasta : ${this.isim} => yas : ${this.yas} | oncelik : ${this.oncelik}`;
    }
}

class Hastane{
    constructor(ilkHasta) {
        this.hastaneKuyruguBasi = ilkHasta
    }

    addHasta(hasta){
        let gecici = this.hastaneKuyruguBasi;
        while (gecici.sonrakiHasta !== null){
            gecici = gecici.sonrakiHasta
        }
        gecici.sonrakiHasta = hasta
    }
    hastaCagir(){
        let siradakiHasta = this.hastaneKuyruguBasi
        this.hastaneKuyruguBasi = siradakiHasta.sonrakiHasta
        return siradakiHasta
    }

    //todo: oncelik sirasina gore hasta ekleme

    printKuyruk(){
        let gecici = this.hastaneKuyruguBasi;
        let siraSayisi = 0;
        while (gecici !== null){
            console.log(gecici.toString(),"sira :",siraSayisi);
            siraSayisi++;
            gecici = gecici.sonrakiHasta
        }
    }
}



let hasta = new Hasta("bektas",23,0)
// console.log(new Hasta("alperen"))

let hastane = new Hastane(hasta);

let hasta2 = new Hasta("alperen",23,0)
hastane.addHasta(hasta2)

let hasta3 = new Hasta("aydan",23,1)

hastane.addHasta(hasta3)

hastane.printKuyruk()


let doktoraGidenler = []
doktoraGidenler.push(hastane.hastaCagir())
console.log(doktoraGidenler,"doktora gidenler");

hastane.printKuyruk()


// hasta.sayName()