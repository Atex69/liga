$(document).ready(function () {


    $(window).scroll(function () {
        let height = $(window).scrollTop();
        if (height > 500) {
            $(".header").css({"position": "sticky"});

        } else {
            $(".header").css({"position": "sticky"});
        }
    });


    $('.mobile-menu').on('click', function (e) {
        e.preventDefault();
        $('.menu-btn').toggleClass('menu-active');
        $('.mobile-menu').toggleClass('menu-active');
        $('.mobile-menu__menu-header-wrap').toggleClass('menu-active');
    });
    $("ul").click(function () {
        $('.menu-btn').not(this).removeClass('menu-active');
        $('.mobile-menu').not(this).removeClass('menu-active');
        $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

    });
    $("button").click(function () {
        $('.menu-btn').not(this).removeClass('menu-active');
        $('.mobile-menu').not(this).removeClass('menu-active');
        $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

    });

    function mySort() {

        $('#CatCards.catHouseContentGridRightCards div.catCard[data-price]').sort(function (a, b) {
            return parseInt($(a).attr('data-price'), 10) < parseInt($(b).attr('data-price'), 10) ? -1 : 1;
        }).appendTo('div#CatCards.catHouseContentGridRightCards');
    }

    mySort()

});



$('#showCatsButton').click(function () {
    removeCards();
    filter();

    let arrCat=$('#catCheckContainer input:checkbox:checked').map(function() {return this.value;}).get();
    console.log(arrCat);
});

function removeCards() {
    $("div.catHouseContentGridRightCards").empty()
}

function filter() {
    let minPrice = $('.catHouseMinPrice').val();
    let area1  = $('#area1');
    let area2  = $('#area2');
    let area3  = $('#area3');
    let area4  = $('#area4');
    let area5  = $('#area5');
    let area6  = $('#area6');
    let maxPrice = $('.catHouseMaxPrice').val();
    render(minPrice, maxPrice,  'area');
}


class ModelCat {

    constructor(name, image, price, size, area, equip) {
        this.image = image;
        this.name = name;
        this.size = size;
        this.area = area;
        this.equip = equip;
        this.price = price;
    }
}


let cats = [
    new ModelCat('Эконом', 'img/catHouseContentGridRightCardEconom.jpg', 100, '9070180', '0.63', '<img src="img/vector.svg">'),
    new ModelCat('Эконом плюс', 'img/catHouseContentGridRightCardEconomPlus.jpg', 200, '90100180', '0.90', '<img src="img/vector4.png"><img src="img/vector3.png">'),
    new ModelCat('Комфорт', 'img/catHouseContentGridRightCardComfort.jpg', 250, '100125180', '1.13', '<img src="img/vector4.png"><img src="img/vector3.png"><img src="img/vector2.png">'),
    new ModelCat('Сьют', 'img/catHouseContentGridRightCardSuite.jpg', 350, '125125180', '1.56', '<img src="img/vector4.png"><img src="img/vector3.png"><img src="img/vector2.png">'),
    new ModelCat('Люкс', 'img/catHouseContentGridRightCardLuxe.jpg', 50, '160160180', '2.56', '<img src="img/vector4.png"><img src="img/vector3.png"><img src="img/vector2.png"><img src="img/vector1.png">'),
    new ModelCat('Супер-Люкс', 'img/catHouseContentGridRightSuperLuxe.jpg', 600, '180160180', '2.88', '<img src="img/vector4.png"><img src="img/vector3.png"><img src="img/vector2.png"><img src="img/vector1.png">')
];


let templateCat = (a) => `<div>
<div class="catCardImg"><img src="${a.image}"></div>
<div class="catCardName">${a.name}</div>
<div class="catCardSize">Размеры (ШхГхВ) - ${a.size}см</div>
<div class="catCardArea">Площадь - ${a.area}м2</div>
<div class="catCardEquip">Оснащение номера ${a.equip}</div>
<div class="catCardPrice">Цена за сутки:<bold>${a.price}</bold></div>
  <a href="#"> <button class="catCardButton"><p>Забронировать</p> <img src="img/paw.png"> </button></a>
</div>`;

let filterByPrice = (minPrice, maxPrice) => {
    return (cat) => cat.price >= minPrice && cat.price <= maxPrice;
};

 let filterBycheckArea1 = (area1) => {
     return (cat) => area1 && cat.area === '0.63';
 };

 let filterBycheckArea2 = (area2) => {
     return (cat) => area2 && cat.area === '0.90';
 };

 let filterBycheckArea3 = (area3) => {
     return (cat) => area3 && cat.area === '1.13';
 };

 let filterBycheckArea4 = (area4) => {
     return (cat) => area4 && cat.area === '1.56';
 };

 let filterBycheckArea5 = (area5) => {
     return (cat) => area5 && cat.area === '2.56';
 };

 let filterBycheckArea6 = (area6) => {
     return (cat) => area6 && cat.area === '2.88';
 };



let catSelect;
document.getElementById('filter').value= catSelect;

if (catSelect == 'areasUp'){

}

let sortByAreaUp = function (a, b) {
    if (a.area > b.area) {
        return 1;
    }
    if (a.area < b.area) {
        return -1;
    }

    return 0;
};

if (catSelect == 'areasDown'){

}

let sortByAreaDown = function (a, b) {
    if (a.area < b.area) {
        return 1;
    }
    if (a.area > b.area) {
        return -1;
    }


    return 0;
};

if (catSelect == 'priceUp'){

}

let sortByPriceUp = function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }

    return 0;
};

if (catSelect == 'priceDown'){

}


let sortByPriceDown = function (a, b) {
    if (a.price < b.price) {
        return 1;
    }
    if (a.price > b.price) {
        return -1;
    }


    return 0;
};

let render = (minPrice = 0, maxPrice = 9999, sortby) => {
    let checkbox1 = true;

    let sortFunction;
    if (sortby === 'area') {
        sortFunction = sortByAreaUp;
    } else  if (sortby === 'area') {
        sortFunction = sortByAreaDown;
    } else  if (sortby === 'price') {
        sortFunction = sortByPriceUp;
    }else  if (sortby === 'price') {
        sortFunction = sortByPriceDown;
    }

    let htmlCats = cats
        .filter(filterByPrice(minPrice, maxPrice))

        .sort(sortFunction)
        .map(cat => templateCat(cat));
    let $catHouseContentGridRightCards = $('.catHouseContentGridRightCards');
    $catHouseContentGridRightCards.empty();
    $catHouseContentGridRightCards.html(htmlCats)
};