const Scoreboard = ({ score, attempts }) => {
  return (
      <div className="scoreboard-container">
          <h2 className="scoreboard-title">Quiz Completed! 🎉</h2>
          <p className="score-text">Score: <strong>{score}</strong></p>
          <p className="attempts-text">Attempts: <strong>{attempts}</strong></p>
      </div>
  );
};

export default Scoreboard;
