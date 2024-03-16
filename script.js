document.addEventListener("DOMContentLoaded", function() {
    
    let count = 0;

    const countDisplay = document.querySelector(".count-display");
    const incrementButton = document.querySelector(".increment");
    const decrementButton = document.querySelector(".decrement");
    const clearButton = document.querySelector(".clear");
    const errorDisplay = document.querySelector(".error");

    function countFunction() {
        countDisplay.textContent = count;
        if (count < 0) {
            errorDisplay.style.display = "block";
            count = 0; 
        } else {
            errorDisplay.style.display = "none";
        }
    }

    incrementButton.addEventListener("click", function() {
        count++;
        countFunction();
    });

    decrementButton.addEventListener("click", function() {
        if (count > 0) {
            count--;
            countFunction();
        } else {
            errorDisplay.style.display = "block";
        }
    });

    clearButton.addEventListener("click", function() {
        count = 0;
        countFunction();
    });

    countFunction();
});
