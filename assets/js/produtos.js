const products = [
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/petisco-de-cenoura.jpg",
    altText: "Petisco de Cenoura",
    nameTitle: "Petisco de Cenoura",
    title: "Petiscos Assados The Bull",
    price: "R$18,90",
    pageSrc: "#"
  },
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/snack-de-frango.jpg",
    altText: "Snack de Frango",
    nameTitle: "Snack de Frango",
    title: "Snack de Frango The Bull",
    price: "R$28,90",
    pageSrc: "#"
  },
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/Snack-file-suino.jpg",
    altText: "Snack Filé Suíno",
    nameTitle: "Snack Filé Suíno",
    title: "Snack Filé Suíno The Bull",
    price: "R$ 30,00",
    pageSrc: "#"
  },
  
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/snack-de-frango.jpg",
    altText: "Snack de Frango",
    nameTitle: "Snack de Frango",
    title: "Snack de Frango The Bull",
    price: "R$ 28,00",
    pageSrc: "#"
  },
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/snack-de-figado.jpg",
    altText: "Snack de Fígado",
    nameTitle: "Snack de Fígado",
    title: "Snack de Fígado The Bull",
    price: "R$ 28,00",
    pageSrc: "#"
  },
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/snack-figado-de-avestruz.jpg",
    altText: "Snack de Fígado de Avestruz",
    nameTitle: "Snack de Fígado de Avestruz",
    title: "Snack de Fígado de Avestruz The Bull",
    price: "R$ 36,00",
    pageSrc: "#"
  },
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/snack-de-manjuba.jpg",
    altText: "Snack de Manjuba",
    nameTitle: "Snack de Manjuba",
    title: "Snack de Manjuba The Bull",
    price: "R$ 30,00",
    pageSrc: "#"
  },
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/snack-de-buchino.jpg",
    altText: "Snack de Buchinho",
    nameTitle: "Snack de Buchinho",
    title: "Snack de Buchinho The Bull",
    price: "R$ 28,00",
    pageSrc: "#"
  },
  {
    category:"petiscos_naturais",
    imgSrc: "./assets/images/products/biscoito-de-banana-e-aveia.jpg",
    altText: "Biscoito de Banana e Aveia",
    nameTitle: "Biscoito de Banana e Aveia",
    title: "Biscoito de Banana e Aveia The Bull",
    price: "R$ 25,00",
    pageSrc: "https://fuzue-pet-store-anon-ecommerce.vercel.app/produtos.html?imgSrcProductName=biscoito-de-banana-e-aveia.jpg?showcaseTitle=Biscoito de Banana e Aveia?showcaseDesc=Os BISCOITOS NATURAIS são alimentos funcionais preparados para mimar e recompensar o seu cão. Produzidos artesanalmente com ingredientes naturais, sem adição de trigo, conservantes artificiais, açucares, corantes, aromatizantes ou qualquer coisa prejudicial a saúde do seu animal. Para manter seus petiscos fresquinhos por mais tempo, você deve mante-lo em local fresco, seco e ao abrigo da luz solar. Após abrir, você pode armazenar em um pote com tampa ou na mesma embalagem bem fechada e, consumir preferencialmente em até 20 dias. Pode ser conservado em geladeira. Os petiscos estão em uma embalagem de ZIP LOCK, ela permite que você abra e feche os produtos sempre que necessário! Mas lembre-se que este produto não substitui a alimentação principal.?price=R$ 25,00?whatsappApiUrl=https://api.whatsapp.com/send?phone=+559184093870&text=Olá! Gostaria de comprar o produto Biscoito de Banana e Aveia."
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
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the category parameter from the URL
const category = getParameterByName('category');
// console.log("Parametro recebido: ",category);

//const category = document.getElementById('showcase').dataset.category;

const filteredProducts = products.filter(product => product.category === category);

filteredProducts.forEach((product) => {
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
        <a href="${product.pageSrc}" class="showcase-category">${product.nameTitle}</a>
        <a href="${product.pageSrc}"><h3 class="showcase-title">${product.title}</h3></a>
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
