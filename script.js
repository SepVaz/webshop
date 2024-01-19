const cartPanel = document.getElementById("cartPanel");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartIcon = document.querySelector(".bx-cart-alt");
const cardHeartIcons = document.querySelectorAll(".bx-heart");
const cardContainer = document.querySelector(".card-container")

cartIcon.addEventListener("click", function () {
    cartPanel.style.right = "0";
});

closeCartBtn.addEventListener("click", function () {
    cartPanel.style.right = "-100%";
});



/* heartIcon.forEach(icon => {
    icon.addEventListener("click", function () {
        this.style.color = this.style.color === 'red' ? '' : 'red';
    });
}); */



fetch('products.json')
    .then(res => res.json())
    .then((data) => {
        const cardContainer = document.querySelector('.card-container');

        data.products.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.className = "cards";

            const image = document.createElement("img");
            image.src = product.image;
            productDiv.appendChild(image);

            const titleDiv = document.createElement("div");
            titleDiv.textContent = product.title;
            productDiv.appendChild(titleDiv);

            const heartIcon = document.createElement("i");
            heartIcon.className = "bx bx-heart";

            heartIcon.addEventListener("click", function () {
                if (this.style.color === 'red') {
                    this.style.color = '';
                } else {
                    this.style.color = 'red';
                }
            });

            productDiv.appendChild(heartIcon);

            const priceDiv = document.createElement("div");
            priceDiv.textContent = "Pris: " + product.price + " kr";
            productDiv.appendChild(priceDiv);

            cardContainer.appendChild(productDiv);


            image.addEventListener("click", function () {
                updateContentForProduct(product);
            });
        });
    })
    .catch(error => console.error("Det uppstod ett fel:", error));

/* function updateContentForProduct(product) {
    // Uppdatera innehållet baserat på den valda produkten (t.ex. visa i en modal)
    console.log("Produktinformation: ", product);
} */


function updateContentForProduct(product) {

    cardContainer.innerHTML = '';

    const detailedView = document.createElement("div");
    detailedView.className = "detailed-view";

    const detailedImage = document.createElement("img");
    detailedImage.src = product.image;
    detailedImage.alt = product.title;
    detailedImage.className = "detailed-image";
    detailedView.appendChild(detailedImage);

    const detailedInfo = document.createElement("div");
    detailedInfo.className = "detailed-info";

    const detailedName = document.createElement("p");
    detailedName.textContent = product.title;
    detailedInfo.appendChild(detailedName);

    const detailedPrice = document.createElement("p");
    detailedPrice.textContent = `${product.price}` + " kr";
    detailedInfo.appendChild(detailedPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.className = "addButton"
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", function () {

        addToCart(product);
    });
    detailedInfo.appendChild(addToCartButton);

    const backButton = document.createElement("button");
    backButton.className = "backButton"
    backButton.textContent = "Back to Products";
    backButton.addEventListener("click", function () {

        fetchProducts();
    });
    detailedInfo.appendChild(backButton);

    detailedView.appendChild(detailedInfo);
    cardContainer.appendChild(detailedView);
}

let cart = []

function addToCart(product) {
    cart.push(product);
    updateCartPanel();
}

function updateCartPanel() {
    const cartPanel = document.getElementById('cartPanel');
    cartPanel.innerHTML = '';

    cart.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'cart-product';

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.className = 'cart-product-image';
        productDiv.appendChild(productImage);

        const productInfo = document.createElement('div');
        productInfo.textContent = `${product.title} - Pris: ${product.price} kr`;
        productInfo.className = 'cart-product-info'; 
        productDiv.appendChild(productInfo);

        cartPanel.appendChild(productDiv);
    });
}





function fetchProducts() {

    cardContainer.innerHTML = '';

    fetch('products.json')
        .then(res => res.json())
        .then((data) => {
            data.products.forEach((product) => {
                const productDiv = document.createElement("div");
                productDiv.className = "cards";

                const image = document.createElement("img");
                image.src = product.image;
                productDiv.appendChild(image);

                const titleDiv = document.createElement("div");
                titleDiv.textContent = product.title;
                productDiv.appendChild(titleDiv);

                const priceDiv = document.createElement("div");
                priceDiv.textContent = "Pris: " + product.price + " kr";
                productDiv.appendChild(priceDiv);

                const heartIcon = document.createElement("i");
                heartIcon.className = "bx bx-heart";

                heartIcon.addEventListener("click", function () {
                    if (this.style.color === 'red') {
                        this.style.color = '';
                    } else {
                        this.style.color = 'red';
                    }
                });

                productDiv.appendChild(heartIcon);

                image.addEventListener("click", function () {

                    updateContentForProduct(product);
                });

                cardContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Det uppstod ett fel:", error));
}

