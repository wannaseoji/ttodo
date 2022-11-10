import MyResponsivePie from '../components/Chart'
//import data from '../components/data'
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
import StyledListItem from '../styles/linkStyle';
import PinkLink from '../styles/pinkLink';
import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople
import { useState } from 'react'
import taskData from '../assets/task-data.json'
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';
import MyBarCharts from '../components/BarChart';
import getPieData from '../components/getPieData';
import getProgressData from '../components/getProgressData';
const Goal = () => {
    const navigate = useNavigate();

    const OnGoalClick = () => {
        navigate('/Goal', {});
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
    const location = useLocation();
    const tasks = location.state;



    //const numOftasks = tasks;
    //console.log(numOftasks)
    //const { id, date } = tasks;

    //console.log(numTrue)
    console.log("This is home and Tasks are transfered", tasks)
    const [numTasks, numTrue] = getPieData(tasks);
    const Piedata = [{
        id: '완료',
        label: '완료',
        value: numTrue,
        color: "#f768a1"
    },
    {
        id: '미완료',
        label: '미완료',
        value: (numTasks - numTrue),
        color: '#f768a1'
    }
    ]
    //category별 진척도

    const categoryFilter = (keyWord) => tasks.map(task => { return task.category });

    const categories = categoryFilter(tasks)
    console.log("categories", categories)
    const uniqueArr = (array) => array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
    const uniqueCategories = uniqueArr(categories);
    const progressData = uniqueCategories.map((category, i) => {
        return getProgressData(tasks, category)
    })
    const uniqueProgressData = uniqueArr(progressData);

    console.log("progressData", uniqueProgressData);



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

                <div style={{ width: '100%', height: '100%', }}>
                    <MyResponsivePie data={Piedata} />
                </div>
            </div>
            <div className="box follower"></div>
            <div className="box tasklist">
                <MyBarCharts data={uniqueProgressData} />
            </div>
            <div className="box teamlist">

            </div>
        </div >


    );
};

export default Goal;