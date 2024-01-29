document.addEventListener('DOMContentLoaded', () => {
    showFavorites();
});


function showFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let container = document.querySelector('.favorit-container');

    // Kontrollera om det finns favoriter
    if(favorites.length === 0) {
        container.innerHTML = '<p>Inga produkter i favoriter.</p>';
        return;
    }

    // Skapa HTML för varje produkt
    favorites.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;
        image.className = 'product-image';
        productDiv.appendChild(image);

        const title = document.createElement('h3');
        title.textContent = product.title;
        productDiv.appendChild(title);

        const price = document.createElement('p');
        price.textContent = `${product.price} kr`;
        productDiv.appendChild(price);

        container.appendChild(productDiv);
    });
}


/* console.log(localStorage); */