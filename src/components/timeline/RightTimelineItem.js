import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const RightTimelineItem = function(filteredTasks=[],mainHour,nowHour){

    if(mainHour==nowHour){ // 현재 시간 = mainHour 인 경우 핑크색으로 표시
        return(
            filteredTasks.map((task,i)=>(
                <TimelineItem>
                    <TimelineSeparator sx={{paddingTop:'0'}}>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, paddingTop:'0', paddingBottom:'0' }}>
                        <TimelineDot sx={{display:'inline-block', margin:'0', backgroundColor: '#FF9AB5'}} />
                        <span style={{fontWeight: 'bold', marginLeft:'1em', color: '#FF9AB5'}}>{task.hour}:{task.minute} </span>
                        <span style={{fontWeight: 'bold', marginLeft:'1em', color: '#FF9AB5'}}>{task.title}</span>
                    </TimelineContent>
                </TimelineItem>
            ))
        )
    }
    else if(mainHour<nowHour){ // 현재 시간보다 mainHour이 이전이면 회색으로 표시
        return(
            filteredTasks.map((task,i)=>(
                <TimelineItem>
                    <TimelineSeparator sx={{paddingTop:'0'}}>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, paddingTop:'0', paddingBottom:'0' }} color="text.secondary">
                        <TimelineDot sx={{display:'inline-block', margin:'0'}} />
                        <span style={{marginLeft:'1em'}}>{task.hour}:{task.minute} </span>
                        <span style={{marginLeft:'1em'}}>{task.title}</span>
                    </TimelineContent>
                </TimelineItem>
            ))
        )
    }
    else{
        return( // 현재 시간보다 mainHour이 이후면 회색으로 표시
            filteredTasks.map((task,i)=>( 
                <TimelineItem>
                    <TimelineSeparator sx={{paddingTop:'0'}}>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 , paddingTop:'0', paddingBottom:'0'}}>
                        <TimelineDot sx={{display:'inline-block', margin:'0'}} />
                        <span style={{marginLeft:'1em'}}>{task.hour}:{task.minute} </span>
                        <span style={{marginLeft:'1em'}}>{task.title}</span>
                    </TimelineContent>
                </TimelineItem>
            ))
        )
    }
}

export default RightTimelineItem;