// src/Kambaz/Profile.tsx
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Profile</h2>
      <input type="text" className="form-control mb-2" placeholder="Username" defaultValue="john_doe" />
      <input type="text" className="form-control mb-2" placeholder="First Name" defaultValue="John" />
      <input type="text" className="form-control mb-2" placeholder="Last Name" defaultValue="Doe" />
      <input type="password" className="form-control mb-2" placeholder="Password" defaultValue="password123" />
      <input type="email" className="form-control mb-2" placeholder="Email" defaultValue="john@example.com" />
      <input type="date" className="form-control mb-2" defaultValue="1990-01-01" />
      <select className="form-select mb-3">
        <option>Student</option>
        <option>Faculty</option>
        <option>Admin</option>
        <option>TA</option>
      </select>
      <button className="btn btn-danger" onClick={() => navigate("/kambaz/signin")}>
        Sign Out
      </button>
    </div>
  );
}
