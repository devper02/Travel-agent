import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperTestimonials() {
  const config = {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 0,
    grabCursor: "true",
    a11y: "false",
    freeMode: "ture",
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  };

  const swiper = new Swiper("#testimonials__col-1", config);
  const swiper2 = new Swiper("#testimonials__col-2", config);
  const swiper3 = new Swiper("#testimonials__col-3", config);
}
export default swiperTestimonials;
