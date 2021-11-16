import $ from "jquery";
import "slick-carousel";

$(".slider__content").slick({
	prevArrow: '<button class="slider-arrow"><img src="./assets/images/arrow-prev.png" alt="" class="slider-prev"></button>',
	nextArrow: '<button class="slider-arrow next"><img src="./assets/images/arrow-prev.png" alt="" class="slider-prev"></button>',
});
const img = document.querySelector('.cls-1')
console.log(img);