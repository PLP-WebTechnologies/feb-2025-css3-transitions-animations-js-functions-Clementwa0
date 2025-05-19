
# 🎨 Interactive Webpage with CSS3 & JavaScript

This project demonstrates how to build a dynamic and interactive webpage using **CSS3 transitions and animations**, **JavaScript functions**, and **localStorage** for data persistence. The objective is to provide a visually engaging experience where user actions trigger animations and preferences are remembered.

## 📁 Project Structure

```
/project-root
│
├── index.html         # Main HTML structure of the webpage
├── style.css          # Styling and animations using CSS3
└── script.js          # JavaScript logic for interactivity and localStorage
```

---

## 🌟 Features

- ✅ Smooth CSS3 animation (`multiple-bounce`) on a soccer ball image.
- ✅ JavaScript-triggered animation on button click.
- ✅ User selects background color; the choice is saved in `localStorage` and applied on reload.

---

## 🚀 How It Works

### CSS Animation
The ball image bounces when the user clicks the "Click to Bounce" button. The animation is defined using `@keyframes multiple-bounce` in the CSS file and triggered dynamically via JavaScript.

### JavaScript Functions

- **`triggerMultipleBounce()`**: Triggers a CSS animation by modifying the DOM.
- **`savePreference()`**: Saves the selected background color to `localStorage`.
- **`loadSavedPreference()`**: Retrieves the stored preference on page load.
- **`applyBackgroundColor(color)`**: Applies the chosen background color.

### localStorage

User preferences for background color are stored in the browser using `localStorage`, ensuring the UI stays consistent between visits.

---

## 🎯 How to Use

1. **Open `index.html`** in any modern web browser.
2. **Click the “Click to Bounce” button** to see the soccer ball animate.
3. **Choose a background color** from the dropdown menu.
4. Reload the page — your selected background will persist thanks to `localStorage`.

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Transitions & Animations)
- JavaScript (DOM manipulation, localStorage)


## ✍️ Author

Muli Clement Wambua  
[Portfolio](https://klmportfolio.netlify.app/) | [GitHub](https://github.com/Clementwa0)

---

## 📄 License

This project is open for educational use.

```

