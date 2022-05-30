// -------------------------CAROUSEL VARIABLE-------------------------
const elCarouselBtn = document.querySelectorAll('.js-carousel__btn');
const elCarouselLine = document.querySelectorAll('.js-carousel__line');
// CAROUSEL CHANGE
const elCtaClick = document.getElementById('#cta-click');
const elCtaSearch = document.getElementById('#cta-search');
const elCtaShare = document.getElementById('#cta-share');
const elCta = document.querySelectorAll('.cta');

// SHOW CAROUSEL LINE
elCarouselBtn.forEach(function(item, index) {
    item.addEventListener('click', function() {
        elCarouselLine.forEach(function(item) {
            item.classList.remove('carousel__line--show');
        });

        elCarouselLine[index].classList.add('carousel__line--show');
        elCta.forEach(function(item, index) {
            item.classList.add('cta--hide');
        });
        elCta[index].classList.remove('cta--hide');
    });
});



// -------------------------ACCORDION VARIABLE-------------------------
const elAccordionBtn = document.querySelectorAll('.js-accordion-btn');
const elAccordionText = document.querySelectorAll('.js-accordion-text-wrapper');
const elAccordionIcon = document.querySelectorAll('.js-accordion-icon')

// SHOW ACCORDION TEXT
elAccordionBtn.forEach(function(item, index) {
    item.addEventListener('click', function() {
        elAccordionText.forEach(function (item){
            item.classList.remove('accordion__text-wrapper--show');
        });
        
        elAccordionText[index].classList.toggle('accordion__text-wrapper--show');
        elAccordionIcon[index].classList.toggle('accordion__icon--rotate');
    });
});