let tasks=[]

function showSection(id){

let sections=document.querySelectorAll(".section")

sections.forEach(sec=>{
sec.style.display="none"
})

document.getElementById(id).style.display="block"

}

showSection("task")

function addTask(){

let subject=document.getElementById("subject").value
let task=document.getElementById("taskName").value
let deadline=document.getElementById("deadline").value

let newTask={

subject:subject,
task:task,
deadline:deadline,
completed:false

}

tasks.push(newTask)

displayTasks()

}

function displayTasks(){

let list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((t,i)=>{

let li=document.createElement("li")

li.innerHTML=

t.subject+" - "+t.task+
"<br>Deadline: "+t.deadline+
"<br><button onclick='completeTask("+i+")'>Complete</button>"+
"<button onclick='deleteTask("+i+")'>Delete</button>"

if(t.completed){
li.classList.add("completed")
}

list.appendChild(li)

})

updateCounter()

}

function completeTask(i){

tasks[i].completed=true

displayTasks()

}

function deleteTask(i){

tasks.splice(i,1)

displayTasks()

}

function updateCounter(){

let total=tasks.length

let completed=tasks.filter(t=>t.completed).length

let remaining=total-completed

document.getElementById("total").innerText=total
document.getElementById("completed").innerText=completed
document.getElementById("remaining").innerText=remaining

}

/* OTHER PLANNERS */

function addItem(inputId,listId){

let text=document.getElementById(inputId).value

if(text=="") return

let li=document.createElement("li")

li.innerHTML=text+" <button onclick='this.parentElement.remove()'>Delete</button>"

document.getElementById(listId).appendChild(li)

document.getElementById(inputId).value=""

}