function loadProducts() {
  fetch("/api/products")
    .then(res => res.json())
    .then(products => {
      const list = document.getElementById("product-list");
      list.innerHTML = "";

      products.forEach(p => {
        list.innerHTML += `
          <li class="list-group-item bg-dark text-light d-flex justify-content-between">
            ${p.name} - ₹${p.price}
            <button class="btn btn-danger btn-sm"
              onclick="deleteProduct('${p._id}')">Delete</button>
          </li>
        `;
      });
    });
}

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;

  fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ name, price, description })
  })
    .then(res => res.json())
    .then(() => {
      alert("Product added");
      loadProducts();
    });
}

function deleteProduct(id) {
  fetch(`/api/products/${id}`, {
    method: "DELETE",
    credentials: "include"
  })
    .then(() => loadProducts());
}

loadProducts();
