var home = document.querySelector('.home');
var products = document.querySelector('.products');
var contact = document.querySelector('.contact');
var eyeshadow = document.querySelector('.eyeshadow');
var lips = document.querySelector('.lips');
var skin = document.querySelector('.skin');
var collection = document.querySelector('.collection');
var shop = document.querySelector('.shop-now');
var single = document.querySelectorAll('.name');
var cart = document.querySelectorAll('.add-to-cart');
var lang = document.querySelector('.language');
var sign = document.querySelector('.sign');



const trans = [
    {
        homeEng: 'HOME',
        homeGeo: 'მთავარი',
        signEng: 'SIGN UP',
        signGeo: 'დარეგისტრირებს',
        productsEng: 'PRODUCTS',
        productsGeo: 'პროდუქტები',
        contactEng: 'CONTACT US',
        contactGeo: 'კონტაქტი',
    },
    {
        shadowEng: 'EYESHADOW',
        shadowGeo: 'თვალის ჩრდილები',
        lipsEng: 'LIPS',
        lipsGeo: 'ტუჩებისთვის',
        skinEng: 'SKIN',
        skinGeo: 'კანისთვის',
    },
    {
        makeupEng: 'Collection',
        makeupGeo: 'კოლექცია',
        shopEng: 'SHOW NOW',
        shopGeo: 'ყიდვა',
    },
    {
        nameEng: 'SINGLE-EYESHADOW',
        nameGeo: 'ჩრდილები',
        cartEng: 'ADD',
        cartGeo: 'დამატება',
    }

];


document.querySelector('.geo').addEventListener('click', function () {
    document.querySelector('.language').textContent = "ენა";
    home.textContent = trans[0].homeGeo;
    sign.textContent = trans[0].signGeo;
    products.textContent = trans[0].productsGeo;
    contact.textContent = trans[0].contactGeo;
    eyeshadow.textContent = trans[1].shadowGeo;
    lips.textContent = trans[1].lipsGeo;
    skin.textContent = trans[1].skinGeo;
    collection.textContent = trans[2].makeupGeo;
    shop.textContent = trans[2].shopGeo;
    for (i = 0; i < single.length; ++i) {
        single[i].textContent = trans[3].nameGeo;
    }
    for (i = 0; i < cart.length; ++i) {
        cart[i].textContent = trans[3].cartGeo;
    }


    document.querySelector('.dropdown-bar-lang').classList.toggle('block');




});




document.querySelector('.eng').addEventListener('click', function () {
    document.querySelector('.language').textContent = "LANG";
    home.textContent = trans[0].homeEng;
    sign.textContent = trans[0].signEng;
    products.textContent = trans[0].productsEng;
    contact.textContent = trans[0].contactEng;
    eyeshadow.textContent = trans[1].shadowEng;
    lips.textContent = trans[1].lipsEng;
    skin.textContent = trans[1].skinEng;
    collection.textContent = trans[2].makeupEng;
    shop.textContent = trans[2].shopEng;
    for (i = 0; i < single.length; ++i) {
        single[i].textContent = trans[3].nameEng;
    }
    for (i = 0; i < cart.length; ++i) {
        cart[i].textContent = trans[3].cartEng;
    }
    document.querySelector('.dropdown-bar-lang').classList.toggle('block');




});


document.querySelector('.eng').addEventListener('click', function () {
    document.querySelector('.language').textContent = "LANG";
    home.textContent = trans[0].homeEng;
    products.textContent = trans[0].productsEng;
    contact.textContent = trans[0].contactEng;
    eyeshadow.textContent = trans[1].shadowEng;
    lips.textContent = trans[1].lipsEng;
    skin.textContent = trans[1].skinEng;
    collection.textContent = trans[2].makeupEng;
    shop.textContent = trans[2].shopEng;
    for (i = 0; i < single.length; ++i) {
        single[i].textContent = trans[3].nameEng;
    }
    for (i = 0; i < cart.length; ++i) {
        cart[i].textContent = trans[3].cartEng;
    }
    document.querySelector('.dropdown-bar-lang').classList.toggle('block');




});


/////////dropdown bar//////////
console.log(products);
products.addEventListener('click', function () {
    document.querySelector('.dropdown-bar').classList.toggle('block');
})
lang.addEventListener('click', function () {
    document.querySelector('.dropdown-bar-lang').classList.toggle('block');
})




















////////slider images///////
const images = ['images/slider1.jpg', 'images/slider2.jpg', 'images/slider3.jpg'];
var counter = 0;
document.querySelector('.slider').src = images[0];
document.querySelector('.back').addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }

    document.querySelector('.slider').classList.toggle('fade');
    document.querySelector('.slider').src = images[counter];
});
document.querySelector('.next').addEventListener('click', function () {
    counter++;
    if (counter > images.length - 1) {
        counter = 0;
    }

    document.querySelector('.slider').classList.toggle('fade');
    document.querySelector('.slider').src = images[counter];


});

