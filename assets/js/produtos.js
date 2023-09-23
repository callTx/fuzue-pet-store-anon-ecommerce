const products = [
  {
    imageSrc: "./assets/images/products/petisco-de-cenoura.jpg",
    altText: "Petisco de Cenoura",
    category: "Petisco de Cenoura",
    title: "Petiscos Assados The Bull",
    rating: 5,
    price: "R$25,00"
  },
  {
    imageSrc: "./assets/images/products/petisco-de-cenoura.jpg",
    altText: "Petisco de Cenoura",
    category: "Petisco de Cenoura",
    title: "Petiscos Assados The Bull",
    rating: 5,
    price: "R$25,00"
  },
  // Add more products here as needed
];

function generateProductShowcase(products) {
  return products.map(product => `
    <div class="showcase">
      <div class="showcase-banner">
        <a href="https://fuzue-pet-store-anon-ecommerce.vercel.app/petiscos_petisco-de-cenoura.html">
          <img src="${product.imageSrc}" alt="${product.altText}" width="300" class="product-img default">
          <img src="${product.imageSrc}" alt="${product.altText}" width="300" class="product-img hover">
        </a>
      </div>
      <div class="showcase-content">
        <a href="https://fuzue-pet-store-anon-ecommerce.vercel.app/petiscos_petisco-de-cenoura.html" class="showcase-category">${product.category}</a>
        <a href="https://fuzue-pet-store-anon-ecommerce.vercel.app/petiscos_petisco-de-cenoura.html">
          <h3 class="showcase-title">${product.title}</h3>
        </a>
        <div class="showcase-rating">
          ${Array(product.rating).fill('<ion-icon name="star"></ion-icon>').join('')}
        </div>
        <div class="price-box">
          <p class="price">${product.price}</p>
        </div>
      </div>
    </div>`).join('');
}