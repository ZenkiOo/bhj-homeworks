const cart = document.querySelector(".cart__products"),
  images = Array.from(document.querySelectorAll(".product__image"));

renderCart();

if (!localStorage.getItem("cart-data")) {
  localStorage.setItem("cart-data", JSON.stringify((cartData = {})));
}

document.addEventListener("click", function (event) {
  const target = event.target;
  function isClass(className) {
    return target.classList.contains(`${className}`);
  }

  if (isClass("cart__product-delete")) {
    const cartData = JSON.parse(localStorage.getItem("cart-data")),
      id = target.closest(".cart__product").dataset.id;
    delete cartData[`id${id}`];
    localStorage.setItem("cart-data", JSON.stringify(cartData));
    renderCart();
  }

  try {
    const product = target.closest(".product"),
      value = product.querySelector(".product__quantity-value"),
      id = `id${product.dataset.id}`;

    if (isClass("product__quantity-control_inc")) {
      let newValue = value.textContent;
      newValue++;
      value.textContent = newValue;
    }

    if (isClass("product__quantity-control_dec") && value.textContent > 1) {
      let newValue = value.textContent;
      newValue--;
      value.textContent = newValue;
    }

    if (isClass("product__add")) {
      const cartData = JSON.parse(localStorage.getItem("cart-data"));
      if (Number(cartData[id])) {
        cartData[id] = Number(cartData[id]) + Number(value.textContent);
      } else {
        cartData[id] = Number(value.textContent);
      }
      localStorage.setItem("cart-data", JSON.stringify(cartData));
      value.textContent = 1;
      renderCart();
    }
  } catch {
    return;
  }
});

function showProduct(id, img, count) {
  cart.insertAdjacentHTML(
    "beforeend",
    `
    <div class="cart__product" data-id="${id}">
        <div class="cart__product-delete">x</div>
        <img class="cart__product-image" src="${img}">
        <div class="cart__product-count">${count}</div>
    </div>
    `
  );
}

function renderCart() {
  const cartData = JSON.parse(localStorage.getItem("cart-data")),
    products = Array.from(document.querySelectorAll(".cart__product"));

  products.forEach((product) => {
    product.remove();
  });

  for (prop in cartData) {
    const id = prop.replace("id", "");
    showProduct(id, images[id - 1].src, cartData[prop]);
  }

  console.log(localStorage.getItem("cart-data"));
}
