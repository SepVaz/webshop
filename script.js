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



fetch('https://fakestoreapi.com/products/category/women%27s%20clothing?limit=3')
    .then(res => res.json())
    .then((products) => {
        const cardContainer = document.querySelector('.card-container'); // Se till att denna selektor matchar ditt HTML-element

        products.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.className = "cards";

            const image = document.createElement("img");
            image.src = product.image;
            productDiv.appendChild(image);

            cardContainer.appendChild(productDiv);
            
        });
      
        
    })
    
  


    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))




/* fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
            console.log({
                id: product.id,
                title: product.title,
                price: product.price,
                category: product.category,
                description: product.description,
                image: product.image
            });
        });
    })
    .catch(error => console.error('Error:', error)); */
