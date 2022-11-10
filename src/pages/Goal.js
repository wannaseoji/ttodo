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
    let numTasks = 0;
    let numTrue = 0;
    tasks.map(task => numTasks++)
    console.log(numTasks)
    tasks.map(task => task.check === true ? numTrue++ : numTrue)
    console.log(numTrue)
    console.log("This is home and Tasks are transfered", tasks)
    const { id } = tasks;
    console.log(id)
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

    const progressData = [
        {
            "id": "STUDY",
            "ranges": [
                68,
                40,
                70,
                0,
                120
            ],
            "measures": [
                89
            ],
            "markers": [
                82
            ]
        },
        {
            "id": "EXERCISE",
            "ranges": [
                0.8413840746810386,
                0.3671208093174572,
                1.485443638492447,
                0,
                2
            ],
            "measures": [
                0.21568446763652868,
                0.43504834443079554
            ],
            "markers": [
                1.6696273680813452
            ]
        },
        {
            "id": "FRIENDS",
            "ranges": [
                0,
                1,
                38,
                0,
                1,
                27,
                0,
                40
            ],
            "measures": [
                10
            ],
            "markers": [
                32
            ]
        },
        {
            "id": "ROCKIN",
            "ranges": [
                6962,
                48038,
                415093,
                0,
                500000
            ],
            "measures": [
                24233,
                181784
            ],
            "markers": [
                389124
            ]
        },
        {
            "id": "ROCKIN",
            "ranges": [
                0,
                8,
                1,
                0,
                9
            ],
            "measures": [
                6
            ],
            "markers": [
                5.812582440603217,
                5.731667684129301
            ]
        }
    ]

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
            <div className="box tasklist"><MyBarCharts data={progressData} /></div>
            <div className="box teamlist">

            </div>
        </div >


    );
};

export default Goal;