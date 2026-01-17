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
            <button class="btn btn-outline-light">Add to Cart</button>
          </div>
        </div>
      `;
    });
  });
