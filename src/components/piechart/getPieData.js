const getPieData = (tasks = []) => {

    const dateFilter = (keyWord) => keyWord.map(task => { return task.date });
    const dates = dateFilter(tasks);
    const months = dates.map(date => date.slice(0, 7));

    const uniqueArr = (array) => array.filter((element, index) => {
        return array.indexOf(element) === index;
    });

    const uniqueMonths = uniqueArr(months);

    const sortedUniqueMonths = uniqueMonths.sort(function (a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    const pieData = sortedUniqueMonths.map(month => {
        let numTasks = 0;
        let numTrue = 0;
        tasks.map((task, i) => (task.check === true && task.date.slice(0, 7) == month) ? numTrue++ : numTrue)

        tasks.map((task, i) => task.date.slice(0, 7) == month ? numTasks++ : numTasks)

        return (
            [{
                id: month + '월 완료',
                value: numTrue,
                color: "#f768a1"
            },
            {
                id: month + '월 미완료',
                value: (numTasks - numTrue),
                color: '#f768a1'
            }
            ]
        );
    }
    )

    return pieData;
}

export default getPieData;
