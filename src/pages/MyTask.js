import '../App.css';
import '../styles/grid.css';
import Team from "../components/Team";
import Profile from "../components/Profile";
import CustomTimeLine from "../components/timeline/CustomTimeline";
import React, { useState, useEffect } from "react";
import Scrollbars from 'react-custom-scrollbars';
import ModifyTaskModal from "../components/modal/ModifyTaskModal";
import AddTaskModal from "../components/modal/AddTaskModal";
import CategoryScrollList from "../components/tasklist/CategoryScrollList"
import CustomCalendar from "../components/CustomCalendar";
import Menu from "../components/Menu";
import GrayBox from "../components/GrayBox"
import '../styles/linkButton.css';
import ProfileModal from '../components/ProfileModal';
import { AiOutlineSetting } from "react-icons/ai";
import { AiFillFolderAdd } from "react-icons/ai";
import CategorySettingModal from '../components/modal/CategorySettingModal'

import AddCategoryModal from "../components/modal/AddCategoryModal"
import ModifyCategoryModal from '../components/modal/ModifyCategoryModal';


const MyTask = ({ tasks, teamTask, teams, setTeamTask = f => f, setTasks = f => f, setTeams = f => f,  member, categories, setCategories = f => f }) => {
    const me = member.filter((v) => v.me === "true")[0] //내 데이터
    const onNewTask = function (id, category, title, date, hour, minute) { // id, category, title, date, hour, minute, check
        let indexs = tasks.map((task) => task.index).sort((a, b) => a - b)
        const newIndex = indexs[indexs.length - 1] + 1
        const newTasks = [...tasks, { index: newIndex, id, category, title, date, hour, minute, check: false }]
        setTasks(newTasks)
    }

    const onNewCategory = function (title) {
        let index = categories.map(category => category.index).sort((a, b) => a - b)
        const newIndex = index[index.length - 1] + 1
        const newCategories = [...categories, { index: newIndex, title: title }]
        setCategories(newCategories)
    }

    const onModifyTask = function (modifiedTask) {
        const modifiedTasks = tasks.map((task) => {
            return task.index === modifiedTask.index ? modifiedTask : task
        })
        setTasks(modifiedTasks)
    }

    const onModifyCategory = function (modifiedCategory) {
        const modifiedCategories = categories.map((category) => {
            return category.index === modifiedCategory.index ? modifiedCategory : category
        })
        setCategories(modifiedCategories)
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
    const [categorySettingModalOpen, setCategorySettingModalOpen] = useState(false);
    const [selectedDate, onChange] = useState(new Date()); // Mon Nov 14 2022 10:50:35 GMT+0900 (한국 표준시)
    // const selectedDateString = selectedDate.getFullYear()+"-"+('0' + (selectedDate.getMonth() + 1)).slice(-2)+"-"+('0' + selectedDate.getDate()).slice(-2); // 2022-11-14
    const selectedDateString = DateToYYYYMMDD(selectedDate)
    const selectedDateTasks = tasks.filter(({ date }) => date === selectedDateString) // 시간 상관 없이 당일에 해당하는 task로만 필터링

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
            if (task.index === index)
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

    const onDeleteTask = function () {
        const modifiedTasks = tasks.filter((task) => task.index !== selectedTask.index);
        setTasks(modifiedTasks);
        closeModifyTaskModal();
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

    // 카테고리 추가 / 수정 / 삭제
    const openCategorySettingModal = () => {
        setCategorySettingModalOpen(true);
    };
    const closeCategorySettingModal = () => {
        setCategorySettingModalOpen(false);
    };
    const onShowCategorySettingModal = () => {
        openCategorySettingModal();
    }

    // Category 추가 모달
    const [addCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
    const openAddCategoryModal = () => {
        setAddCategoryModalOpen(true);
    };
    const closeAddCategoryModal = () => {
        setAddCategoryModalOpen(false);
    };
    const onShowAddCategoryModal = () => {
        openAddCategoryModal();
    }

    // Category 수정 모달
    const [modifyCategoryModalOpen, setModifyCategoryModalOpen] = useState(false)
    const openModifyCategoryModal = () => {
        setModifyCategoryModalOpen(true);
    };
    const closeModifyCategoryModal = () => {
        setModifyCategoryModalOpen(false);
    };

    const onShowModifyCategoryModal = () => {
        openModifyCategoryModal();
    }

    const initCategory = {
        "index": 0,
        "title": ""
    }

    const [selectedCategory, setSelectedCategory] = useState(initCategory)

    const modifyCategoryHandler = (category) => {
        setSelectedCategory(category)
        onShowModifyCategoryModal();
    }

    //카테고리 삭제
    const onDeleteCategory = function () {
        
        const modifiedTasks = tasks.filter(task=> {
            console.log(`task category : ${task.category}  selectedCategory : ${selectedCategory.title}`)
            return (task.category !== selectedCategory.title)})
        const modifiedCategories = categories.filter((category) => category.index !== selectedCategory.index);
        
        setCategories(modifiedCategories);
        setTasks(modifiedTasks)
        closeModifyCategoryModal();
    }

    //장훈 코드(프로필 모달 )
    const [profileOpen, setProfileOpen] = useState(false);

    const handleProfileClickOpen = () => {
        setProfileOpen(true)
    };

    const handleProfileClose = () => {
        setProfileOpen(false);
    }

    const onShowProfileModal = () => {
        handleProfileClickOpen();
    }

    const modifyProfile = (name, email, intro) => {
        //공백 처리
        if(name === "" || email === "" || intro === "")  { 
            alert(`공백을 입력할 수 없습니다.`)
            return;
        }
        let originName = me.name;
        me.name = name;
        me.email = email;
        me.intro = intro;

        //member의 정보를 수정
        for (let i = 0; i < member.length; i++) {
            if (member[i].name === originName) {
                member[i].name = name;
            }
        }

        //team data에 자신의 이름을 수정
        for (let i = 0; i < teams.length; i++) {
            for (let j = 0; j < teams[i].memberList.length; j++) {
                if (teams[i].memberList[j] === originName) {
                    teams[i].memberList[j] = name;
                }
                teams[i].leader = name;
            }
        }
        for (let i = 0; i < teamTask.length; i++) {
            for (let j = 0; j < teamTask[i].myTask.length; j++) {
                for (let k = 0; k < teamTask[i].myTask[j].relatedMembers.length; k++) {
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
                <Menu pageNum={2}/>
            </div >
            <div className="box profile">
                <Profile
                    myProfile={me}
                    onShowModal={onShowProfileModal} />
                <ProfileModal
                    myProfile={me}
                    open={profileOpen}
                    close={handleProfileClose}
                    modifyProfile={modifyProfile} />
            </div>
            <div className="box content">
                <GrayBox boxname="calendar" title="Calendar" settingHeight="70vh">
                    <CustomCalendar tasks={tasks} value={selectedDate} onChange={onChange} />
                </GrayBox>
            </div>
            <div className="box follower">
                <AiFillFolderAdd
                    size="5vh"
                    style={{
                        color: "FF9AB5",
                        marginTop: "auto",
                        marginLeft: "75%"
                    }}
                    onClick={onShowCategorySettingModal} />
                <CategorySettingModal
                    open={categorySettingModalOpen}
                    close={closeCategorySettingModal}
                    header="카테고리"
                    categories={categories}
                    onShowAddCategoryModal={onShowAddCategoryModal}
                    modifyCategoryHandler={modifyCategoryHandler} />
                <AddCategoryModal
                    open={addCategoryModalOpen}
                    close={closeAddCategoryModal}
                    header="카테고리 추가"
                    categories={categories}
                    onNewCategory={onNewCategory}/>
                <ModifyCategoryModal
                    open={modifyCategoryModalOpen}
                    close={closeModifyCategoryModal}
                    header={"카테고리 수정 및 삭제"}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onModifyCategory={onModifyCategory}
                    onDeleteCategory={onDeleteCategory} />
            </div>
            <div className="box tasklist"  style={{height : "75vh"}}>
                <Scrollbars style={{ width: '90%', height: '100%', marginLeft: '-3rem', backgroundColor: "transparent", borderRadius: "0px 0px 10px 10px" }}>
                    <CategoryScrollList
                        categories={categories}
                        tasks={selectedDateTasks}
                        onCheck={onCheck}
                        onModifyTaskModal={modifyTaskHandler}
                        onAddTaskModal={addTaskHandler}
                    />
                </Scrollbars>
                <AddTaskModal open={addTaskModalOpen} close={closeAddTaskModal} onNewTask={onNewTask} header="일정 추가" category={addCategoryName} calendarSelectedDate={selectedDate} initTask={initTask} />
                <ModifyTaskModal open={modalOpen} close={closeModifyTaskModal} header="일정 수정 및 삭제" calendarSelectedDate={selectedDate} selectedTask={selectedTask} onModifyTask={onModifyTask} onDeleteTask={onDeleteTask} />
            </div>
            {/* <div className="box teamlist">

            </div> */}
        </div >
    );
};

export default MyTask;