// Global variable to store the box element
let box = document.getElementById("animatedBox");
let message = document.getElementById("message");

// Function to start animation (with parameter)
function startAnimation(type) {
    clearAnimations(); // Ensure no other animation is running
    box.classList.add(type); // Add chosen animation
    message.textContent = `Animation started: ${type}`;
}

// Function to stop animation
function stopAnimation() {
    clearAnimations();
    message.textContent = "Animation stopped";
}

// Function to remove all animations (reusable logic)
function clearAnimations() {
    box.classList.remove("spin", "bounce");
}

// Demonstrating scope:
let globalVar = "I'm a global variable!";

function showScopeExample() {
    let localVar = "I'm a local variable!";
    console.log(globalVar); // Accessible here
    console.log(localVar);  // Accessible here
}

showScopeExample();
// console.log(localVar); // ❌ Error: localVar is not defined
