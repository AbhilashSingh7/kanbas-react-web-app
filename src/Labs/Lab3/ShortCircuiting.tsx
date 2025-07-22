// src/Labs/Lab3/ShortCircuiting.tsx

export default function ShortCircuiting() {
    const loggedInUser = null;
    const defaultUser = "Guest";
  
    const displayUser = loggedInUser || defaultUser; // OR short-circuiting
  
    const isLoggedIn = true;
    const showWelcome = isLoggedIn && "Welcome back!"; // AND short-circuiting
  
    return (
      <div>
        <h3>Short Circuiting</h3>
        <p><strong>loggedInUser || defaultUser:</strong> {displayUser}</p>
        <p><strong>isLoggedIn && "Welcome back!":</strong> {showWelcome}</p>
      </div>
    );
  }