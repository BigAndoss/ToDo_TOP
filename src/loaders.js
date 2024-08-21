export function starter(){
    if(parseInt(localStorage.getItem('%x')) > 1 ){
        show()
        pretty(2)
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
        const index = document.createElement('p')
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

        container.appendChild(index)
        container.appendChild(item)
        div.appendChild(container)
        react.appendChild(check)
        react.appendChild(del)
        div.appendChild(react)
        content.appendChild(div)
    }
}

export function checked(index){
    let btn = document.querySelector(`[data-index="${index}"]`)
    btn.classList.contains("checked")? btn.classList.remove("checked"): btn.classList.add("checked")
}

function pretty(i){
    const x = document.querySelector('.search')
    
    i>1 ? x.classList.remove('bottom') : x.classList.add('bottom')

}