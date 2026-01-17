const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

function loadProduct() {
  fetch(`/api/products`)
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p._id === productId);

      document.getElementById("name").innerText = product.name;
      document.getElementById("price").innerText = "₹" + product.price;
      document.getElementById("description").innerText =
        product.description || "No description available";
    });
}

function addToCart() {
  fetch(`/api/cart/add/${productId}`, {
    method: "POST",
    credentials: "include"
  })
    .then(() => alert("Added to cart!"));
}

loadProduct();
