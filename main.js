const rounded = document.querySelector(".rounded");
const myArea = document.querySelector("#myArea");
const txtArea = document.querySelector(".txtArea");

console.log(myArea.value);
console.log("working");

myArea.addEventListener("keyup",(event) =>{
    rounded.style.borderRadius = `${myArea.value}px`;
    txtArea.textContent = "Border Radius is " + myArea.value;
})