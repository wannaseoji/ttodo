import React,{useState} from 'react';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';

import CategoryTaskList from './CategoryTaskList'
import Scrollbars from 'react-custom-scrollbars';

import '../../styles/TaskList.css';


function CategoryScrollList({categories=[], tasks = [], onCheck = f => f, onOptionsModal = f => f}) {
    console.log(`CategoryScrollList 진입`);
    return (
    <>
    {/* <Scrollbars style={{height:'100%', backgroundColor:"#F0F0F0", borderRadius:"0px 0px 10px 10px"}}> */}
        {categories.map((category, i) => {
            const categoryTasks = tasks.filter(task => task.category === category)
            return <CategoryTaskList key={i} tasks={categoryTasks} onCheck={onCheck} onOptionsModal={onOptionsModal} />
        })}
    {/* </Scrollbars> */}
        
    </>
    )
}

export default CategoryScrollList;