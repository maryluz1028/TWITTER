
const everyoneCanReply=document.getElementById("idEveryoneCanReply")
const activenose=()=>everyoneCanReply.classList.add('active')
const whathHappening=document.getElementById("idWhathappening")
const hola=document.getElementById("hola")
whathHappening.addEventListener("focus",()=>{
    alert("hola mundo")
})