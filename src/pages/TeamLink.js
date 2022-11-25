
import '../App.css';
import '../styles/grid.css';
import React, { useState } from "react";
import TeamEditList from "../components/TeamEditList"
import Notice from "../components/Notice";
import TeamModal from "../components/modal/TeamModal";
import CategoryList from "../components/CategoryList";
import '../styles/linkButton.css';
import Menu from "../components/Menu";
import NoticeModal from '../components/modal/NoticeModal';
import TeamProfile from '../components/TeamProfile';
import MemberAddModal from '../components/MemberAddModal';
import TeamProfileModal from '../components/TeamProfileModal';
import CategoryModal from '../components/modal/CategoryModal';
import ModifyTaskModal from '../components/modal/ModifyTaskModal';
import AddTaskModal from '../components/modal/AddTaskModal';
import GrayBox from '../components/GrayBox'


const TeamLink = ({tasks, teamTask, teams, member, setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f, myProfile}) => {
    const [curTeam, setCurTeam] = useState(teams[0])
    const [index, setIndex] = useState(0)
    const [noticePage, setNoticePage] = useState(1);
    console.log(member)

    const me = member.filter((v) => v.me === "true")[0] //내 데이터
    const myFollowers = me.followMembers
    console.log(myFollowers)

    const onCheck = index => {
        // const newTeamTasks = tasks.map(task => {
        //     if (task.index === index)
        //         task.check = !(task.check);
        //     return task;
        // })
        // setTasks(newTasks);
        
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
    console.log(teams)
    console.log(notices)

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
        let originName = teams[index].name;
        teams[index].name = name;
        teams[index].intro = intro;
        let findIdx = -1;
        for (let i = 0; i < teamTask.length; i++) {
            if (teamTask[i].name === originName) {
                teamTask[i].name = name;
                findIdx = i;
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
        
        console.log(myProfile);
        console.log(myProfile[0].name);
        //console.log(newTask);
        //이제 분기를 해야함(프로필에 있는 나의 이름이 하나라도 있을 경우) => myTasks
        
        if(newList.includes(myProfile[0].name)) {
            console.log("1");
            copyTeamTask[findIdx].myTask.push(newTask);
        }
        else {      //프로필이 있는 나의 이름이 하나라도 없는 경우,
            console.log("2");
            copyTeamTask[findIdx].otherTask.push(newTask);
        }
        console.log(copyTeamTask);
        setTeamTask(copyTeamTask);
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

    const modifyCategory = () => {}
    const deleteCategory = () => {}


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
                {/* <MemberList
                    curTeam={curTeam}
                    onShowTeamMemberModal={onShowTeamMemberModal}
                    onShowCategoryModal={onShowCategoryModal} />
                <MemberAddModal
                    open={TeamMemberModalOpen}
                    close={handleTeamMemberClose}
                    createTeamMember={createTeamMember}
                    followers={followers}
                    curTeam={curTeam} />
                <CategoryModal
                    open={CategoryOpen}
                    close={handleCategoryClickClose}
                    curTeam={curTeam}
                    teamTask={teamTask}
                    addCategory={addCategory}
                    onShowCategoryAddModal={onShowCategoryAddModal}
                    onShowCategoryDeleteModal={onShowCategoryDeleteModal}
                    onShowCategoryModifyModal={onShowCategoryModifyModal}/> */}
            </div>
            <div className="box tasklist">
                {/* <CategoryList 
                    curTeam={curTeam} 
                    teamTask={teamTask}
                    onShowCategoryTeamTask={onShowCategoryTeamTask}
                    onShowCategoryDeleteModify={onShowCategoryDeleteModify}
                    onCheck={onCheck}
                    /> */}
                {/*
                <AddTaskModal
                    open={CategoryAddTaskOpen}
                    close={handleCategoryAddClickClose}/>
                <ModifyTaskModal 
                    open={CategoryDeleteModifyOpen}
                    close={handleCategoryDeleteModifyClose}/>
                */}
            </div>
            <div className="box notice">
                <Notice onShowModal={onShowNoticeModal} notices={notices} page={noticePage} setPage={setNoticePage} />
                <NoticeModal open={noticeOpen} close={noticeClickClose} onNewNotice={onNewNotice} />
            </div>
        </div >
    );
};

export default TeamLink;