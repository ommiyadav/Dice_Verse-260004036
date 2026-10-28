# Dice_Verse-260004036
Interactive and responsive Dice Roll website built with HTML, CSS, and vanilla JavaScript .
# 🎲 DiceVerse — Interactive Roll Simulator

A lightweight, responsive web app built as part of the Programming Club (Software Division) Induction Task. Instead of just displaying static numbers, DiceVerse focuses on giving a satisfying tactile feel with real-time CSS animations and score keeping.


## 🛠️ Built With
- **HTML5:** Clean structural layout.
- **CSS3:** Flexbox layout, custom animations, and clean modern styling.
- **JavaScript (ES6):** State updates, DOM manipulation, and dynamic history tracking.

---

## ✨ Features & Key Highlights
- **Dynamic Dice Count:** Switch between rolling a single die or dual dice seamlessly.
- **Tactile Roll Animation:** Added a CSS rotation/shake effect during the roll delay to give feedback to the user.
- **Live Score Calculator:** Automatically sums up total points for multi-dice rolls.
- **History Log:** Remembers your last 5 rolls on screen so you can track previous scores.
- **Fully Responsive:** Tested across mobile screen layouts and desktop screens.

---

## 🧠 Brain Behind the Logic

### 1. How Randomness is Generated
To make sure every roll is fair and unbiased, the app uses JavaScript's `Math.random()` standard library:

```javascript
const roll = Math.floor(Math.random() * 6) + 1;
