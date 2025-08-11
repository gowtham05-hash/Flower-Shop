/*let shoppingcart = document.querySelector('.car-item')
let basket = JSON.parse(localStorage.getItem('data')) || []

let calculate = () =>{
    let cartIcon = document.getElementById('cart-count')
    cartIcon.innerHTML=basket.length

}

let generate_Cart_item = () =>{
    if(basket.length !== 0){
        return(shoppingcart.innerHTML= basket.map((x) => {
            let {id,name,price,item,img} = x;

            return `

            <div class="cart-item">
            <hr>
            <div class="cart-detail">
                <img class="cart-img" src="${img}" alt="">
                <div>
                    <p class="cart-title">${name}</p>
                    <img class="rat" src="https://www.pngkey.com/png/full/118-1184489_review-stars-png.png" alt="">
                    <div class="remove">
                        <p class="bought">10K+ bought in past month</p>
                        <button onclick="remove_from_cart(${id})" class="cart-remove">Remove</button>
                    </div>
                    <div class="product-price">
                        <p>-35%</p>
                        <h3>${price}</h3>
                    </div>
                    <input type="number" value="1" class="cart-qty">
                </div>
               
            </div>

        </div>
            `
        }) )

    }
}
generate_Cart_item()
calculate()
let remove_from_cart=(id)=>{
    basket=basket.filter((x)=> x.id != id)
    localStorage.setItem('data',JSON.stringify(basket))
    calculate()
    generate_Cart_item()
}*/

/*let label=document.querySelector('.total-item')
let shoppingcart = document.querySelector('.car-item');
let basket = JSON.parse(localStorage.getItem('data')) || [];

// ✅ Update total quantity count
let calculate = () => {
    let cartIcon = document.getElementById('cart-count');
    let totalItems = basket.reduce((sum, item) => sum + item.item, 0);
    cartIcon.innerText = totalItems;
};

// ✅ Generate cart item elements
let generate_Cart_item = () => {
    if (basket.length !== 0) {
        shoppingcart.innerHTML = basket.map((x) => {
            let { id, name, price, item, img } = x;

            return `
                <div class="cart-item">
                    <hr>
                    <div class="cart-detail">
                        <img class="cart-img" src="${img}" alt="">
                        <div>
                            <p class="cart-title">${name}</p>
                            <img class="rat" src="https://www.pngkey.com/png/full/118-1184489_review-stars-png.png" alt="">
                            <div class="remove">
                                <p class="bought">10K+ bought in past month</p>
                                <button onclick="remove_from_cart('${id}')" class="cart-remove">Remove</button>
                            </div>
                            <div class="product-price">
                                <p>-35%</p>
                                <h3>Rs. ${price}</h3>
                            </div>
                            <input type="number" value="${item}" class="cart-qty" readonly>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        shoppingcart.innerHTML = `<h2>Your cart is empty</h2>`;
    }
};

// ✅ Remove item by ID
let remove_from_cart = (id) => {
    basket = basket.filter((x) => x.id !== id);
    localStorage.setItem('data', JSON.stringify(basket));
    calculate();
    generate_Cart_item();
};

// ✅ Initial calls
generate_Cart_item();
calculate();

let Total_amount = () =>{
    let total_amount=0
    basket.map((item)=>{
        total_amount += item.item * item.price
    })
    label.innerHTML = `
        <div class="total-item">
                <button class="place-order">Place order</button>
                <h3 class="cart-total" >Total</h3>
                <h3 class="cart-total-price">${total_amount}</h3>
        </div>
    `

}
Total_amount()*/

let label = document.querySelector('.total');
let shoppingcart = document.querySelector('.car-item');
let basket = JSON.parse(localStorage.getItem('data')) || [];

// ✅ Update cart icon count
let calculate = () => {
    let cartIcon = document.getElementById('cart-count');
    let totalItems = basket.reduce((sum, item) => sum + item.item, 0);
    cartIcon.innerText = totalItems;
};

// ✅ Generate cart items
let generate_Cart_item = () => {
    if (basket.length !== 0) {
        shoppingcart.innerHTML = basket.map((x) => {
            let { id, name, price, item, img } = x;

            return `
                <div class="cart-item">
                    <hr>
                    <div class="cart-detail">
                        <img class="cart-img" src="${img}" alt="">
                        <div>
                            <p class="cart-title">${name}</p>
                            <img class="rat" src="https://www.pngkey.com/png/full/118-1184489_review-stars-png.png" alt="">
                            <div class="remove">
                                <p class="bought">10K+ bought in past month</p>
                                <button onclick="remove_from_cart('${id}')" class="cart-remove">Remove</button>
                            </div>
                            <div class="product-price">
                                <p>-35%</p>
                                <h3>Rs. ${price}</h3>
                            </div>
                            <input type="number" value="${item}" class="cart-qty" readonly>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        shoppingcart.innerHTML = `<h2>Your cart is empty</h2>`;
        label.innerHTML = ''; // 🧹 Clear total when cart is empty
    }
    Total_amount(); // 💡 Recalculate total every time cart is updated
};

// ✅ Remove item from cart
let remove_from_cart = (id) => {
    basket = basket.filter((x) => x.id !== id);
    localStorage.setItem('data', JSON.stringify(basket));
    calculate();
    generate_Cart_item(); // 🔁 This will also call Total_amount()
};

// ✅ Calculate total price
let Total_amount = () => {
    let total_amount = basket.reduce((acc, item) => acc + item.item * item.price, 0);

    if (basket.length !== 0) {
        label.innerHTML = `
        <hr>
            <div class="total-item">
                <button class="place-order">Place order</button>
                <h3 class="cart-total">Total</h3>
                <h3 class="cart-total-price">Rs. ${total_amount.toFixed(2)}</h3>
            </div>
        `;
    } else {
        label.innerHTML = ''; // Clear if cart is empty
    }
};

// ✅ Initial setup
generate_Cart_item();
calculate();

