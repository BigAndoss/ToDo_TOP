

const del = document.getElementById("del");
const test = document.getElementById("test");
const input = document.getElementById("input")

del.addEventListener("click",show)
test.addEventListener("click",()=>{
    addItem(input.value)
    input.value = ""
})


function show (){
    // for(let i = 0; i < Object.keys(localStorage).length ; i++){
    //     console.log(localStorage.getItem(Object.keys(localStorage)))
    // }
    // console.log(localStorage.getItem(Object.keys(localStorage)[i]))
    for(let i = 0; i< localStorage.length; i++){
        console.log(Object.keys(localStorage)[i])
    }
}

function addItem (value) {
    // if (parseInt(Object.keys(localStorage).length+1) > parseInt(Object.keys(localStorage)[Object.keys(localStorage).length-1])) {
    //     localStorage.setItem(Object.keys(localStorage).length+1,value)
    // }else{
    //     localStorage.setItem(Object.keys(localStorage)[(Object.keys(localStorage).length-1)+1],value)
    // }
    input.value === "" ? alert("Enter something.."):
    localStorage.setItem(value,"")
    console.log(Object.keys(localStorage).length)
}
