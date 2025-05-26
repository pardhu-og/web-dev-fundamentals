## Scroll Tracker (React Mini Project)

This mini project tracks how far the user has scrolled down the page using React’s useEffect and the window.scrollY property.


## What I learned

- Using useEffect to handle side effects in React

- Adding and cleaning up event listeners (addEventListener, removeEventListener)

- Using browser API like window.scrollY to track scroll position

- Managing state with useState

- Understanding the cleanup pattern in useEffect to prevent memory leaks


## How It Works

- When the page loads, a scroll event listener is added.

- On every scroll, it updates the scroll position using window.scrollY.

- When the component unmounts or re-renders, the listener is removed to avoid memory leaks.


## Tech Stack

- React 

- JavaScript (ES6+)

