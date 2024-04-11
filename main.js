const shareBtns = document.querySelectorAll(".share-button");

const toggleShareHandler = () => {
  const shareSection = document.querySelector(".share");

  shareSection.classList.toggle("hidden");
};

shareBtns.forEach((btn) => btn.addEventListener("click", toggleShareHandler));
