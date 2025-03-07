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

// const banner = document.querySelector(".banner__wrapper");

// const bannerContent = Array.from(banner.children)

// bannerContent.forEach((item) => {
//     const duplicateNode = item.cloneNode(true);
//     duplicateNode.setAttribute("aria-hidden", true);
//     banner.appendChild(duplicateNode);
// })