function generateProductShowcase(product) {
  return `
    <div class="product-container">
      <div class="container">
        <div class="product-box">
          <div class="product-main">
            <h2 class="title">${product.title}</h2>
            <div class="product-grid">
              <div class="showcase">
                <div class="showcase-banner">
                  <a href="${product.link}">
                    <img src="${product.imageSrc}" alt="${product.altText}" width="300" class="product-img default">
                    <img src="${product.imageSrc}" alt="${product.altText}" width="300" class="product-img hover">
                  </a>
                </div>
                <div class="showcase-content">
                  <a href="${product.link}" class="showcase-category">${product.category}</a>
                  <a href="${product.link}">
                    <h3 class="showcase-title">${product.title}</h3>
                  </a>
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
    </div>`;
}

const productInfo = {
  title: "Petiscos Assados The Bull",
  category: "Petisco de Cenoura",
  link: "https://fuzue-pet-store-anon-ecommerce.vercel.app/petiscos_petisco-de-cenoura.html",
  imageSrc: "./assets/images/products/petisco-de-cenoura.jpg",
  altText: "Petisco de Cenoura",
  price: "R$25,00"
};

const productShowcaseHTML = generateProductShowcase(productInfo);
console.log(productShowcaseHTML);  // You can modify this to insert the HTML where needed in your application
