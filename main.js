const rounded = document.querySelector(".rounded");
const myArea = document.querySelector("#myArea");
console.log(myArea.value);
console.log("working");

myArea.addEventListener("keyup",(event) =>{
    rounded.style.borderRadius = `${myArea.value}px`;
})