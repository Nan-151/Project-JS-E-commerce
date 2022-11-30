const dom_dialog = document.querySelector("#product-dialog");
const dom_add_button = document.querySelector("#add-product-btn");
const cancel_button = document.querySelector("#cancel-btn");
const create_button = document.querySelector("#create-btn");


let productInfo = [
    {
        image: "image/chainsaw-man(makima).jpg",
        arrivable: "pre-order",
        title: "Chainsaw man",
        nameOfCharacter: "Makima",
        episode: "Season 1",
        price: 299.99,
    },
    {
        image: "image/chainsaw-man(makima).jpg",
        arrivable: "instock",
        title: "chainsaw man",
        nameOfCharacter: "Makima",
        episode: "Season 2",
        price: 399.99,
    },
]

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
}

dom_add_button.addEventListener("click", addMoreProduct);
cancel_button.addEventListener("click", cancelButton)