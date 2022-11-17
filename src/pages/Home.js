import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Team from "../components/Team";
import Profile from "./Profile";
import CustomTimeLine from "../components/timeline/CustomTimeline";
import React, { useState, useEffect } from "react";
import OptionsModal from "../components/modal/OptionsModal";
import HomeTaskList from "../components/tasklist/HomeTaskList";
import taskData from '../assets/task-data.json';
import teamTaskData from '../assets/team-task-data.json'
import AddTaskModal from "../components/modal/AddTaskModal";
import teamData from "../assets/team.json"
import StyledListItem from "../styles/linkStyle";
import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople
import Button from '@material-ui/core/Button';
import '../styles/linkButton.css';

const Home = () => {
    const [teamTask, setTeamTask] = useState(teamTaskData)
    const [teams, setTeams] = useState(teamData);
    const [tasks, setTasks] = useState(taskData);
    useEffect(() => setTasks(taskData), [taskData]);
    const [modalOpen, setModalOpen] = useState(false); // Options Modal 창 open, close State 확인
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(false); // AddTask Modal 창 open, close State 확인


    const date = new Date(); // Mon Nov 14 2022 10:50:35 GMT+0900 (한국 표준시)
    const today = date.getFullYear()+"-"+('0' + (date.getMonth() + 1)).slice(-2)+"-"+('0' + date.getDate()).slice(-2); // 2022-11-14
    let todayTasks = tasks.filter(({date})=>date===today) // 시간 상관 없이 당일에 해당하는 task로만 필터링
    todayTasks.map((value) => console.log(value.title))

    // Task check 변경
    const onCheck = index =>{
        const newTasks = tasks.map(task => {
            if(task.index === index) 
                task.check = !(task.check);
            return task;
        })
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

    //팀 카드 3개이하 저장
    const teamCard = [];
    function initTeamCard() {
        for (let i = 0; i < teams.length && i < 3; i++) {
            teamCard[i] = <Team key={i} data={teams[i]} />;
        }
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
                <CustomTimeLine tasks={tasks} />
            </div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">
                <HomeTaskList
                    tasks={todayTasks}
                    limit={5}
                    onCheck={onCheck}
                    onOptionsModal={onShowOptionsModal}
                    onAddTaskModal = {onShowAddTaskModal}
                />
                <AddTaskModal open={addTaskModalOpen} close={closeAddTaskModal} onNewTask={onNewTask} header="일정 추가" category="Study"/>
                <OptionsModal open={modalOpen} close ={closeOptionsModal} header="Options" />
            </div>
            <div className="box teamlist">

                {initTeamCard()}
                {teamCard.map(v => v)}
            </div>
        </div >
    );
};

export default Home;

