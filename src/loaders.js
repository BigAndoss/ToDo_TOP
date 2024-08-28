export function starter(){
    if(parseInt(localStorage.getItem('%x')) > 1 ){
        show()
        pretty(1)
    }else{
        localStorage.setItem("%x",1)
        pretty(0)
    }
}
function remove(index){

    for(;index < localStorage.length-1; index++){
     localStorage.setItem(index,localStorage.getItem(index+1))
    }
    localStorage.removeItem(index)
    localStorage.setItem('%x',index)
    show()
} 

export function addItem (value) {

    if(value === ""){
        alert("Enter something..")
    }else{
        localStorage.setItem(localStorage.getItem('%x'),value);

        let x = parseInt(localStorage.getItem('%x'))+1
        localStorage.setItem('%x',x)
    }        
}

export function show (){

    pretty(2)
    content.innerHTML = "";

    for(let i = 1; i < localStorage.length; i++){
        const div = document.createElement('div')
        div.dataset.index = i;
        div.className = "navo";

        const container = document.createElement('div')
        container.classList.add('con')
        const index = document.createElement('span')
        index.innerText = i

        const item = document.createElement('p')
        item.innerText = localStorage.getItem([i])

        const react = document.createElement('div')
        react.classList.add('buttons')

        const check = document.createElement('button')
        check.innerHTML = '&#x2714;'
        check.addEventListener('click',()=>{
            checked(i)
        })

        const del = document.createElement('button')
        del.innerText = 'Delete'
        del.addEventListener('click',()=>{
            remove(i)
        })

        // document.querySelector(`[data-index="${parseInt(localStorage.getItem('%x'))-1}"]`).classList.add("bottom")
        container.appendChild(index)
        container.appendChild(item)
        div.appendChild(container)
        react.appendChild(check)
        react.appendChild(del)
        div.appendChild(react)
        content.appendChild(div)
      
    }
     
        document.querySelector(`[data-index="${parseInt(localStorage.getItem('%x'))-1}"]`).classList.add('bottom','animation')
        

}

export function checked(index){
    let btn = document.querySelector(`[data-index="${index}"]`)
    if(btn.classList.contains("checked")){
        btn.classList.remove("checked")
        btn.children[0].children[1].style.textDecoration = "none"
        btn.children[0].children[1].style.color = "black"

        btn.children[1].children[0].innerHTML = "&#x2714"


    }else{
        btn.classList.add("checked")
        btn.children[0].children[1].style.textDecoration = "line-through"
        btn.children[0].children[1].style.color = "whitesmoke"
        btn.children[1].children[0].innerHTML = "&#9735"
    }

    
}

function pretty(i){
    const x = document.querySelector('.search')
    
    i>0 ? x.classList.remove('bottom') : x.classList.add('bottom')

}