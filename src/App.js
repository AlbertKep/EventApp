// global styles
import { Global } from "./globals/Global";

// components
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Global />
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
