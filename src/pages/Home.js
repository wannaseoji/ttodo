import React, { useState } from "react";

import '../App.css';
import '../styles/grid.css';
import '../styles/linkButton.css';

// ****************** Components ******************//
import Menu from "../components/Menu";
import Team from "../components/Team";
import Profile from "../components/Profile";
import ProfileModal from "../components/ProfileModal";
import CustomTimeLine from "../components/timeline/CustomTimeline";
import ModifyTaskModal from "../components/modal/ModifyTaskModal";
import HomeTaskList from "../components/tasklist/HomeTaskList";
import GrayBox from "../components/GrayBox.js"
import FollowerList from "../components/FollowerList";
import FollowerModal from "../components/FollowerModal";


const Home = ({tasks, teamTask, teams, setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f, myProfile, setMyProfile, followers, member, setMember=f=>f, setFollowers=f=>f})=> {
    const [modalOpen, setModalOpen] = useState(false); // 태스크 수정/삭제 Modal 창 open, close State 확인
    const date = new Date(); // Mon Nov 14 2022 10:50:35 GMT+0900 (한국 표준시)
    const today = date.getFullYear()+"-"+('0' + (date.getMonth() + 1)).slice(-2)+"-"+('0' + date.getDate()).slice(-2); // 2022-11-14
    let todayTasks = tasks.filter(({date})=>date===today) // 시간 상관 없이 당일에 해당하는 task로만 필터링
    // todayTasks.map((value) => console.log(value.title))

    // Task check 변경
    const onCheck = index =>{
        const newTasks = tasks.map(task => {
            if(task.index === index) 
                task.check = !(task.check);
            return task;
        })
        setTasks(newTasks);
    }

    // ********** Modal에 필요한 함수 setting ********** //
    const initTask = {
        "index": 0,
        "id": "",
        "category": "",
        "title": "",
        "date": today,
        "hour": "none",
        "minute": "none",
        "check": false
    }
    const [selectedTask, setSelectedTask] = useState(initTask)
    const modifyTaskHandler = (task) => {
        setSelectedTask(task)
        // onChange(new Date(task.date))
        onShowModifyTaskModal();
    }

    const openModifyTaskModal = () => {
        setModalOpen(true);
    };
    const closeModifyTaskModal = () => {
        setModalOpen(false);
    };

    const onShowModifyTaskModal = () => {
        openModifyTaskModal();
    }

    const onModifyTask = function(modifiedTask){
        const modifiedTasks = tasks.map((task)=>{
            return task.index===modifiedTask.index? modifiedTask:task
        });
        setTasks(modifiedTasks);
    }

    const onDeleteTask = function(){
        const modifiedTasks = tasks.filter((task) => task.index!==selectedTask.index);
        setTasks(modifiedTasks);
        closeModifyTaskModal();
    }

    // ********** 팀 카드 3개이하 저장 ********** //
    const teamCard = [];
    function initTeamCard() {
        for (let i = 0; i < teams.length && i < 3; i++) {
            teamCard[i] = <Team key={i} data={teams[i]} memberData={member} />;
        }
    }
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

    const [profileOpen, setProfileOpen] = useState(false);

    const handleProfileClickOpen = () => {
        setProfileOpen(true)
    };

    const handleProfileClose = () =>  {
        setProfileOpen(false);
    }

    const onShowProfileModal = () => {
        handleProfileClickOpen();
    }
    const modifyProfile = (name, email, intro) => {
        let originName = myProfile[0].name;
        myProfile[0].name = name;
        myProfile[0].email = email;
        myProfile[0].intro = intro;
        //team data에 자신의 이름을 수정

        for(let i = 0; i < teams.length; i++) {
            for(let j = 0; j < teams[i].memberList.length; j++) {
                if (teams[i].memberList[j] === originName) {
                    teams[i].memberList[j] = name;
                }
                teams[i].leader = name;
            }
        }
        for(let i = 0; i < teamTask.length; i++) {
            for(let j = 0; j < teamTask[i].myTask.length; j++) {
                for(let k = 0; k < teamTask[i].myTask[j].relatedMembers.length; k++) {
                    if (teamTask[i].myTask[j].relatedMembers[k] === originName) {
                        teamTask[i].myTask[j].relatedMembers[k] = name;
                    }
                }
            }
        }
        console.log(teamTask);
    }
    const createFollower = (username) => {
        let newFollower = {
            "name" : username,
            "image" : username + ".jpg",
            "intro" : "",
            "email" : username + "@naver.com"
        }
        const newFollowerArr = [...followers, newFollower];
        console.log(newFollowerArr);
        console.log(followers);
        setFollowers(newFollowerArr);
    }
    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <Menu/>
            </div >
            <div className="box profile">
                <Profile 
                    myProfile={myProfile}
                    onShowModal={onShowProfileModal}/>
                <ProfileModal
                    myProfile={myProfile}
                    open={profileOpen}
                    close={handleProfileClose}
                    modifyProfile={modifyProfile} />
            </div>
            <div className="box content">
                <GrayBox boxname="timeline" title="Today Appointment" settingHeight="70vh">
                    <CustomTimeLine tasks={tasks} />
                </GrayBox>
            </div>

            <div className="box follower">
                <FollowerList 
                    follower={followers} 
                    onShowModal={onShow}/>
                <FollowerModal 
                    open={open} 
                    close={handleClose} 
                    follower={followers} 
                    member={member} 
                    createFollower={createFollower}/>
            </div>


            <div className="box tasklist">
                <HomeTaskList
                    tasks={todayTasks}
                    limit={todayTasks.length > 5 ? 5 : todayTasks.length}
                    onCheck={onCheck}
                    onModifyTaskModal={modifyTaskHandler}
                />
                <ModifyTaskModal open={modalOpen} close ={closeModifyTaskModal} header="일정 수정 및 삭제" calendarSelectedDate={date} selectedTask={selectedTask} onModifyTask={onModifyTask} onDeleteTask={onDeleteTask}/>
            </div>
            <div className="box teamlist">
                {initTeamCard()}
                {teamCard.map(v => v)}
            </div>
        </div >
    );
};

export default Home;
