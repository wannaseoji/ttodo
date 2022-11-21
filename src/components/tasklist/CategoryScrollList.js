import React,{useState} from 'react';
import CategoryTaskList from './CategoryTaskList'
import '../../styles/TaskList.css';


function CategoryScrollList({categories=[], tasks = [], onCheck = f => f, onOptionsModal = f => f, onAddTaskModal = f => f}) {
    console.log(`CategoryScrollList 진입`);
    return (
        categories.map((category, i) => {
            const categoryTasks = tasks.filter(task => task.category === category)
            return <CategoryTaskList key={i} categoryName={category} tasks={categoryTasks} onCheck={onCheck} onOptionsModal={onOptionsModal}  onAddTaskModal = {onAddTaskModal}/>
        })
    )
}

export default CategoryScrollList;