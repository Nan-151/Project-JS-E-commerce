const cardContainer = document.querySelector(".cards-container");


let productInfo = [
    {
        image: "https://ae01.alicdn.com/kf/H36ce38d44eba4adcb1d69b0340ddd119H/Bad-Woman-Studio-Chainsaw-Man-Machima-1-4-Scale-GK-Limited-Edition-Resin-Statue-Handmade-Figures.png_.webp",
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
// ------------------ create card---------
function listCard() {
    let color = "#19AEA5";
    // for all cards,
    for (let index = 0; index < productInfo.length; index++) {
        console.log(index)
        let product = productInfo[index];
        if (product.Availability.toLowerCase() === "in-stock"){
            color = "#1D8C1B";
        }else if (product.Availability.toLowerCase() === "pre-order"){
            color = "#19AEA5"
        }

        let card = document.createElement("div");
        card.className = "card";
        card.id = "card";
        
        let image = document.createElement("div"); // create card image
        image.className = "image";
        let img = document.createElement("img"); // create img element
        img.src = product.image;
        image.appendChild(img); // append image element to card container
        card.appendChild(image);

        let product_info = document.createElement("div");
        product_info.className = "product-info";

        let stock = document.createElement("div"); // create stock element
        stock.className = "stock";
        stock.style.backgroundColor = color; // set background color
        let h3 = document.createElement("h3"); // create stock h3 element
        h3.textContent = product.Availability;

        stock.appendChild(h3);
        product_info.appendChild(stock); // append stock element to card container

        let title = document.createElement("div"); // create title element
        title.className = "title";
        let p = document.createElement("p"); // create title h4 element
        p.textContent = product.title + "-" + product.nameOfCharacter + "-" + product.episode;
        title.appendChild(p);
        product_info.appendChild(title); // append title element to card container

        let price = document.createElement("div"); // create price element
        price.className = "price";
        let spanPice = document.createElement("span"); // create price h4 element
        spanPice.id = "price";
        spanPice.textContent = "$" + (product.price);
        price.appendChild(spanPice);
        product_info.appendChild(price); // append price element to card container

        let iconContent = document.createElement("div"); // create icon container element
        iconContent.className = "icon";
    
        let rating = document.createElement("div"); // create rating element
        rating.className = "heart-rating";
    
        let ratingIcon = document.createElement("ion-icon"); // create icon element
        ratingIcon.name = "heart";
        ratingIcon.className = "heart";
        rating.appendChild(ratingIcon);// append icon element to icon container
    
        let label = document.createElement("label"); // create label element
        label.textContent = "0";
        rating.appendChild(label) // append lebel element to icon container
        iconContent.appendChild(rating);// append rating container to icon container
        
    
        let cart = document.createElement("div"); // create cart element
        cart.className = "heart-rating";
    
        let cartIcon = document.createElement("ion-icon"); // create cartIcon element
        cartIcon.name = "cart-outline";
    
        cart.appendChild(cartIcon);// append cart icon element to cart 
        iconContent.appendChild(cart) // append cart to icon container
    
        product_info.appendChild(iconContent);// append card
        card.appendChild(product_info);
        cardContainer.appendChild(card);
        console.log(product_info)
    };

    console.log(cardContainer)
        
}
loadProductInfo()
listCard();


