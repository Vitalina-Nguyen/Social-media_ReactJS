import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Messages/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SearchUserContainer from "./components/SearchUser/SearchUserContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App(props) {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state = {props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/searchusers/*" element={<SearchUserContainer />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
