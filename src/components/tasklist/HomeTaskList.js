import React,{useState} from 'react';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import TaskList from './TaskList'

import { IoMdAddCircleOutline } from "react-icons/io";

import '../../styles/TaskList.css';

// Home 화면에서 limit 개수만큼 고정으로 띄우는 TaskList
function HomeTaskList({tasks = [], limit, onCheck = f => f, onOptionsModal = f => f, onAddTaskModal = f => f}) {

    return (
    <>
        <List sx={{ width: '95%',left:'50%', transform: 'translateX(-50%)', bgcolor: 'background.paper', borderRadius:'5px', paddingLeft:'1vw', paddingRight: '1vw', marginTop:'1vh', marginRight:'6vw' }}>
            <div id='category_top'>
                <span id="category_name">My Task</span>
                <IconButton id='add_task_btn' aria-label="addTask" onClick={onAddTaskModal}>
                    <IoMdAddCircleOutline size='3vh' />
                </IconButton>
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