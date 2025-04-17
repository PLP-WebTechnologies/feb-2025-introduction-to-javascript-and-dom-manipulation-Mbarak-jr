// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("dynamicText").textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById("changeStyleBtn").addEventListener("click", function() {
    const textElement = document.getElementById("dynamicText");
    textElement.style.color = "blue";
    textElement.style.fontSize = "25px";
});

// Add a new element to the page when the button is clicked
document.getElementById("addElementBtn").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a dynamically added paragraph!";
    document.body.appendChild(newElement);
});

// Remove an element when the button is clicked
document.getElementById("removeElementBtn").addEventListener("click", function() {
    const elementToRemove = document.getElementById("newElement");
    elementToRemove.style.display = "none"; // Hides the element instead of removing from DOM
});
