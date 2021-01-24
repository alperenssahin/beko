let box = document.getElementById("box");
let liste = [];


//
function addElement(liste,item){
    //listeye oncelige gore item ekle
}

document.getElementById("add").addEventListener("click",()=>{
    let random = {pri:(Math.random()*100).toFixed(2),time:new Date().getTime()};
    if(liste.length < 11){
        liste.push(random);
        update();
    }
})

function update() {
    let childNodes = box.childNodes;
    for(let child of [...childNodes]){
        child.remove()
    }

    liste.sort((a, b) =>  b.pri - a.pri)

    for(let i = 0; i<liste.length;i++){
        let node = document.createElement("li");
        let time = document.createElement("span")
        time.textContent = liste[i].time + " ";
        let priority = document.createElement("b")
        priority.textContent = liste[i].pri;
        node.appendChild(time);
        node.appendChild(priority);
        box.appendChild(node);
    }
}