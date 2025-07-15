// src/Kambaz/Quizzes.tsx
import { FaQuestionCircle } from "react-icons/fa";
import "./Quizzes.css";

const Quizzes = () => {
  return (
    <div className="quizzes-container">
      <h2 className="quizzes-title">
        <FaQuestionCircle className="quizzes-icon" />
        Quizzes
      </h2>
      <p>Quiz related content goes here.</p>
    </div>
  );
};

export default Quizzes;