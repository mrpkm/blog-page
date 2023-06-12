// ============= navbar==================== 
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

// ===========================scroll=======================

const nav = document.querySelector(".header");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 50) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active")
    }
}


// ========================swiper===================
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },


    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar -----------------------
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
// ======================search===================
let search = document.querySelector(".search");

function searchMeToggle() {
    search.classList.toggle("search-show");
}
function searchremove() {
    search.classList.remove("search-show");
}

        // =======================================

        // let icons = document.querySelector(".swip-icons");

        // function showicontoggle(){
        //     icons.classList.toggle(".swip-iconss");
        // }