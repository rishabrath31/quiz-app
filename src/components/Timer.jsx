import { useState, useEffect } from "react";

const Timer = ({ duration, onTimeUp, questionNumber }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        setTimeLeft(duration);
    }, [questionNumber, duration]);

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp]);

    return <div className="quiz-timer">⏳ Time Left: {timeLeft}s</div>;
};

export default Timer;
