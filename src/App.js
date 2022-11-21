import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';

// ****************** Components ******************//
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Goal from "./pages/Goal";
import MyTask from "./pages/MyTask";
import TeamLink from "./pages/TeamLink";

// ****************** Data ******************//
import taskData from './assets/task-data.json';
import teamTaskData from './assets/team-task-data.json'
import teamData from "./assets/team.json"
import followerData from './assets/Follower.json';


function App() {
      
  const [teamTask, setTeamTask] = useState(teamTaskData)
  const [teams, setTeams] = useState(teamData);
  const [tasks, setTasks] = useState(taskData);
  const [followers , setFollowers] = useState(followerData);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home tasks={tasks} teamTask={teamTask} teams={teams} setTeamTask={setTeamTask} setTasks={setTasks} setTeams={setTeams} followers={followers}/>} />
          <Route path="MyTask" element={<MyTask tasks={tasks} teamTask={teamTask} teams={teams} setTeamTask={setTeamTask} setTasks={setTasks} setTeams={setTeams} followers={followers}/>} />
          <Route path="TeamLink" element={<TeamLink tasks={tasks} teamTask={teamTask} teams={teams} setTeamTask={setTeamTask} setTasks={setTasks} setTeams={setTeams} followers={followers}/>} />
          <Route path="Goal" element={<Goal tasks={tasks} teamTask={teamTask} teams={teams} followers={followers}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
