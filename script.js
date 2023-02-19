// Configurator
const sizeSelect = document.getElementById('size');
const colorSelect = document.getElementById('color');
const quantityInput = document.getElementById('quantity');
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const totalPrice = document.getElementById('total-price');

sizeSelect.addEventListener('change', updateProduct);
colorSelect.addEventListener('change', updateProduct);
quantityInput.addEventListener('input', updateProduct);
lengthInput.addEventListener('input', updateProduct);
widthInput.addEventListener('input', updateProduct);

function updateProduct() {
  const size = sizeSelect.value;
  const sizePrice = Number(sizeSelect.options[sizeSelect.selectedIndex].dataset.price);
  const color = colorSelect.value;
  const colorPrice = Number(colorSelect.options[colorSelect.selectedIndex].dataset.price);
  const quantity = Number(quantityInput.value);
  const length = Number(lengthInput.value);
  const width = Number(widthInput.value);

  const productPrice = (sizePrice + colorPrice) * quantity + length * width;

  totalPrice.textContent = `$${productPrice}`;
}

// Image Zooming
const zoomImage = document.getElementById("zoom-image");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");

let scale = 1; // initial scale factor

function zoomIn() {
  scale += 1;
  zoomImage.style.transform = `scale(${scale})`;
}

function zoomOut() {
  if (scale > 0.2) { // limit minimum scale to 0.2
    scale -= 1;
    zoomImage.style.transform = `scale(${scale})`;
  }
}

zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);