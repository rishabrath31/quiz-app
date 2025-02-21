import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
