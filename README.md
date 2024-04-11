# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./design/desktop-preview.jpg)
![](./design/desktop-active-state.jpg.jpg)

### Links

- Solution URL: [Github](https://github.com/delroscol98/Article-Preview-Component)
- Live Site URL: [Github Pages](https://delroscol98.github.io/Article-Preview-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Creating tooltips from scratch using CSS and handling user events.

```css
.share {
  width: 17.222vw;
  border-radius: 1rem;
  padding: 1.25vw 2.569vw;
  right: -4.722vw;
  transform: translateY(-250%);
}

.share::after {
  content: "";
  border: 1.5rem solid transparent;
  border-top-color: var(--very-dark-greyish-blue);
  position: absolute;
  left: 50%;
  top: 99%;
  transform: translateX(-50%);
}
```

```js
const shareBtns = document.querySelectorAll(".share-button");

const toggleShareHandler = () => {
  const shareSection = document.querySelector(".share");

  shareSection.classList.toggle("hidden");
};

shareBtns.forEach((btn) => btn.addEventListener("click", toggleShareHandler));
```

### Continued development

As my project become more complicated and include more files and small sections and articles, I need to organise them and assign class names that produce clean code.

### Useful resources

- [Youtube](https://www.youtube.com/watch?v=ujlpzTyJp-M) - This helped me make the arrow pointing downwards for the tooltip

## Author

- Frontend Mentor - [@delroscol98](https://www.frontendmentor.io/profile/delroscol98)
