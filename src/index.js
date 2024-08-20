// import { starter } from "./loaders.js";


const input = document.getElementById("input")
const sub = document.getElementById("sub");

const add = document.getElementById("add");
const del = document.getElementById("del")

const content = document.getElementById("content")

starter()
del.addEventListener("click",()=>{
    localStorage.clear()
    input.value = ""
    content.innerHTML = ""
    starter()
});

sub.addEventListener("click",show)

add.addEventListener("click",()=>{
    addItem(input.value)
    input.value = ""
    show()
})


function show (){

    content.innerHTML = "";

    for(let i = 1; i < localStorage.length; i++){
        const div = document.createElement('div')
        div.dataset.index = i;
        div.className = "navo";
        const index = document.createElement('p')
        index.innerText = i

        const item = document.createElement('p')
        item.innerText = localStorage.getItem([i])

        const btn = document.createElement('button')
        btn.innerText = 'Delete'
        btn.addEventListener('click',()=>{
            remove(i)
        })

        div.appendChild(index)
        div.appendChild(item)
        div.appendChild(btn)
        content.appendChild(div)
    }
}


function starter(){
    parseInt(localStorage.getItem('%x')) > 1 
    ? show()
    :localStorage.setItem("%x",1)
}


function addItem (value) {

    if(value === ""){
        alert("Enter something..")
    }else{
        localStorage.setItem(localStorage.getItem('%x'),value);

        let x = parseInt(localStorage.getItem('%x'))+1
        localStorage.setItem('%x',x)
    }        
}



//to be exported


function remove(index){

    for(;index < localStorage.length-1; index++){
     localStorage.setItem(index,localStorage.getItem(index+1))
     console.log(index)
    }
    localStorage.removeItem(index)
    localStorage.setItem('%x',index)
    show()

} 

