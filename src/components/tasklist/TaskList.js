import * as React from 'react';

import Task from './Task'

export default function TaskList ({tasks = [], limit, onCheckTask = f => f, onOptionsModal = f => f}){
    // Category 이름만 추출
    // const categoryObjectArray = tasks.reduce(function(acc, current) {
    //     if (acc.findIndex(({ category }) => category === current.category) === -1) {
    //         acc.push(current);
    //     }
    //         return acc;
    //     }, []);
    // const categoryNameArray = categoryObjectArray.map((categoryTask) => categoryTask.category)
    let result = [];
    for (var j = 0; j < limit; j++) {
        if(tasks[j] == null) continue;
        result.push(<Task key={j} task={tasks[j]} i={j} onCheck={onCheckTask} onOptionsModal={onOptionsModal} />)
    }
    console.log(`result : ${result}`);
    return result
}