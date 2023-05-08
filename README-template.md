# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/responsive-tip-calculator-app-3nWumv6HJO)
- Live Site URL: [Add live site URL here](https://dimitar-kalapocev-datarockets-task.netlify.app/)

## My process

### Built with

- React
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This is my first frontend mentor challenge and I learned how this actually works. This was a really fun way to test my React skills and am looking forward to working on more challenges like this one.

```js
useEffect(() => {
  const billAmount = parseFloat(bill);
  const tipPercentAmount = parseFloat(tipPercent) / 100;
  const numPeopleAmount = parseFloat(numPeople);

  if (billAmount > 0 && tipPercentAmount > 0 && numPeopleAmount > 0) {
    const tip = (billAmount * tipPercentAmount) / numPeople;
    const perPerson = billAmount / numPeopleAmount + tip;

    setTipAmount(tip);
    setPerPersonAmount(perPerson);
    setErrorMsg('');
  } else {
    setTipAmount(0);
    setPerPersonAmount(0);

    if (bill || tipPercent || numPeople) {
      setErrorMsg(`Please fill out all fields`);
    } else {
      setErrorMsg('');
    }
  }
}, [bill, tipPercent, numPeople]);
```

### Continued development

I haven't built many projects with React (this is my third one) and I would really love to continue building projects like this.

## Author

- Website - [Dimitar Kalapocev](https://dimitark.com)
- Frontend Mentor - [@DimitarK13](https://www.frontendmentor.io/profile/DimitarK13)
