$(document).ready(function() {


    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 500) {
            $(".header").css({"position": "fixed"});

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