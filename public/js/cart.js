function loadCart() {
  fetch("/api/cart", { credentials: "include" })
    .then((res) => res.json())
    .then((cart) => {
      const list = document.getElementById("cart-items");
      const totalEl = document.getElementById("total");

      list.innerHTML = "";
      let total = 0;

      cart.forEach((item) => {
        total += item.price * item.quantity;

        list.innerHTML += `
          <li class="list-group-item bg-dark text-light d-flex justify-content-between">
            ${item.name} (x${item.quantity})
            <button class="btn btn-sm btn-danger"
              onclick="removeItem('${item.productId}')">Remove</button>
          </li>
        `;
      });

      totalEl.innerText = "Total: ₹" + total;
    });
}

function removeItem(productId) {
  fetch(`/api/cart/remove/${productId}`, {
    method: "DELETE",
    credentials: "include",
  }).then(() => loadCart());
}

function checkout() {
  fetch("/api/orders/checkout", {
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then(() => {
      alert("Order placed successfully!");
      window.location.href = "/";
    });
}

loadCart();
