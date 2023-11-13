import ScrollReveal from "scrollreveal";

function scrollReveal() {
  ScrollReveal({
    distance: "200px",
    duration: 2300,
  });

  ScrollReveal().reveal(".discover__title", {
    origin: "left",
  });

  ScrollReveal().reveal(".discover__text", {
    origin: "right",
  });

  ScrollReveal().reveal(".discover__picture-img", {
    origin: "top",
    duration: 2500,
  });

  ScrollReveal().reveal(".scroll-down", {
    origin: "right",
  });

  ScrollReveal().reveal(".hint-discover", {
    origin: "left",
    distance: "100px",
    duration: 2500,
  });

  // ScrollReveal().reveal(".partners", {
  //   origin: "bottom",
  //   duration: 2700,
  // });

  ScrollReveal().reveal(".popular__title", {
    origin: "left",
    duration: 2500,
  });

  ScrollReveal().reveal(".form", {
    origin: "bottom",
  });

  ScrollReveal().reveal(".subscribe__desc", {
    origin: "left",
  });

  ScrollReveal().reveal(".subscribe__form", {
    origin: "right",
  });
}

export default scrollReveal;
