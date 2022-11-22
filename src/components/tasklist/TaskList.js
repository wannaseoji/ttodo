import * as React from 'react';

import Task from './Task'



export default function TaskList ({tasks = [], limit, onCheckTask = f => f, onModifyTaskModal = f => f}){
    let nonCheckTasks = tasks.filter(({check})=> check === false)
    let checkTasks = tasks.filter(({check}) => check === true)
    
    let result = [];
    let cnt = 0;

    // const test = (task) => {
    //     console.log("===================================================")
    //     console.log(task)
    //     onModifyTaskModal()
    // }

    for (var j = 0; j < limit; j++) {
        if(nonCheckTasks[j] == null)
            result.push(<Task key={j} task={checkTasks[cnt++]} i={j} onCheck={onCheckTask} onModifyTaskModal={onModifyTaskModal} />)
        else
            result.push(<Task key={j} task={nonCheckTasks[j]} i={j} onCheck={onCheckTask} onModifyTaskModal={onModifyTaskModal} />)
    }
    
    return result
}