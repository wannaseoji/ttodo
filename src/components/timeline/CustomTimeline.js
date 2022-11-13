import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LeftTimelineItem from './LeftTimelineItem'
import Scrollbars from 'react-custom-scrollbars';

const CustomTimeLine = function({tasks=[]}){
    const date = new Date();
    const nowHour = date.getHours(); // 현재 시간
    const today = date.getFullYear()+"-"+('0' + (date.getMonth() + 1)).slice(-2)+"-"+('0' + date.getDate()).slice(-2); // 2022-11-04

    const todayTasks = tasks.filter(({date,hour})=>date===today&&hour!=="none") // 당일에 해당하는 task로만 필터링
    const distinctHours = DistinctHours(todayTasks); // 일정 있는 시간 그리기
   
    // console.log(todayTasks)

    return(
        <div className="TodayAppointment" style={{padding:"2px"}}>
            <header style={{textAlign:"left", backgroundColor:"#DFDFDF", minWidth:"300px", width:"30vw", padding:"1em 0em",borderRadius:"10px 10px 0px 0px"}}><span style={{fontWeight:"700", paddingLeft:"2em"}}>Today Appointment</span></header>
            <Scrollbars style={{minWidth:"300px", width: "30vw", height: "70vh", backgroundColor:"#F0F0F0", borderRadius:"0px 0px 10px 10px"}}>
                <Timeline align="left">
                    {distinctHours.map(
                        (hour,i) =>(
                            <LeftTimelineItem key={i} tasks={todayTasks} hour={hour} nowHour={nowHour}/> 
                        )
                    )}

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