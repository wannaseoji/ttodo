const getPieData = (tasks = []) => {

    const dateFilter = (keyWord) => keyWord.map(task => { return task.date });
    const dates = dateFilter(tasks);
    // console.log("dates in getPieData", dates)
    const months = dates.map(date => date.slice(0, 7));
    // console.log("in getPieData months", months);

    const uniqueArr = (array) => array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
    const uniqueMonths = uniqueArr(months);
    // console.log(uniqueMonths);


    const pieData = uniqueMonths.map(month => {
        let numTasks = 0;
        let numTrue = 0;
        tasks.map((task, i) => (task.check === true && task.date.slice(0, 7) == month) ? numTrue++ : numTrue)
        //console.log(month, task.date.slice(0, 7))
        //console.log("numTrue :", numTrue)

        tasks.map((task, i) => task.date.slice(0, 7) == month ? numTasks++ : numTasks)
        // console.log("numTasks :", numTasks)

        return (
            [{
                id: month + '월 완료',
                // label: '완료',
                value: numTrue,
                color: "#f768a1"
            },
            {
                id: month + '월 미완료',
                // label: '미완료',
                value: (numTasks - numTrue),
                color: '#f768a1'
            }
            ]
        );
    }
    )
    //tasks.map(task => numTasks++)
    //console.log(numTasks)
    //tasks.map(task => task.check === true ? numTrue++ : numTrue)
    //const dataform = 
    return pieData;
    //return [numTasks, numTrue];
}

export default getPieData;
