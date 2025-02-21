import { useNavigate } from "react-router-dom";
import History from "../components/History";

const Dashboard = ({ score, attempts, resetQuiz }) => {
    const navigate = useNavigate();

    const handleRetakeQuiz = () => {
        resetQuiz();
        navigate("/quiz");
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1 className="dashboard-title">🎉 Quiz Completed! 🎉</h1>

                <div className="dashboard-score-section">
                    <p className="dashboard-score">Score: <strong>{score}</strong></p>
                    <p className="dashboard-attempts">Attempts: <strong>{attempts}</strong></p>
                </div>

                <button className="dashboard-restart-btn" onClick={handleRetakeQuiz}>
                    🔄 Retake Quiz
                </button>
            </div>

            <div className="dashboard-answer-key">
                <h2 className="answer-key-title">📘 Answer Key</h2>

                <div className="answer-section">
                    <h3>Multiple-Choice Answers</h3>
                    <ul className="answer-list">
                        <li>1. <strong>B</strong> (Mercury)</li>
                        <li>2. <strong>B</strong> (Queue)</li>
                        <li>3. <strong>C</strong> (HTML)</li>
                        <li>4. <strong>A</strong> (Au - Gold)</li>
                        <li>5. <strong>D</strong> (Filtration)</li>
                    </ul>

                    <h3>Integer-Type Answers</h3>
                    <ul className="answer-list">
                        <li>6. 40</li>
                        <li>7. 50</li>
                        <li>8. 1776</li>
                        <li>9. 3</li>
                        <li>10. 120</li>
                    </ul>
                </div>
            </div>

            {/* Quiz History */}
            <History />
        </div>
    );
};

export default Dashboard;
