import React from 'react';
import List from '@mui/material/List';
import TaskList from './TaskList'
import '../../styles/TaskList.css';

function HomeTaskList({tasks = [], limit, onCheck = f => f, onModifyTaskModal = f => f}) {
    return (
        <>
            <List className='tasklist_container'
                sx={{ bgcolor: 'background.paper', 
                marginTop:'1vh', width: "100%"}}>
                <div id='category_top'>
                    <span id="category_name">My Task</span>
                </div>
                {tasks.length!== 0 ? 
                    <TaskList 
                    tasks={tasks}
                    limit={limit}
                    onCheckTask={onCheck}
                    onModifyTaskModal={onModifyTaskModal}/> : <div style={{color: "#575757", fontWeight:"bold"}}>할 일을 추가해 보세요!</div>}
            </List>
        </>
    )
}

export default HomeTaskList;