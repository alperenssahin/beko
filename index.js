//Todo: bir hastanemiz var . acil servis icin sira yazlimi yapmamiz isteniyor. siraya  ilk giren hasta ilk cikacak. hastanin adi ve yasi doktora aktarilacak.

let queue = [];

function createNewHasta(isim,yas,myOncelik){
    return {
        isim: isim,
        yas: yas,
        oncelik:myOncelik,
    };
}

function pushByPriority(hastaAsParameter,kuyrukAsParameter){
    if(kuyrukAsParameter.length === 0){
        kuyrukAsParameter.push(hastaAsParameter);
        return kuyrukAsParameter;
    }

    let nList = [];
    let isPushed = false;
    for(let i = 0; i<kuyrukAsParameter.length; i++){
        if(hastaAsParameter.oncelik > kuyrukAsParameter[i].oncelik && !isPushed){
            //i indexine hastayi ekle
            //kurugu bir birim otele
            nList.push(hastaAsParameter);
            nList.push(kuyrukAsParameter[i]);
            isPushed = true;
        }else{
            nList.push(kuyrukAsParameter[i]);
        }
    }
    if(isPushed){
        return nList;
    }else{
        kuyrukAsParameter.push(hastaAsParameter);
        return kuyrukAsParameter;
    }
}


queue.push(createNewHasta("bektas",31,0));
queue.push(createNewHasta("alperen",32,0));

//doktor
setInterval(()=>{
    let hasta = queue.shift();
    if(hasta){ //false === undefined === null
        console.log(`Doktor  jony ${hasta.isim} ile ilgileniyor, hasta ${hasta.yas} yasinda`);
    }
    // console.log(queue);
    },3000);


setInterval(()=>{
    if(Math.random()*100 > 10){
        let newHasta = createNewHasta(`hasta-${new Date().getTime()}`,Math.round(Math.random()*70),Math.round(Math.random()*3));
        console.log("=============> hasta geldi <==============")
        console.log("hasta",newHasta);
        console.log("kuyruk",queue);
        queue = pushByPriority(newHasta,queue);
        console.log("=============> hasta eklendi <==============")
        console.log(queue);
        console.log(`==================> yeni hasta eklendi at index ${queue.indexOf(newHasta)}`);
    }
},1000);

