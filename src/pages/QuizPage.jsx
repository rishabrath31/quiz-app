import { useState } from "react";
import QuizCard from "../components/QuizCard";
import Timer from "../components/Timer";
import Dashboard from "./Dashboard";
import { quizQuestions } from "../utils/quizData";

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(1);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);

        if (currentQuestion + 1 < quizQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setAttempts(attempts + 1);
        setQuizCompleted(false);
    };

    return (
        <div className="quiz-page-container">
            {quizCompleted ? (
                <Dashboard score={score} attempts={attempts} resetQuiz={resetQuiz} />
            ) : (
                <>
                    <Timer duration={30} onTimeUp={() => handleAnswer(false)} questionNumber={currentQuestion} />
                    <QuizCard {...quizQuestions[currentQuestion]} onAnswer={handleAnswer} />
                </>
            )}
        </div>
    );
};

export default QuizPage;
