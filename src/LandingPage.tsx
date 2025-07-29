import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={styles.container}>
      <header>
        <h1 style={styles.title}>Kambaz Web Application</h1>
        <h2 style={styles.subtitle}>Abhilash Singh – CS5610 Section 01</h2>
      </header>

      <section style={styles.section}>
        <h3 style={styles.heading}>Lab Assignments</h3>
        <ul style={styles.list}>
          <li><Link style={styles.link} to="/lab1">Lab 1</Link></li>
          <li><Link style={styles.link} to="/lab2">Lab 2</Link></li>
          <li><Link style={styles.link} to="/lab3">Lab 3</Link></li>
          <li><Link style={styles.link} to="/lab4">Lab 4</Link></li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.heading}>Kambaz App</h3>
        <ul style={styles.list}>
          <li>
            <Link style={styles.link} to="/kambaz">Open the Kambaz Application</Link>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.heading}>Source Code Repositories</h3>
        <ul style={styles.list}>
          <li>
            <a
              style={styles.link}
              href="https://github.com/AbhilashSingh7/kanbas-react-web-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub – Kambaz React Web App
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    color: "#f8f9fa",
    backgroundColor: "#1e1e1e",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
  },
  title: {
    fontSize: "2.5rem",
    color: "#ff4c4c",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#bbb",
    marginBottom: "2rem",
  },
  section: {
    marginBottom: "2rem",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#f1f1f1",
    borderBottom: "1px solid #555",
    paddingBottom: "6px",
    marginBottom: "1rem",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  link: {
    color: "#61dafb",
    textDecoration: "none",
    fontSize: "1.1rem",
  },
};