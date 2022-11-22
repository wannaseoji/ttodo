import * as React from 'react';

import Task from './Task'

export default function TaskList ({tasks = [], limit, onCheckTask = f => f, onOptionsModal = f => f}){
    let result = [];
    //if(tasks.length === 0) return result;

    let nonCheckTasks = tasks.filter(({check})=> check === false)
    let checkTasks = tasks.filter(({check}) => check === true)
    
    console.log(`TaskList 안의 tasks : ${tasks}`)
    console.log(`TaskList 안의 nonCheckTasks : ${nonCheckTasks}`)
    let cnt = 0;
    for (var j = 0; j < limit; j++) {
        if(nonCheckTasks[j] == null)
            result.push(<Task key={j} task={checkTasks[cnt++]} i={j} onCheck={onCheckTask} onOptionsModal={onOptionsModal} />)
        else
            result.push(<Task key={j} task={nonCheckTasks[j]} i={j} onCheck={onCheckTask} onOptionsModal={onOptionsModal} />)
    }
    
    return result
}