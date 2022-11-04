import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import RightTimelineItem from './RightTimelineItem'

// Timeline에서 왼쪽에 적힌 ~:00
const LeftTimelineItem = function({tasks,hour,nowHour}){
    console.log("hour:"+hour);
    console.log("nowHour:"+nowHour);
    return(
        <TimelineItem>
            <TimelineOppositeContent style={{flex:0.1, fontWeight:(nowHour==hour)?"bold":"normal", color:(nowHour>hour)?"grays":"black"}}>{hour}:00</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            {DetailTime(tasks,hour, nowHour)}
        </TimelineItem>
    );
}

// 오른쪽 자세한 시간 및 일정
const DetailTime = function(tasks=[], mainHour, nowHour){
    // mainHour과 일치하는 taskData 배열
    const filteredTasks = tasks.filter(function(task){
        return task.hour===mainHour;
    }).sort((a,b)=>(Number(a.minute)-Number(b.minute)))

    return RightTimelineItem(filteredTasks,mainHour,nowHour);
}

export default LeftTimelineItem;