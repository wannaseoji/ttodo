
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Profile from "./Profile";
import React, { useState, useEffect } from "react";
import StyledListItem from "../styles/linkStyle";
import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople
import TeamEditList from "../components/TeamEditList"
import Notice from "../components/Notice";
import TeamModal from "../components/TeamModal";
import { useLocation } from 'react-router-dom';
import CategoryList from "../components/CategoryList";
import MemberList from "../components/MemberList";
import Button from '@material-ui/core/Button';
import '../styles/linkButton.css';


const TeamLink = () => {
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
                                    <StyledListItem >
                                        <Button className="linkButton" component={Link} to="/" state={{ tasks: tasks, teams:teams, teamTask:teamTask }}>
                                            <VscHome /><ListItemText className="menuName"> Home</ListItemText>
                                        </Button>
                                    </StyledListItem>
                                </nav>
                                <nav >
                                    <StyledListItem>
                                        <Button className="linkButton" component={Link} to="/Goal" state={{ tasks: tasks, teams:teams, teamTask:teamTask }}>
                                            <GiStairsGoal /><ListItemText className="menuName"> Goal</ListItemText>
                                        </Button>
                                    </StyledListItem>
                                </nav>
                                <nav>
                                    <StyledListItem>
                                        <Button className="linkButton" component={Link} to="/MyTask" state={{ tasks: tasks, teams:teams, teamTask:teamTask }}>
                                            <IoPersonOutline /><ListItemText className="menuName"> My Task</ListItemText>
                                        </Button>
                                    </StyledListItem>
                                </nav>
                                <nav>
                                    <StyledListItem>
                                        <Button className="linkButton" component={Link} to="/TeamLink" state={{ tasks: tasks, teams:teams, teamTask:teamTask }}>
                                            <BsPeople /><ListItemText className="menuName"> Team</ListItemText>
                                        </Button>
                                    </StyledListItem>
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