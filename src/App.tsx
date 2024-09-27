import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/Auth/SignIn";
import SignUpPage from "./pages/Auth/SignUp";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
