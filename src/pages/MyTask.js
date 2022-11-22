import '../App.css';
import '../styles/grid.css';
import Team from "../components/Team";
import Profile from "../components/Profile";
import CustomTimeLine from "../components/timeline/CustomTimeline";
import React, { useState, useEffect } from "react";
import categoryData from '../assets/category-data.json'
import Scrollbars from 'react-custom-scrollbars';
import ModifyTaskModal from "../components/modal/ModifyTaskModal";
import AddTaskModal from "../components/modal/AddTaskModal";
import CategoryScrollList from "../components/tasklist/CategoryScrollList"
import CustomCalendar from "../components/CustomCalendar";
import Menu from "../components/Menu";
import GrayBox from "../components/GrayBox"
import '../styles/linkButton.css';
import ProfileModal from '../components/ProfileModal';

const MyTask = ({tasks, teamTask, teams, setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f, myProfile}) => {
    const onNewTask = function(id, category, title, date, hour, minute){ // id, category, title, date, hour, minute, check
        console.log("new task 추가")
        let indexs = tasks.map((task)=>task.index).sort((a,b) => a-b)
        const newIndex = indexs[indexs.length-1]+1
        const newTasks = [...tasks, {index: newIndex, id, category, title, date, hour, minute, check:false}]
        console.log("%%%%%%%%%%%%%%%%%%%")
        console.log(newTasks)
        setTasks(newTasks)
    }

    const onModifyTask = function(selectedTask){
        console.log("task 수정 전")
        console.log(tasks)
        console.log(selectedTask)

        const modifiedTasks = tasks.map((task)=>{
            return task.index===selectedTask.index? {...task, title:"수정됨"}:task
        })
        console.log("task 수정 후")
        console.log(modifiedTasks)
    }

    const DateToYYYYMMDD = (date) => {
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    
    return year + "-" + month + "-" + day;
    }

    const [addCategoryName, setAddCategoryName] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(false); // AddTask Modal 창 open, close State 확인
    const [selectedDate, onChange] = useState(new Date()); // Mon Nov 14 2022 10:50:35 GMT+0900 (한국 표준시)
    // const selectedDateString = selectedDate.getFullYear()+"-"+('0' + (selectedDate.getMonth() + 1)).slice(-2)+"-"+('0' + selectedDate.getDate()).slice(-2); // 2022-11-14
    const selectedDateString = DateToYYYYMMDD(selectedDate)
    const selectedDateTasks = tasks.filter(({date})=>date===selectedDateString) // 시간 상관 없이 당일에 해당하는 task로만 필터링

    const initTask = {
        "index": 0,
        "id": "",
        "category": "",
        "title": "",
        "date": selectedDate,
        "hour": "none",
        "minute": "none",
        "check": false
    }
    const [selectedTask, setSelectedTask] = useState(initTask)

    const onCheck = index => {
        const newTasks = tasks.map(task => {
            if(task.index === index) 
                task.check = !(task.check);
            return task;
        })
        setTasks(newTasks);
    }

    const addTaskHandler = (e, categoryName) => {
        onShowAddTaskModal();
        setAddCategoryName(categoryName);
    }

    const modifyTaskHandler = (task) => {
        setSelectedTask(task)
        onChange(new Date(task.date))
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

    const openAddTaskModal = () => {
        setAddTaskModalOpen(true);
    };
    const closeAddTaskModal = () => {
        setAddTaskModalOpen(false);
    };
    const onShowAddTaskModal = () => {
        openAddTaskModal();
    }

    //장훈 코드(프로필 모달 )
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

    //프로필을 변경하는 메소드(장훈)(팀에 있는 내 이름과 관련된 정보를 다 바꿈)
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
                <GrayBox boxname="calendar" title="Calendar"  settingHeight="70vh">
                    <CustomCalendar tasks={tasks} value={selectedDate} onChange={onChange}/>
                </GrayBox>
            </div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">
                <Scrollbars style={{width: '100%',height:'100%', backgroundColor: "transparent", borderRadius:"0px 0px 10px 10px"}}>
                    <CategoryScrollList
                        categories={categoryData}
                        tasks={selectedDateTasks}
                        onCheck={onCheck}
                        onModifyTaskModal={modifyTaskHandler}
                        onAddTaskModal = {addTaskHandler}
                    />
                </Scrollbars>
                <AddTaskModal open={addTaskModalOpen} close={closeAddTaskModal} onNewTask={onNewTask} header="일정 추가" category={addCategoryName} calendarSelectedDate={selectedDate} initTask={initTask}/>
                <ModifyTaskModal open={modalOpen} close ={closeModifyTaskModal} onNewTask={onNewTask} header="일정 수정 및 삭제" category={addCategoryName} calendarSelectedDate={selectedDate} selectedTask={selectedTask} onModifyTask={onModifyTask}/>
            </div>
            {/* <div className="box teamlist">

            </div> */}
        </div >
    );
};

export default MyTask;