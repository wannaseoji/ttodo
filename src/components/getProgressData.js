
const getProgressData = (tasks, category) => {


    const categoryNum = tasks.filter(task =>
        task.category === category
    ).length

    const categoryTrue = tasks.filter(task => {
        return (task.category === category) && (task.check === true)
    }).length

    //console.log("in getProgress categoryNum:", categoryNum)
    //console.log("in getProgress categoryTrue:", categoryTrue)


    const progressData =
    {
        name: category,
        done: categoryTrue,
        total: categoryNum,
        percent: categoryTrue / categoryNum * 100 + "%"
    }

    //console.log("in getProgressData", progressData)
    return progressData;
}

export default getProgressData;