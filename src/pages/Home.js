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
import Modal from '../components/Modal';
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

    const [teams, setTeams] = useState(teamData);
    const [tasks, setTasks] = useState(taskData);
    useEffect(() => setTasks(taskData), [taskData]);
    const [modalOpen, setModalOpen] = useState(false); // Options Modal 창 open, close State 확인

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

    const teamCard = [];
    function initTeamCard() {
        for (let i = 0; i < teams.length && i < 3; i++) {
            teamCard[i] = <Team key={i} data={teams[i]} />;
        }
    }


    const navigate = useNavigate();

    const OnGoalClick = () => {
        navigate('/Goal', { state: tasks });
    }
    const OnHomeClick = () => {
        navigate("/", { state: tasks });
    }
    const OnTeamClick = () => {
        navigate("/TeamLink", { state: tasks });
    }
    const OnMyTaskClick = () => {
        navigate("/MyTask", { state: tasks });
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
                />
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

