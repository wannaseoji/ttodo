import { TextField, styled } from '@mui/material';
import React from 'react';
import "../../styles/TaskModal.css"
import TimeToggle from './TimeToggle';
import TaskDatePicker from './TaskDatePicker'

const StyledTextField = styled(TextField)({
    "&:hover .MuiInput-underline": {
        borderBottomColor: "gray"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#FF9AB5"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
        borderColor: "white"
        },
        "&:hover fieldset": {
        borderColor: "white",
        borderBottomColor: "white",
        borderWidth: 2
        },
        "&.Mui-focused fieldset": {
        borderColor: "white"
        }
    }
});

const AddTeamTaskModal = ({open, close, calendarSelectedDate, initTask, isBucket, header, onNewTeamTask}) => {
    let title = "";
    let date = "";
    let time = "none";
    let hour = "none";
    let minute = "none";

    const changeSelectedDate = (selectedDate) => { date = selectedDate }
    const changeSelectedTime = (selectedTime) => { time = selectedTime }

    const addNewTask = () => {
        console.log(`aaaaaaaaaaaaaaaaa   ${time}`)
        if (time === "none:none" || time == "none" || time == "ne:none") {
            hour = "none"
            minute = "none"
        }
        else {
            hour = parseInt(time.split(":")[0]).toString()
            minute = time.split(":")[1]
        }
        onNewTeamTask(title, date, hour, minute);
        //teamTask를 추가하는 메소드(장훈)
        //onNewTask("wannaseo", category, title, date, hour, minute)
        close()
    }
    
    return (
        <div className={open ? 'openModal modal' : 'modal'} >
        {open ? (
            <section>
            <header>
                {header}
                <button className="close" onClick={close}>
                &times;
                </button>
            </header>
            <main>
                <div><span className="settingTitle">내용</span><StyledTextField id="standard-basic" label="" variant="standard" sx={{ width: "80%" }} onChange={e => title = e.target.value} /></div>
                <div><span className="settingTitle">날짜</span><TaskDatePicker changeSelectedDate={changeSelectedDate} initSelectedDate={calendarSelectedDate} /></div>
                {(isBucket === true) ? <></> : <div><span className="settingTitle">시간 설정</span><TimeToggle changeSelectedTime={changeSelectedTime} selectedTask={initTask} /></div>}
            </main>
            <footer>
                <button className="add" onClick={addNewTask}>add</button>
                <button className="cancel" onClick={close}>cancel</button>
            </footer>
            </section>
        ) : null}
        </div>
    );
};

export default AddTeamTaskModal;