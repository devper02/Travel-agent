import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperPopular() {
  const swiper = new Swiper("#swiperPopular", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: "#sliderNext",
      prevEl: "#sliderPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 5,
      },
      375: {
        slidesPerView: "auto",
        spaceBetween: 7,
      },
      425: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      640: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
  });
}
export default swiperPopular;
