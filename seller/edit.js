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
const dom_available = document.querySelectorAll("#available");
const dom_description = document.querySelector("#des");
const dom_image = document.getElementById("image");

var switch_btn = true;



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
// save product information to localStorage
function saveProductInfo(){
    localStorage.setItem("productInfo", JSON.stringify(productInfo));
}
// load product information from localStorage
function loadProductInfo() {
    let storedProductInfo = JSON.parse(localStorage.getItem("productInfo"));
    if (storedProductInfo !== null) {
        productInfo = storedProductInfo;
    }
  }

  // show dialog
function showDialog(element){
    element.style.display = "block";
}
// hide dialog
function hideDialog(element){
    element.style.display = "none";
}
// show dialog information with click button addMoreProduct
function addMoreProduct(){
    switch_btn = true;
    create_button.textContent = "create";
    clearInfo()
    showDialog(dom_dialog);
}
// button create
function createButton(){
    switch_btn = false;
    // uploadProduct()
}
function btnContainer(){
    hideDialog(dom_dialog);
    if (create_button.id === 'edit-btn'){
        // editProduct()
        updateProductInfo()
    }
//     else if (create_button.id === 'create-btn'){

// }
}
// hide dialog information when click cancel button
function cancelButton(){
    hideDialog(dom_dialog);
    // alert (dom_image.value);
}
// list all products information
function listCard(){
    // delete table about before create new
    let tableBody = document.querySelector("#tableBody");
    tableBody.remove()
    tableBody = document.createElement("tbody");
    tableBody.id = "tableBody";
    
    for (let index in productInfo) {
        
        let tableRow = document.createElement("tr");
        tableRow.dataset.index = index;

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
        trPrice.textContent = "$" + productInfo[index].price;
        tableRow.appendChild(trPrice);

        let trDescription = document.createElement("td");
        trDescription.textContent = productInfo[index].description;
        tableRow.appendChild(trDescription);

        let option = document.createElement("td");
        let editAction = document.createElement("img");
        editAction.src = "../image/edit.png";
        editAction.addEventListener("click", editProduct)
        option.appendChild(editAction);
        
        let deleteAction = document.createElement("img");
        deleteAction.src = "../image/trash.png";
        deleteAction.addEventListener("click", removeProduct);
        option.appendChild(deleteAction);
        tableRow.appendChild(option);

        
        tableBody.appendChild(tableRow);
    }
    table_view.appendChild(tableBody);


}
// to remove products
function removeProduct(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    console.log(index);

    productInfo.splice(index, 1);

    saveProductInfo();

    listCard();
}

// to edit product
let index_editor = 0
function editProduct(event){
    create_button.id = "edit-btn";
    create_button.textContent = "Edit";
    let index = event.target.parentElement.parentElement.dataset.index;
    index_editor = index;

    let product = productInfo[index];

    dom_title.value = product.title;
    dom_nameOfChar.value = product.nameOfCharacter;
    dom_season.value = product.episode;
    dom_price.value = product.price
    dom_available.value = product.Availability;
    dom_description.value = product.description;
    dom_image.value = product.image;

    showDialog(dom_dialog); 
}
function updateProductInfo(){
    let newUpDate = {};
    let  available = ""
    dom_available.forEach(element => {
        if(element.checked){
            available = element.value;
        }
        console.log(available)
    });
    newUpDate.image = dom_image.value;
    newUpDate.Availability = available;
    newUpDate.title = dom_title.value;
    newUpDate.nameOfCharacter = dom_nameOfChar.value;
    newUpDate.episode = dom_season.value;
    newUpDate.price = dom_price.value;
    newUpDate.description = dom_description.value;
    console.log(newUpDate);
    productInfo.splice(index_editor, 1, newUpDate);
    listCard()
}
// clear product information when click add more products
function clearInfo(){
    dom_title.value = "";
    dom_nameOfChar.value = "";
    dom_season.value = "";
    dom_price.value = "";
    dom_available.value = "";
    dom_description.value = "";
}
// create and upload products
function addMore(){
    let productPush = {};

    let  available = ""
    dom_available.forEach(element => {
        if(element.checked){
            available = element.value
        }
        console.log(available)
    });
    productPush.image = dom_image.value;
    productPush.Availability = available;
    productPush.title = dom_title.value;
    productPush.nameOfCharacter = dom_nameOfChar.value;
    productPush.episode = dom_season.value;
    productPush.price = dom_price.value;
    productPush.description = dom_description.value;
    console.log(productPush.Availability)
    // if (
    //     productPush.image !== ""
    //     &&  productPush.Availability !== ""
    //     &&  productPush.title !== ""
    //     &&  productPush.nameOfCharacter !== ""
    //     &&  productPush.episode!== ""
    //     &&  productPush.price!== ""
    //     && productPush.description !== ""
    // ){

    // }else {
    //     alert("Please fill all the required fields");
    // }
    productInfo.push(productPush);
    hideDialog(dom_dialog);
    saveProductInfo();
    listCard();
}





function uploadProduct(){
    // clear information 

    
    // create object to create new product
    // if (switch_btn == true){
    // }
}
// removeProduct(event)

dom_add_button.addEventListener("click", addMoreProduct);
create_button.addEventListener("click", btnContainer);
cancel_button.addEventListener("click", cancelButton);
saveProductInfo();
loadProductInfo();
listCard();