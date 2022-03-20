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
// const article = {
//     card : document.querySelectorAll('card-list'),
//     like : document.querySelectorAll('cards-interaction')
// }

// if (article.card)
// {
//     article.card.forEach.addEventListener('click', () =>{
//         article.like.forEach.classList.add('appaer-int');
//     })
// }

// if(article.like)
// {
//     article.like.forEach.getElementById('cards-interaction').addEventListener('click', ()=> {
//         article.like.classList.remove('appaer-int');
//     })
// }

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== POPULAR SWIPER ===============*/


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
