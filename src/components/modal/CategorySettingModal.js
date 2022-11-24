import React from 'react';
import { TextField, styled } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars';
import CategoryNameList from './CategoryNameList'
import { CloseTwoTone } from '@mui/icons-material';


// const CategorySettingModal = (props) =>  {
//     // const { open, close, onNewTask, header, category, calendarSelectedDate, initTask, isBucket } = props;
//     const {open, close, header, categories, setCategories, onShowCategorySettingModal=f=>f} = props;
function CategorySettingModal({open, close, header, categories, setCategories, onShowAddCategoryModal=f=>f}){
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
                    <main style={{margin: '0px'}}>
                        <Scrollbars style={{ width : '100%', height : "35vh" ,backgroundColor: "transparent", borderRadius: "0px 0px 10px 10px" }}>
                            <CategoryNameList categories={categories} />
                        </Scrollbars>
                        {/* <div><span className="settingTitle">내용</span><StyledTextField id="standard-basic" label="" variant="standard" sx={{ width: "80%" }} onChange={e => title = e.target.value} /></div>
                        <div><span className="settingTitle">날짜</span><TaskDatePicker changeSelectedDate={changeSelectedDate} initSelectedDate={calendarSelectedDate} /></div>
                        {(isBucket === true) ? <></> : <div><span className="settingTitle">시간 설정</span><TimeToggle changeSelectedTime={changeSelectedTime} selectedTask={initTask} /></div>} */}
                    </main>
                    <footer>
                        {/* <button className="add" onClick={addNewTask}>add</button> */}
                        <button className="add" onClick={onShowAddCategoryModal}>add</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default CategorySettingModal