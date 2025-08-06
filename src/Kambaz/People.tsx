// src/Kambaz/People.tsx
import "./People.css";
import { FaUserCircle } from "react-icons/fa";

interface User {
  id: number;
  name: string;
  role: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Abhilash Singh",
    role: "Student",
    email: "abhilash@example.com",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Instructor",
    email: "emily@example.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "TA",
    email: "michael@example.com",
  },
];

export default function People() {
  return (
    <div className="people-container">
      <h2 className="people-title">
        <FaUserCircle className="people-icon" />
        People
      </h2>

      <div className="people-table">
        <div className="people-header">
          <div>Name</div>
          <div>Role</div>
          <div>Email</div>
        </div>
        {users.map((user) => (
          <div className="people-row" key={user.id}>
            <div>{user.name}</div>
            <div>{user.role}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
