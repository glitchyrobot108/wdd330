const list = []
const ol = document.getElementById("list-container")

class Task{
    constructor(text, li, p, checkbut, delbut){
        this.text = text
        this.li = li
        this.p = p
        this.checkbut = checkbut
        this.delbut = delbut
    }
    check = false
    removeLi(){
        this.li.remove()
        list.pop(this)
    }
    checkP(){
        switch(this.check){
            case false:
                this.check = true
                this.p.style.textDecoration = 'line-through';
                break;
            case true:
                this. check = false
                this.p.style.textDecoration = 'none';
                break;
        }  
    }
}

function addTask(){
    let textbox = document.getElementById("text")
    let text = textbox.value
    let li = document.createElement('li')
    let checkbut = document.createElement('button')
    checkbut.innerHTML = '[]'
    li.appendChild(checkbut)
    let p = document.createElement('p')
    li.appendChild(p)
    let delbut = document.createElement('button')
    delbut.innerHTML = 'X'
    li.appendChild(delbut)
    ol.appendChild(li)
    let task = new Task(text, li, p, checkbut, delbut)
    p.innerHTML = task.text
    checkbut.onclick = function(){task.checkP()}
    delbut.onclick = function(){task.removeLi()}
    list.push(task)
    textbox.value = ''
    console.log(list)
}

function sortByCompleted(){
    list.sort(check)
    console.log(list)
}