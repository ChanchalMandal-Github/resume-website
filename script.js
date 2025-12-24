const button = document.getElementById("toggleBtn");
const text = document.getElementById("moreText");

button.addEventListener("click", () => {
  if (text.style.display === "none") {
    text.style.display = "block";
    button.textContent = "Show less";
  } else {
    text.style.display = "none";
    button.textContent = "Show more";
  }
});
