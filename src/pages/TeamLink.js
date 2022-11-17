
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
import CategoryList from "../components/CategoryList";
import MemberList from "../components/MemberList";
import Button from '@material-ui/core/Button';
import '../styles/linkButton.css';


const TeamLink = () => {
    const navigate = useNavigate();

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
    const [teams1, setTeams1] = useState(teams);

    //Team 생성
    const onNewTeam = function(name, memberList, intro, reader) {
        console.log("new team 추가")
        // name, memberList, notice, intro, reader
        const newTeams = {
            name: name,
            memberList: [],
            notice: [],
            intro: intro,
            reader: reader
        }
        const t1 = [...teams1, newTeams]
        setTeams1(t1)
        console.log(t1)
    }
    
    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <nav className="seo_nav">
                    <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.black', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <List component="nav">
                    <nav>
                                {/*<PinkLink to="/" style={{ textDecoration: 'none' }}>*/}
                                <StyledListItem >
                                    <Button class="linkButton" sx={{ height: 80, }} component={Link} to="/" state={{ tasks: tasks, teams:teams, teamTask:teamTask }}>
                                        <VscHome /><ListItemText class="menuName"> Home</ListItemText>
                                    </Button>
                                </StyledListItem>
                                {/*</PinkLink>*/}
                            </nav>
                            <nav >

                                <StyledListItem>
                                    <Button class="linkButton" component={Link} to="/Goal" state={{ tasks: tasks, teams:teams, teamTask:teamTask }}>
                                        <GiStairsGoal /><ListItemText class="menuName"> Goal</ListItemText>
                                    </Button>
                                </StyledListItem>

                            </nav>
                            <nav>
                                {/*<StyledLink to="/MyTask" style={{ textDecoration: 'none' }}>*/}
                                <StyledListItem>
                                    <Button class="linkButton" component={Link} to="/MyTask" state={{ tasks: tasks, teams:teams, teamTask:teamTask }}>
                                        <IoPersonOutline /><ListItemText class="menuName"> MyTask</ListItemText>
                                    </Button>
                                </StyledListItem>
                                {/*</StyledLink>*/}

                            </nav>
                            <nav>
                                {/* <StyledLink to="/TeamLink" style={{ textDecoration: 'none' }}>*/}
                                <StyledListItem>
                                     <Button class="linkButton" component={Link} to="/TeamLink" state={{ tasks: tasks, teams:teams, teamTask:teamTask }}>
                                        <BsPeople /><ListItemText class="menuName"> TeamLink</ListItemText>
                                    </Button>
                                </StyledListItem>
                                {/* </StyledLink>*/}
                            </nav>
                        </List>
                    </Box>
                </nav >
            </div >
            <div className="box profile"><Profile /></div>
            <div className="box content">
                <TeamEditList onShowModal={onShow} teamData={teams1}/>
                <TeamModal open={open} close={handleClose} onNewTeam={onNewTeam}/>
            </div>
            <div className="box follower"><MemberList teams={teams}/></div>
            <div className="box tasklist">
                <CategoryList/>
            </div>
            <div className="box notice">
                <Notice teamData={teams1}/>
            </div>
        </div >
    );
};

export default TeamLink;