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
import Slider from '../components/Slider'
import Menu from '../components/Menu';
import '../styles/linkButton.css';
import getLineChartData from "../components/getLineChartData";
import DetailChart from "../components/DetailChart";
import Chart from 'chart.js/auto'; //필수임
import { CategoryScale } from 'chart.js';
import { background } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";
import GrayBox from '../components/GrayBox'
import { useState } from 'react';
import ProfileModal from '../components/ProfileModal';
import Slide from '../components/Slide'
import MyBarCharts from "../components/barchart/BarChart";
import ProgressSlide from "../components/ProgressSlide";
const Goal = ({ tasks, teamTask, teams, myProfile }) => {
    //const numOftasks = tasks;
    //console.log(numOftasks)
    //const { id, date } = tasks;

    //console.log(numTrue)
    //console.log("This is home and Tasks are transfered", tasks)
    //const [numTasks, numTrue] = 
    const Piedata = getPieData(tasks);
    // console.log("Piedata in Goal : ", Piedata);
    //category별 진척도

    const categoryFilter = (keyWord) => keyWord.map(task => { return task.category });
    //const dateFilter = (keyWord) => keyWord.map(task => { return task.date });

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
    //console.log("uniqueCategories", uniqueCategories)
    const progressData = sortedUniqueMonths.map(
        month => {
            const data = uniqueCategories.map((category, i) => {
                return getProgressData(tasks, category, month)
            })
            return data;
        }

    )


    const uniqueProgressData = uniqueArr(progressData);
    console.log("progressData", progressData, uniqueMonths);

    //장훈 코드
    const [profileOpen, setProfileOpen] = useState(false);

    const LineData = getLineChartData(tasks);
    // console.log("#############################################")
    // console.log("LineData in Gaol", LineData)
    // console.log("Piedata in Gaol", Piedata)
    // console.log("#############################################")
    const handleProfileClickOpen = () => {
        setProfileOpen(true)
    };

    const handleProfileClose = () => {
        setProfileOpen(false);
    }

    // console.log("#############################################")
    // console.log("LineData in Gaol", LineData)
    // console.log("Piedata in Gaol", Piedata)
    // console.log("#############################################")
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

    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <Menu />
            </div >
            <div className="box profile">
                <Profile
                    myProfile={myProfile}
                    onShowModal={onShowProfileModal} />
                <ProfileModal
                    myProfile={myProfile}
                    open={profileOpen}
                    close={handleProfileClose}
                    modifyProfile={modifyProfile} />
            </div>
            <div className="box content"  >
                <GrayBox title={"월별 목표달성률"} settingHeight="70vh">
                    <div style={{ paddingLeft: '10%', width: '100%', height: '120%', }}>

                        <Slider Piedata={Piedata} LineData={LineData} children={
                            Piedata.map((pie, i) => <div key={i} style={{ width: '100%', height: '100%', flex: 'none' }}> <Slide key={i} Piedata={pie} LineData={LineData[i]} /> </div>)
                        } />
                    </div>
                </GrayBox>
            </div>
            <div className="box follower"></div>
            <div className="box tasklist" style={{ width: '90%', borderRadius: '20px' }}>
                <GrayBox title={"카테고리별 목표달성률"}>
                    <Slider Piedata={Piedata} progressData={progressData} children={
                        progressData.map(
                            (data, i) =>
                                <div key={i} style={{ width: '100%', height: '100%', flex: 'none' }}>
                                    <ProgressSlide key={i} data={data} />
                                </div>
                        )
                    }
                    />



                    {/* {progressData.map(data => {
                        console.log(data)
                        return <MyBarCharts data={data} />
                    })} */}
                    {/* <Slider progressData={progressData} children={
                        progressData.map(data => <MyBarCharts data={progressData} />)} /> */}
                    {/* </Slider> */}

                </GrayBox>
                {/* <MyBarCharts data={uniqueProgressData} /> */}
            </div>
            <div className="box teamlist">
                {
                    uniqueCategories.map((category, i) => <DetailChart className="customCard" key={i} sx={{ color: "#FF9AB5" }} />)
                }
            </div>
        </div >


    );
};


export default Goal;



