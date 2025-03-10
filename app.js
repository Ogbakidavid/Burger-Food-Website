const menu = document.querySelector("[data-toggle");
const menuLinks = document.querySelector("[data-menu");

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

menuLinks.addEventListener('click', () => {
    menuLinks.classList.remove('active');
    menu.setAttribute('class', 'nav__toggle');
})

// ========= Swiper JS ==========
let customerSwiper = new Swiper('.customer__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,

    breakpoints: {
        680: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        930: {
            slidesPerView: 3,
            spaceBetween: 4,
        }
    }
})

// ============== Gallery Section ===========
const gallery = document.querySelector('.gallery__card');

const galleryContent = Array.from(gallery.children);

galleryContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    gallery.appendChild(duplicateNode);
})

const sr = ScrollReveal({
    origin: "bottom",
    distance: '80px',
    duration: 1500,
    delay: 600,
});

sr.reveal(`.home__title, .footer__title`, {
    origin: 'left',
});

sr.reveal(`.home__desc`, {
    origin: 'left',
    delay: 1500,
});

sr.reveal(`.home__btn, .copyright`, {
    origin: 'left',
    delay: 2000,
});

sr.reveal(`.about__title, .menu__title, .reservation, .customer__title, .gallery__title, .contact__title`);

sr.reveal(`.about__desc, .customer__swiper, .contact__content`, {
    distance: '100px',
    delay: 1200,
});

sr.reveal(`.about__btn, .input__group`, {
    delay: 1500,
});

sr.reveal(`.about__img, .social__content`, {
    origin: 'right',
    distance: '150px',
    delay: 2000,
});

sr.reveal(`.card, .footer__links`, {
    distance: '120px',
    duration: 1500,
    delay: 1500,
    interval: 300,
});