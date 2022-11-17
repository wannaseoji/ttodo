
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Profile from "./Profile";
import React, { useState, useEffect } from "react";
import StyledListItem from "../styles/linkStyle";

import taskData from '../assets/task-data.json';
import categoryData from '../assets/category-data.json'

import Scrollbars from 'react-custom-scrollbars';

import OptionsModal from "../components/modal/OptionsModal";
import AddTaskModal from "../components/modal/AddTaskModal";

import CategoryScrollList from "../components/tasklist/CategoryScrollList"

import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';
import CustomCalendar from "../components/CustomCalendar";
import Button from '@material-ui/core/Button';
import '../styles/linkButton.css';

const MyTask = () => {
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


    const [tasks,setTasks] = useState(taskData);
    //useEffect(()=> setTasks(taskData), [taskData]);
    const [modalOpen, setModalOpen] = useState(false);
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(false); // AddTask Modal 창 open, close State 확인

    const date = new Date(); // Mon Nov 14 2022 10:50:35 GMT+0900 (한국 표준시)
    const today = date.getFullYear()+"-"+('0' + (date.getMonth() + 1)).slice(-2)+"-"+('0' + date.getDate()).slice(-2); // 2022-11-14
    let todayTasks = tasks.filter(({date})=>date===today) // 시간 상관 없이 당일에 해당하는 task로만 필터링
    todayTasks.map((value) => console.log(value.title))

    const onCheck = index =>{
        const newTasks = tasks.map(task => {
            if(task.index === index) 
                task.check = !(task.check);
            return task;
        })
        setTasks(newTasks);
    }

    const openOptionsModal = () => {
        setModalOpen(true);
        console.log(`modal openOption : ${modalOpen}`)
    };
    const closeOptionsModal = () => {
        setModalOpen(false);
        console.log(`modal closeOption : ${modalOpen}`)
    };

    const onShowOptionsModal = () => {
        console.log(`onShowOptionsModal`)
        openOptionsModal();
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

    const location = useLocation();
    const {taskss ,teams, teamTask} = location.state;

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
                <CustomCalendar tasks={tasks}/>
            </div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">
                <Scrollbars style={{width: '100%',height:'100%', backgroundColor: "transparent", borderRadius:"0px 0px 10px 10px"}}>
                    <CategoryScrollList
                        categories={categoryData}
                        tasks={todayTasks}
                        onCheck={onCheck}
                        onOptionsModal={onShowOptionsModal}
                    />
                </Scrollbars>
                <AddTaskModal open={addTaskModalOpen} close={closeAddTaskModal} onNewTask={onNewTask} header="일정 추가" category="Study"/>
                <OptionsModal open={modalOpen} close ={closeOptionsModal} header="Options" />
            </div>
            {/* <div className="box teamlist">

            </div> */}
        </div >
    );
};

export default MyTask;