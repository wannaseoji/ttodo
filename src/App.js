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
import profileData from './assets/MyProfile.json';
import memberData from './assets/Member.json';
import BUCKETLISTD from './assets/bucket.json';

function App() {
  //프로필 상태를 유지하는 상태변수와, 현재프로필 정보를 유지하는 상태변수 추가(장훈)
  const [member, setMember] = useState(memberData);
  const [myProfile, setMyProfile] = useState(profileData);
  //===============================================================================
  const [teamTask, setTeamTask] = useState(teamTaskData)
  const [teams, setTeams] = useState(teamData);
  const [tasks, setTasks] = useState(taskData);
  const [BUCKETLIST, setBUCKETLIST] = useState(BUCKETLISTD);
  const [followers, setFollowers] = useState(followerData);

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
            followers={followers}
            setFollowers={setFollowers}
            myProfile={myProfile}         //프로필, 맴버추가(장훈)
            setMyProfile={setMyProfile}
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
            followers={followers}
            myProfile={myProfile}
            setMyProfile={setMyProfile}
          />} />
          <Route path="TeamLink" element={<TeamLink
            myProfile={myProfile}
            tasks={tasks}
            teamTask={teamTask}
            teams={teams}
            member={member}
            setTeamTask={setTeamTask}
            setTasks={setTasks}
            setTeams={setTeams}
            followers={followers}
          />} />
          <Route path="Goal" element={<Goal tasks={tasks}
            BUCKETLIST={BUCKETLIST}
            setBUCKETLIST={setBUCKETLIST}
            teamTask={teamTask}
            teams={teams}
            followers={followers}
            myProfile={myProfile}
            setMyProfile={setMyProfile}
          />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;