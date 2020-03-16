let minPrice = 0;
let maxPrice = 600;
let sortBy = "noSort";
let selectedAreaCheckboxes = [];
let selectedEquipCheckboxes = [];

$(document).ready(function () {

    $(window).on("scroll", function () {
        let height = $(window).scrollTop();
        if (height > 500) {
            $(".header").css({"position": "sticky"});

        } else {
            $(".header").css({"position": "sticky"});
        }
    });

    $('.checkbox').on('click', function () {
        if ( $(this).is(':checked') ) {
            $(".catHouseContentGridLeftAreaButton").addClass("checkFlex")
        } else {

        }
    })

    $('.mobile-menu').on('click', function (e) {
        e.preventDefault();
        $('.menu-btn').toggleClass('menu-active');
        $('.mobile-menu').toggleClass('menu-active');
        $('.mobile-menu__menu-header-wrap').toggleClass('menu-active');
    });

    $("ul").on("click", function () {
        $('.menu-btn').not(this).removeClass('menu-active');
        $('.mobile-menu').not(this).removeClass('menu-active');
        $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

    });

    $("button").on("click", function () {
        $('.menu-btn').not(this).removeClass('menu-active');
        $('.mobile-menu').not(this).removeClass('menu-active');
        $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

    });
    $('#delCatsButton').on("click", clearCheck);
function clearCheck() {
    $(":checkbox:checked").each(function () {
        this.click();
        removeCards();
       showCats();


    });
}

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

    selectedAreaCheckboxes = $('.catHouseContentGridLeftAreaContent input:checkbox:checked').map(function () {
        return this.value;
    }).get();

    selectedEquipCheckboxes = $('.catHouseContentGridLeftEquipContent input:checkbox:checked').map(function () {
        return this.value;
    }).get();

    render();
}


class ModelCat {
    equipNames = [];

    constructor(name, image, price, size, area, equip) {
        this.image = image;
        this.name = name;
        this.size = size;
        this.area = area;
        this.equip = equip;
        this.price = price;
        this.fillEquipNames();
        console.log(this.equipNames);
    }

    fillEquipNames() {
        this.equip.split(">").forEach(element => this.equipNames.push(element.substring(element.indexOf("id=")).substring(4).replace("\"", "")));
        this.equipNames.pop();
    }
}


let cats = [
    new ModelCat('Эконом', 'img/catHouseContentGridRightCardEconom.jpg', 100, '90x70x180', '0.63', '<img src="img/Vector.svg" id="none">'),
    new ModelCat('Эконом плюс', 'img/catHouseContentGridRightCardEconomPlus.jpg', 200, '90x100x180', '0.90', '<img src="img/vector4.png"  id="bed"><img src="img/vector3.png" id="claw">'),
    new ModelCat('Комфорт', 'img/catHouseContentGridRightCardComfort.jpg', 250, '100x125x180', '1.13', '<img src="img/vector4.png"  id="bed"><img src="img/vector3.png" id="claw"><img src="img/vector2.png" id="game">'),
    new ModelCat('Сьют', 'img/catHouseContentGridRightCardSuite.jpg', 350, '125x125x180', '1.56', '<img src="img/vector4.png"  id="bed"><img src="img/vector3.png" id="claw"><img src="img/vector2.png" id=game">'),
    new ModelCat('Люкс', 'img/catHouseContentGridRightCardLuxe.jpg', 50, '160x160x180', '2.56', '<img src="img/vector4.png"  id="bed"><img src="img/vector3.png" id="claw"><img src="img/vector2.png" id="game"><img src="img/vector1.png"id="house">'),
    new ModelCat('Супер-Люкс', 'img/catHouseContentGridRightSuperLuxe.jpg', 600, '180x160x180', '2.88', '<img src="img/vector4.png"  id="bed"><img src="img/vector3.png" id="claw"><img src="img/vector2.png" id="game"><img src="img/vector1.png"id="house">')
];


let templateCat = (a) => `<div class="catCard">
<div class="catCardImg"><img src="${a.image}"></div>
<div class="catCardName">${a.name}</div>
<div class="catCardSize">Размеры (ШхГхВ) - ${a.size}см</div>
<div class="catCardArea">Площадь - ${a.area}м2</div>
<div class="catCardEquip">Оснащение номера ${a.equip}</div>
<div class="catCardPrice">Цена за сутки:<bold>${a.price} Р</bold></div>
  <a href="#"> <button class="catCardButton"><p>Забронировать</p> <img src="img/paw.png" alt="paw"> </button></a>
</div>`;

let filterByPrice = () => {
    return (cat) => cat.price >= minPrice && cat.price <= maxPrice;
};

let filterByArea = () => {
    return (cat) => selectedAreaCheckboxes.length === 0 || selectedAreaCheckboxes.includes(cat.area);
};

let filterByEquip = () => {
    return (cat) => selectedEquipCheckboxes.every(function(element) {
        return cat.equipNames.includes(element);
    })
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

    let htmlCats = cats
        .filter(filterByPrice())
        .filter(filterByArea())
        .filter(filterByEquip())
        .sort(sortFunction)
        .map(cat => templateCat(cat));
    let $catHouseContentGridRightCards = $('.catHouseContentGridRightCards');
    $catHouseContentGridRightCards.empty();
    $catHouseContentGridRightCards.html(htmlCats);
}