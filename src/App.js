import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MyTask from "./pages/MyTask";
import Team from "./pages/Team";
import Goal from "./pages/Goal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="MyTask" element={<MyTask />} />
          <Route path="Team" element={<Team />} />
          <Route path="Goal" element={<Goal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
