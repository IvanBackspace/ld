const product_price = document.getElementById("product-price");
const product_description = document.getElementById("product-description"); 
const product_name = document.getElementById("product-name");
const product_image = document.getElementById("product-image"); 
const myButton = document.getElementById("myButton");

const checkInputs = () => {
    myButton.disabled = product_price.value === "" || product_description.value === "" || product_image.value === "" || product_image.value === "";
};


const clearInputs = () => {
    product_price.value = "";
    product_description.value = "";
    product_name.value = "";
    product_image.value = "";
    checkInputs();
};

product_price.addEventListener("input", checkInputs);
product_description.addEventListener("input", checkInputs);
product_name.addEventListener("input", checkInputs);
product_image.addEventListener("input", checkInputs);

myButton.addEventListener("click", () => {
    // код для выполнения при нажатии на кнопку
    clearInputs();
});