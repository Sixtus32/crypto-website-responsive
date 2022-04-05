/*=============== SHOW MENU ===============*/
const menu = {
    navBody: document.getElementById('nav-menu'),
    navOpener: document.getElementById('nav-toggle'),
    navClose: document.getElementById('nav-close')
}

                // MENU SHOW
if(menu.navOpener)
{
    menu.navOpener.addEventListener('click', () => {
        menu.navBody.classList.add('show-menu');
    })
}

                // MENU HIDDEN
if(menu.navClose)
{
    menu.navClose.addEventListener('click', ()=> {
        menu.navBody.classList.remove('show-menu');
    })
}


                    //CARD BODY
const article = {
    card : document.querySelectorAll('.home__cards-info'),
    like : document.querySelectorAll('.home__cards-int')
}

function cardRespondShow ()
{
    article.like.forEach(n => n.classList.add('appaer-int'));
}

article.card.forEach(n => n.addEventListener('click', cardRespondShow));


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction()
{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader ()
{
    const header = document.getElementById('header');
    //Cuando se produce el scroll pasa esto:
    this.scrollY >= 50 ? header.classList.add('scroll-header'):header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
/*=============== HOME CARDS SWIPER ===============*/
let swiperHomeCard = new Swiper(".home__cards", { 
    loop: true,
    spaceBetween: 25,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        }, 
        breakpoints: {
        768: 
        {
            slidesPerView: 3,
        },
        1024: 
        {
            spaceBetween: 48,
        },
    },
});


const swiperOption = {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    grabCursor: true,
    autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                },
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            }
};

const swiperAuctionCard = new Swiper(".auction__data", swiperOption);

let swiperPopularCard = new Swiper(".popular__content", { 
    
    loop: true,
    spaceBetween: 21,
    slidesPerView: 'auto',
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
        pagination: {
          el: ".swiper-pagination",
        },
});


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp()
{
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350)
    {
        scrollUp.classList.add('show-scroll');
    }else
    {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]');

function scrollActive()
{
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active-link');
        }else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
