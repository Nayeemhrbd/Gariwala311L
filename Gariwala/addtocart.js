const product = [
    {
        id: 0,
        image: 'images/a8_2.jpg',
        title: 'Audi A82023',
        price: 12000,
    },
    {
        id: 1,
        image: 'images/a8-3.jpg',
        title: 'Audi A82022',
        price: 6000,
    },
    {
        id: 2,
        image: 'images/i8-1.jpg',
        title: 'BMW i8',
        price: 6000,
    },
    {
        id: 3,
        image: 'images/X3.jpg',
        title: 'BMW x3',
        price: 6000,
    },
    {
        id: 4,
        image: 'images/Volt.jpg',
        title: 'Volt',
        price: 3000,
    },
    {
        id: 5,
        image: 'images/vu-3.jpg',
        title: 'VU_03',
        price: 2000,
    },
    {
        id: 6,
        image: 'images/x3-1.jpg',
        title: 'BMW',
        price: 1500,
    },
    {
        id: 7,
        image: 'images/t-1.jpg',
        title: 'FORD T1',
        price: 3000,
    },
    {
        id: 8,
        image: 'images/Q7.jpg',
        title: 'AUDI Q7',
        price: 2000,
    },
    {
        id: 9,
        image: 'images/mo-1.jpg',
        title: 'MITHSHUBISHI MO1',
        price: 3000,
    },
    {
        id: 10,
        image: 'images/p-1.jpg',
        title: 'Land Cruiser',
        price: 1000,
    },
    {
        id: 11,
        image: 'images/p-4.jpg',
        title: 'Land Cruiser',
        price: 1000,
    },
    {
        id: 12,
        image: 'images/E2.jpg',
        title: 'FORD TITANIUM',
        price: 900,
    },
    {
        id: 13,
        image: 'images/vu-2.jpg',
        title: 'Volt',
        price: 3000,
    },
    {
        id: 14,
        image: 'images/vu-4.jpg',
        title: 'Volt',
        price: 3000,
    },
    {
        id: 15,
        image: 'images/rs7-4.jpg',
        title: 'AUDI',
        price: 5000,
    },
    {
        id: 16,
        image: 'images/s-2.jpg',
        title: 'FORD SRIL',
        price: 2500,
    },
    {
        id: 17,
        image: 'images/t-pic29.jpg',
        title: 'TESLA',
        price: 6000,
    },
    {
        id: 18,
        image: 'images/mo-3.jpg',
        title: 'MITHSHUBISHI',
        price: 1500,
    },
    {
        id: 19,
        image: 'images/mo-4.jpg',
        title: 'MONTERO',
        price: 3000,
    },
    {
        id: 20,
        image: 'images/pic15.jpg',
        title: 'Volt',
        price: 1000,
    }





];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}