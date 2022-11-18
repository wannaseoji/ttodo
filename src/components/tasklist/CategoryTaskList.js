import React,{useState} from 'react';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import TaskList from './TaskList'
import { IoMdAddCircleOutline } from "react-icons/io";
import '../../styles/TaskList.css';


function CategoryTaskList({tasks = [], categoryName, onCheck = f => f, onOptionsModal = f => f, onAddTaskModal = f => f}) {
    return (
    <>
        <List sx={{ width: '80%',left:'50%', transform: 'translateX(-50%)', bgcolor: '#FFE2E9', borderRadius:'5px', paddingLeft:'1vw', paddingRight: '1vw', marginTop:'1vh' }}>
            <div id='category_top'>
                <span id="category_name">{categoryName}</span>
                <IconButton id='add_task_btn' aria-label="addTask" onClick={(e)=>onAddTaskModal(e,categoryName)}>
                    <IoMdAddCircleOutline size='3vh' />
                </IconButton>
            </div>
            <TaskList
                tasks={tasks}
                limit={tasks.length}
                onCheckTask={onCheck}
                onOptionsModal={onOptionsModal}/>
        </List>
    </>
    )
}

export default CategoryTaskList;