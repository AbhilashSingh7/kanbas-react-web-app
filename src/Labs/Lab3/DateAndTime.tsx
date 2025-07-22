// src/Labs/Lab3/DateAndTime.tsx

export default function DateAndTime() {
    const now = new Date();
  
    const dateString = now.toDateString();   // Example: "Tue Jul 22 2025"
    const timeString = now.toLocaleTimeString(); // Example: "10:45:03 AM"
    const isoString = now.toISOString();     // ISO 8601 format
    const year = now.getFullYear();
    const month = now.getMonth() + 1;        // Months are zero-indexed
    const day = now.getDate();
  
    return (
      <div>
        <h3>Date and Time</h3>
        <p><strong>Current Date:</strong> {dateString}</p>
        <p><strong>Current Time:</strong> {timeString}</p>
        <p><strong>ISO String:</strong> {isoString}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Month:</strong> {month}</p>
        <p><strong>Day:</strong> {day}</p>
      </div>
    );
  }