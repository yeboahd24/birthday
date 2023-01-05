// index.js
const calculateButton = document.getElementById('calculate-button');
const result = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const birthday = new Date(document.getElementById('birthday').value);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthday.getFullYear();
  const monthDiff = currentDate.getMonth() - birthday.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthday.getDate())) {
    age--;
  }

  result.textContent = `You are ${age} years old`;
});

// index.js
const app = document.getElementById('app');

fetch('https://source.unsplash.com/random/1600x900')
  .then(response => {
    app.style.backgroundImage = `url(${response.url})`;
  });
