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

const ModifyTaskModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, onNewTask, header, category, calendarSelectedDate, selectedTask, onModifyTask } = props;
  let title = selectedTask.title;
  let date = "";
  let time = "none";
  let hour = "none";
  let minute = "none";
  // const today = new Date();
  const changeSelectedDate = (selectedDate) => {date = selectedDate} 
  const changeSelectedTime = (selectedTime) => {time = selectedTime}
  
  const modifyNewTask = () => {
    if(time==="none"||time==="none:none"){
      hour = "none"
      minute = "none"
    }
    else{
      hour = parseInt(time.split(":")[0]).toString()
      minute = time.split(":")[1]
    }
    const modifiedTask = {...selectedTask,title, date, hour, minute}
    onModifyTask(modifiedTask)
    close()
  }

  const addNewTask = () => { // index, id, category, title, date, hour, minute
    if(time==="none"){
      hour = "none"
      minute = "none"
    }
    else{
      hour = parseInt(time.split(":")[0]).toString()
      minute = time.split(":")[1]
    }
  
    onNewTask("wannaseo", category,title, date, hour, minute)
    close()
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
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
            <div><span className="settingTitle">내용</span><StyledTextField id="standard-basic" label="" defaultValue={selectedTask.title} variant="standard" sx={{width:"80%"}} onChange={e=>title = e.target.value} /></div>
            <div><span className="settingTitle">날짜</span><TaskDatePicker changeSelectedDate={changeSelectedDate} initSelectedDate={calendarSelectedDate}/></div>
            <div><span className="settingTitle">시간 설정</span><TimeToggle changeSelectedTime={changeSelectedTime} selectedTask={selectedTask}/></div>
          </main>
          <footer>
            <button className="modify" onClick={modifyNewTask}>modify</button>
            <button className="delete" onClick={close}>delete</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModifyTaskModal;