//import data from '../components/data'
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import Team from "../components/Team";
import Profile from "../components/Profile";
import StyledListItem from '../styles/linkStyle';
import getPieData from '../components/piechart/getPieData';
import getProgressData from '../components/barchart/getProgressData';
import Slider from '../components/slides/Slider'
import Menu from '../components/Menu';
import '../styles/linkButton.css';
import getLineChartData from "../components/linechart/getLineChartData";
import Chart from 'chart.js/auto'; //필수임
import { CategoryScale } from 'chart.js';
import { background } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";
import GrayBox from '../components/GrayBox'
import { useState } from 'react';
import ProfileModal from '../components/ProfileModal';
import Slide from '../components/slides/Slide'
import MyBarCharts from "../components/barchart/BarChart";
import ProgressSlide from "../components/slides/ProgressSlide";
import CategoryTaskList from "../components/tasklist/CategoryTaskList";
import ModifyTaskModal from '../components/modal/ModifyTaskModal'
import AddTaskModal from "../components/modal/AddTaskModal"
import Scrollbars from "react-custom-scrollbars";

const Goal = ({ tasks, BUCKETLIST, setBUCKETLIST = f => f, teamTask, teams, member}) => {
    const me = member.filter((v) => v.me === "true")[0] //내 데이터
    const initTask = {
        "index": 0,
        "id": "",
        "category": "",
        "title": "",
        "date": "none",
        "check": false
    }

    const onNewTask = function (id, category, title, date) { // id, category, title, date, hour, minute, check
        console.log("new task 추가")
        let indexs = BUCKETLIST.map((task) => task.index).sort((a, b) => a - b)
        const newIndex = indexs[indexs.length - 1] + 1
        const newTasks = [...BUCKETLIST, { index: newIndex, id, category, title, date, hour: 'none', minute: 'none', check: false }]
        setBUCKETLIST(newTasks)
    }

    const [selectedTask, setSelectedTask] = useState(initTask)
    console.log(`$$$$$$$$$$$$$$$$$$$`)
    console.log(selectedTask)
    console.log(selectedTask.date)
    const onModifyTask = function (modifiedTask) {
        const modifiedTasks = BUCKETLIST.map((task) => {
            return task.index === modifiedTask.index ? modifiedTask : task
        });
        setBUCKETLIST(modifiedTasks);
    }
    const [selectedDate, onChange] = useState(new Date()); // Mon Nov 14 2022 10:50:35 GMT+0900 (한국 표준시)

    const [addCategoryName, setAddCategoryName] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);

    const onCheck = index => {
        const newTasks = BUCKETLIST.map(task => {
            if (task.index === index)
                task.check = !(task.check);
            return task;
        })
        setBUCKETLIST(newTasks);
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
        const modifiedTasks = BUCKETLIST.filter((task) => task.index !== selectedTask.index);
        setBUCKETLIST(modifiedTasks);
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
    const Piedata = getPieData(tasks);
    const categoryFilter = (keyWord) => keyWord.map(task => { return task.category });
    const categories = categoryFilter(tasks)
    const uniqueArr = (array) => array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
    const uniqueCategories = uniqueArr(categories);
    const dateFilter = (keyWord) => keyWord.map(task => { return task.date });
    const dates = dateFilter(tasks);
    const months = dates.map(date => date.slice(0, 7));
    const uniqueMonths = uniqueArr(months);
    tasks.map((task) => {
        task.date.slice(0, 7)
        return;
    })
    const sortedUniqueMonths = uniqueMonths.sort(function (a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    const progressData = sortedUniqueMonths.map(
        month => {
            const data = uniqueCategories.map((category, i) => {
                return getProgressData(tasks, category, month)
            })
            return data;
        }

    )
    const uniqueProgressData = uniqueArr(progressData);
    const [profileOpen, setProfileOpen] = useState(false);
    const LineData = getLineChartData(tasks);
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
                <Menu pageNum={1}/>
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
            <div className="box content"  >
                <GrayBox title={"월별 목표달성률"} settingHeight="70vh">
                    <div style={{  width: '100%', height: '120%', paddingLeft: '5%', paddingRight: "5%"}}>
                        <Slider Piedata={Piedata} LineData={LineData} children={
                            Piedata.map((pie, i) => <div key={i} style={{ width: '100%', height: '100%', flex: 'none' }}> <Slide key={i} Piedata={pie} LineData={LineData[i]} /> </div>)
                        } />
                    </div>
                </GrayBox>
            </div>
            <div className="box follower"></div>
            <div className="box tasklist" style={{ width: '100%', height: '95% ', borderRadius: '20px' }}>
                <Scrollbars >{
                    <GrayBox title={"카테고리별 목표달성률"} >

                        <Slider Piedata={Piedata} progressData={progressData} children={
                            progressData.map(
                                (data, i) =>
                                    <div key={i} style={{ width: '100%', height: '100%', flex: 'none' }}>
                                        <ProgressSlide key={i} data={data} />
                                    </div>
                            )
                        }
                        />
                    </GrayBox>
                } </Scrollbars >
                {/* <MyBarCharts data={uniqueProgressData} /> */}
            </div>
            <div className="box teamlist">
                <Scrollbars style={{ width: '100%', height: '90%', marginLeft: "-3rem",  backgroundColor: "transparent", borderRadius: "0px 0px 0px 0px" }}>
                    <CategoryTaskList tasks={BUCKETLIST} categoryName={'BUCKET LIST'} onCheck={onCheck} onModifyTaskModal={modifyTaskHandler} onAddTaskModal={addTaskHandler}
                        style={{ width: '100%', height: '100%', backgroundColor: "transparent", borderRadius: "0px 0px 10px 10px", margin: "20px 50px 30px 50px;" }}></CategoryTaskList>
                </Scrollbars>
                <ModifyTaskModal open={modalOpen} close={closeModifyTaskModal} header="버킷리스트 수정 및 삭제" calendarSelectedDate={new Date(selectedTask.date)} selectedTask={selectedTask} onModifyTask={onModifyTask} onDeleteTask={onDeleteTask} isBucket={true} />
                <AddTaskModal open={addTaskModalOpen} close={closeAddTaskModal} onNewTask={onNewTask} header="버킷리스트 추가" category={addCategoryName} calendarSelectedDate={selectedDate} isBucket={true} />
            </div>
        </div >


    );
};


export default Goal;