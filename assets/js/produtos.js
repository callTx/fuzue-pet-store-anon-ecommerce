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

const productContainer = document.createElement("div");
productContainer.classList.add("product-container");

const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

const productBoxDiv = document.createElement("div");
productBoxDiv.classList.add("product-box");

const productMainDiv = document.createElement("div");
productMainDiv.classList.add("product-main");

const titleH2 = document.createElement("h2");
titleH2.classList.add("title");
titleH2.textContent = "Petiscos Naturais";

const productGridDiv = document.createElement("div");
productGridDiv.classList.add("product-grid");




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
                </div>
            
    `;
}

const showcase = document.getElementById("showcase");
products.forEach((product) => {
  const productHTML = generateProductHTML(product);
  showcase.insertAdjacentHTML("beforeend", productHTML);
});
productGridDiv.appendChild(showcase);

productMainDiv.appendChild(titleH2);
productMainDiv.appendChild(productGridDiv);

productBoxDiv.appendChild(productMainDiv);

containerDiv.appendChild(productBoxDiv);

productContainer.appendChild(containerDiv);


// Add the CSS link dynamically
const head = document.head || document.getElementsByTagName("head")[0];
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./assets/css/style-prefix.css";
head.appendChild(cssLink);

document.body.appendChild(productContainer);