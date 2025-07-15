// src/Kambaz/Calendar.tsx
// @ts-nocheck
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendar } from "react-icons/fa";
import "./Calendar.css"; // Custom styles for the calendar wrapper

type Value = Date | Date[] | null;

export default function CalendarPage() {
  const [value, setValue] = useState<Value>(new Date());

  const handleDateChange = (newValue: Value) => {
    setValue(newValue);
  };

  return (
    <div className="calendar-page">
      <h1 className="calendar-title">
        <FaCalendar className="calendar-icon" />
        Calendar
      </h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={value} />
      </div>
    </div>
  );
}