fetch("/api/auth/status", { credentials: "include" })
  .then((res) => res.json())
  .then((data) => {
    const nav = document.getElementById("navbar");

    if (data.loggedIn) {
      nav.innerHTML = `
        <a class="navbar-brand" href="/">CodeAlpha Store</a>
        <div>
          <a href="/cart" class="btn btn-outline-light me-2">Cart</a>
          <button class="btn btn-danger" onclick="logout()">Logout</button>
        </div>
      `;
    } else {
      nav.innerHTML = `
        <a class="navbar-brand" href="/">CodeAlpha Store</a>
        <div>
          <a href="/login" class="btn btn-outline-light me-2">Login</a>
          <a href="/register" class="btn btn-success">Register</a>
        </div>
      `;
    }
  });

function logout() {
  fetch("/api/auth/logout", { credentials: "include" })
    .then(() => {
      alert("Logged out");
      window.location.href = "/login";
    });
}
