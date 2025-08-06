// src/Labs/Lab5/index.tsx
import { useNavigate } from "react-router-dom";
import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import Module from "./Module";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClientCRUD from "./HttpClientCRUD";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function Lab5() {
  const navigate = useNavigate();
  return (
    <div id="wd-lab5">
      {/* ✅ NEW BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="btn btn-danger mb-4"
      >
        ← Back to Home
      </button>
      <h2>Lab 5</h2>
      <ul className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </ul>
      <EnvironmentVariables />
      <PathParameters />
      <WorkingWithObjects />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously />
      <Module />
      <WorkingWithArrays />
      <HttpClientCRUD />
    </div>
  );
}
