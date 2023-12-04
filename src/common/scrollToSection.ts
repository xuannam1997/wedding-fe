const scrollToSection = (event: any) => {
  event.preventDefault();

  const section = document.querySelector(
    '[data-scroll-index="' + event.target.dataset.scrollNav + '"]'
  );

  if (section) {
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
};

export default scrollToSection;
