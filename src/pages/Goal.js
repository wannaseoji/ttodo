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
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, } from 'recharts'
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
    //console.log("uniqueCategories", uniqueCategories)
    const progressData = uniqueCategories.map((category, i) => {
        return getProgressData(tasks, category)
    })
    const uniqueProgressData = uniqueArr(progressData);

    // console.log("progressData", uniqueProgressData);

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
    //프로필을 변경하는 메소드
    const modifyProfile = (name, email, intro) => {
        myProfile[0].name = name;
        myProfile[0].email = email;
        myProfile[0].intro = intro;
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
                        <Slider Piedata={Piedata} LineData={LineData} />
                    </div>
                </GrayBox>
            </div>
            <div className="box follower"></div>
            <div className="box tasklist" style={{ width: '90%', borderRadius: '20px' }}>
                <GrayBox title={"카테고리별 목표달성률"}>
                    <ResponsiveContainer width='100%' aspect={4.0 / 2.0} >
                        <BarChart data={uniqueProgressData} layout="vertical" fill="#B7B7B7" width={150} height={40}>
                            <XAxis type="number" dataKey="total" hide />
                            <YAxis dataKey="name" reversed type="category" />
                            <Tooltip />
                            <Legend />
                            <Bar legendType="category" dataKey="done" fill="#FF9AB5" />
                        </BarChart>
                    </ResponsiveContainer>
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



