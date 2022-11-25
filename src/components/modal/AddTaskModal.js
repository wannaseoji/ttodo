import React from 'react';
import "../../styles/TaskModal.css"
import TimeToggle from './TimeToggle';
import TaskDatePicker from './TaskDatePicker'
import CustomTextField from './CustomTextField';

const AddTaskModal = (props) => {
  const { open, close, onNewTask, header, category, calendarSelectedDate, initTask, isBucket } = props;
  let title = "";
  let date = "";
  let time = "none";
  let hour = "none";
  let minute = "none";

  const changeSelectedDate = (selectedDate) => { date = selectedDate }
  const changeSelectedTime = (selectedTime) => { time = selectedTime }

  const addNewTask = () => {
    if (time === "none:none" || time == "none" || time == "ne:none") {
      hour = "none"
      minute = "none"
    }
    else {
      hour = parseInt(time.split(":")[0]).toString()
      minute = time.split(":")[1]
    }

    onNewTask("wannaseo", category, title, date, hour, minute)
    close()
  }

  return (
    <div className={open ? 'openModal modal' : 'modal'} >
      {open ? (
        <section>
          <header>
            {header}
            {/* <button className="close" onClick={close}>
              &times;
            </button> */}
          </header>
          <main>
            <div>
              <span className="settingTitle">내용</span>
              <CustomTextField  id="standard-basic" variant="standard" onChange={e => title = e.target.value}/>
            </div>
            <div><span className="settingTitle">날짜</span><TaskDatePicker changeSelectedDate={changeSelectedDate} initSelectedDate={calendarSelectedDate} /></div>
            {(isBucket === true) ? <></> : <div><span className="settingTitle">시간 설정</span><TimeToggle changeSelectedTime={changeSelectedTime} selectedTask={initTask} /></div>}
          </main>
          <footer>
            <button className="add" onClick={addNewTask}>추가</button>
            <button className="cancel" onClick={close}>취소</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default AddTaskModal;