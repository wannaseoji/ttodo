
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
import StyledLink from "../styles/linkStyle";
import PinkLink from '../styles/pinkLink';
import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople





const TeamLink = () => {
    return (<div id="app" className="parent" >
        <div className="box menu" >
            <nav className="seo_nav">
                <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.black', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <List component="nav">
                        <nav>
                            <StyledLink to="/" style={{ textDecoration: 'none' }}>
                                <ListItem >
                                    <ListItemButton sx={{ height: 80, }}>
                                        <VscHome /><ListItemText>Home</ListItemText>
                                    </ListItemButton>

                                </ListItem>
                            </StyledLink>
                        </nav>
                        <nav>
                            <StyledLink to="/Goal" style={{ textDecoration: 'none' }} >

                                <ListItem>
                                    <ListItemButton sx={{ height: 80, }}>
                                        <GiStairsGoal /><ListItemText >Goal</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </StyledLink>

                        </nav>
                        <nav>
                            <StyledLink to="/MyTask" style={{ textDecoration: 'none' }}>

                                <ListItem>

                                    <ListItemButton sx={{ height: 80, }}>
                                        <IoPersonOutline /><ListItemText > MyTask</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </StyledLink>

                        </nav>
                        <nav>
                            <PinkLink to="/TeamLink" style={{ textDecoration: 'none' }}>
                                <ListItem>

                                    <ListItemButton sx={{ height: 80, }}>
                                        <BsPeople></BsPeople><ListItemText >  TeamLink</ListItemText>
                                    </ListItemButton>

                                </ListItem>
                            </PinkLink>
                        </nav>
                    </List>
                </Box>
            </nav >
        </div >
        <div className="box profile"><Profile /></div>
        <div className="box content">
        </div>
        <div className="box follower">팔로워</div>
        <div className="box tasklist">

        </div>
        <div className="box teamlist">

        </div>
    </div >
    );
};

export default TeamLink;