
const getProgressData = (tasks, category, month) => {


    const categoryNum = tasks.filter(task =>
        task.category === category && task.date.slice(0, 7) == month
    ).length


    const categoryTrue = tasks.filter(task => {
        return (task.category === category) && (task.check === true) && task.date.slice(0, 7) == month
    }).length

    //console.log("in getProgress categoryNum:", categoryNum)
    //console.log("in getProgress categoryTrue:", categoryTrue)
    const percent = (categoryTrue / categoryNum * 100) ? (categoryTrue / categoryNum * 100) : 0


    const progressData =
    {
        name: category,
        done: categoryTrue,
        total: categoryNum,
        percent: Math.round(percent),
        maxPercent: 100,
        month: month
    }

    // console.log("in getProgressData", progressData)

    return progressData;
}

export default getProgressData;