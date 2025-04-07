document.getElementById("search-button").addEventListener("click", function () {
  const input = document.getElementById("search-input").value;
  const resultDiv = document.getElementById("search-result");
  if (input.trim() !== "") {
    resultDiv.textContent = `Você buscou por: '${input}'`;
  } else {
    resultDiv.textContent = "";
  }
});

// Função para rolar o carrossel
function scrollCarousel(direction) {
  const track = document.getElementById("carousel-track");
  const scrollAmount = 200;
  track.scrollBy({
    left: scrollAmount * direction,
    behavior: "smooth"
  });
}

