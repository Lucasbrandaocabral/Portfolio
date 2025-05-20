document.addEventListener("DOMContentLoaded", function () {
  // ========== SCROLL SUAVE ==========
  const scrollMap = [
    { trigger: ".home-rolar-para-home", target: ".home" },
    { trigger: ".home-rolar-para-sobre-mim", target: ".sobre-mim" },
    { trigger: ".home-rolar-para-skills", target: ".skills" },
    { trigger: ".home-rolar-para-carreira", target: ".carreira-container" },
    { trigger: ".home-rolar-para-projetos", target: ".titolo-portfolio" },
    { trigger: ".home-rolar-para-contato", target: ".contato" },
    { trigger: ".footer-scroll-sobre-mim", target: ".sobre-mim" },
    { trigger: ".footer-scroll-carreira", target: ".carreira-container" },
    { trigger: ".footer-scroll-Projetos", target: ".titolo-portfolio" },
    { trigger: ".Rolar-para-baixo", target: ".sobre-mim" },
  ];

  scrollMap.forEach(({ trigger, target }) => {
    document.querySelector(trigger)?.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ========== ACCORDION ==========
  document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".accordion-body").forEach((body) => {
        if (body !== this.nextElementSibling) {
          body.style.maxHeight = null;
          body.classList.remove("active");
          body.previousElementSibling.classList.remove("active");
        }
      });

      const accordionBody = this.nextElementSibling;

      if (!accordionBody.classList.contains("active")) {
        accordionBody.classList.add("active");
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        this.classList.add("active");
      } else {
        accordionBody.classList.remove("active");
        accordionBody.style.maxHeight = null;
        this.classList.remove("active");
      }
    });
  });

  // Abre automaticamente o primeiro accordion
  const firstAccordionHeader = document.querySelector(".accordion .accordion-header");
  const firstAccordionBody = firstAccordionHeader?.nextElementSibling;
  if (firstAccordionHeader && firstAccordionBody) {
    firstAccordionHeader.classList.add("active");
    firstAccordionBody.classList.add("active");
    firstAccordionBody.style.maxHeight = firstAccordionBody.scrollHeight + "px";
  }

  // ========== SLIDER ==========
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".nav.left");
  const nextBtn = document.querySelector(".nav.right");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "flex";
        setTimeout(() => slide.classList.add("active"), 10);
      } else {
        slide.classList.remove("active");
        slide.style.display = "none";
      }
      if (dots[i]) dots[i].classList.toggle("active", i === index);
    });
  }

  if (slides.length > 0 && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });

    showSlide(currentIndex);
  }
});