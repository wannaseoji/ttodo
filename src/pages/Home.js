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
import OptionsModal from "../components/modal/OptionsModal";
import HomeTaskList from "../components/tasklist/HomeTaskList";
import GrayBox from "../components/GrayBox.js"
import FollowerList from "../components/FollowerList";
import FollowerModal from "../components/FollowerModal";


const Home = 
    ({tasks, teamTask, teams, 
    setTeamTask=f=>f, setTasks=f=>f, setTeams=f=>f,  
    myProfile, setMyProfile, followers, member, setMember=f=>f, setFollowers=f=>f})=> {
    const [modalOpen, setModalOpen] = useState(false); // Options Modal 창 open, close State 확인
    const date = new Date(); // Mon Nov 14 2022 10:50:35 GMT+0900 (한국 표준시)
    const today = date.getFullYear()+"-"+('0' + (date.getMonth() + 1)).slice(-2)+"-"+('0' + date.getDate()).slice(-2); // 2022-11-14
    let todayTasks = tasks.filter(({date})=>date===today) // 시간 상관 없이 당일에 해당하는 task로만 필터링
    todayTasks.map((value) => console.log(value.title))

    // Task check 변경
    const onCheck = index =>{
        const newTasks = tasks.map(task => {
            if(task.index === index) 
                task.check = !(task.check);
            return task;
        })
        setTasks(newTasks);
    }
    // ********** Modal open close setting 하기 ********** //
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

    // ********** 팀 카드 3개이하 저장 ********** //
    const teamCard = [];
    function initTeamCard() {
        for (let i = 0; i < teams.length && i < 3; i++) {
            teamCard[i] = <Team key={i} data={teams[i]} />;
        }
    }
    //장훈이의 코드(프로필 변경, Follower 추가)
    //Follower 변경 modal에 대한 코드(장훈)
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
    //프로필을 변경하는 메소드(장훈)
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
    //Follower를 추가하는 메소드 필요(장훈)
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
    //===========================================(장훈 코드)
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

            {/* FollowerList 컴포넌트에 Follower를 전달 (장훈)*/}
            <div className="box follower">
                <FollowerList 
                    follower={followers} 
                    onShowModal={onShow}/>
                {/*Modal을 열고 닫고와 팔로워를 추가하는 메소드를 props로 전달(장훈) */}
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
                    onOptionsModal={onShowOptionsModal}
                />
                <OptionsModal open={modalOpen} close ={closeOptionsModal} header="Options" />
            </div>
            <div className="box teamlist">
                {initTeamCard()}
                {teamCard.map(v => v)}
            </div>
        </div >
    );
};

export default Home;
