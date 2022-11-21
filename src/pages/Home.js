import React, { useState, useEffect } from "react";

import '../App.css';
import '../styles/grid.css';
import '../styles/linkButton.css';

// ****************** Components ******************//
import Menu from "../components/Menu";
import Team from "../components/Team";
import Profile from "./Profile";
import CustomTimeLine from "../components/timeline/CustomTimeline";
import OptionsModal from "../components/modal/OptionsModal";
import HomeTaskList from "../components/tasklist/HomeTaskList";
import GrayBox from "../components/GrayBox.js"

// const Home = () => {
//     const [teamTask, setTeamTask] = useState(teamTaskData)
//     const [teams, setTeams] = useState(teamData);
//     const [tasks, setTasks] = useState(taskData);
//     const [followers, setfollowers] = useState(followerData);
//     useEffect(() => setTasks(taskData), [taskData]);
//     const [modalOpen, setModalOpen] = useState(false); // Options Modal 창 open, close State 확인
//     const [addTaskModalOpen, setAddTaskModalOpen] = useState(false); // AddTask Modal 창 open, close State 확인

const Home = ({tasks, teamTask, teams, setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f})=> {
    const [modalOpen, setModalOpen] = useState(false); // Options Modal 창 open, close State 확인

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


    // ********** Modal open close setting 하기 ********** //
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

    // ********** 팀 카드 3개이하 저장 ********** //
    const teamCard = [];
    function initTeamCard() {
        for (let i = 0; i < teams.length && i < 3; i++) {
            teamCard[i] = <Team key={i} data={teams[i]} />;
        }
    }

    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <Menu/>
            </div >
            <div className="box profile"><Profile /></div>
            <div className="box content">
                <GrayBox boxname="timeline" title="Today Appointment">
                    <CustomTimeLine tasks={tasks} />
                </GrayBox>
            </div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">
                <HomeTaskList
                    tasks={todayTasks}
                    limit={5}
                    onCheck={onCheck}
                    onOptionsModal={onShowOptionsModal}
                />
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
