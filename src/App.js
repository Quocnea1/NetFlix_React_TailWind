import { Route, Routes } from "react-router-dom";
import Navbar from "./compoinent/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUp from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/account"
            element={<Home />}
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
