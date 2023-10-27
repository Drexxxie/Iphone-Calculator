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

const decimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');
const numberElArray = [
    number0El, number1El, number2El, number3El, number4El,
    number5El, number6El, number7El, number8El, number9El
];

// Functions
const getDisplayAsStr = () => {
    const currentDisplayStr = displayEl.textContent;
    return currentDisplayStr.split(',').join('');
}

const getDisplayAsNum = () => {
    return parseFloat(getDisplayAsStr());
}

const setStrAsDisplay = (displayStr) => {
    if (displayStr[displayStr.length - 1] === '.') {
        displayEl.textContent += '.';
        return; 
    }

    const [wholeNumStr, decimalStr] = displayStr.split('.');
    if (decimalStr) {
        displayEl.textContent = parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
       displayEl.textContent = parseFloat(wholeNumStr).toLocaleString(); 
    }   
}

const handleNumberClick = (numStr) => {
    const currentDisplayStr = getDisplayAsStr();
    if (currentDisplayStr === '0') {
        setStrAsDisplay(numStr);
    } else {
        setStrAsDisplay(currentDisplayStr + numStr);
    }
}

// Add Event Listeners to functions


// Add Event Listeners to numbers and buttons
for (let i=0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    })
}
decimalEl.addEventListener('click', () => {
    const currentDisplayStr = getDisplayAsStr();
    if (!currentDisplayStr.includes('.')) {
        setStrAsDisplay(currentDisplayStr + '.');
        displayEl.textContent = currentDisplayStr + '.';
    }
})

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