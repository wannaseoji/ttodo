
import '../App.css';
import '../styles/grid.css';
import '../styles/linkButton.css';

import React, { useState } from "react";

import TeamEditList from "../components/TeamEditList"
import Notice from "../components/Notice";
import TeamModal from "../components/modal/TeamModal";
import CategoryList from "../components/CategoryList";
import Menu from "../components/Menu";
import NoticeModal from '../components/modal/NoticeModal';
import TeamProfile from '../components/TeamProfile';
import MemberAddModal from '../components/MemberAddModal';
import TeamProfileModal from '../components/TeamProfileModal';
import TeamCategoryModal from '../components/modal/TeamCategoryModal';
import GrayBox from '../components/GrayBox'
import AddTeamTaskModal from '../components/modal/AddTeamTaskModal';
import List from '../components/List';
import CategorySettingModal from '../components/modal/CategorySettingModal';



const TeamLink = ({tasks, teamTask, teams, member, setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f, myProfile}) => {
    const [curTeam, setCurTeam] = useState(teams[0])
    const [index, setIndex] = useState(0)
    const [noticePage, setNoticePage] = useState(1);
    console.log(member)

    const me = member.filter((v) => v.me === "true")[0]     //내 데이터(myProfile 대체)
    const myFollowers = me.followMembers
    console.log(myFollowers)                                //나의 팔로워된 애들의 리스트(followers 대체)

    const [selectedDate] = useState(new Date()); // Mon Nov 14 2022 10:50:35 GMT+0900 (한국 표준시)
    const [clickedMemberList, setClickedMemberList] = useState([]);
    const initTask = {
        "index": 0,
        "title": "",
        "date": selectedDate,
        "hour": "none",
        "minute": "none",
        "check": false
    }


    const onCheck = index => {
        const newTeamTasks = teamTask.map(team => {
            team.myTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
            .map((element) => {
                (element.tasks).map(task => {
                    if(task.index === index)
                        task.check = !(task.check);
                    return task;
                })
            })

            team.otherTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
            .map((element) => {
                (element.tasks).map(task => {
                    if(task.index === index)
                        task.check = !(task.check);
                    return task;
                })
            })

            return team
        })
        setTeamTask(newTeamTasks)
    }


    //팀 클릭시 해당 팀을 가리키는 인덱스로 변경
    const changeCurTeamIdx = (idx) => {
        console.log("현재 팀 변경 => " + idx)
        setNoticePage(1);
        setIndex(idx)
        setCurTeam(teams[idx])
    }

    console.log("1: " + curTeam.name)
    console.log("2: " + [...curTeam.notice])
    const [open, setOpen] = React.useState(false);
    //Team 추가 Madal 관련 코드 시작
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onShow = () => {
        handleClickOpen();
    }
    //Team 추가 Madal 관련 코드 끝

    //Notice 추가 Modal 관련 코드 시작
    const [noticeOpen, setNoticeOpen] = React.useState(false);

    const noticeClickOpen = () => {
        setNoticeOpen(true);
    };

    const noticeClickClose = () => {
        setNoticeOpen(false);
    };
    const onShowNoticeModal = () => {
        noticeClickOpen();
    };
    //Notice 추가 Modal 관련 코드 끝

    const notices = [...curTeam.notice] //현재 팀의 notice 목록

    //Team 생성
    const onNewTeam = function (name, memberList, intro, leader) {

        console.log("new team 추가")
        // name, memberList, notice, intro, reader
        const newTeams = {
            name: name,
            memberList: [leader, ...memberList],
            notice: [],
            intro: intro,
            leader: leader
        }
        const t1 = [...teams, newTeams]
        setTeams(t1)

        //teamTask 생성
        const newTeamTask = {
            name: name,
            myTask: [],
            otherTask: []
        }
        setTeamTask([...teamTask, newTeamTask])
    }

    //Notice 생성
    const onNewNotice = function(notice) {
        const newNotices = [...notices, notice]
        curTeam.notice = newNotices
    }

    const [TeamMemberModalOpen, setTeamMemberModalOpen] = useState(false);

    const handleTeamMemberClickOpen = () => {
        setTeamMemberModalOpen(true)
    };

    const handleTeamMemberClose = () => {
        setTeamMemberModalOpen(false);
    }

    const onShowTeamMemberModal = () => {
        handleTeamMemberClickOpen();
    }

    //팀의 멤버의 배열에도 추가하면 된다.
    const createTeamMember = (username) => {
        if(curTeam.memberList.includes(username)) {     //동일한 사용자를 넣으려고 하는 경우,
            alert(`이미 등록된 맴버입니다.`);
            return;
        }
        let isFollower = false;
        if(myFollowers.includes(username)) {
            isFollower = true;
        }
        if(!isFollower) {
            alert(`팔로우 되어있는 계정이 아닙니다.`);
            return;
        }
        const newMemberList = [...curTeam.memberList, username];
        curTeam.memberList = newMemberList;
        setCurTeam(curTeam);
    }

    //팀 프로필을 수정하는 Modal를 위함
    const [TeamProfileOpen, setTeamProfileOpen] = useState(false);

    const handleTeamProfileClickOpen = () => {
        setTeamProfileOpen(true)
    };

    const handleTeamProfileClose = () => {
        setTeamProfileOpen(false);
    }

    const onShowTeamProfileModal = () => {
        handleTeamProfileClickOpen();
    }

    //팀 프로필을 변경하는 메소드
    const modifyTeamProfile = (name, intro) => {
        if(name === "" || intro === "") {
            alert(`공백을 입력할 수 없습니다.`);
            return;
        }
        let originName = teams[index].name;
        teams[index].name = name;
        teams[index].intro = intro;
        for (let i = 0; i < teamTask.length; i++) {
            if (teamTask[i].name === originName) {
                teamTask[i].name = name;
                break;
            }
        }
        setIndex(index);
        setCurTeam(teams[index]);
        setTeamTask(teamTask);
    }
    
    //카테고리를 추가하는 메소드
    const addCategory = (newList) => {
        console.log("addCategory 호출");
        let findIdx = -1;           //현재 팀에 해당하는 teamTask를 찾는다.
        for(let i = 0; i < teamTask.length; i++) {
            if(curTeam.name === teamTask[i].name) {
                findIdx = i;        //현재 클릭된 팀에 해당하는 teamTask를 찾음
            }
        }
        let copyTeamTask = [...teamTask];
        let copyNewList = [...newList];
        console.log("copyNewList: " + copyNewList);
        let newTask = {
            "relatedMembers": copyNewList,
            "tasks": []
        }
        
        console.log(me);
        console.log(me.name);
        //console.log(newTask);
        //이제 분기를 해야함(프로필에 있는 나의 이름이 하나라도 있을 경우) => myTasks
        
        if(newList.includes(me.name)) {
            copyTeamTask[findIdx].myTask.push(newTask);
        }
        else {      //프로필이 있는 나의 이름이 하나라도 없는 경우,
            copyTeamTask[findIdx].otherTask.push(newTask);
        }
        console.log(copyTeamTask);
        setTeamTask(copyTeamTask);
    }
    //팀 태스크를 추가하는 메소드
    const onNewTeamTask = (title, date, hour, minute) => {
        if(title === "") {
            alert('Todo에 공백을 입력할 수 없습니다.');
            return;
        }

        let findIdx = -1;
        for(let i = 0; i < teamTask.length; i++) {
            if(curTeam.name === teamTask[i].name) {
                findIdx = i;
                break;
            }
        }
        let maxIdx = 1;
        for(let i = 0; i < teamTask.length; i++) {
            for(let j = 0; j < teamTask[i].myTask.length; j++) {
                for(let k = 0; k < teamTask[i].myTask[j].tasks.length; k++) {
                    if(maxIdx < teamTask[i].myTask[j].tasks[k].index) {
                        maxIdx = teamTask[i].myTask[j].tasks[k].index;
                    }
                }
            }
            for(let j = 0; j < teamTask[i].otherTask.length; j++) {
                for(let k = 0; k < teamTask[i].otherTask[j].tasks.length; k++) {
                    if(maxIdx < teamTask[i].otherTask[j].tasks[k].index) {
                        maxIdx = teamTask[i].otherTask[j].tasks[k].index;
                    }
                }
            }
        }
        let newIdx = maxIdx + 1;
        let newTask =  {
            "index" : newIdx,
            "title" : title,
            "date" : date,
            "hour" : hour,
            "minute" : minute,
            "check" : false
        }   
        if(clickedMemberList.includes(me.name)) {
            for(let i = 0; i < teamTask[findIdx].myTask.length; i++) {
                if(JSON.stringify(clickedMemberList) === JSON.stringify(teamTask[findIdx].myTask[i].relatedMembers)) {
                    teamTask[findIdx].myTask[i].tasks.push(newTask);
                }
            }
        } 
        else {
            for(let i = 0; i < teamTask[findIdx].otherTask.length; i++) {
                if(JSON.stringify(clickedMemberList) === JSON.stringify(teamTask[findIdx].otherTask[i].relatedMembers)) {
                    teamTask[findIdx].otherTask[i].tasks.push(newTask);
                }
            }
        }
        setClickedMemberList([]);
    }   
    //카테고리를 수정하는 상태변수
    const [CategoryOpen, setCategoryOpen] = useState(false);

    const handleCategoryClickOpen = () => {
        setCategoryOpen(true)
    }
    const handleCategoryClickClose = () => {
        setCategoryOpen(false)
    }
    const onShowCategoryModal = () => {
        handleCategoryClickOpen()
    }


    //카테고리를 추가
    const [CategoryAddOpen, setCategoryAddOpen] = useState(false);

    const handleCategoryAddClickOpen = () => {
        setCategoryAddOpen(true)
    }
    const handleCategoryAddClickClose = () => {
        setCategoryAddOpen(false)
    }
    const onShowCategoryAddModal = () => {
        handleCategoryAddClickOpen()
    }

    //카테고리를 수정
    const [CategoryModifyOpen, setCategoryModifyOpen] = useState(false);

    const handleCategoryModifyClickOpen = () => {
        setCategoryModifyOpen(true)
    }
    const handleCategoryModifyClickClose = () => {
        setCategoryModifyOpen(false)
    }
    const onShowCategoryModifyModal = () => {
        handleCategoryModifyClickOpen()
    }

    //카테고리를 삭제
    const [CategoryDeleteOpen, setCategoryDeleteOpen] = useState(false);

    const handleCategoryDeleteClickOpen = () => {
        setCategoryDeleteOpen(true)
    }

    const handleCategoryDeleteClickClose = () => {
        setCategoryDeleteOpen(false)
    }

    const onShowCategoryDeleteModal = () => {
        handleCategoryDeleteClickOpen()
    }

    //Category내에 있는 task를 추가하는 모달
    const [CategoryAddTaskOpen, setCategoryAddTaskOpen] = useState(false);

    const handleCategoryAddTaskOpen = () => {
        setCategoryAddTaskOpen(true)
    };
        
    const handleCategoryTeamTaskClose = () =>  {
        setCategoryAddTaskOpen(false);
    }
        
    const onShowCategoryTeamTask = () => {
        handleCategoryAddTaskOpen();
    }

    //category내에 있는 task를 수정/삭제하는 모달
    const [CategoryDeleteModifyOpen, setCategoryDeleteModifyOpen] = useState(false);

    const handleCategoryDeleteModifyOpen = () => {
        setCategoryDeleteModifyOpen(true)
    };
        
    const handleCategoryDeleteModifyClose = () =>  {
        setCategoryDeleteModifyOpen(false);
    }
        
    const onShowCategoryDeleteModify = () => {
        handleCategoryDeleteModifyOpen();
    }

    const deleteCategory = (teamName, index, kindofTask, relatedMembers) => {
        let findIdx = -1;

        for(let i = 0; i < teamTask.length; i++) {
            if(teamTask[i].name === teamName) {
                console.log(teamTask[i].name)
                console.log(teamName)
                findIdx = i;
                break;
            }
        }

        const newTeamTask = [...teamTask]
        if(kindofTask === 'myTask') {
            for(let i = 0; i < newTeamTask[findIdx].myTask.length; i++) {
                if(JSON.stringify(newTeamTask[findIdx].myTask[i].relatedMembers) === JSON.stringify(relatedMembers)) {
                    newTeamTask[findIdx].myTask.splice(i, 1);
                    break;
                }
            }
        }
        else if(kindofTask === 'otherTask') {
            for(let i = 0; i < newTeamTask[findIdx].otherTask.length; i++) {
                if(JSON.stringify(newTeamTask[findIdx].otherTask[i].relatedMembers) === JSON.stringify(relatedMembers)) {
                    newTeamTask[findIdx].otherTask.splice(i, 1);
                    break;
                }
            }
        }
        setTeamTask(newTeamTask);
    }

    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <Menu />
            </div>
            <div className="box profile">
                <TeamProfile
                    curTeam={curTeam}
                    onShowTeamProfileModal={onShowTeamProfileModal} />
                <TeamProfileModal
                    open={TeamProfileOpen}
                    close={handleTeamProfileClose}
                    modifyTeamProfile={modifyTeamProfile}
                />
            </div>
            <div className="box content">
                <GrayBox title={"속한 팀 목록"} settingHeight="70vh">
                    <div style={{ width: '100%', height: '120%', }}>
                    <TeamEditList onShowModal={onShow} teamData={teams} changeCurTeamIdx={changeCurTeamIdx} member={member}/>
                    <TeamModal open={open} close={handleClose} onNewTeam={onNewTeam} followers={myFollowers} leader={curTeam.leader}/>
                    </div>
                </GrayBox>
            </div>
            <div className="box follower">
                <List 
                    list={curTeam.memberList} 
                    onShowModal={onShowTeamMemberModal} 
                    onShowCategoryModal={onShowCategoryModal} 
                    flag="true" />
                <MemberAddModal
                    open={TeamMemberModalOpen}
                    close={handleTeamMemberClose}
                    createTeamMember={createTeamMember}
                    followers={myFollowers}
                    curTeam={curTeam} />
                <TeamCategoryModal
                    open={CategoryOpen}
                    close={handleCategoryClickClose}
                    curTeam={curTeam}
                    teamTask={teamTask}
                    addCategory={addCategory}
                    deleteCategory={deleteCategory}
                    onShowCategoryAddModal={onShowCategoryAddModal}
                    onShowCategoryDeleteModal={onShowCategoryDeleteModal}
                    onShowCategoryModifyModal={onShowCategoryModifyModal}/>
            </div>
            <div className="box tasklist">
                <CategoryList 
                    setClickedMemberList={setClickedMemberList}
                    curTeam={curTeam} 
                    teamTask={teamTask}
                    onShowCategoryTeamTask={onShowCategoryTeamTask}
                    onShowCategoryDeleteModify={onShowCategoryDeleteModify}
                    onCheck={onCheck}
                    />
                <AddTeamTaskModal
                    open={CategoryAddTaskOpen}
                    close={handleCategoryTeamTaskClose}
                    header={"일정 추가"}
                    calendarSelectedDate={selectedDate}
                    initTask={initTask}
                    isBucket={false}
                    onNewTeamTask={onNewTeamTask}/>
            </div>
            <div className="box notice">
                <Notice onShowModal={onShowNoticeModal} notices={notices} page={noticePage} setPage={setNoticePage} />
                <NoticeModal open={noticeOpen} close={noticeClickClose} onNewNotice={onNewNotice} />
            </div>
        </div >
    );
};

export default TeamLink;