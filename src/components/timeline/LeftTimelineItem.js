import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


// Timeline에서 왼쪽에 적힌 ~:00
const LeftTimelineItem = function({hour,nowHour}){
    console.log("hour:"+hour);
    console.log("nowHour:"+nowHour);
    return(
        <TimelineItem position="left">
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{fontWeight:(nowHour==hour)?"bold":"normal"}}>{hour}:00</TimelineContent>
        </TimelineItem>
    );
}

export default LeftTimelineItem;