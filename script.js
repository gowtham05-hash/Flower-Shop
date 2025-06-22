const dis=document.getElementById('dis')
const product=document.querySelector('.bor1')
const item=document.getElementById('dis1')
const giftoffer=document.querySelector('.gift')
const item1=document.getElementById('dis2')
const birth=document.getElementById('birth')
const sch=document.getElementById('school')
/*const picture = document.getElementById("flower");*/

let basket = JSON.parse(localStorage.getItem('data')) || [];
let generateShop=()=>{
    dis.innerHTML=shopItemsData.map((x)=>{
        let {id,name,price,rate,img} = x
        return `
            <div class="bor">
                <div class="imge">
                     <a href="product2.html?id=${id}"><img class="porduct-img" src="${img}" alt=""></a>
                    <p class="name">${name}</p>
                    <p class="price">Rs.${price}</p>
                    <p> ${rate} </p>
                    <p class="today">Earliest Delivery: <span>Today</span></p>
                    <button onclick="add_to_cart('${id}','${name}','${price}','${img}')" class="add">Add to Cart</button>
                </div>
            </div>
        `
        }).join("");
};

generateShop();



let productshop=()=>{
    product.innerHTML=Item.map((x)=>{
        let {productImg,name}=x
        return `
        <div class="imge1">
            <img class="product-img1" src="${productImg}" alt="">
            <p class="name1">${name}</p>
        </div>
        `
    }).join("");
};

productshop();

let Shop=()=>{
    item.innerHTML=ItemsData.map((x)=>{
        let {id,name,price,rate,img} = x
        return `
            <div class="bor">
                <div class="imge">
                    <a href="product2.html"><img class="porduct-img" src="${img}" alt=""></a>
                    <p class="name">${name}</p>
                    <p class="price">Rs.${price}</p>
                    <p> ${rate} </p>
                    <button onclick="add_to_cart('${id}','${name}','${price}','${img}')" class="add">Add to Cart</button>
                </div>
            </div>
        `
        }).join("");
};

Shop();

let offer = () => {
    let giftCards = gift.map((x) => {
        let { img, name, price, rate } = x;
        return `
            <div class="bor">
                <div class="imge">
                    <img class="porduct-img"src="${img}" alt="">
                    <p class="name">${name}</p>
                    <p class="price">${price}</p>
                    <p>${rate}<img class="star" src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png" alt=""></p>
                    <button class="add">Add to Cart</button>
                </div>
            </div>
        `;
    }).join("");

    giftoffer.innerHTML = `
        <div class="gift1">
            <p class="amazing-gift">Shop Amazing Gift</p>
            <p class="gift-text">Shop Flowers By Design offers curated floral arrangements tailored to your unique style and occasion. Experience the art of floral design with every bouquet.</p>
            <div class="gift-list">
                <p class="cake">Cakes</p>
                <p class="cho">Chocolates</p>
                <p class="teddy">Teddy Bears</p>
                <p class="fruit">Dry Fruits</p>
                <p class="mith">Mithai</p>
                <p class="plant">Plants</p>
            </div>
            <div class="dis">
                ${giftCards}
            </div>
            <button class="expore">Explore More</button>
        </div>
    `;
};


offer();

let add_to_cart = (id,name,price,img)=>{
    basket.push({
        id:id,
        item:1,
        name:name,
        price:price,
        img:img
    })

    localStorage.setItem('data',JSON.stringify(basket))

    //calculate();
}

/*let calculate = () => {
    let cartCount = document.getElementById('cart-count');
    let totalItems = basket.reduce((sum, item) => sum + item.item, 0);
    cartCount.innerText = totalItems;
};*/
let item2=()=>{
    item.innerHTML=ItemsData1.map((x)=>{
        let {id,name,price,rate,img} = x
        return `
            <div class="bor">
                <div class="imge">
                    <a href="product2.html"><img class="porduct-img" src="${img}" alt=""></a>
                    <p class="name">${name}</p>
                    <p class="price">Rs.${price}</p>
                    <p> ${rate} </p>
                    <button onclick="add_to_cart('${id}','${name}','${price}','${img}')" class="add">Add to Cart</button>
                </div>
            </div>
        `
        }).join("");
};

item2();

let birthshop=()=>{
    birth.innerHTML=birthday.map((x)=>{
        let {productImg,name}=x
        return `
        <div class="bor">
            <div class="image">
                <img class="porduct-img" src="${productImg}" alt="Birthday Gift 1" >
                <p class="birth-text">${name}</p>
            </div>
        </div>
        `
    }).join("");
};

birthshop();

let schoolshop=()=>{
    sch.innerHTML=schoolgift.map((x)=>{
        let {productImg,name}=x
        return `
        <div class="bor">
            <div class="image">
                <img class="porduct-img5" src="${productImg}" alt="Birthday Gift 1" >
                <p class="birth-text1">${name}</p>
            </div>
        </div>
        `
    }).join("");
};

schoolshop();





 



