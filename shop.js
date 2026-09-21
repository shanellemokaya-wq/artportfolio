const shopProducts = [
    {id: "more-than-enough",
    title: "More than Enough", 
    image: 'images/pomegranate.jpg',
    ratio:"4:5",
    collection:"oil"
    },
    {id:"beauty-in-chaos",
    title: "Beauty in Chaos",
    image: 'images/flowers.jpg',
    ratio:"5:8",
    collection:"oil"
    },
    {id: "built-and-broken",
        title: "Built and Broken",
    image: 'images/decay.jpg',
    ratio:"9:10",
    collection:"oil"
    },
{id:"sikiliza",
    title: "Sikiliza",
    image: 'images/jazz.jpg',
    ratio:"4:5",
collection: "oil"},
    {id: "soulful-catharsis",
        title: "Soulful Catharsis",
    image: 'images/flames.jpg',
    ratio:"3:4",
collection:"oil"},


    {id: "held-too-close",
        title: "Held too Close",
        image: "images/laceflowers.jpg",
        ratio: "A3",
        collection:"gouache"
    },

    {id:"resonance",
        title: "Resonance",
        image: "images/resonance.jpg",
        ratio: "A3",
        collection:"gouache"
    },

    {id:"what-the-water-remembers",
        title: "What the Water Remembers",
        image: "images/flow.jpg",
        ratio: "5:6",
        collection:"oil"
    },

    {id: "red-between-the-lines",
        title: "Red Between the Lines",
        image: "images/betweenusboth.jpg",
        ratio: "diptych",
        collection: "diptych"
    }


];
const priceFamilies = {

    oil: {
        paper: {
            small: 35,
            medium: 55,
            large: 85
        },
        canvas: {
            small: 55,
            medium: 90,
            large: 135
        }
    },

    gouache: {
        paper: {
            small: 30,
            medium: 50,
            large: 75
        },
        canvas: {
            small: 50,
            medium: 80,
            large: 120
        }
    },

    diptych: {
        canvas: {
            small: 75,
            medium: 115,
            large: 165
        }
    }

};
const sizeFamilies = {"4:5" : {
    paper: {
        small: "20 x 25 cm",    
        medium: "40 x 50 cm",
        large: "60 x 75 cm"
    },
   canvas: {
            small: "20 × 25 cm",
            medium: "40 × 50 cm",
            large: "60 × 75 cm"
        }
    },

    "5:8": {
        paper: {
            small: "20 × 30 cm",
            medium: "30 × 45 cm",
            large: "50 × 75 cm"
        },
        canvas: {
            small: "20 × 30 cm",
            medium: "30 × 45 cm",
            large: "50 × 75 cm"
        }
    },

    "9:10": {
        paper: {
            small: "25 × 25 cm",
            medium: "40 × 40 cm",
            large: "60 × 60 cm"
        },
        canvas: {
            small: "25 × 25 cm",
            medium: "40 × 40 cm",
            large: "60 × 60 cm"
        }
    },

    "3:4": {
        paper: {
            small: "30 × 40 cm",
            medium: "45 × 60 cm",
            large: "60 × 80 cm"
        },
        canvas: {
            small: "30 × 40 cm",
            medium: "45 × 60 cm",
            large: "60 × 80 cm"
        }
    },

    "A3": {
        paper: {
            small: "21 × 29.7 cm",
            medium: "29.7 × 42 cm",
            large: "59.4 × 84.1 cm"
        },
        canvas: {
            small: "20 × 30 cm",
            medium: "30 × 45 cm",
            large: "50 × 75 cm"
        }
    },
    "5:6" : {
        paper: {small: "20 × 25 cm",
        medium: "40 × 50 cm",
        large: "60 × 75 cm"
    },

    canvas: {
        small: "20 × 25 cm",
        medium: "40 × 50 cm",
        large: "60 × 75 cm"
    }
},

"diptych": {
    canvas: {
        small: "2 × 40 × 30 cm",
        medium: "2 × 60 × 45 cm",
        large: "2 × 80 × 60 cm"
    }
}
};
        
