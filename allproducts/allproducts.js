let container = document.getElementById("products");

fetch("https://dummyjson.com/products?limit=0")
  .then((response) => response.json())
  .then((data) => {
    let products = data.products;

    let productsHTML = products
      .map(
        (product) => `
        <div class="product-detiels">
            <div class="product-imgandheart">
                <span class="heart">♡</span>
                <img src="${product.thumbnail}" class="prodect-img">
            </div>
            <div class="descrption">
                <a href="productdetails.html?id=${product.id}" class="title"><h3>${product.title}</h3></a>
                <p class="price">${product.price}$</p>
                <p class="desc">${product.description.slice(0, 40)}...</p>
            </div>
        </div>
    `,
      )
      .join("");

    container.innerHTML = productsHTML;

    document.querySelectorAll(".product-detiels").forEach((card) => {
      const heart = card.querySelector(".heart");
      heart.addEventListener("click", () => {
        heart.classList.toggle("red");
      });
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
