
import '../App.css';
import '../styles/grid.css';
import React, { useState } from "react";
import TeamEditList from "../components/TeamEditList"
import Notice from "../components/Notice";
import TeamModal from "../components/modal/TeamModal";
import CategoryList from "../components/CategoryList";
import MemberList from "../components/MemberList";
import '../styles/linkButton.css';
import Menu from "../components/Menu";
import NoticeModal from '../components/modal/NoticeModal';
import TeamProfile from '../components/TeamProfile';
import MemberAddModal from '../components/MemberAddModal';
import TeamProfileModal from '../components/TeamProfileModal';
import CategoryModal from '../components/modal/CategoryModal';
import CategoryModifyModal from '../components/modal/CategoryModifyModal';
import CategoryDeleteModal from '../components/modal/CategoryDeleteModal';
import CategoryAddModal from '../components/modal/CategoryAddModal';

const TeamLink = ({tasks, teamTask, teams, followers, setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f}) => {
    // const [curTeamIdx, setCurTeamIdx] = useState(0)
    const [curTeam, setCurTeam] = useState(teams[0])
    const [index, setIndex] = useState(0)
    console.log(curTeam)
    //팀 클릭시 해당 팀을 가리키는 인덱스로 변경
    const changeCurTeamIdx = (idx) => {
        // setCurTeamIdx(idx)
        console.log("현재 팀 변경 => " + idx)
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
    console.log(followers)
    console.log(notices)

    //Team 생성
    const onNewTeam = function(name, memberList, intro, leader) {
        console.log("new team 추가")
        // name, memberList, notice, intro, reader
        const newTeams = {
            name: name,
            memberList: [leader,...memberList],
            notice: [],
            intro: intro,
            leader:leader
        }
        console.log(newTeams)
        const t1 = [...teams, newTeams]
        setTeams(t1)
        console.log(t1)
    }
    
    //Notice 생성
    const onNewNotice = function(notice) {
        console.log("new notice 추가")
        const newNotices = [...notices, notice]
        curTeam.notice = newNotices
    }
    
    //팀 멤버 추가하는 코드(장훈)
    const [TeamMemberModalOpen, setTeamMemberModalOpen] = useState(false);

    const handleTeamMemberClickOpen = () => {
        setTeamMemberModalOpen(true)
    };

    const handleTeamMemberClose = () =>  {
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
    //===========================================(장훈 코드)

    //팀 프로필을 수정하는 Modal를 위함
    const [TeamProfileOpen, setTeamProfileOpen] = useState(false);

    const handleTeamProfileClickOpen = () => {
        setTeamProfileOpen(true)
    };
    
    const handleTeamProfileClose = () =>  {
        setTeamProfileOpen(false);
    }
    
    const onShowTeamProfileModal = () => {
        handleTeamProfileClickOpen();
    }

    //팀 프로필을 변경하는 메소드
    const modifyTeamProfile = (name, intro) => {
        let originName = teams[index].name;
        console.log(originName);
        teams[index].name = name;
        teams[index].intro = intro;
        let findIdx = -1;
        for(let i = 0; i < teamTask.length; i++) {
            if (teamTask[i].name === originName) {
                teamTask[i].name = name;
                findIdx = i;
            }
        }
        setIndex(index);
        console.log(index);
        setCurTeam(teams[index]);
        console.log(teams[index]);
        setTeamTask(teamTask);
        console.log(teamTask)
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

    const addCategory = () => {}
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

    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <Menu/>
            </div>
            <div className="box profile">
                <TeamProfile 
                    curTeam={curTeam}
                    onShowTeamProfileModal={onShowTeamProfileModal}/>
                <TeamProfileModal
                    open={TeamProfileOpen}
                    close={handleTeamProfileClose}
                    modifyTeamProfile={modifyTeamProfile} 
                    />
            </div>
            <div className="box content">
                <TeamEditList onShowModal={onShow} teamData={teams} changeCurTeamIdx={changeCurTeamIdx}/>
                <TeamModal open={open} close={handleClose} onNewTeam={onNewTeam} followers={followers} leader={curTeam.leader}/>
            </div>
            <div className="box follower">
                <MemberList 
                    curTeam={curTeam}
                    onShowTeamMemberModal={onShowTeamMemberModal}
                    onShowCategoryModal={onShowCategoryModal}/>
                <MemberAddModal
                    open={TeamMemberModalOpen} 
                    close={handleTeamMemberClose}
                    createTeamMember={createTeamMember} 
                    followers={followers}
                    curTeam={curTeam}/>
                <CategoryModal 
                    open={CategoryOpen}
                    close={handleCategoryClickClose}
                    onShowCategoryAddModal={onShowCategoryAddModal}
                    onShowCategoryDeleteModal={onShowCategoryDeleteModal}
                    onShowCategoryModifyModal={onShowCategoryModifyModal}/>
                <CategoryAddModal
                    open={CategoryAddOpen}
                    close={handleCategoryAddClickClose}
                    addCategory={addCategory}/>
                <CategoryModifyModal
                    open={CategoryModifyOpen}
                    close={handleCategoryModifyClickClose}
                    modifyCategory={modifyCategory}/>
                <CategoryDeleteModal
                    open={CategoryDeleteOpen}
                    close={handleCategoryDeleteClickClose}
                    deleteCategory={deleteCategory} />
            </div>
            <div className="box tasklist">
                <CategoryList 
                    curTeam={curTeam} 
                    teamTask={teamTask}/>
            </div>
            <div className="box notice">
                <Notice onShowModal={onShowNoticeModal} notices={notices}/>
                <NoticeModal open={noticeOpen} close={noticeClickClose} onNewNotice={onNewNotice}/>
            </div>
        </div >
    );
};

export default TeamLink;