// JavaScript Logic:
const scrollerContainer = document.querySelector(".slide-container-inner");

const carouselContent = Array.from(scrollerContainer.children);

carouselContent.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  scrollerContainer.appendChild(duplicatedItem);
  scrollerContainer.style.animation = "scroll 50s linear infinite";
});
