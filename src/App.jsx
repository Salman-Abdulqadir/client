// components
import Nav from "./components/Nav";

// pages
import ProfilePage from "./pages/ProfilePage";

// react router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex">
      <Nav/>
      <Routes>
        <Route path="/" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
