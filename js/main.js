// const elCarouselBtn = document.querySelectorAll('.js-carousel__btn');
// const elCarouselLine = document.querySelectorAll('.js-carousel__line');

// for (let i = 0; i < elCarouselLine.length; i++) {
//     // for (let k = 0; k < elCarouselLine.length; k++) {
//     //     elCarouselLine[k].classList.remove('carousel__line--show');
//     // }
//     elCarouselBtn[i].addEventListener('click', function() {

//         elCarouselLine[i].classList.add('carousel__line--show');
//     });
// }


// elCarouselBtn.forEach(function (item, index) {
//     item.addEventListener('click', function () {
//         elCarouselLine.classList.add('carousel__line--show');
//         elCarouselLine.classList.add('carousel__line--show');
//     });
// });



const elAccordionBtn = document.querySelectorAll('.js-accordion-btn');
const elAccordionText = document.querySelectorAll('.js-accordion-text');

elAccordionBtn.forEach(function(item, index) {
    item.addEventListener('click', function() {
        elAccordionText[index].classList.toggle('accordion__text--show');
    });
})

// har bir button bosilganda
    // har bir line dan faollikni olib tashlaymiz
    // bosilgan buttondan keyingi elementga show klassini qo'shamiz - .nextElementSiblinh

    
// 1. 3 ta button va har birini tagida chiziq bor.
// 2. Buttonlar click bo'lganda, pastdagi chiziq orqa foni transparentdan orange ranga o'tishi kerak yoki display yo'q  holatdan display bor holatga o'tishi kerak.
// 3. Agar bitta button click bo'lib orqasidan 2-button ham click bo'lsa, birinchi buttondagi backgroundni transparentga o'tkazish kerak.
//     [1] [2] [3]

//     [3] - > arr.length - 1, arr.length - 2
//     [2] - > arr.length - 1, arr.length + 1
//     [1] - > arr.length + 1, arr.length + 2

//     Button indexi bilan carousel indexi teng bo'lsa class qo'shilsin teng bo'lmaganidan classini remove qilib qo'yilsin. 