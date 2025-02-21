import { useEffect, useState } from "react";
import { getQuizHistory } from "../utils/indexedDB";

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getQuizHistory().then(setHistory);
    }, []);

    return (
        <div className="quiz-history">
            <h2 className="history-title">Attempt History 📜</h2>
            <ul className="history-list">
                {history.map((attempt, index) => (
                    <li key={index} className="history-item">
                        Score: <strong>{attempt.score}</strong> | Date: {attempt.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
