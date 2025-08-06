// src/Labs/Lab5/HttpClient.tsx
import { useEffect, useState } from "react";
import { fetchWelcomeMessage } from "./client";

export default function HttpClient() {
  const [message, setMessage] = useState("");

  const fetchWelcomeOnClick = async () => {
    const msg = await fetchWelcomeMessage();
    setMessage(msg);
  };

  // ✅ fetch message as soon as the component loads
  useEffect(() => {
    const fetchWelcomeOnLoad = async () => {
      const msg = await fetchWelcomeMessage();
      setMessage(msg);
    };
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div>
      <h3>HTTP Client (Click + Auto)</h3>
      <button className="btn btn-primary w-25" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <p>{message}</p>
    </div>
  );
}
