"use strict";
function go(){
  var  checkedSize=document.querySelector(".s1__size:checked");
  checkedSize=checkedSize.value
  document.querySelector(".size-checked").textContent = checkedSize;
}

function thickness() {
  let  thicknessEl=document.querySelector(".s1__thickness");
  thicknessEl=thicknessEl.value
  document.querySelector(".thickness-checked").textContent = thicknessEl;
}


let checkBoxes=document.querySelector(".s1__checkboxes");
let selected = [];

checkBoxes.addEventListener('change', event =>{
  const checked = document.querySelectorAll('.s1__checkbox:checked');
  const addChecked = document.querySelectorAll('.s1__addcheckbox:checked');
  selected = Array.from(checked).map(x => x.value);
  addSelected = Array.from(addChecked).map(y => y.value);
  document.querySelector(".on-checked").innerHTML = "<br>";
  document.querySelector(".on-checked").textContent =  selected.join(", ");
  document.querySelector(".on-addchecked").innerHTML = "<br>";
  document.querySelector(".on-addchecked").textContent =  addSelected.join(", ");

})

let addCheckBoxes=document.querySelector(".s1__addcheckboxes");
let addSelected = [];

addCheckBoxes.addEventListener('change', event =>{
  const addChecked = document.querySelectorAll('.s1__addcheckbox:checked');
  addSelected = Array.from(addChecked).map(x => x.value);
  document.querySelector(".on-addchecked").innerHTML = "<br>";
  document.querySelector(".on-addchecked").textContent =  addSelected.join(", ");

})

let elForm = document.querySelector("#form");
let elCloseBtn =document.querySelector(".btn-modal");
let elAlert = document.querySelector(".alert");
let a = document.querySelector(".thickness-checked");
let b = document.querySelector(".size-checked");
let c = document.querySelector(".on-addchecked");
let d = document.querySelector(".on-checked");

elForm.addEventListener("submit", function(e){
  e.preventDefault()
  document.querySelector(".modal").setAttribute("style", "display: block;")
  if (a.textContent.length >= 2 && b.textContent.length >= 2 && c.textContent.length >= 2 && d.textContent.length >= 2) {
    elAlert.textContent = "SIZNING BUYURTMANGIZ QABUL QILINDI!!!"
    document.querySelector(".in-modal").setAttribute("style", "background-color: yellow;")
    elAlert.setAttribute("style", "backgroun-color: yellow; color:green;")
    elCloseBtn.setAttribute("style", "display:none");
  }else {
    document.querySelector(".s1").setAttribute("style", "display:none");
  }
})

let elmodal = document.querySelector(".in-modal");

elmodal.addEventListener("click", function(e) {
  e.preventDefault()
  document.querySelector(".modal").setAttribute("style", "display: none;")
  document.querySelector(".s1").setAttribute("style", "display:flex");
  console.log("aha");
})
