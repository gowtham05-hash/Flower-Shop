const dis=document.getElementById('dis')
const product=document.querySelector('.bor1')
const item=document.getElementById('dis1')
const giftoffer=document.querySelector('.gift')
const item1=document.getElementById('dis2')
const birth=document.getElementById('birth')
const sch=document.getElementById('school')
const flow=document.getElementById('flower')

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
let generateflower=()=>{
    flow.innerHTML=flowerdata.map((x)=>{
        let {name,price,img} = x
        return `
    <div class="flower">
        <div class="flower-img">
            <img src="${img}" alt="">
        </div>
        <div>
        <h2 class="flower-name">${name}</h2>
      <p class="price">₹${price}</p>
      <p class="desc">A stunning bouquet of red roses perfect for any occasion. Comes with free same-day delivery.</p>
      <p class="rating">⭐ 4.6 | Earliest Delivery: Today</p>
      <button class="cart-btn">Add to Cart</button>
        </div>
    </div>
        `
        }).join("");
};

generateflower();

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
                    <img class="porduct-img" src="${img}" alt="">
                    <p class="name">${name}</p>
                    <p class="price">${price}</p>
                    <p>${rate}<img class="star" src="NEW_VALID_IMAGE_URL" alt=""></p>
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



offer ();

let add_to_cart = (id,name,price,img)=>{
    basket.push({
        id:id,
        item:1,
        name:name,
        price:price,
        img:img
    })

    localStorage.setItem('data',JSON.stringify(basket))

}


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



