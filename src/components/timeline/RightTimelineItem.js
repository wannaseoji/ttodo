import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const RightTimelineItem = function(todayTasks,mainHour,nowHour){
    const filteredTasks = todayTasks.filter(function(task){
        return task.hour==mainHour;
    }).sort((a,b)=>(Number(a.minute)-Number(b.minute)))
    console.log(filteredTasks)
    console.log(mainHour)

    if(mainHour==nowHour){ // 현재 시간 = mainHour 인 경우 핑크색으로 표시
        return(
            <TimelineContent sx={{ py: '12px', px: 2, paddingTop:"10%", paddingBottom:"5%" }}>
                {filteredTasks.map((task,i)=>(
                    <div key={i}>
                        <TimelineDot sx={{display:'inline-block', margin:'0', backgroundColor: '#FF9AB5'}} />
                        <span style={{fontWeight: 'bold', marginLeft:'1em', color: '#FF9AB5'}}>{task.hour}:{task.minute} </span>
                        <span style={{fontWeight: 'bold', marginLeft:'1em', color: '#FF9AB5'}}>{task.title}</span>
                    </div>
                ))}
            </TimelineContent>
        )
    }
    else if(mainHour<nowHour){ // 현재 시간보다 mainHour이 이전이면 회색으로 표시
        return(<TimelineContent sx={{ py: '12px', px: 2, paddingTop:"10%", paddingBottom:"5%" }} color="text.secondary">
            { filteredTasks.map((task,i)=>(
                <div key={i}>
                    <TimelineDot sx={{display:'inline-block', margin:'0'}} />
                    <span style={{marginLeft:'1em'}}>{task.hour}:{task.minute} </span>
                    <span style={{marginLeft:'1em'}}>{task.title}</span>
                </div>
            ))}    
        </TimelineContent>
        )
    }
    else{
        return( // 현재 시간보다 mainHour이 이후면 검정으로 표시
        <TimelineContent sx={{ py: '12px', px: 2, paddingTop:"10%", paddingBottom:"5%" }}>
            { filteredTasks.map((task,i)=>( 
                <div key={i}>
                <TimelineDot sx={{display:'inline-block', margin:'0'}} />
                <span style={{marginLeft:'1em'}}>{task.hour}:{task.minute} </span>
                <span style={{marginLeft:'1em'}}>{task.title}</span>
                </div>
            ))}    
        </TimelineContent>
        )
    }
}

export default RightTimelineItem;