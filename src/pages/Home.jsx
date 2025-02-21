import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="home-title">🚀 Welcome to the Interactive Quiz!</h1>
            <p className="home-subtitle">Test your knowledge and challenge yourself.</p>
            <button className="start-btn" onClick={() => navigate("/quiz")}>
                Start Quiz
            </button>
        </div>
    );
};

export default Home;
