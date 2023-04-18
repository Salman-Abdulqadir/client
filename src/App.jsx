// components
import Nav from "./components/Nav";

// pages
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";

//popups
import ProjectDetails from "./components/pop-ups/ProjectDetails";
import Applications from "./components/pop-ups/Applications";

// error
import Error from "./components/Error";

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
        <Route path="/applications" element={<Applications/>}/>
        <Route path="/notfound" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
