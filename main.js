const bannerText = document.querySelector(".banner-text-content");

let title = "Удаление папилом";
let paragraph = "оплати единоразово 7 процедур — получи скидку ";
let discount = "50%";

function renderBannerText(title, paragraph, discount) {
    bannerText.innerHTML = `<h1>${title}</h1>
    <p class="banner-text">${paragraph}<span>${discount}</span></p>`
}
renderBannerText(title, paragraph, discount);

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".menu-banner-slider");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function positionSlide(n) {
    showSlides(slideIndex = n);
}