const toggleButton = document.querySelector(".toggle-button-js");
const basicPricePlan = document.querySelector(".basic-price-js");
const professionalPricePlan = document.querySelector(".professional-price-js");
const masterPricePlan = document.querySelector(".master-price-js");

const toggleImage = document.querySelector(".toggle-image-js");

let isAnnual = true;

function handlePlanPrices () {

    if (basicPricePlan.textContent = 199.99) {
        basicPricePlan.textContent = 19.99;
    } else {
        basicPricePlan.textContent = 199.99;
    }

    if (professionalPricePlan.textContent = 249.99) {
        professionalPricePlan.textContent = 24.99;
    } else {
        professionalPricePlan.textContent = 249.99;
    }

    if (masterPricePlan.textContent = 399.99) {
        masterPricePlan.textContent = 39.99;
    } else {
        masterPricePlan.textContent = 399.99;
    }
}

toggleButton.addEventListener("click", () => {
    handlePlanPrices();
    isAnnual = !isAnnual;
    console.log("The toggle button is clicked!");
});