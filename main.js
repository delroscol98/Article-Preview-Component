const shareBtns = document.querySelectorAll(".share-button");

const toggleShareHandler = () => {
  const authorSection = document.querySelector(".author");
  const shareSection = document.querySelector(".share");

  authorSection.classList.toggle("hidden");
  shareSection.classList.toggle("hidden");
};

shareBtns.forEach((btn) => btn.addEventListener("click", toggleShareHandler));
