const display = document.querySelector('.display');
updateDisplay('0');
function updateDisplay(value) {
    display.value = value;
}
function handleButtonClick(value) {
    if (value === 'AC') {
        updateDisplay('0');
    } else if (value === 'c') {
        if (display.value.length === 1) {
            updateDisplay('0');
        } else {
            updateDisplay(display.value.slice(0, -1));
        }
    } else if (value === '=') {
        try {
            updateDisplay(eval(display.value)); 
        } catch (error) {
            updateDisplay('Error'); 
        }
    } else {
        if (display.value === '0') {
            updateDisplay(value); 
        } else {
            updateDisplay(display.value + value);
        }
    }
}
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        handleButtonClick(this.value);
    });
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        try {
            updateDisplay(eval(display.value)); 
        } catch (error) {
            updateDisplay('Error'); 
        }
        event.preventDefault();
    }
});
