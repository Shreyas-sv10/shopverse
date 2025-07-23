document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products");

  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: "₹5,499",
      image: "https://images.unsplash.com/photo-1606813902764-d6d21f655c12?auto=format&fit=crop&w=500&q=80",
      category: "Shoes"
    },
    {
      id: 2,
      name: "Apple Watch SE",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1603988363169-186f8e168837?auto=format&fit=crop&w=500&q=80",
      category: "Gadgets"
    },
    {
      id: 3,
      name: "Skullcandy Headphones",
      price: "₹3,299",
      image: "https://images.unsplash.com/photo-1612832021103-06a6f559ae5f?auto=format&fit=crop&w=500&q=80",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Puma Running Shoes",
      price: "₹4,799",
      image: "https://images.unsplash.com/photo-1606812331153-d93c5e91a859?auto=format&fit=crop&w=500&q=80",
      category: "Shoes"
    }
  ];

  let cartCount = 0;

  function updateCartCounter() {
    const cartBtn = document.querySelector("header button");
    cartBtn.innerText = `🛒 Cart (${cartCount})`;
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
      <div class="p-4">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold">${p.name}</h3>
          <span class="text-red-500 text-xl cursor-pointer hover:scale-110 transition">♥</span>
        </div>
        <p class="text-gray-600 mb-3">${p.price}</p>
        <button class="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 add-to-cart">Add to Cart</button>
      </div>
    `;

    // Add to cart functionality
    card.querySelector(".add-to-cart").addEventListener("click", () => {
      cartCount++;
      updateCartCounter();
      alert(`🛒 ${p.name} added to cart!`);
    });

    productsContainer.appendChild(card);
  });

  updateCartCounter(); // Initialize cart
});
