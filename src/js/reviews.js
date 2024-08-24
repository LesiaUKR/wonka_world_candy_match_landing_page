import reviews from '../data/reviews.json';

console.log(reviews);

// Вибираємо контейнери для списку рев'ю та індикаторів
const reviewList = document.querySelector('.review-list');
const indicatorsContainer = document.querySelector('.slider-indicators');

// Змінна для відслідковування поточного слайду
let currentSlide = 0;

// Створюємо слайди та індикатори
reviews.forEach((review, index) => {
  // Створення елементів для кожного рев'ю
  const reviewItem = document.createElement('li');
  reviewItem.classList.add('review-item');
  if (index !== currentSlide) {
    reviewItem.style.display = 'none';
  }

  const reviewText = document.createElement('p');
  reviewText.classList.add('review-text');
  reviewText.textContent = review.review;

  const reviewUserName = document.createElement('span');
  reviewUserName.classList.add('review-user-name');
  reviewUserName.textContent = review.username;

  reviewItem.appendChild(reviewText);
  reviewItem.appendChild(reviewUserName);
  reviewList.appendChild(reviewItem);

  // Створення індикаторів
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  if (index === currentSlide) {
    indicator.classList.add('active');
  }

  indicator.addEventListener('click', () => {
    changeSlide(index);
  });

  indicatorsContainer.appendChild(indicator);
});

// Функція для зміни слайда
function changeSlide(index) {
  // Ховаємо поточний слайд
  reviewList.children[currentSlide].style.display = 'none';
  indicatorsContainer.children[currentSlide].classList.remove('active');

  // Відображаємо новий слайд
  reviewList.children[index].style.display = 'block';
  indicatorsContainer.children[index].classList.add('active');

  // Оновлюємо поточний слайд
  currentSlide = index;
}
