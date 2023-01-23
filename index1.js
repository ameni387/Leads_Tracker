
let myLeads =[]
//const cause can not redeclarer exemple : inputEl='Hello'
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("El_ul");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn= document.getElementById('tab-btn')

//localStorage.setItem ("myName","Ameni seghaier");
//localStorage.getItem("myLeads");
//localStorage.clear();

//const = this variable will be not redeclarer in the rest of code
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
 
//work with a small data base
if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener('click',function(){

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { 
    myLeads.push(tabs[0].url);
    inputEl.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);

 });
})

//listen for double clicks on the delete button
deleteBtn.addEventListener('dblclick ',function(e){
  localStorage.clear();
  myLeads=[];
  render(myLeads);

});


inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value);
  //clear out the input field
  inputEl.value="";
  localStorage.setItem("myLeads",JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
})


function render(leads){
  let listItems =""

for (let index = 0; index < leads.length; index++) {
 // listItems+="<li><a href='"+ myLeads[index]  +"' target='_blank'>"+myLeads[index] + "</a></li>"
 listItems+=`
 <li>
    <a href='${leads[index] }' target='_blank'>
        ${leads[index] }
    </a>
  </li>`
  

}
ulEl.innerHTML =  listItems
}
//let listItems =""

//for (let index = 0; index < myLeads.length; index++) {
  //ulEl.textContent+=myLeads[index] + " "
  //ulEl.innerHTML+="<li>"+myLeads[index] + "</li>"
  //listItems+="<li>"+myLeads[index] + "</li>"
  //step 1 create element 
  //const li = document.createElement("li");
  //step 2 set text content
  //li.textContent = myLeads[index];
  //step 3 append to ul
  //ulEl.append(li)
    //console.log(myLeads[index])    ;
//}
//ulEl.innerHTML =  listItems