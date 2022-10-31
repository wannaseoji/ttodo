import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MyTask from "./pages/MyTask";
import Team from "./pages/Team";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="MyTask" element={<MyTask />} />
          <Route path="Team" element={<Team />} />
          <Route path="Calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
