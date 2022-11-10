const getPieData = (tasks) => {
    let numTasks = 0;
    let numTrue = 0;
    tasks.map(task => numTasks++)
    //console.log(numTasks)
    tasks.map(task => task.check === true ? numTrue++ : numTrue)

    return [numTasks, numTrue]
}

export default getPieData;
