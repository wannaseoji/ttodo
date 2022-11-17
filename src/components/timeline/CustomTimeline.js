import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Scrollbars from 'react-custom-scrollbars';
import { TimelineConnector } from '@mui/lab';
import RightTimelineItem from './RightTimelineItem';

const CustomTimeLine = function({tasks=[]}){
    const date = new Date();
    const nowHour = date.getHours(); // 현재 시간
    const today = date.getFullYear()+"-"+('0' + (date.getMonth() + 1)).slice(-2)+"-"+('0' + date.getDate()).slice(-2); // 2022-11-04

    const todayTasks = tasks.filter(({date,hour})=>date===today&&hour!=="none") // 당일에 해당하는 task로만 필터링
    const distinctHours = DistinctHours(todayTasks); // 일정 있는 시간 그리기
    const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

    return(
        <div className="TodayAppointment" style={{padding:"2px"}}>
            <header style={{textAlign:"left", backgroundColor:"#DFDFDF", minWidth:"300px", width:"30vw", padding:"0.5em 0em",borderRadius:"10px 10px 0px 0px"}}><span style={{fontWeight:"600", paddingLeft:"1em", color:"#555555", fontSize:"1.5em"}}>Today Appointment</span></header>
            <Scrollbars style={{minWidth:"300px", width: "30vw", height: "70vh", backgroundColor:"#F0F0F0", borderRadius:"0px 0px 10px 10px"}}>
                <Timeline align="left">
                    {
                        hours.map(
                            (hour,i)=>(<TimelineItem key={i}>
                                <TimelineOppositeContent style={{flex:(hour<10)?0.115:0.1, fontWeight:(nowHour==hour)?"bold":"normal", color:(nowHour==hour)?"#FF9AB5":(nowHour>hour)?"grey":"black"}}>{hour}:00</TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                {(distinctHours.indexOf(hour.toString())<0)? <TimelineContent/>:RightTimelineItem(todayTasks,hour,nowHour)}
                                
                            </TimelineItem>)
                        )
                    }
                    

                    {/* 선 끝에 점 생성하기*/}
                    <TimelineItem>
                        <TimelineOppositeContent style={{flex:0.1}}>24:00</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent/>
                    </TimelineItem>
                </Timeline>
            </Scrollbars>
        </div>
    );
}

// 일정 있는 시간 배열로 반환 (중복값 없이)
const DistinctHours = function(tasks=[]){
    var hours = tasks.map(({hour})=>hour);

    const distinctHours = hours.reduce(
        (distinct, hour) =>
        (distinct.indexOf(hour) !== -1) ?
        distinct : [...distinct, hour],
        []
    )
    // console.log(distinctHours);
    return distinctHours.sort(function (a, b) { return Number(a)-Number(b) });
    // return distinctHours.sort();
}

export default CustomTimeLine;
