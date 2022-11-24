import React,{useState} from 'react';
import CategoryTaskList from './CategoryTaskList'
import '../../styles/TaskList.css';


function CategoryScrollList({categories=[], tasks = [], onCheck = f => f, onModifyTaskModal = f => f, onAddTaskModal = f => f}) {
    console.log(`CategoryScrollList 진입`);
    return (
        categories.map((category, i) => {
            const categoryTasks = tasks.filter(task => task.category === category.title)
            return <CategoryTaskList key={i} categoryName={category.title} tasks={categoryTasks} onCheck={onCheck} onModifyTaskModal={onModifyTaskModal}  onAddTaskModal = {onAddTaskModal}/>
        })
    )
}

export default CategoryScrollList;