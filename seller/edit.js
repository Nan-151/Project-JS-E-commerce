const dom_dialog = document.querySelector("#product-dialog");
const dom_add_button = document.querySelector("#add-product-btn");
const cancel_button = document.querySelector("#cancel-btn");
const create_button = document.querySelector("#create-btn");
const table_view = document.querySelector(".table");
// const tableBody = document.querySelector("#tableBody");

const dom_title = document.querySelector("#title");
const dom_nameOfChar = document.querySelector("#nameOfChar");
const dom_season = document.querySelector("#Season");
const dom_price = document.querySelector("#Price");
const dom_available = document.querySelector("#available");
const dom_description = document.querySelector("#des");
const dom_image = document.getElementById("image");




let productInfo = [
    {
        image: "image/chainsaw-man(makima).jpg",
        Availability: "pre-order",
        title: "Chainsaw man",
        nameOfCharacter: "Makima",
        episode: "Season 1",
        price: 299.99,
        description: "1m",
    },
    {
        image: "https://media.entertainmentearth.com/assets/images/ec8b97b031314c47b89de5bf09b1a68axl.jpg",
        Availability: "pre-order",
        title: "Chainsaw man",
        nameOfCharacter: "Makima-san",
        episode: "Season 1",
        price: 299.99,
        description: "1m",
    },
]

function saveProductInfo(){
    localStorage.setItem("productInfo", JSON.stringify(productInfo));
}

function loadProductInfo() {
    let storedProductInfo = JSON.parse(localStorage.getItem("productInfo"));
    if (storedProductInfo !== null) {
        productInfo = storedProductInfo;
    }
  }

function showDialog(element){
    element.style.display = "block";
}
function hideDialog(element){
    element.style.display = "none";
}

function addMoreProduct(){
    showDialog(dom_dialog);
}
function cancelButton(){
    hideDialog(dom_dialog);
    alert (dom_image.value);
    uploadProduct()
}

function listCard(){
    let tableBody = document.querySelector("#tableBody");
    tableBody.remove()
    tableBody = document.createElement("tbody");
    tableBody.id = "tableBody";
    console.log(tableBody)
    table_view.appendChild(tableBody);
    
    for (let index in productInfo) {
        
        let tableRow = document.createElement("tr");
        tableRow.dataset = index;

        let trId = document.createElement("td");
        trId.textContent = Number(index) + Number(1);
        tableRow.appendChild(trId);

        let trTitle = document.createElement("td");
        trTitle.textContent = productInfo[index].title + " - " + productInfo[index].nameOfCharacter;
        tableRow.appendChild(trTitle);

        let trAvailable = document.createElement("td");
        trAvailable.textContent = productInfo[index].Availability;
        tableRow.appendChild(trAvailable);

        let trPrice = document.createElement("td");
        trPrice.textContent = productInfo[index].price;
        tableRow.appendChild(trPrice);

        let trDescription = document.createElement("td");
        trDescription.textContent = productInfo[index].description;
        tableRow.appendChild(trDescription);

        let option = document.createElement("td");
        let editAction = document.createElement("img");
        editAction.src = "../image/edit.png";
        option.appendChild(editAction);
        
        let deleteAction = document.createElement("img");
        deleteAction.src = "../image/trash.png";
        option.appendChild(deleteAction);
        tableRow.appendChild(option);

        
        tableBody.appendChild(tableRow);
    }

}

function uploadProduct(){
    let productPush = {};

    productPush.image = dom_image.value;
    productPush.Availability = dom_available.value;
    productPush.title = dom_title.value;
    productPush.nameOfCharacter = dom_nameOfChar.value;
    productPush.episode = dom_season.value;
    productPush.price = dom_price.value;
    productPush.description = dom_description.value;
    
    productInfo.push(productPush);
    saveProductInfo();
    listCard();
}


dom_add_button.addEventListener("click", addMoreProduct);
create_button.addEventListener("click", cancelButton);
cancel_button.addEventListener("click", cancelButton);
saveProductInfo();
loadProductInfo();
listCard();