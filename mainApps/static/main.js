// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('chart'));


var data = genData(50);

option = {
   
    title : {
        text: 'CryptoCurrency',
        subtext: 'Values',
        x:'center',
        show: false
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 0,
        data: data.legendData,
        selected: data.selected,
        textStyle: {
            fontSize: 15
        }
    },
    series : [
        {
            name: 'Currency',
            type: 'pie',
            selectedMode: true,
            radius : '80%',
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
    console.log(chartData)
    // My Edit
    for(let chart of chartData){
        nameList.push(chart.cryptocurrency_name)
        valueList.push(chart.cryptocurrency_value)

        seriesData.push({
            name: chart.cryptocurrency_name,
            value: chart.cryptocurrency_value
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
$(window).on('resize', function(){
    if(myChart != null && myChart != undefined){
        myChart.resize();
    }
});
// use configuration itemf and data specified to show chart