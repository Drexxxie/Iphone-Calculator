// DOM Elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const displayEl = document.querySelector('.display');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl =  document.querySelector('.addition');
const subtractionEl =  document.querySelector('.subtraction');
const multiplicationEl =  document.querySelector('.multiplication');
const divisionEl =  document.querySelector('.division');
const equalEl =  document.querySelector('.equal');

// Update time
const updateTime = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (hourEl && minuteEl) {
        hourEl.textContent = currentHour.toLocaleString();
        minuteEl.textContent = currentMinute.toLocaleString(undefined, { minimumIntegerDigits: 2 });
    }
}

// Call the function once and then repeatedly every second
setInterval(updateTime, 1000);
updateTime();