// Remove the <main> element with id 'main'
document.getElementById('main').remove();

// Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement('h1');
newHeader.id = 'victory'; // Set the id of 'newHeader' to 'victory'
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with the actual name

// Append the newHeader to the body
document.body.appendChild(newHeader);