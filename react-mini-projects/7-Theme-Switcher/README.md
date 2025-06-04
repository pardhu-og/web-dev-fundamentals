#  React Theme Switcher

This is a simple React mini project that demonstrates how to implement **light/dark theme switching** using:

-  React `useContext` for shared global state
-  React `useState` for toggling the theme
-  `localStorage` for remembering the user's theme preference
-  Clean component structure (`App`, `Header`, `Child1`, `Child2`)

##  Features

- Switch between light and dark modes
- Theme state is shared across all components
- Theme preference is saved in the browser (persists on refresh)
- Styled dynamically with inline styles

##  Folder Structure

src/
├── components/
│ ├── Header.jsx
│ ├── Child1.jsx
│ └── Child2.jsx
├── ThemeContext.js
├── App.jsx
└── main.jsx

##  What I Learned

- How to use `useContext` to manage theme across components
- Why lifting state via props becomes hard in deeply nested trees
- How to persist state using `localStorage`
- How to structure context files and use them cleanly


