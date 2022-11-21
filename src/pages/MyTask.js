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
        setTasks(newTasks)
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

    const onCheck = index => {
        const newTasks = tasks.map(task => {
            if(task.index === index) 
                task.check = !(task.check);
            return task;
        })
        // console.log("oncheck")
        setTasks(newTasks);
    }

    const addTaskHandler = (e, categoryName) => {
        onShowAddTaskModal();
        setAddCategoryName(categoryName);
    }

    const openModifyTaskModal = () => {
        setModalOpen(true);
        console.log(`modal openOption : ${modalOpen}`)
    };
    const closeModifyTaskModal = () => {
        setModalOpen(false);
        console.log(`modal closeOption : ${modalOpen}`)
    };

    const onShowModifyTaskModal = () => {
        console.log(`onShowModifyTaskModal`)
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
    //프로필을 변경하는 메소드(장훈)
    const modifyProfile = (name, email, intro) => {
        myProfile[0].name = name;                       //로그인/로그아웃이 없어서 json에는 프로필에 대한 정보는 하나,
        myProfile[0].email = email;                     //그래서 이렇게 코드를 짰어요
        myProfile[0].intro = intro;
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
                        onModifyTaskModal={onShowModifyTaskModal}
                        onAddTaskModal = {addTaskHandler}
                    />
                </Scrollbars>
                <AddTaskModal open={addTaskModalOpen} close={closeAddTaskModal} onNewTask={onNewTask} header="일정 추가" category={addCategoryName} calendarSelectedDate={selectedDate}/>
                <ModifyTaskModal open={modalOpen} close ={closeModifyTaskModal} header="Options" />
            </div>
            {/* <div className="box teamlist">

            </div> */}
        </div >
    );
};

export default MyTask;