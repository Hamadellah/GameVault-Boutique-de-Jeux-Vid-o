import { games } from "./data.js";

if (!localStorage.getItem("games")) {
  localStorage.setItem("games", JSON.stringify(games));
}

let storedGames = JSON.parse(localStorage.getItem("games"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const root = document.getElementById("root");

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) cartCountEl.textContent = count;
}

function showHome() {
  root.innerHTML = `
    <div class="flex justify-center items-center gap-4 mt-6">
      <h1 class="text-white text-3xl font-serif">🎮 PRODUCT</h1>
      <button id="go-to-cart" class="relative p-2 bg-gray-800 rounded-full text-white">
        🛒 <span id="cart-count" class="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">${cart.reduce((s, i) => s + i.quantity, 0)}</span>
      </button>
    </div>
    
    <div class="flex justify-center">
      <input id="search" class="rounded-full mt-[20px] w-[90%] h-12 px-5 bg-gray-800 text-white placeholder-gray-400 focus:ring-4 focus:ring-yellow-400 focus:outline-none shadow-lg transition-all" type="search" placeholder="Search your favorite game...">
    </div>

    <h1 class="text-white mt-[7%] text-2xl font-serif ml-[4%]">Filter</h1>
    <div id="filters" class="flex justify-between mx-[10%] mt-[6%] gap-3 overflow-x-auto">
      <div class="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm cursor-pointer hover:bg-yellow-500 transition">All</div>
      <div class="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm cursor-pointer hover:bg-indigo-600 transition">Action</div>
      <div class="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm cursor-pointer hover:bg-green-600 transition">Sport</div>
      <div class="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm cursor-pointer hover:bg-pink-600 transition">RPG</div>
    </div>
    <div id="products" class="grid grid-cols-1 gap-6 p-6 md:grid-cols-4"></div>
  `;

  const container = document.getElementById("products");

  function renderGames(list) {
    container.innerHTML = "";
    list.forEach((game) => {
      const card = document.createElement("div");
      card.className =
        "bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform";
      card.innerHTML = `
        <img src="${game.image}" class="rounded-xl w-full h-44 object-cover mb-3 shadow-md" onerror="this.src='https://via.placeholder.com/150'"/>
        <h2 class="text-yellow-400 font-bold text-lg">${game.title}</h2>
        <p class="text-gray-300 text-sm">$${game.price}</p>
        <div class="flex justify-end mt-3">
          <button class="add-btn bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
            Add to Panier
          </button>
        </div>
      `;
      card
        .querySelector(".add-btn")
        .addEventListener("click", () => addToCart(game));
      container.appendChild(card);
    });
  }

  renderGames(storedGames);

  // 🔹 Recherche
  document.getElementById("search").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = storedGames.filter((game) =>
      game.title.toLowerCase().includes(query),
    );
    renderGames(filtered);
  });

  
  document.querySelectorAll("#filters div").forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.textContent;
      if (category === "All") {
        renderGames(storedGames);
      } else {
        const filtered = storedGames.filter(
          (game) => game.category === category,
        );
        renderGames(filtered);
      }
    });
  });

  document.getElementById("go-to-cart").addEventListener("click", showPanier);
}

function addToCart(game) {
  const existing = cart.find((item) => item.id === game.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...game, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateQuantity(index, change) {
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showPanier();
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showPanier();
}

function showPanier() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  root.innerHTML = `
    <div class="min-h-screen bg-[#1a1a1a] text-white p-4 font-sans">
      <header class="flex justify-between items-center mb-8 px-2">
        <button id="back-home" class="text-gray-400 flex items-center gap-2">
           ← Back
        </button>
        <h1 class="text-center text-xl font-bold uppercase tracking-widest">Your Panier</h1>
        <div class="w-8"></div>
      </header>

      <div id="cart-items" class="space-y-6 max-w-md mx-auto">
        ${cart.length === 0 ? '<p class="text-center text-gray-500">Votre panier est vide</p>' : ""}
        ${cart
          .map(
            (item, index) => `
          <div class="bg-black rounded-3xl p-4 flex items-center gap-4 border border-gray-900 shadow-2xl">
            <img src="${item.image}" class="w-20 h-20 rounded-lg object-cover">
            <div class="flex-1">
              <h2 class="text-sm font-bold">${item.title}</h2>
              <p class="text-sm font-bold text-gray-400">$${(item.price * item.quantity).toFixed(2)}</p>
              <div class="flex items-center gap-2 mt-2">
                <button class="decrease bg-gray-700 text-white px-2 rounded-full" data-index="${index}">-</button>
                <span class="text-sm font-bold">Qty: ${item.quantity}</span>
                <button class="increase bg-gray-700 text-white px-2 rounded-full" data-index="${index}">+</button>
                <button class="remove bg-red-500 text-white px-2 rounded-full ml-4" data-index="${index}">🗑️</button>
              </div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>

      <div class="max-w-md mx-auto mt-12 bg-black rounded-full p-2 flex justify-between items-center px-6 border border-gray-800 shadow-xl">
        <span class="text-lg font-semibold tracking-wide">total : ${total.toFixed(2)}$</span>
        <button id="checkout" class="bg-[#f0a500] text-black font-bold py-2 px-8 rounded-full">checkout</button>
      </div>
    </div>
  `;

  document.getElementById("back-home").addEventListener("click", showHome);

  document.querySelectorAll(".increase").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      updateQuantity(index, 1);
    });
  });

  document.querySelectorAll(".decrease").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      updateQuantity(index, -1);
    });
  });

  document.querySelectorAll(".remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      removeItem(index);
    });
  });

  document.getElementById("checkout").addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    showPanier();
    updateCartCount();
  });
}

showHome();
