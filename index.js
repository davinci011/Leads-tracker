

let myLeads = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
let ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("btn1-el")
const tabBtn = document.getElementById("btn2-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )


if (leadsFromLocalStorage){
   myLeads = leadsFromLocalStorage
   render(myLeads)
}


function render(leads){
   let listItems = ""

for(let i=0;i<leads.length;i+=1){
    listItems += `
    <li> 
    <a href= '${ leads[i]}' target='_blank'>
     ${ leads[i]}
     </a>
    </li>
    `
  
}

ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
}
)

// Study more on the savetab button

tabBtn.addEventListener("click", function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      myLeads.push(tabs[0].url)
      localStorage.setItem( "myLeads",JSON.stringify(myLeads) )
      render(myLeads)
   })
})

 btnEl.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

 })

