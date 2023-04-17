// components
import Nav from "./components/Nav";

// pages
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";

//popups
import ProjectDetails from "./components/pop-ups/ProjectDetails";

// react router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex">
      <Nav/>
      <Routes>
        <Route path="/" element={<ProfilePage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/projects/:id" element={<ProjectDetails/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
