
import '../App.css';
import '../styles/grid.css';
import React, { useState, useEffect } from "react";
import TeamEditList from "../components/TeamEditList"
import Notice from "../components/Notice";
import TeamModal from "../components/TeamModal";
import CategoryList from "../components/CategoryList";
import MemberList from "../components/MemberList";
import '../styles/linkButton.css';
import Menu from "../components/Menu";
import NoticeModal from '../components/NoticeModal';
import TeamProfile from '../components/TeamProfile';

const TeamLink = ({tasks, teamTask, teams, followers, setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f}) => {
    // const [curTeamIdx, setCurTeamIdx] = useState(0)
    const [curTeam, setCurTeam] = useState(teams[0])

    //팀 클릭시 해당 팀을 가리키는 인덱스로 변경
    const changeCurTeamIdx = (idx) => {
        // setCurTeamIdx(idx)
        console.log("현재 팀 변경 => " + idx)
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
            memberList: [leader],
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

    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <Menu/>
            </div >
            <div className="box profile"><TeamProfile curTeam={curTeam}/></div>
            <div className="box content">
                <TeamEditList onShowModal={onShow} teamData={teams} changeCurTeamIdx={changeCurTeamIdx}/>
                <TeamModal open={open} close={handleClose} onNewTeam={onNewTeam} followers={followers} leader={curTeam.leader}/>
            </div>
            <div className="box follower"><MemberList teams={teams}/></div>
            <div className="box tasklist">
                <CategoryList/>
            </div>
            <div className="box notice">
                <Notice onShowModal={onShowNoticeModal} notices={notices}/>
                <NoticeModal open={noticeOpen} close={noticeClickClose} onNewNotice={onNewNotice}/>
            </div>
        </div >
    );
};

export default TeamLink;