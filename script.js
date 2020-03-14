$(document).ready(function() {


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


//
// document.querySelector('#areaUp').onClick = mySort;
//
// function mySort(){
//     let nav = document.querySelector('.catHouseContentGridRightCards');
//     for (let i = 0; i < nav.children.length; i++){
//         for (let j = i; j < nav.children.length; j++){
//             if (+nav.children[i].getAttribute('data-area') > +nav.children[j].getAttribute('data-area')){
//                 replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
//                 insertAfter(replaceNode,nav.children[i])
//             }
//         }
//     }
// }
//
//
// function insertAfter(elem, refElem) {
//     return redElem.parentNode.insertBefore(elem, refElem.nextSibling);
// }

    function mySort() {

        $('#CatCards.catHouseContentGridRightCards div.catCard[data-price]').sort(function (a, b) {
            return parseInt($(a).attr('data-price'), 10) < parseInt($(b).attr('data-price'), 10) ? -1 : 1;
        }).appendTo('div#CatCards.catHouseContentGridRightCards');
    }

    mySort()

});

$('#bench1').click(function(){
    if ($(this).is(':checked')){
        $('.catHouseContentGridRightCardEconom ').show(100);
    } else {
        $('.catHouseContentGridRightCardEconom').hide(100);
    }
});

$('#bench2').click(function(){
    if ($(this).is(':checked')){
        $('.catHouseContentGridRightCardEconomPlus ').show(100);
    } else {
        $('.catHouseContentGridRightCardEconomPlus').hide(100);
    }
});

$('#bench3').click(function(){
    if ($(this).is(':checked')){
        $('.catHouseContentGridRightCardComfort ').show(100);
    } else {
        $('.catHouseContentGridRightCardComfort').hide(100);
    }
});

$('#bench4').click(function(){
    if ($(this).is(':checked')){
        $('.catHouseContentGridRightCardSuite ').show(100);
    } else {
        $('.catHouseContentGridRightCardSuite').hide(100);
    }
});

$('#bench5').click(function(){
    if ($(this).is(':checked')){
        $('.catHouseContentGridRightCardLuxe ').show(100);
    } else {
        $('.catHouseContentGridRightCardLuxe').hide(100);
    }
});

$('#bench6').click(function(){
    if ($(this).is(':checked')){
        $('.catHouseContentGridRightCard ').show(100);
    } else {
        $('.catHouseContentGridRightCardEconom').hide(100);
    }
});


$('#showCatsButton').click(function(){
    removeCards();
    // addCards();
    // filter();
}

function removeCards(){


    $("div.catHouseContentGridRightCards").empty()
}

function addCards(){
}


function filter(){


let minPrice= $('.catHouseMinPrice').val();
let maxPrice= $('.catHouseMaxPrice').val();
}

