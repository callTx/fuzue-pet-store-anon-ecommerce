const products = [
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/petisco-de-cenoura.jpg",
    altText: "Petisco de Cenoura",
    nameTitle: "Petisco de Cenoura",
    title: "Petiscos Assados The Bull",
    price: "R$18,90",
    pageSrc: "#"
  },
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/snack-de-frango.jpg",
    altText: "Snack de Frango",
    nameTitle: "Snack de Frango",
    title: "Snack de Frango The Bull",
    price: "R$28,90",
    pageSrc: "#"
  },
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/Snack-file-suino.jpg",
    altText: "Snack Filé Suíno",
    nameTitle: "Snack Filé Suíno",
    title: "Snack Filé Suíno The Bull",
    price: "R$ 30,00",
    pageSrc: "#"
  },
  
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/snack-de-frango.jpg",
    altText: "Snack de Frango",
    nameTitle: "Snack de Frango",
    title: "Snack de Frango The Bull",
    price: "R$ 28,00",
    pageSrc: "#"
  },
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/snack-de-figado.jpg",
    altText: "Snack de Fígado",
    nameTitle: "Snack de Fígado",
    title: "Snack de Fígado The Bull",
    price: "R$ 28,00",
    pageSrc: "#"
  },
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/snack-figado-de-avestruz.jpg",
    altText: "Snack de Fígado de Avestruz",
    nameTitle: "Snack de Fígado de Avestruz",
    title: "Snack de Fígado de Avestruz The Bull",
    price: "R$ 36,00",
    pageSrc: "#"
  },
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/snack-de-manjuba.jpg",
    altText: "Snack de Manjuba",
    nameTitle: "Snack de Manjuba",
    title: "Snack de Manjuba The Bull",
    price: "R$ 30,00",
    pageSrc: "#"
  },
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/snack-de-buchino.jpg",
    altText: "Snack de Buchinho",
    nameTitle: "Snack de Buchinho",
    title: "Snack de Buchinho The Bull",
    price: "R$ 28,00",
    pageSrc: "#"
  },
  {
    category:"petiscos naturais",
    imgSrc: "./assets/images/products/biscoito-de-banana-e-aveia.jpg",
    altText: "Biscoito de Banana e Aveia",
    nameTitle: "Biscoito de Banana e Aveia",
    title: "Biscoito de Banana e Aveia The Bull",
    price: "R$ 25,00",
    pageSrc: "#"
  },
  {
    category:"petiscos naturais teste",
    imgSrc: "./assets/images/products/biscoito-de-banana-e-aveia.jpg",
    altText: "Biscoito de Banana e Aveia teste",
    nameTitle: "Biscoito de Banana e Aveia teste",
    title: "Biscoito de Banana e Aveia The Bull teste",
    price: "R$ 25,00",
    pageSrc: "#"
  },
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


// Iterate through products and generate HTML for each product
const category = document.getElementById('showcase').dataset.category;

const filteredProducts = products.filter(product => product.category === category);

products.forEach((product) => {
  const productHTML = generateProductHTML(product);
  productGridDiv.innerHTML += productHTML;
});

function generateProductHTML(product) {
  return `
    <div class="showcase">
      <div class="showcase-banner">
        <a href="${product.pageSrc}">
        <img src="${product.imgSrc}" alt="${product.altText}" width="300" class="product-img default">
        <a/>
        <a href="${product.pageSrc}">
        <img src="${product.imgSrc}" alt="${product.altText}" width="300" class="product-img hover">
        <a/>
      </div>
      <div class="showcase-content">
        <a href="#" class="showcase-category">${product.nameTitle}</a>
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

// Append the generated product grid to the main product grid div
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
