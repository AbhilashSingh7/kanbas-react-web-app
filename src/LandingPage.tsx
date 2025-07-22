import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Kambaz Web Application</h1>
      <h2>Abhilash Singh – CS5610 Section 01</h2>

      <section>
        <h3>Lab Assignments</h3>
        <ul>
          <li>
            <Link to="/lab1">Lab 1 </Link>
          </li>
          <li>
            <Link to="/lab2">Lab 2 </Link>
          </li>
          <li>
            <Link to="/lab3">Lab 3 </Link>
          </li>
        </ul>
      </section>

      <section>
        <h3>Kambaz App</h3>
        <ul>
          <li>
            {/* Replace with real path once your app routes are ready */}
            <Link to="/kambaz">Open the Kambaz Application</Link>
          </li>
        </ul>
      </section>

      <section>
        <h3>Source Code Repositories</h3>
        <ul>
          <li>
            <a
              href="https://github.com/AbhilashSingh7/kanbas-react-web-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub – Kambaz React Web App
            </a>
          </li>
          {/* Add more repos if needed */}
        </ul>
      </section>
    </div>
  );
}
