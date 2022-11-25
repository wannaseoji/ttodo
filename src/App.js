import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import { Notfound } from "./pages/NotFound";

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
import memberData from './assets/Member.json';
import BUCKETLISTD from './assets/bucket.json';
import categoryData from './assets/category-data.json'

function App() {
  const [member, setMember] = useState(memberData);
  const [teamTask, setTeamTask] = useState(teamTaskData)
  const [teams, setTeams] = useState(teamData);
  const [tasks, setTasks] = useState(taskData);
  const [BUCKETLIST, setBUCKETLIST] = useState(BUCKETLISTD);
  const [categories, setCategories] = useState(categoryData);
  
  // const myFollowers = member.map((v) => v.name === "seo")[0].followMembers
  // console.log(myFollowers)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home
            tasks={tasks}
            teamTask={teamTask}
            teams={teams}
            setTeamTask={setTeamTask}
            setTasks={setTasks}
            setTeams={setTeams}
            member={member}
            setMember={setMember}
          />} />
          <Route path="MyTask" element={<MyTask
            tasks={tasks}
            teamTask={teamTask}
            teams={teams}
            setTeamTask={setTeamTask}
            setTasks={setTasks}
            setTeams={setTeams}
            categories={categories}
            setCategories={setCategories}
            member={member}
          />} />
          <Route path="TeamLink" element={<TeamLink
            tasks={tasks}
            teamTask={teamTask}
            teams={teams}
            member={member}
            setTeamTask={setTeamTask}
            setTasks={setTasks}
            setTeams={setTeams}
          />} />
          <Route path="Goal" element={<Goal tasks={tasks}
            BUCKETLIST={BUCKETLIST}
            setBUCKETLIST={setBUCKETLIST}
            teamTask={teamTask}
            teams={teams}
            member={member}
          />} />
          <Route path="*" element={<Notfound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;