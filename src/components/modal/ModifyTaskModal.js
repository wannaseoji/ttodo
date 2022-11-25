import React from 'react';
import TimeToggle from './TimeToggle';
import TaskDatePicker from './TaskDatePicker'
import CustomTextField from './CustomTextField';
import "../../styles/TaskModal.css"

const ModifyTaskModal = (props) => {
  const { open, close, header, calendarSelectedDate, selectedTask, onModifyTask, onDeleteTask, isBucket } = props;
  let title = selectedTask.title;
  let date = "";
  let time = "none";
  let hour = selectedTask.hour;
  let minute = selectedTask.minute;

  const changeSelectedDate = (selectedDate) => { date = selectedDate }
  const changeSelectedTime = (selectedTime) => { time = selectedTime }

  const modifyNewTask = () => {
    if (time === "none" || time === "none:none" || time == "ne:none") {
      hour = "none"
      minute = "none"
    }
    else {
      hour = parseInt(time.split(":")[0]).toString()
      minute = time.split(":")[1]
    }
    const modifiedTask = { ...selectedTask, title, date, hour, minute }
    onModifyTask(modifiedTask)
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
            <div><span className="settingTitle">내용</span><CustomTextField sx={{ width: "80%" }} id="standard-basic" variant="standard" defaultValue={selectedTask.title} onChange={e => title = e.target.value} /></div>
            <div><span className="settingTitle">날짜</span><TaskDatePicker changeSelectedDate={changeSelectedDate} initSelectedDate={calendarSelectedDate} /></div>
            {(isBucket === true) ? <></> : <div><span className="settingTitle">시간 설정</span><TimeToggle changeSelectedTime={changeSelectedTime} selectedTask={selectedTask} /></div>}
          </main>
          <footer>
            <button className="modify" onClick={modifyNewTask}>수정</button>
            <button className="delete" onClick={onDeleteTask}>삭제</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModifyTaskModal;