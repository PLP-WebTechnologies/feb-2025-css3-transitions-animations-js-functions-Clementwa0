document.addEventListener("DOMContentLoaded", function() {
  // Get DOM elements
  const animatedImage = document.getElementById("animatedImage");
  const bounceButton = document.getElementById("bounceButton");
  const bgColorSelect = document.getElementById("bgColor");
  
  // Apply saved background color on page load
  loadSavedPreference();
  
  // Add event listeners
  bounceButton.addEventListener("click", triggerMultipleBounce);
  bgColorSelect.addEventListener("change", savePreference);
  
  // Function to trigger multiple bounces animation
  function triggerMultipleBounce() {
    // Remove any existing animation class

    animatedImage.classList.remove("multiple-bounce");
    
    // Force browser to recognize the change
    void animatedImage.offsetWidth;
    
    // Add multiple bounce animation class
    animatedImage.classList.add("multiple-bounce");
  }
  
  // Function to save and apply background color preference
  function savePreference() {
    const selectedColor = bgColorSelect.value;
    
    // Save to localStorage
    localStorage.setItem("bgColor", selectedColor);
    
    // Apply the selected background color
    applyBackgroundColor(selectedColor);
  }
  
  // Function to load saved preference
  function loadSavedPreference() {
    const savedColor = localStorage.getItem("bgColor");
    
    if (savedColor) {
      // Set the dropdown to saved value
      bgColorSelect.value = savedColor;
      
      // Apply the saved background color
      applyBackgroundColor(savedColor);
    }
  }
  
  // Function to apply background color
  function applyBackgroundColor(color) {
    switch(color) {
      case "lavenderblush":
        document.body.style.backgroundColor = "lavenderblush";
        break;
      case "beige":
        document.body.style.backgroundColor = "beige";
        break;
      case "mint":
        document.body.style.backgroundColor = "#f5fffa"; // mint color
        break;
      default:
        document.body.style.backgroundColor = "#f0f0f0"; // default light gray
    }
  }
});
