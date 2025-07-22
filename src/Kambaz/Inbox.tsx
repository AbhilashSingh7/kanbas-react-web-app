// src/Kambaz/Inbox.tsx
import { FaInbox } from "react-icons/fa";
import "./Inbox.css";

export default function Inbox() {
  return (
    <div className="inbox-page">
      <h1 className="inbox-header">
        <FaInbox className="inbox-icon" />
        Inbox
      </h1>
      <p>Your messages and notifications will appear here.</p>
    </div>
  );
}