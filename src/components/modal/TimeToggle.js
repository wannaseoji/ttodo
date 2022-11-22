import React, {useState} from 'react';
import Switcher from 'react-switcher-rc';
import '../../styles/timePicker.css'


const TimeToggle = function({changeSelectedTime=f=>f, selectedTask}){
    console.log(selectedTask)
    const [switcherState, setSwitcherState] = useState(selectedTask.hour!=="none");
    const [time, setTime] = useState(selectedTask.hour+":"+selectedTask.minute);


    React.useEffect(
        () => {
            changeSelectedTime(time)
        }
      )

    const onHandleChange = e => {
      setSwitcherState(e.target.checked);
      if(switcherState){
        setTime("none")
      }
    }

    const TimePicker = function(){
        if(switcherState){
            return <input type="time" id="startTime" value={time} onChange={(e) => {setTime(e.currentTarget.value)}}/>
        }
    }

    return (
        <>
            <Switcher
            name="my-switcher"
            onChange={onHandleChange}
            checked={switcherState}
            checkedIcon="On"
            unCheckedIcon="Off"
            onColor='#FF9AB5'
            margin-left="30px"
            margin-right="30px"/>
            <TimePicker/>
        </>
    )
}

export default TimeToggle;