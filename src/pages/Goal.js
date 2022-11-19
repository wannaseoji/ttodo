//import data from '../components/data'
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import Profile from "./Profile";
import StyledListItem from '../styles/linkStyle';
import getPieData from '../components/piechart/getPieData';
import getProgressData from '../components/barchart/getProgressData';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, } from 'recharts'
import Slider from '../components/Slider'
import Menu from '../components/Menu';
import '../styles/linkButton.css';
import getLineChartData from "../components/getLineChartData";
const Goal = ({ tasks, teamTask, teams }) => {
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


    const LineData = getLineChartData(tasks);


    return (
        <div id="app" className="parent" >
            <div className="box menu" >
                <Menu />
            </div >
            <div className="box profile"><Profile /></div>
            <div className="box content"  >
                <div style={{ width: '100%', height: '100%' }}>
                    <Slider Piedata={Piedata} LineData={LineData} />
                </div>
            </div>
            <div className="box follower"></div>
            <div className="box tasklist">

                <ResponsiveContainer width='90%' aspect={4.0 / 2.0}>
                    <BarChart data={uniqueProgressData} layout="vertical" fill="#000000" width={150} height={40}>
                        <XAxis type="number" dataKey="total" hide />
                        <YAxis dataKey="name" reversed type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar legendType="category" dataKey="done" fill="#FF9AB5" />
                    </BarChart>
                </ResponsiveContainer>
                {/* <MyBarCharts data={uniqueProgressData} /> */}
            </div>
            <div className="box teamlist">

            </div>
        </div >


    );
};

export default Goal;



