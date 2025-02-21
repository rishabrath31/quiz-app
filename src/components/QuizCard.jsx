import { useState } from "react";
import Feedback from "./Feedback";

const QuizCard = ({ question, options, correctAnswer, isInteger, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [integerInput, setIntegerInput] = useState("");

    const handleAnswer = (option) => {
        setSelectedOption(option);
        setIsAnswered(true);

        setTimeout(() => {
            onAnswer(option.toString() === correctAnswer.toString());
            setSelectedOption(null);
            setIsAnswered(false);
        }, 1000);
    };

    const handleIntegerSubmit = () => {
        if (integerInput !== "") {
            handleAnswer(integerInput);
        }
    };

    return (
        <div className="quiz-card-container">
            <h3 className="quiz-question">{question}</h3>
            {!isInteger ? (
                <div className="quiz-options-grid">
                    {options.map((option, index) => (
                        <button key={index}
                            className={`quiz-option ${selectedOption === option ? (option === correctAnswer ? "option-correct" : "option-incorrect") : ""}`}
                            onClick={() => !isAnswered && handleAnswer(option)}
                            disabled={isAnswered}>
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="integer-input-container">
                    <input
                        type="number"
                        value={integerInput}
                        onChange={(e) => setIntegerInput(e.target.value)}
                        placeholder="Enter your answer"
                        className="integer-input"
                    />
                    <button onClick={handleIntegerSubmit} className="submit-btn">Submit</button>
                </div>
            )}
            {selectedOption && <Feedback isCorrect={selectedOption === correctAnswer} />}
        </div>
    );
};

export default QuizCard;
