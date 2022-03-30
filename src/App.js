import "./App.css";
import LoginForm from "./components/LoginForm";
import MainApp from "./components/MainApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/app/id=:id/password=:password" element={<MainApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
