import React from 'react';
import List from '@mui/material/List';
import TaskList from './TaskList'
import '../../styles/TaskList.css';

// Home 화면에서 limit 개수만큼 고정으로 띄우는 TaskList
function HomeTaskList({tasks = [], limit, onCheck = f => f, onOptionsModal = f => f}) {
    return (
        <>
            <List className='tasklist_container'
                sx={{ bgcolor: 'background.paper', 
                marginTop:'1vh', marginRight:'6vw' }}>
                <div id='category_top'>
                    <span id="category_name">My Task</span>
                </div>
                <TaskList 
                    tasks={tasks}
                    limit={limit}
                    onCheckTask={onCheck}
                    onOptionsModal={onOptionsModal}/>
            </List>
        </>
    )
}

export default HomeTaskList;