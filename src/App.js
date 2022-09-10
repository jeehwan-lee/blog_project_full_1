import Home from "./pages/home/Home";
import Topb from "./components/topbar/topb";
import Single from "./pages/single/single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Topb />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/login" element={user ? <Home /> : <Login />}></Route>
          <Route
            path="/register"
            element={user ? <Home /> : <Register />}
          ></Route>
          <Route
            path="/write"
            element={user ? <Write /> : <Register />}
          ></Route>
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          ></Route>
          <Route path="/post/:postId" element={<Single />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
