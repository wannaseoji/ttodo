const getLineChartData = (tasks) => {
    const getWeekNumber = (dateFrom = new Date()) => {
        const backup = dateFrom.getFullYear() + "-" + ('0' + (dateFrom.getMonth() + 1)).slice(-2) + "-" + ('0' + dateFrom.getDate()).slice(-2);
        const currentDate = dateFrom.getDate();
        const startOfMonth = new Date(dateFrom.setDate(1));
        const weekDay = startOfMonth.getDay(); // 0: Sun ~ 6: Sat
        return `${backup.slice(0, 10)} : ${(parseInt(((weekDay - 1) + currentDate) / 7) + 1)}주차`;
    }
    const dateFilter = (keyWord) => keyWord.map(task => { return task.date });
    const dates = dateFilter(tasks);
    const months = dates.map(date => date.slice(0, 7));
    const weeks = dates.map(date => {
        return getWeekNumber(new Date(date));
    });//몇주차인지
    const result = weeks.reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
    }, []);
    const count = weeks.map(week => week + " " + result[week.slice(0, 16)]);
    const uniqueArr = (array) => array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
    const uniqueCount = uniqueArr(count);
    const uniqueMonths = uniqueArr(months);
    const weekdata = uniqueCount.map(nWeek => {
        let mweek = nWeek.slice(13, 14);
        let mmonth = nWeek.slice(0, 7);
        let numTasks = 0;

        const mtasks = tasks.map(task => {
            return (task.date.slice(0, 7) == mmonth) && (mweek == getWeekNumber(new Date(task.date)).slice(13, 14))
                ? numTasks++ : numTasks;
        })
        let numTrue = 0;
        const a = tasks.map(task => {
            return (((task.date.slice(0, 7) == mmonth) && (mweek == getWeekNumber(new Date(task.date)).slice(13, 14))) && (task.check === true))
                ? numTrue++ : numTrue;
        })

        return { mmonth, mweek, numTasks, numTrue };
    })
    const arrUnique = (weekdata) => weekdata.filter((character, idx, arr) => {
        return arr.findIndex((item) => item.mmonth === character.mmonth && item.mweek === character.mweek) === idx
    });
    const uniqueWeekdata = arrUnique(weekdata);
    const groupByCategory = (uniqueWeekdata) => uniqueWeekdata.reduce((group, weekdata) => {
        const { mmonth } = weekdata;
        // console.log("weekdata", weekdata);
        group[mmonth] = group[mmonth] ?? [];
        group[mmonth].push(weekdata);
        return group;
    }, []);
    const sortedUniqueWeekData = groupByCategory(uniqueWeekdata)
    const sortedUniqueMonths = uniqueMonths.sort(function (a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    const MarrUnique = (weekdata) => weekdata.filter((character, idx, arr) => {
        return arr.findIndex((item) => item.x === character.x && item.y === character.y) === idx
    });
    const LINEDATA = sortedUniqueMonths.map(
        month => {
            var arrlinedata = [];

            var arrlabels = ['1주차', '2주차', '3주차', '4주차'];
            var finalLineData = [];
            const compare = [
                { x: "1주차", y: `0` },
                { x: "2주차", y: `0` },
                { x: "3주차", y: `0` },
                { x: "4주차", y: `0` },
            ];

            sortedUniqueWeekData[month].map(
                (monthly) => {
                    const labels = monthly.mweek + "주차"
                    arrlabels.push(labels)
                    const linedata = { x: monthly.mweek + "주차", y: `${monthly.numTrue / monthly.numTasks * 100}` }
                    arrlinedata.push(linedata)
                    return;
                }
            )

            compare.map(compare => {
                finalLineData.push(compare)
                arrlinedata.map(linedata => {
                    if (finalLineData.includes(compare) && compare.x == linedata.x && parseFloat(compare.y) <= parseFloat(linedata.y)) {
                        finalLineData.pop()
                        finalLineData.push(linedata)
                    }

                    return;
                })
            })

            arrlinedata.map(linedata => finalLineData.map(FL => FL.x != linedata.x).includes(false) ? finalLineData : finalLineData.push(linedata))
            const sortedlabels = arrlabels.sort(function (a, b) {
                return a.slice(0, 1) - b.slice(0, 1);
            });
            const sortedlinedata = arrlinedata.sort(function (a, b) {
                return a.x.slice(0, 1) - b.x.slice(0, 1);
            });
            const finalLabelData = uniqueArr(sortedlabels)

            return {
                labels: finalLabelData,
                datasets: [
                    {
                        type: 'line',
                        label: '주차별 목표달성율',
                        borderColor: '#FF9AB5',
                        borderWidth: 2,
                        data: finalLineData,
                        datalabels: {		// 라인차트의 CSS
                            // color: 'white'
                            color: '#FF9AB5',
                            backgroundColor: 'white',
                            font: { size: 13, weight: 'bold' },
                        },

                    },
                ]
            };
        }
    )


    return LINEDATA;


}

export default getLineChartData

