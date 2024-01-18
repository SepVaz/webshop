const cartPanel = document.getElementById("cartPanel");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartIcon = document.querySelector(".bx-cart-alt");
const cardHeartIcons = document.querySelectorAll(".bxs-heart");
const cardContainer = document.querySelector(".card-container")

cartIcon.addEventListener("click", function () {
    cartPanel.style.right = "0";
});

closeCartBtn.addEventListener("click", function () {
    cartPanel.style.right = "-100%";
});

cardHeartIcons.forEach(icon => {
    icon.addEventListener("click", function () {
        this.style.color = this.style.color === 'red' ? '' : 'red';
    });
});



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

            cardContainer.appendChild(productDiv);

        
            image.addEventListener("click", function () {
              
                updateContentForProduct(product);
            });
        });
    })
    .catch(error => console.error("Det uppstod ett fel:", error));

   
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
    detailedPrice.textContent = `${product.price}`;
    detailedInfo.appendChild(detailedPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", function () {
        
        addToCart(product);
    });
    detailedInfo.appendChild(addToCartButton);

    const backButton = document.createElement("button");
    backButton.textContent = "Back to Products";
    backButton.addEventListener("click", function () {
       
        fetchProducts();
    });
    detailedInfo.appendChild(backButton);

    detailedView.appendChild(detailedInfo);
    cardContainer.appendChild(detailedView);
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
                
                image.addEventListener("click", function () {
                   
                    updateContentForProduct(product);
                });

                cardContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Det uppstod ett fel:", error));
}

