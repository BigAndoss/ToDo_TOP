// import { starter } from "./loaders.js";
import { starter,addItem,show } from "./loaders.js";

const input = document.getElementById("input")
// const sub = document.getElementById("sub");

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

// sub.addEventListener("click",show)

add.addEventListener("click",()=>{
    addItem(input.value)
    input.value = ""
    show()
})

input.addEventListener("keypress",function(event){
    if (event.key ==="Enter") {
        
        addItem(input.value);
        input.value = ""
        show()
    }
})


function edit (){

}

