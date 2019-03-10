// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('chart'));



var data = genData(50);
option = {
    title : {
        text: 'CryptoCurrency',
        subtext: 'Values',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
    },
    series : [
        {
            name: 'Currency',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

function genData(count) {
    
    var nameList = [];
    var valueList = []

    var legendData = [];
    var seriesData = [];
    var selected = {};

    // My Edit
    for(let chart of chartData){
        nameList.push(chart.labelName)
        valueList.push(chart.labelValue)

        seriesData.push({
            name: chart.labelName,
            value: chart.labelValue
        });
    }

    for (var i = 0; i < nameList.length; i++) {
        name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
        legendData.push(nameList[i]);

        selected[name] = i < 6;
    }


    return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
    };

    function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
    }
}


// use configuration item and data specified to show chart
myChart.setOption(option);