
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
// import taskData from '../assets/task-data.json';
import Modal from '../components/Modal';
// import teamData from "../assets/team.json"
//import { Link } from "react-router-dom";
import StyledListItem from "../styles/linkStyle";
import PinkLink from '../styles/pinkLink';
import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople
import { useNavigate } from "react-router";
import {BsPlusCircleFill} from "react-icons/bs";
import { textAlign, width } from "@mui/system";
import { AiOutlinePlus } from 'react-icons/ai';
import TeamEditList from "../components/TeamEditList"
import Notice from "../components/Notice";
import TeamModal from "../components/TeamModal";
import { useLocation } from 'react-router-dom';

const TeamLink = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false); // Options Modal 창 open, close State 확인

    const OnGoalClick = () => {
        navigate('/Goal', { state: {tasks, teams, teamTask}});
    }
    const OnHomeClick = () => {
        navigate("/", {});
    }
    const OnTeamClick = () => {
        navigate("/TeamLink", {});
    }
    const OnMyTaskClick = () => {
        navigate("/MyTask", {});
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

    //내 코드 시작
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onShow = () => {
        handleClickOpen();
    }
    //내 코드 끝

    const location = useLocation();

    //teamState: team.json, teamTaskState: team-task-data.json
    const {tasks ,teams, teamTask} = location.state;
    console.log(teams);
    console.log(teamTask);

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
                <TeamEditList onShowModal={onShow} teamData={teams}/>
                <TeamModal open={open} close={handleClose} />
            </div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">

            </div>

            <div className="box notice">
                <Notice teamData={teams}/>
            </div>
        </div >
    );
};

export default TeamLink;