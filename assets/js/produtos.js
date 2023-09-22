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
      </div>`;
  }
  
  const productContainer = document.getElementById("productContainer");
  products.forEach((product) => {
    const productHTML = generateProductHTML(product);
    productContainer.insertAdjacentHTML("beforeend", productHTML);
  });
  