const shopGrid = document.querySelector(".shop-container");
let currentProduct = null;

const cart= [];
const cartCount = document.querySelector('.cart-count');
const addToCartButton = document.querySelector(".add-to-cart");
const cartLink = document.querySelector(".cart-link");
const cartDrawer = document.querySelector(".cart-drawer");
const cartClose = document.querySelector(".cart-close");
const shippingCountry = document.querySelector("#shipping-country");
const checkoutButton = document.querySelector(".checkout-button");
cartLink.addEventListener("click", function (event) {
    event.preventDefault();

    const shopViewer = document.querySelector(".shop-viewer");

    shopViewer.classList.remove("open");
    cartDrawer.classList.add("open");
});

cartClose.addEventListener("click", function () {
    cartDrawer.classList.remove("open");
});


if (shopGrid) {

    shopProducts.forEach(function (product) {

        const shopItem = document.createElement("article");

        shopItem.classList.add("shop-item");
        const startingPrice =
    priceFamilies[product.collection].paper?.small
    ?? priceFamilies[product.collection].canvas.small;

        shopItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p class="shop-price">From £${startingPrice}</p>
        `;

        shopGrid.appendChild(shopItem);
        shopItem.addEventListener("click", function () {
            currentProduct = product;
            if (currentProduct.ratio !== "diptych") {

    formatSelect.innerHTML = `
        <option value="paper">Fine Art Paper</option>
        <option value="canvas">Canvas</option>
    `;

    formatDescription.textContent =
        "310gsm lightly textured fine art paper, printed with archival pigment inks.";
}
           
            const shopViewer = document.querySelector(".shop-viewer");
            const viewerImage = document.querySelector(".shop-viewer-image img");
            const viewerTitle = document.querySelector(".shop-viewer-title");

            viewerImage.src = product.image;
            viewerImage.alt = product.title;
            viewerTitle.textContent = product.title;

            shopViewer.classList.add("open");
            updateSizes();
            updatePrice();
        });

    });
 const shopViewer = document.querySelector(".shop-viewer");
    const closeShopViewer = document.querySelector(".shop-viewer-close");

    closeShopViewer.addEventListener("click", function () {
        shopViewer.classList.remove("open");
    });
}
function updateSizes() {

    if (!currentProduct) {
        return;
    }

    if (currentProduct.ratio === "diptych") {

        formatSelect.innerHTML = `
            <option value="canvas">Double Panel Canvas</option>
        `;

        formatDescription.textContent =
            "A two-panel canvas set, preserving the original diptych format.";

        const diptychSizes = sizeFamilies["diptych"].canvas;

        sizeSelect.innerHTML = `
            <option value="small">
                Small — ${diptychSizes.small}
            </option>

            <option value="medium">
                Medium — ${diptychSizes.medium}
            </option>

            <option value="large">
                Large — ${diptychSizes.large}
            </option>
        `;

        return;
    }


    

   
    const ratioSizes = sizeFamilies[currentProduct.ratio];
    const selectedFormat = formatSelect.value;
    const availableSizes = ratioSizes[selectedFormat];


    sizeSelect.innerHTML = `
        <option value="small">
            Small — ${availableSizes.small}
        </option>

        <option value="medium">
            Medium — ${availableSizes.medium}
        </option>

        <option value="large">
            Large — ${availableSizes.large}
        </option>
    `;
}
function updatePrice() {

    if (!currentProduct) {
        return;
    }

    const selectedFormat = formatSelect.value;
    const selectedSize = sizeSelect.value;

    const productPrices = priceFamilies[currentProduct.collection];
    const formatPrices = productPrices[selectedFormat];
    const price = formatPrices[selectedSize];

    const priceDisplay = document.querySelector(".shop-viewer-price");

    priceDisplay.textContent = "£" + price;
}



const formatSelect = document.querySelector("#shop-format")
const formatDescription = document.querySelector(".format-description");
const sizeSelect = document.querySelector("#shop-size");
formatSelect.addEventListener("change", function (){
     if (formatSelect.value === "paper") {
formatDescription.textContent =
            "310gsm lightly textured fine art paper, printed with archival pigment inks.";

      
    } else if (formatSelect.value === "canvas") {

        formatDescription.textContent =
            "Fine art canvas, stretched and ready to hang.";

    }
updateSizes();
updatePrice();
});
sizeSelect.addEventListener("change", function () {
    updatePrice();
});


addToCartButton.addEventListener("click", function () {

    if (!currentProduct) {
        return;
    }

    const selectedFormat = formatSelect.value;
    const selectedSize = sizeSelect.value;

    const productPrices = priceFamilies[currentProduct.collection];
    const price = productPrices[selectedFormat][selectedSize];

    const dimensions =
        sizeFamilies[currentProduct.ratio]?.[selectedFormat]?.[selectedSize];

    const cartItem = {
        id: currentProduct.id,
        title: currentProduct.title,
        image: currentProduct.image,
        format: selectedFormat,
        size: selectedSize,
        dimensions: dimensions,
        price: price
    };

    cart.push(cartItem);

    cartCount.textContent = cart.length;

    renderCart();

    const shopViewer = document.querySelector(".shop-viewer");

    shopViewer.classList.remove("open");
    cartDrawer.classList.add("open");

    console.log(cart);
});


const cartItems = document.querySelector(".cart-items");
const cartSubtotal = document.querySelector(".cart-subtotal");


function renderCart() {

    cartItems.innerHTML = "";
    if (cart.length === 0) {

    cartItems.innerHTML = `
        <p class="empty-cart">Your cart is empty.</p>
    `;

    cartSubtotal.textContent = "Subtotal £0";

    return;
}

    let subtotal = 0;

    cart.forEach(function (item, index) {

        subtotal = subtotal + item.price;

        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");

        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">

            <div class="cart-item-info">

                <h3>${item.title}</h3>

                <p>
                    ${item.format === "paper" ? "Fine Art Paper" : "Canvas"}
                </p>

                <p>
                    ${item.size} — ${item.dimensions}
                </p>

                <p>£${item.price}</p>

                <button class="remove-item" data-index="${index}">
                    Remove
                </button>

            </div>
        `;

        cartItems.appendChild(cartItemElement);
    });

    cartSubtotal.textContent = "Subtotal £" + subtotal;
    const removeButtons = document.querySelectorAll(".remove-item");

removeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const index = button.dataset.index;

        cart.splice(index, 1);

        cartCount.textContent = cart.length;

        renderCart();
    });

});
}
renderCart();

checkoutButton.addEventListener("click", async function () {

    if (!shippingCountry.value) {
        alert("Please select your shipping country.");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const checkoutItems = cart.map(function (item) {
        return {
            id: item.id,
            format: item.format,
            size: item.size
        };
    });

    checkoutButton.disabled = true;
    checkoutButton.textContent = "Opening checkout...";

    try {

        const response = await fetch(
            "https://shanelleshopcheckout.shanellemokaya.workers.dev/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    items: checkoutItems,
                    country: shippingCountry.value
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error(data);
            alert("Something went wrong opening checkout.");
            return;
        }

        if (data.url) {
            window.location.href = data.url;
        }

    } catch (error) {

        console.error("Checkout error:", error);
        alert("Something went wrong opening checkout.");

    } finally {

        checkoutButton.disabled = false;
        checkoutButton.textContent = "Checkout";

    }

});
const checkoutParams = new URLSearchParams(window.location.search);
const checkoutStatus = checkoutParams.get("checkout");

if (checkoutStatus === "success") {
    cart = [];
    renderCart();

    alert("Thank you! Your order has been received.");
}

if (checkoutStatus === "cancelled") {
    alert("Checkout cancelled. Your cart is still here.");
}