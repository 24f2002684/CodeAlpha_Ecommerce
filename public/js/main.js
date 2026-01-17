fetch("/api/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("product-list");
 
    products.forEach(p => {
        container.innerHTML += `
          <div class="col-md-4">
            <div class="card p-3 mb-4">
              <h5>${p.name}</h5>
              <p>₹${p.price}</p>
              <button class="btn btn-outline-light"
                onclick="addToCart('${p._id}')">
                Add to Cart
              </button>
              <a href="/product?id=${p._id}" class="btn btn-outline-light">
        View Product
      </a>
            </div>
          </div>
        `;
    });
  });

function addToCart(productId) {
  fetch(`/api/cart/add/${productId}`, {
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Added to cart!");
    });
}



