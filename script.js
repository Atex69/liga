let minPrice = 0;
let maxPrice = 600;
let sortBy = "noSort";

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


    $('#showCatsButton').on("click", showCats);

    $('#filter').on("change", function() {
        sortBy = $("#filter").val();
        showCats();
    });

    showCats();
});

function showCats() {
    removeCards();
    filter();

    let arrCat = $('#catCheckContainer input:checkbox:checked').map(function () {
        return this.value;
    }).get();
    console.log(arrCat);
}

function removeCards() {
    $("div.catHouseContentGridRightCards").empty()
}

function filter() {
    minPrice = $('.catHouseMinPrice').val();
    if (minPrice === "")
        minPrice = 0;
    maxPrice = $('.catHouseMaxPrice').val();
    if (maxPrice === "")
        maxPrice = 600;
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
    new ModelCat('Эконом', 'img/catHouseContentGridRightCardEconom.jpg', 100, '9070180', '0.63', '<img src="img/Vector.svg">'),
    new ModelCat('Эконом плюс', 'img/catHouseContentGridRightCardEconomPlus.jpg', 200, '90100180', '0.90', '<img src="img/vector4.png"><img src="img/vector3.png">'),
    new ModelCat('Комфорт', 'img/catHouseContentGridRightCardComfort.jpg', 250, '100125180', '1.13', '<img src="img/vector4.png"><img src="img/vector3.png"><img src="img/vector2.png">'),
    new ModelCat('Сьют', 'img/catHouseContentGridRightCardSuite.jpg', 350, '125125180', '1.56', '<img src="img/vector4.png"><img src="img/vector3.png"><img src="img/vector2.png">'),
    new ModelCat('Люкс', 'img/catHouseContentGridRightCardLuxe.jpg', 50, '160160180', '2.56', '<img src="img/vector4.png"><img src="img/vector3.png"><img src="img/vector2.png"><img src="img/vector1.png">'),
    new ModelCat('Супер-Люкс', 'img/catHouseContentGridRightSuperLuxe.jpg', 600, '180160180', '2.88', '<img src="img/vector4.png"><img src="img/vector3.png"><img src="img/vector2.png"><img src="img/vector1.png">')
];


let templateCat = (a) => `<div class="catCard">
<div class="catCardImg"><img src="${a.image}"></div>
<div class="catCardName">${a.name}</div>
<div class="catCardSize">Размеры (ШхГхВ) - ${a.size}см</div>
<div class="catCardArea">Площадь - ${a.area}м2</div>
<div class="catCardEquip">Оснащение номера ${a.equip}</div>
<div class="catCardPrice">Цена за сутки:<bold>${a.price}</bold></div>
  <a href="#"> <button class="catCardButton"><p>Забронировать</p> <img src="img/paw.png" alt="paw"> </button></a>
</div>`;

let filterByPrice = (minPrice, maxPrice) => {
    return (cat) => cat.price >= minPrice && cat.price <= maxPrice;
};

let sortByAreaUp = function (a, b) {
    if (a.area > b.area) {
        return 1;
    }
    if (a.area < b.area) {
        return -1;
    }

    return 0;
};

let sortByAreaDown = function (a, b) {
    if (a.area < b.area) {
        return 1;
    }
    if (a.area > b.area) {
        return -1;
    }


    return 0;
};

let sortByPriceUp = function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }

    return 0;
};


let sortByPriceDown = function (a, b) {
    if (a.price < b.price) {
        return 1;
    }
    if (a.price > b.price) {
        return -1;
    }

    return 0;
};

function render() {
    let sortFunction;
    if (sortBy === 'areasUp') {
        sortFunction = sortByAreaUp;
    } else if (sortBy === 'areasDown') {
        sortFunction = sortByAreaDown;
    } else if (sortBy === 'priceUp') {
        sortFunction = sortByPriceUp;
    } else if (sortBy === 'priceDown') {
        sortFunction = sortByPriceDown;
    }

    console.log(sortBy);

    let htmlCats = cats
        .filter(filterByPrice(minPrice, maxPrice))
        .sort(sortFunction)
        .map(cat => templateCat(cat));
    let $catHouseContentGridRightCards = $('.catHouseContentGridRightCards');
    $catHouseContentGridRightCards.empty();
    $catHouseContentGridRightCards.html(htmlCats);
}