$('.banner-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});


$('.product-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<img class="btnNext-prod" src="../Assets/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-prod" src="../Assets/Pictures/trang-chu/backButton.png" >'
});

$('.related-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<img class="btnNext-prod" src="../Assets/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-prod" src="../Assets/Pictures/trang-chu/backButton.png" >'
});

// detail product slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    swipeToSlide: true,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    nextArrow: '<img class="btnNext-slider" src="../Assets/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-slider" src="../Assets/Pictures/trang-chu/backButton.png" >'
});

exports.caretDown = function() {
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
    }
}