# React Auth Context Simulation 

This is a simple React mini project that simulates a basic login/logout system using `useContext`, `useState`, and `localStorage`.

##  Features
- Login with a username
- Logout functionality
- Conditional Navbar and Dashboard views
- Persistent username via localStorage
- Global auth state using React Context API

##  Project Structure
- `App.jsx`: Main app component holding global state
- `AuthContext.js`: React Context for auth state
- `components/`
  - `Login.jsx`: Login form input
  - `Navbar.jsx`: Displays login or logout status
  - `Dashboard.jsx`: Protected content

##  Concepts Covered
- React Context API
- Conditional rendering
- Controlled components
- Basic useEffect for localStorage sync