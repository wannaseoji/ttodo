import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Team from "../components/Team";
import Profile from "./Profile";

import CustomTimeLine from "../components/timeline/CustomTimeline";

import React, { useState, useEffect } from "react";
import TaskList from '../components/TaskList';
import taskData from '../assets/task-data.json';
import teamTaskData from '../assets/team-task-data.json'
import Modal from '../components/Modal';
import AddTaskModal from "../components/modal/AddTaskModal";
import teamData from "../assets/team.json"
//import { Link } from "react-router-dom";
import StyledListItem from "../styles/linkStyle";
import PinkLink from '../styles/pinkLink';
import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople
import { useNavigate } from 'react-router';

const Home = () => {
    const [teamTask, setTeamTask] = useState(teamTaskData)
    const [teams, setTeams] = useState(teamData);
    const [tasks, setTasks] = useState(taskData);
    useEffect(() => setTasks(taskData), [taskData]);
    const [modalOpen, setModalOpen] = useState(false); // Options Modal 창 open, close State 확인
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(false); // AddTask Modal 창 open, close State 확인

    // Task check 변경
    const onCheckTask = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (index === i) {
                task.check = !(task.check);
            }
            return task;
        });
        console.log(`newTasks : ${newTasks}`);
        setTasks(newTasks);
    }

    //Team task check 변경

    //Team 생성
    const onNewTeam = function(name, memberList, notice, intro, reader) {
        console.log("new team 추가")
        const newTeams = [...teams, {name, memberList, notice, intro, reader}]
        setTeams(newTeams)
    }
    //Team 화면


    // Modal open close setting 하기
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const onShowModal = () => {
        openModal();
    }

    const openAddTaskModal = () => {
        setAddTaskModalOpen(true);
    };
    const closeAddTaskModal = () => {
        setAddTaskModalOpen(false);
    };
    const onShowAddTaskModal = () => {
        openAddTaskModal();
    }

    const onNewTask = function(id, category, title, date, hour, minute){ // id, category, title, date, hour, minute, check
        console.log("new task 추가")
        const newTasks = [...tasks, {id, category, title, date, hour, minute, check:false}]
        setTasks(newTasks)
    }

    //팀 카드 3개이하 저장
    const teamCard = [];
    function initTeamCard() {
        for (let i = 0; i < teams.length && i < 3; i++) {
            teamCard[i] = <Team key={i} data={teams[i]} />;
        }
    }


    const navigate = useNavigate();
    const OnGoalClick = () => {
        navigate('/Goal', { state: {tasks, teams, teamTask}});
    }
    const OnHomeClick = () => {
        navigate("/",  { state: {tasks, teams, teamTask}});
    }
    const OnTeamClick = () => {
        navigate("/TeamLink", { state: {tasks, teams, teamTask}});
    }
    const OnMyTaskClick = () => {
        navigate("/MyTask",  { state: {tasks, teams, teamTask}});
    }
    // 버튼 클릭시 호출


    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <nav className="seo_nav">
                    <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.black', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <List component="nav">
                            <nav>
                                {/*<PinkLink to="/" style={{ textDecoration: 'none' }}>*/}
                                <StyledListItem >
                                    <ListItemButton onClick={OnHomeClick} sx={{ height: 80, }}>
                                        <VscHome /><ListItemText>Home</ListItemText>
                                    </ListItemButton>

                                </StyledListItem>
                                {/*</PinkLink>*/}
                            </nav>
                            <nav >

                                <StyledListItem>
                                    <ListItemButton onClick={OnGoalClick} sx={{ height: 80, }}>
                                        <GiStairsGoal /><ListItemText >Goal</ListItemText>
                                    </ListItemButton>
                                </StyledListItem>

                            </nav>
                            <nav>
                                {/*<StyledLink to="/MyTask" style={{ textDecoration: 'none' }}>*/}

                                <StyledListItem>

                                    <ListItemButton onClick={OnMyTaskClick} sx={{ height: 80, }}>
                                        <IoPersonOutline /><ListItemText > MyTask</ListItemText>
                                    </ListItemButton>
                                </StyledListItem>
                                {/*</StyledLink>*/}

                            </nav>
                            <nav>
                                {/* <StyledLink to="/TeamLink" style={{ textDecoration: 'none' }}>*/}
                                <StyledListItem>

                                    <ListItemButton onClick={OnTeamClick} sx={{ height: 80, }}>
                                        <BsPeople></BsPeople><ListItemText >  TeamLink</ListItemText>
                                    </ListItemButton>

                                </StyledListItem>
                                {/* </StyledLink>*/}
                            </nav>
                        </List>
                    </Box>
                </nav >
            </div >
            <div className="box profile"><Profile /></div>
            <div className="box content">
                <CustomTimeLine tasks={tasks} />
            </div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">
                <TaskList
                    tasks={tasks}
                    onCheck={onCheckTask}
                    onModal={onShowModal}
                    onAddTaskModal = {onShowAddTaskModal}
                />
                <AddTaskModal open={addTaskModalOpen} close={closeAddTaskModal} onNewTask={onNewTask} header="일정 추가" category="Study"/>
                <Modal open={modalOpen} close={closeModal} header="Options" />
            </div>
            <div className="box teamlist">

                {initTeamCard()}
                {teamCard.map(v => v)}
            </div>
        </div >
    );
};

export default Home;

