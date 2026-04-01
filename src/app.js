
const root = document.getElementById("root");
const storedGames = JSON.parse(localStorage.getItem("games")) 

root.innerHTML = `
  <div class="flex justify-center">
    <h1 class="text-white text-3xl font-serif mt-6">🎮 PRODUCT</h1>
  </div>

  <div class="flex justify-center">
    <input id="search" 
      class="rounded-full mt-[20px] w-[90%] h-12 px-5 
             bg-gray-800 text-white placeholder-gray-400 
             focus:ring-4 focus:ring-yellow-400 focus:outline-none shadow-lg transition-all" 
      type="search" 
      placeholder="Search your favorite game...">
  </div>

  <h1 class="text-white mt-[7%] text-2xl font-serif ml-[4%]">Filter</h1>

  <div id="filters" class="flex justify-between mx-[10%] mt-[6%] gap-3">
    <div class="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm cursor-pointer hover:bg-yellow-500 transition">All</div>
    <div class="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm cursor-pointer hover:bg-indigo-600 transition">Action</div>
    <div class="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm cursor-pointer hover:bg-green-600 transition">Sport</div>
    <div class="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm cursor-pointer hover:bg-pink-600 transition">RPG</div>
  </div>

  <div id="products" class="grid grid-cols-1 gap-6 p-6 md:grid-cols-4"></div>
`;

const container = document.getElementById("products");
const searchInput = document.getElementById("search");

function renderGames(list) {
  container.innerHTML = "";
  list.forEach((game) => {
    container.innerHTML += `
      <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform">
        <img src="${game.image}" class="rounded-xl w-full h-44 object-cover mb-3 shadow-md"/>
        <h2 class="text-yellow-400 font-bold text-lg">${game.title}</h2>
        <p class="text-gray-300 text-sm">$${game.price}</p>
        <div class="flex justify-end mt-3">
          <button class="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
            Add to Panier
          </button>
        </div>
      </div>
    `;
  });
}

renderGames(storedGames);
const filterButtons = document.querySelectorAll("#filters div");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.textContent
    if (category === "All") {
      renderGames(storedGames)
    } else {
      const filtred = storedGames.filter((game) => game.category === category)
      renderGames(filtred)
      
    }
  })
})
  




























// searchInput.addEventListener("input", (e) => {
//   const query = e.target.value.toLowerCase();
//   const filtered = storedGames.filter((game) =>
//     game.title.toLowerCase().includes(query),
//   );
//   renderGames(filtered);
// });


// filterButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const category = btn.textContent;
//     if (category === "All") {
//       renderGames(storedGames);
//     } else {
//       const filtered = storedGames.filter((game) => game.category === category);
//       renderGames(filtered);
//     }
//   });
// });
