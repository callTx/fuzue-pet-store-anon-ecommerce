
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
titleH2.textContent = "Comprar produto";

productMainDiv.appendChild(titleH2);

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
const imgSrcProductName = getParameterByName('imgSrcProductName');
const showcaseTitle = getParameterByName('showcaseTitle');
const showcaseDesc = getParameterByName('showcaseDesc');
const price = getParameterByName('price');
const whatsappApiUrl = getParameterByName('whatsappApiUrl');
const whatsappApiUrlText = getParameterByName('text');

whatsappApiUrlFormatada = replacePercent20WithSpace(whatsappApiUrl);
whatsappApiUrlTextFormatada = replacePercent20WithSpace(whatsappApiUrlText);

function parseImageString(imageString) {
  // Split the input string by comma to get an array of image names
  const imageArray = imageString.split(',');

  // Use map to format each image name as 'productX.jpg'
  const imgSrcProductNameList = imageArray.map((imageName, index) => {
    // Remove spaces and ensure the file extension is '.jpg'
    const formattedName = imageName.trim().toLowerCase();
    if (formattedName.endsWith('.jpg')) {
      return formattedName;
    } else {
      return `${formattedName}-${index + 1}.jpg`;
    }
  });

  return imgSrcProductNameList;
}



const imgSrcProductNameList = parseImageString(imgSrcProductName);

const productHTML =  generateProductHTML(imgSrcProductNameList, showcaseTitle, showcaseDesc, price, whatsappApiUrl, whatsappApiUrlText);
productMainDiv.innerHTML += productHTML;

function replacePercent20WithSpace(inputString) {
  return inputString.replace(/%20/g, ' ');
}

function generateProductHTML(imgSrcProductNameList, showcaseTitle, showcaseDesc, price, whatsappApiUrl, whatsappApiUrlText) {
  let productHTML = `
  <div class="product-featured">
    <div class="showcase-container">
      <div class="showcase">
        <div class="slider-container has-scrollbar">`;

  imgSrcProductNameList.forEach(imgSrcProductName => {
    productHTML += `
            
              <div class="slider-item">                
                <div class="showcase-banner">
                  <img src="./assets/images/products/${imgSrcProductName}" alt="shampoo, conditioner & facewash packs" class="showcase-img">
                </div>
              </div>    
    `;
  });

  productHTML += `
        </div>
        <div class="showcase-content">
          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
          <a href="#">
            <h3 class="showcase-title">${showcaseTitle}</h3>
          </a>
          <p class="showcase-desc">
            ${showcaseDesc}
          </p>
          <div class="price-box">
            <p class="price">${price}</p>
          </div>
          <a href="${whatsappApiUrl}&text=${whatsappApiUrlText}" target="_blank">
            <button class="add-cart-btn" onclick="openWhatsApp()" style="display: flex; align-items: center;">
              <img src="./assets/images/icons/whatsapp-color-svgrepo-com.svg" alt="SVG Alt Text" width="32" height="32" style="margin-right: 10px;">
              Comprar
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  `;

  return productHTML;
}


// Append the generated product grid to the main product grid div

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
