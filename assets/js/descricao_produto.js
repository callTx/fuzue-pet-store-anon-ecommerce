
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
    
    `;
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
