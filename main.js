const rounded = document.querySelector(".rounded");
const container = document.querySelector(".container");

const txtAreaR = document.querySelector(".txtAreaR");
const txtAreaL = document.querySelector(".txtAreaL");
const txtAreaBL = document.querySelector(".txtAreaBL");
const txtAreaBR = document.querySelector(".txtAreaBR");

const myArea = document.querySelector("#myArea");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const Bleft = document.querySelector("#bottomleft");
const Bright = document.querySelector("#bottomright");



console.log("working");

container.addEventListener("keyup",(event) =>{

    // rounded.style.borderRadius = `${right.value}px ${right.value}px `;
    rounded.style.borderTopLeftRadius = `${left.value}px`;
    rounded.style.borderTopRightRadius = `${right.value}px`;
    rounded.style.borderBottomLeftRadius = `${Bleft.value}px`;
    rounded.style.borderBottomRightRadius = `${Bright.value}px`;


    
    console.log(right.value);
    txtAreaL.textContent = "Border Radius Left :" + left.value;
    txtAreaR.textContent = "Border Radius right  :" + right.value;
    txtAreaBL.textContent = "Border Radius Bottom-Left :" + Bleft.value;
    txtAreaBR.textContent = "Border Radius Bottom-Right :" + Bright.value;

})