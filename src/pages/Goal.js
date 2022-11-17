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
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, } from 'recharts'
import Slider from '../components/Slider'
import Slide from '../components/Slide'


import Button from '@material-ui/core/Button';
import '../styles/linkButton.css';
const Goal = () => {
    const navigate = useNavigate();

    const OnGoalClick = () => {
        navigate('/Goal', {});
    }
    const OnHomeClick = () => {
        navigate("/", {});
    }
    const OnTeamClick = () => {
        navigate('/TeamLink', { state: { tasks, teams, teamTask } });
    }
    const OnMyTaskClick = () => {
        navigate("/MyTask", {});
    }
    const location = useLocation();
    const { tasks, teams, teamTask } = location.state;



    //const numOftasks = tasks;
    //console.log(numOftasks)
    //const { id, date } = tasks;

    //console.log(numTrue)
    console.log("This is home and Tasks are transfered", tasks)
    const [numTasks, numTrue] = getPieData(tasks);
    const Piedata = [{
        id: '완료',
        // label: '완료',
        value: numTrue,
        color: "#f768a1"
    },
    {
        id: '미완료',
        // label: '미완료',
        value: (numTasks - numTrue),
        color: '#f768a1'
    }
    ]
    //category별 진척도

    const categoryFilter = (keyWord) => tasks.map(task => { return task.category });

    const categories = categoryFilter(tasks)

    const uniqueArr = (array) => array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
    const uniqueCategories = uniqueArr(categories);
    console.log("uniqueCategories", uniqueCategories)
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
                                    <Button class="linkButton" sx={{ height: 80, }} component={Link} to="/" state={{ tasks: tasks, teams: teams, teamTask: teamTask }}>
                                        <VscHome /><ListItemText class="menuName"> Home</ListItemText>
                                    </Button>
                                </StyledListItem>
                                {/*</PinkLink>*/}
                            </nav>
                            <nav >

                                <StyledListItem>
                                    <Button class="linkButton" component={Link} to="/Goal" state={{ tasks: tasks, teams: teams, teamTask: teamTask }}>
                                        <GiStairsGoal /><ListItemText class="menuName"> Goal</ListItemText>
                                    </Button>
                                </StyledListItem>

                            </nav>
                            <nav>
                                {/*<StyledLink to="/MyTask" style={{ textDecoration: 'none' }}>*/}
                                <StyledListItem>
                                    <Button class="linkButton" component={Link} to="/MyTask" state={{ tasks: tasks, teams: teams, teamTask: teamTask }}>
                                        <IoPersonOutline /><ListItemText class="menuName"> MyTask</ListItemText>
                                    </Button>
                                </StyledListItem>
                                {/*</StyledLink>*/}

                            </nav>
                            <nav>
                                {/* <StyledLink to="/TeamLink" style={{ textDecoration: 'none' }}>*/}
                                <StyledListItem>
                                    <Button class="linkButton" component={Link} to="/TeamLink" state={{ tasks: tasks, teams: teams, teamTask: teamTask }}>
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
            <div className="box content"  >
                <div style={{ width: '100%', height: '100%', }}>
                    <Slider Piedata={Piedata} />
                    {/* <Slide Piedata={Piedata} /> */}
                </div>
            </div>
            <div className="box follower"></div>
            <div className="box tasklist">

                <ResponsiveContainer width='90%' aspect={4.0 / 2.0}>
                    <BarChart data={uniqueProgressData} layout="vertical" fill="#000000" width={150} height={40}>
                        <XAxis type="number" dataKey="total" hide />
                        <YAxis dataKey="name" reversed type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar legendType="category" dataKey="done" fill="#FF9AB5" />
                    </BarChart>
                </ResponsiveContainer>
                {/* <MyBarCharts data={uniqueProgressData} /> */}
            </div>
            <div className="box teamlist">

            </div>
        </div >


    );
};

export default Goal;



