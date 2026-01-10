const allProducts = [
    {
        name: "Potato 500g",
        category: "organic-veggies",
        image: "assets/potato_image_1.png",
        price: 35,
        oldPrice: 40,
        rating: 4,
        reviews: 4,
        tag: "Vegetables"
    },
    {
        name: "Tomato 1 kg",
        category: "organic-veggies",
        image: "assets/tomato_image.png",
        price: 28,
        oldPrice: 30,
        rating: 4,
        reviews: 4,
        tag: "Vegetables"
    },
    {
        name: "Apple 1 kg",
        category: "fresh-fruits",
        image: "assets/apple_image.png",
        price: 60,
        oldPrice: 70,
        rating: 5,
        reviews: 12,
        tag: "Fruits"
    },
    {
        name: "Coca-Cola 1.5L",
        category: "cold-drinks",
        image: "assets/coca_cola_image.png",
        price: 35,
        oldPrice: 40,
        rating: 4,
        reviews: 8,
        tag: "Drinks"
    },
    // Add more...
];


function getSelectedCategory() {
    const params = new URLSearchParams(window.location.search);
    return params.get("category");
}

function displayProducts(products) {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
      <p style="color: gray; font-size: 0.9rem; margin-top: 0.5rem;">${p.tag}</p>
      <h3 style="margin: 0.3rem 0;">${p.name}</h3>
      <div style="color: #4ebd88; font-size: 0.9rem;">
        ${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}
        <span style="color: #555;">(${p.reviews})</span>
      </div>
      <p style="margin-top: 0.3rem; font-weight: bold; color: #4ebd88;">
        $${p.price} <span style="text-decoration: line-through; color: gray; font-weight: normal;">$${p.oldPrice}</span>
      </p>
      <button style="
        margin-top: 0.5rem;
        padding: 0.4rem 1rem;
        border: 1px solid #4ebd88;
        background: white;
        color: #4ebd88;
        border-radius: 6px;
        cursor: pointer;
      ">
        <i class="fa-solid fa-cart-shopping"></i> Add
      </button>
    `;
        container.appendChild(card);
    });
}


window.addEventListener("DOMContentLoaded", () => {
    const selected = getSelectedCategory();
    const filtered = selected
        ? allProducts.filter(p => p.category === selected)
        : allProducts;
    displayProducts(filtered);
});