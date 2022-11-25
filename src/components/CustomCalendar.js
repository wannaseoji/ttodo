import Calendar from 'react-calendar'; // npm install react-calendar
import '../styles/calendar.css'; // css import // test\node_modules\react-calendar\dist\Calendar.css
import React, { useState } from 'react';
import moment from 'moment'; // npm install moment --save

const Customdot = (date, uncheckedTasksNum) => {
  if (uncheckedTasksNum == 0) {
    return (<div key={moment(date).format("YYYY-MM-DD")} className="dot" style={{ backgroundColor: "#FF9AB5" }}><span></span></div>);
  }
  else {
    return (<div key={moment(date).format("YYYY-MM-DD")} className="dot" style={{ backgroundColor: "#C5C4F9" }}><span>{uncheckedTasksNum}</span></div>);
  }
}

const CustomCalendar = ({ tasks = [], value, onChange = f => f }) => {
  // const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);



  React.useMemo(
    () => {
      setMark(tasks.map(({ date }) => date).reduce( // 일정 있는 날짜들
        (distinct, date) =>
          (distinct.indexOf(date) !== -1) ?
            distinct : [...distinct, date],
        []
      ))
    }, [tasks]
  )

  return (
    <Calendar style={{ width: "100%", height: "100%", backgroundColor: "none", borderRadius: "0px 0px 10px 10px" }}
      onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
      formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
      value={value}
      minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      navigationLabel={null}
      showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
      className="mx-auto w-full text-sm border-b"
      tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
        let html = [];
        if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
          const uncheckedTasksNum = tasks.filter((task) => task.date == moment(date).format("YYYY-MM-DD") && task.check == false).length
          html.push(Customdot(date, uncheckedTasksNum));
        }
        return (
          <>
            <div className="flex justify-center items-center absoluteDiv">
              {html}
            </div>
          </>
        );
      }}
    />
  );
}

export default CustomCalendar;