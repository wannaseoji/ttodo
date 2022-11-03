import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LeftTimelineItem from './LeftTimelineItem'
import RightTimelineItem from './RightTimelineItem'
import Scrollbars from 'react-custom-scrollbars';

const CustomTimeLine = function({tasks=[]}){
    const distinctHours = DistinctHours(tasks);
    const date = new Date();
    const nowHour = date.getHours(); // 현재 시간

    return(
        <div className="TodayAppointment" style={{padding:"2px"}}>
            <header style={{textAlign:"left", backgroundColor:"#DFDFDF", minWidth:"300px", width:"30vw", padding:"1em 0em",borderRadius:"10px 10px 0px 0px"}}><span style={{fontWeight:"700", paddingLeft:"2em"}}>Today Appointment</span></header>
            <Scrollbars style={{minWidth:"300px", width: "30vw", height: "70vh", backgroundColor:"#F0F0F0", borderRadius:"0px 0px 10px 10px"}}>
                <Timeline style={{alignItems:"left"}}>
                    {distinctHours.map(
                        (hour,i) =>(
                            <>
                                <LeftTimelineItem hour={hour} nowHour={nowHour}/> 
                                {DetailTime(tasks,hour, nowHour)}
                            </>
                        )
                    )}

                    {/* 선 끝에 점 생성하기*/}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
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
    console.log(distinctHours);
    return distinctHours.sort(function (a, b) { return Number(a)-Number(b) });
    // return distinctHours.sort();
}

// 오른쪽 자세한 시간 및 일정
const DetailTime = function(tasks=[], mainHour, nowHour){
    // mainHour과 일치하는 taskData 배열
    const filteredTasks = tasks.filter(function(task){
        return task.hour===mainHour;
    }).sort((a,b)=>(Number(a.minute)-Number(b.minute)))

    return RightTimelineItem(filteredTasks,mainHour,nowHour);
}

export default CustomTimeLine;
