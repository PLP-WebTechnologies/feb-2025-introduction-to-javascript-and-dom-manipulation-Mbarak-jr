// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textContent').textContent = "The text has been changed!";
});

// Toggle CSS style dynamically
document.getElementById('toggleStyleBtn').addEventListener('click', function() {
    const element = document.getElementById('styledText');
    element.style.color = element.style.color === 'blue' ? 'red' : 'blue';
});

// Add a new element when the button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.textContent = "This is a dynamically added element!";
    document.getElementById('newElementContainer').appendChild(newDiv);
});

