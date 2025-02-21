const Feedback = ({ isCorrect }) => {
  return (
      <div className={`feedback-message ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`}>
          {isCorrect ? "Correct! 🎉" : "Wrong answer! ❌"}
      </div>
  );
};

export default Feedback;
