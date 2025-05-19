
// Trigger bounce animation on image
function triggerBounce() {
  const img = document.getElementById('animatedImage');
  img.classList.remove('bounce'); // Reset animation if already applied
  void img.offsetWidth; // Force reflow
  img.classList.add('bounce');
}

// Save user's background preference in localStorage
function savePreference() {
  const color = document.getElementById('colorSelect').value;
  localStorage.setItem('bgColor', color);
  document.body.style.backgroundColor = color;
}

// Load preference on page load
window.onload = function () {
  const savedColor = localStorage.getItem('bgColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.getElementById('colorSelect').value = savedColor;
  }
};
