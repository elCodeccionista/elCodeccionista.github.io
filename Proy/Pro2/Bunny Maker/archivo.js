const BtnAdd = document.querySelector(".btn-add");
const DivContainer = document.getElementById("div-container");

BtnAdd.addEventListener("click", AddNew);
let x=0;
function AddNew() {
  const newDiv = document.createElement("div");
  console.log("add");
  if (x%2===0)
  {newDiv.classList.add("div-shadow");}
  else if(x%3===0)
  {newDiv.classList.add("div-shadow2");}
  else 
  {newDiv.classList.add("div-shadow3");}
  x=x+1;
  console.log(x);
  DivContainer.appendChild(newDiv);
}
