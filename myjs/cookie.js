// Function to open the popup
function openPopup() {
  document.getElementById('popupOverlay').style.display = 'block';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}

// Event listener for the open button
document.querySelector('.open-popup-button').addEventListener('click', openPopup);