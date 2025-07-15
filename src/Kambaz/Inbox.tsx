// src/Kambaz/Inbox.tsx
import { FaInbox } from "react-icons/fa";

export default function Inbox() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        marginLeft: 220,
      }}
    >
      <h1 style={{ color: "red", marginBottom: "1rem" }}>
        <FaInbox style={{ marginRight: "0.5rem" }} />
        Inbox
      </h1>
      <p>Your messages and notifications will appear here.</p>
    </div>
  );
}