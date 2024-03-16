document.addEventListener("DOMContentLoaded", function() {
    // Initialize count variable
    let count = 0;

    // Select DOM elements
    const countDisplay = document.querySelector(".count-display");
    const incrementButton = document.querySelector(".increment");
    const decrementButton = document.querySelector(".decrement");
    const clearButton = document.querySelector(".clear");
    const errorDisplay = document.querySelector(".error");

    // Update count display
    function updateCountDisplay() {
        countDisplay.textContent = count;
        // Show or hide error message based on count
        if (count < 0) {
            errorDisplay.style.display = "block";
            count = 0; // Reset count to 0 if it goes below 0
        } else {
            errorDisplay.style.display = "none";
        }
    }

    // Increment count
    incrementButton.addEventListener("click", function() {
        count++;
        updateCountDisplay();
    });

    // Decrement count
    decrementButton.addEventListener("click", function() {
        if (count > 0) {
            count--;
            updateCountDisplay();
        } else {
            // Show error message if trying to decrement below 0
            errorDisplay.style.display = "block";
        }
    });

    // Clear count
    clearButton.addEventListener("click", function() {
        count = 0;
        updateCountDisplay();
    });

    // Initial count display
    updateCountDisplay();
});
