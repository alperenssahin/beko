let liste = [3,3,3,1,1,0];
let nList = [];

let newNumber = 2;
let isPushed = false;
for(let i =0; i<liste.length; i++){
    if(newNumber > liste[i] && !isPushed){
        nList.push(newNumber);
        nList.push(liste[i]);
        isPushed = true;
    }else{
        nList.push(liste[i]);
    }
    console.log(nList);
}




