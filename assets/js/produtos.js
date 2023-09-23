const products = [
  {
    imgSrc: "./assets/images/products/petisco-de-cenoura.jpg",
    altText: "Petisco de Cenoura",
    category: "Petisco de Cenoura",
    title: "Petiscos Assados The Bull",
    price: "R$18,90"
  },
  {
    imgSrc: "./assets/images/products/snack-de-frango.jpg",
    altText: "Snack de Frango",
    category: "Snack de Frango",
    title: "Snack de Frango The Bull",
    price: "R$28,90"
  }
];

function generateProductHTML(product) {
  return `
  <div class="product-container">

      <div class="container">

        <div class="product-box">
          <div class="product-main">

            <h2 class="title">Petiscos Naturais</h2>

            <div class="product-grid">
                <div class="showcase">
                  <div class="showcase-banner">
                    <img src="${product.imgSrc}" alt="${product.altText}" width="300" class="product-img default">
                    <img src="${product.imgSrc}" alt="${product.altText}" width="300" class="product-img hover">
                  </div>
                  <div class="showcase-content">
                    <a href="#" class="showcase-category">${product.category}</a>
                    <a href="#"><h3 class="showcase-title">${product.title}</h3></a>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <div class="price-box">
                      <p class="price">${product.price}</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
}

const productContainer = document.getElementById("productContainer");
products.forEach((product) => {
  const productHTML = generateProductHTML(product);
  productContainer.insertAdjacentHTML("beforeend", productHTML);
});

// Add the CSS link dynamically
const head = document.head || document.getElementsByTagName("head")[0];
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./assets/css/style-prefix.css";
head.appendChild(cssLink);