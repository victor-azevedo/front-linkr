import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import UserDataProvider from "./contexts/UserDataContext";
import FollowingProvider from "./contexts/FollowingContext";
import HashtagPage from "./pages/HashtagPage";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserDataProvider>
          <FollowingProvider>
            <Router>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="*" element={<h1>Error 404</h1>} />
              </Routes>
            </Router>
          </FollowingProvider>
        </UserDataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
