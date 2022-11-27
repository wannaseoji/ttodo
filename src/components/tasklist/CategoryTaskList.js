import React, { useState } from 'react';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import TaskList from './TaskList'
import { IoMdAddCircleOutline } from "react-icons/io";
import '../../styles/TaskList.css';


function CategoryTaskList({ tasks = [], categoryName, onCheck = f => f, onModifyTaskModal = f => f, onAddTaskModal = f => f }) {
    return (
        <>

            <List sx={{ width: '95%', left: '50%', transform: 'translateX(-50%)', bgcolor: '#FFE2E9', borderRadius: '5px', padding: "1.7vh 1vw", marginTop: '1vh' }}>
                <div id='category_top'>
                    <span id="category_name">{categoryName}</span>
                    <IconButton id='add_task_btn' aria-label="addTask" onClick={(e) => onAddTaskModal(e, categoryName)}>
                        <IoMdAddCircleOutline size='3vh' />
                    </IconButton>
                </div>
                <TaskList
                    tasks={tasks}
                    limit={tasks.length}
                    onCheckTask={onCheck}
                    onModifyTaskModal={onModifyTaskModal} />
            </List>
        </>
    )
}

export default CategoryTaskList;