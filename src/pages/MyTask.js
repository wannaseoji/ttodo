import '../App.css';
import '../styles/grid.css';
import Profile from "./Profile";
import React, { useState, useEffect } from "react";
import categoryData from '../assets/category-data.json'
import Scrollbars from 'react-custom-scrollbars';
import OptionsModal from "../components/modal/OptionsModal";
import AddTaskModal from "../components/modal/AddTaskModal";
import CategoryScrollList from "../components/tasklist/CategoryScrollList"
import CustomCalendar from "../components/CustomCalendar";
import Menu from "../components/Menu";
import '../styles/linkButton.css';

const MyTask = ({tasks, teamTask, teams, setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f}) => {
    const onNewTask = function(id, category, title, date, hour, minute){ // id, category, title, date, hour, minute, check
        console.log("new task 추가")
        let indexs = tasks.map((task)=>task.index).sort((a,b) => a-b)
        console.log(indexs)
        const newIndex = indexs[indexs.length-1]+1
        const newTasks = [...tasks, {index: newIndex, id, category, title, date, hour, minute, check:false}]
        console.log(newTasks)
        setTasks(newTasks)
      }

    const [addCategoryName, setAddCategoryName] = useState("");
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
        console.log("oncheck")
        setTasks(newTasks);
    }

    const addTaskHandler = (e, categoryName) => {
        onShowAddTaskModal();
        setAddCategoryName(categoryName);
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

    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <Menu/>
            </div >
            <div className="box profile"><Profile/></div>
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
                        onAddTaskModal = {addTaskHandler}
                    />
                </Scrollbars>
                <AddTaskModal open={addTaskModalOpen} close={closeAddTaskModal} onNewTask={onNewTask} header="일정 추가" category={addCategoryName}/>
                <OptionsModal open={modalOpen} close ={closeOptionsModal} header="Options" />
            </div>
            {/* <div className="box teamlist">

            </div> */}
        </div >
    );
};

export default MyTask;