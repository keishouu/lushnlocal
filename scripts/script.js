
fetch("navbar.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
	});


fetch("footer.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("footer").innerHTML = data;
	});

document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-category');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;

      questions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('open');
        }
      });

      question.classList.toggle('active');
      answer.classList.toggle('open');
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
	const filterBtn = document.getElementById("filterToggleBtn");
	const dropdown = document.getElementById("filterDropdown");

	filterBtn.addEventListener("click", () => {
		dropdown.classList.toggle("show");
	});
});

let currentIndex = 0;
const cardList = document.querySelector(".card-list");
const cards = document.querySelectorAll(".card-item");
const totalCards = cards.length;

document.querySelector(".next-btn").addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % totalCards;
	updateCarousel();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + totalCards) % totalCards;
	updateCarousel();
});

function updateCarousel() {
	const cardWrapper = document.querySelector(".card-wrapper");
	const cardWidth = cards[0].offsetWidth;
	const wrapperWidth = cardWrapper.offsetWidth;

	// Calculate the left offset so the current card is centered
	const offset = cardWidth * currentIndex - (wrapperWidth - cardWidth) / 2;

	cardList.style.transform = `translateX(-${offset}px)`;
}
