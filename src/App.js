// global styles
import { Global } from "./globals/Global";

// pages
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Profile from "./pages/profile/Profile";
import AddEvent from "./pages/addEvent/AddEvent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

import ProtectedRoutes from "./ProtectedRoutes";
// import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Global />
      <BrowserRouter>
        <Navigation />

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route index path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/addevent" element={<AddEvent />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
