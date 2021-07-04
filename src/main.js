const divScreen = document.querySelector('#screen')
const btnCreatNumber = document.querySelector('#creatNumber')
const btnCallNumber = document.querySelector('#callNumber')
const spanNewNumber = document.querySelector('#newNumber')
const spanQueue = document.querySelector('#queue')

let n = 0
let queue = []

btnCreatNumber.onclick = () =>{
    n +=1
    queue.push(n)
    spanNewNumber.innerText =n
    spanQueue.innerText =JSON.stringify(queue)
}
btnCallNumber.onclick = () =>{
    if(queue.length===0){return}
    const m =queue.shift()
    spanQueue.innerText =JSON.stringify(queue)
    divScreen.innerText =(`请${m}号前往就餐`)
}