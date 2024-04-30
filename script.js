let products = [
  {
    name: "Grey Chair",
    headline: "Soft Cushioned Chair",
    price: "21,000",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wooden Chair",
    headline: "Vintage and Hand Craved",
    price: "19,000",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    name: "Black Chair",
    headline: "Soft and comfortable chair for study",
    price: "11,000",
    image:
      "https://images.unsplash.com/photo-1619596662481-085e45d69762?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
];

let popularProducts = [
  {
    name: "Multi Height Chair",
    headline: "Chair for multi Heighted peoples",
    price: "10,000",
    image:
      "https://plus.unsplash.com/premium_photo-1680799222840-348e4f2170b4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wooden Chair",
    headline: "Vintage and Hand Craved",
    price: "19,000",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    name: "Black Chair",
    headline: "Soft and comfortable chair for study",
    price: "11,000",
    image:
      "https://images.unsplash.com/photo-1619596662481-085e45d69762?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
];

let cart = [];
function addProducts() {
  let clutter = "";
  //Bhai we use a data-value class where we individualise our button to recignise their click differently
  products.forEach((product, index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
          <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
          <img class="w-full h-full object-cover" src="${product.image}">
          </div>
          <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">
              ${product.name}
            </h1>
            <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
              </div>
              <button data-value="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                <i data-value="${index}"  class="add ri-add-line"></i>
              </button>
            </div>
          </div>
        </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts() {
  let clutter = "";
  popularProducts.forEach((product) => {
    clutter += ` <div
            class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
          >
            <div
              class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
            >
              <img
                class="w-full h-full object-cover"
                src="${product.image}"
                alt=""
              />
            </div>
            <div class="data py-2 w-full">
              <h1 class="leading-none font-semibold">${product.name}</h1>
              <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
                ${product.headline}
              </h4>
              <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
            </div>
          </div>`;
  });

  document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
  document.querySelector(".products").addEventListener("click", (details) => {
    /*details.target.classList.contains("add") by this value we can only register that elemnt which have class add inn it bec uase we are using event bubbling
     * eventbubbling means when we put event listemner on the parent class but not on the required class directly
     * now by this we can proceed*/
    if (details.target.classList.contains("add")) {
      cart.push(products[details.target.dataset.value]);
      /**details.target.dataset.index by this value we can take out our index only and send it in prodects value to take out the product with the matching index
       * and push iit into our cart
       */
    }
  });
}

let cartDiv = document.querySelector(".cartexpnd");
function showCart() {
  document.querySelector(".carticon").addEventListener("click", () => {
    cartDiv.style.display = "block";

    let clutter = "";
    cart.forEach((product, index) => {
      clutter += ` <div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg">
                <img class="w-full h-full object-cover" src="${product.image}">
            </div>
            <div>
              <h3 class="font-semibold">${product.name}</h3>
              <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
            </div>
          </div>`;
    });
    cartDiv.innerHTML = clutter;
  });
}

function clickCart() {
  document.querySelector(".carticon").addEventListener("click", () => {
    if (cartDiv.style.display == "block") {
      cartDiv.style.display == "none";
    } else {
      cartDiv.style.display == "block";
    }
  });
}

addToCart();
addProducts();
addPopularProducts();
showCart();
