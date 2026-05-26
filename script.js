let currentCard = 0;
const cards = document.querySelectorAll(".card");

function showCard(index) {
  cards[currentCard].classList.remove("active");
  currentCard = index;
  cards[currentCard].classList.add("active");
}

function nextCard() {
  if (currentCard < cards.length - 1) {
    showCard(currentCard + 1);
  }
}

function prevCard() {
  if (currentCard > 0) {
    showCard(currentCard - 1);
  }
}

function showSurprise() {
  document.getElementById("surprise").style.display = "block";
  document.getElementById("restartBtn").style.display = "inline-block";
}

function restart() {
  cards[currentCard].classList.remove("active");
  currentCard = 0;
  cards[currentCard].classList.add("active");

  document.getElementById("surprise").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";
}

function startJourney() {
  const music = document.getElementById("bgMusic");

  if (music) {
    music.volume = 0.25;
    music.play().catch(error => {
      console.log("Audio did not play:", error);
    });
  }

  nextCard();
}
