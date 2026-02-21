const toggleButton = document.querySelector(".toggle-button-js");
const basicPricePlan = document.querySelector(".basic-price-js");
const professionalPricePlan = document.querySelector(".professional-price-js");
const masterPricePlan = document.querySelector(".master-price-js");

const toggleImage = document.querySelector(".toggle-image-js");

let isToggled = localStorage.getItem("isToggled") === "false";

basicPricePlan.textContent = 199.99;
professionalPricePlan.textContent = 249.99;
masterPricePlan.textContent = 399.99;

const toggleOffImagePath = '<path d="M416 192C486.7 192 544 249.3 544 320C544 390.7 486.7 448 416 448L224 448C153.3 448 96 390.7 96 320C96 249.3 153.3 192 224 192L416 192zM608 320C608 214 522 128 416 128L224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320zM224 400C268.2 400 304 364.2 304 320C304 275.8 268.2 240 224 240C179.8 240 144 275.8 144 320C144 364.2 179.8 400 224 400z" fill="currentColor" />';
const toggleOnImagePath = '<path d="M224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320C608 214 522 128 416 128L224 128zM416 224C469 224 512 267 512 320C512 373 469 416 416 416C363 416 320 373 320 320C320 267 363 224 416 224z" fill="currentColor" />';


toggleButton.addEventListener("click", () => {
    isToggled = !isToggled;
    toggleImage.innerHTML = isToggled ? toggleOffImagePath : toggleOnImagePath;
    
    if (!isToggled) basicPricePlan.textContent = 19.99;
    else basicPricePlan.textContent = 199.99;

    if (!isToggled) professionalPricePlan.textContent = 24.99;
    else professionalPricePlan.textContent = 249.99;

    if (!isToggled) masterPricePlan.textContent = 39.99;
    else masterPricePlan.textContent = 399.99;
});