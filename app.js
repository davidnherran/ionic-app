const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const buttonSave = document.querySelector("#buttonSave");
const buttonCancel = document.querySelector("#buttonCancel");
const productList = document.querySelector("#product-list");

const createNewProduct = (name, price) => {
  const ionCard = document.createElement("ion-card");
  const newProductItem = document.createElement("ion-card-content");
  newProductItem.textContent = name + ": $" + price;
  ionCard.appendChild(newProductItem);
  productList.appendChild(ionCard);
};

const clearInputs = () => {
  productName.value = "";
  productPrice.value = "";
};

buttonSave.addEventListener("click", () => {
  const name = productName.value;
  const price = productPrice.value;
  createNewProduct(name, price);
  clearInputs();
});

buttonCancel.addEventListener("click", () => {
    clearInputs();
})