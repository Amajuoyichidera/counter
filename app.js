const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

const totalCount = document.getElementById("total-count");

var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
  };

  // Function to decrement count
const handleDecrement = () => {
    count--;
    totalCount.innerHTML = count;
  };

  
  // Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);