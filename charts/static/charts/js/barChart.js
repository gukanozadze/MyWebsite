
var dom = document.getElementById("barChart");
var myBarChart = echarts.init(dom);

var app = {};
option = null;

var xAxisData = []
var valueData = [3900, 3800, 3850, 3750, 3550, 3200, 3100, 2900, 2750, 2450, 2250, 1940, 1800, 1600, 1300, 1200, 1200, 1300, 1500, 1700, 1900, 2200, 2350, 2450, 2600, 2800, 3050, 3200, 3300, 3100, 3500, 3800, 3700, 3600, 3400, 3200, 3100, 2900, 2700, 2900, 3100, 3400, 3800, 3900, 4100, 4300, 4400, 4500, 4600, 4500, 4400, 4300, 4200, 4100, 4100, 4200, 4300, 4400, 4600, 4700, 4500, 4300, 4000, 3400, 3100, 2800, 2500, 2400, 2500, 2700, 2800, 3100, 3500, 3600, 3650, 3750, 3650, 3550, 3650]
var colors = []
var barChartData = [...valueData]

var maximumValue = Math.max(...valueData)
var averageValue = parseInt(valueData.reduce( (x,y) => (x+y)) / valueData.length) // Average of Data also acts as yAxis Line separator
var maximumYAxisValue = Math.ceil(parseInt(maximumValue)/1000)*1000

var barValue = Array(valueData.length).fill(averageValue)


for (let i = 0; i < valueData.length; i++) {
    if((barChartData[i] - averageValue) >= 0){
        barChartData[i] -= averageValue
    }else{
        barChartData[i] = averageValue - barChartData[i]
        barValue[i] -=  barChartData[i]
    } 
}

function setColors(valueData){

    for (let i = 0; i < valueData.length; i++) {
            if (valueData[i] <= valueData[i-1]){
                
                colors[i] = new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#FF39F7'},
                        {offset: 1, color: '#FFBD4C'}
                    ]
                )
            }else{
                
                colors[i] = new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#5EF8F6'},
                        {offset: 1, color: '#2AE14D'}
                    ]
                )
            } 
            if(i == 0){
                if (valueData[i] >= valueData[i+1]){
                    colors[i] = new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#FF39F7'},
                            {offset: 1, color: '#FFBD4C'}
                        ]
                    )
                    
                }else{
                    
                    colors[i] = new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#5EF8F6'},
                            {offset: 1, color: '#2AE14D'}
                        ]
                    )
                } 
            }
         
    }
}
setColors(valueData)

var finalBarData = []
for (let i = 0; i < barChartData.length; i++) {
    let element = {
        value: barChartData[i],
        itemStyle: {color:colors[i]}
    }
    finalBarData.push(element)
}

option = {
    
    title: {
        text: 'Bitcoin Value in Last 30 Days (Example)',
        padding: [10, 60],
        textStyle: {
            color: 'white',
            left: 20
        },
    },
    tooltip : {
        formatter: function(object){
            if(object.seriesName == 'showedBar'){
                return valueData[object.dataIndex]
            }
        },
        
    },
    
    grid: {
        left: '3%',
        containLabel: true,
        backgroundColor: 'red'
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 0,
            borderColor: '#ffffff',
            verticalAlign: 'center',
            fontFamily: 'arial',
            fontStyle: 'bold',
            fontSize: 15,
            color: '#6E72F4',
        },
        data: xAxisData        
    },
    yAxis: {

        type: 'value',
        axisLabel: {
            fontFamily: 'arial',
            fontStyle: 'bold',
            fontSize: 15,
            color: '#6E72F4',
            formatter: function (value, index) {
                if (value >= 1000){
                    return `${Math.ceil(value/1000)}K`;
                }
                return value;
            },

        },
        axisLine: {
            show: false,
        },
        splitLine:{
            lineStyle:{
                color: '#192156', 
                width: 25
            }
        },
        type : 'value',
        max: maximumYAxisValue
    },
    series: [
        {   
            cursor: 'disabled',
            name: 'hiddenBar',
            type: 'bar',
            barCategoryGap: '50%', // Width of bars
            stack:  'sameName',
            itemStyle: {
            cursos: 'none',

                normal: {
                    
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: barValue
        },
        {
            name: 'showedBar',
            type: 'bar',
            stack: 'sameName',
            itemStyle: {
                barBorderColor: '#ffffff',
                barBorderWidth: 0,
                barBorderRadius: [5, 5, 5, 5], // Border Radius of 4 corners

                emphasis: {
                    barBorderWidth: 1, // Hover effect
                }
            },
            data: finalBarData
        }
    ],
};
myBarChart.setOption(option, true);


// var dom = document.getElementById("chart");
// var myChart = echarts.init(dom);
// var app = {};
// option = null;
// app.title = 'Bar Chart';

// var xAxisData = [];
// var data1 = [];
// var data2 = [];
// var data3 = [];
// var data4 = [];

// for (var i = 0; i < 30; i++) {
//     if (i % 2 == 0){
//         data1.push((Math.random() * 105).toFixed(2));    
//     }
// }

// var itemStyle = {
//     normal: {
//     },
//     emphasis: {
//         barBorderWidth: 1,
//         shadowBlur: 10,
//         shadowOffsetX: 0,
//         shadowOffsetY: 0,
//         shadowColor: 'rgba(0,0,0,0.5)'
//     }
// };

// option = {
//     backgroundColor: '#eee',
   
//     legend: {
//         data: ['bar'],
//         align: 'left',
//         left: 10
//     },
//     brush: {
//         toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
//         xAxisIndex: 0
//     },
//     toolbox: {
//         feature: {
//             magicType: {
//                 type: ['stack', 'tiled']
//             },
//             dataView: {}
//         }
//     },
//     tooltip: {},
//     xAxis: {
//         offset: 20,
//         data: xAxisData,
//         name: 'X Axis',
//         silent: false,
//         axisLine: {
//             onZero: true,
//         },
//     },
//     yAxis: {
        
//         scale: false,
//     },
//     grid: {
//         left: 100,
        
//     },
//     visualMap: {
//         type: 'continuous',
//         dimension: 1,
//         text: ['High', 'Low'],
//         inverse: true,
//         itemHeight: 200,
//         calculable: true,
//         min: -2,
//         max: 6,
//         top: 60,
//         left: 10,
//         inRange: {
//             colorLightness: [0.4, 0.8]
//         },
//         outOfRange: {
//             color: '#bbb'
//         },
//         controller: {
//             inRange: {
//                 color: '#2f4554'
//             }
//         }
//     },
//     series: [
//         {
//             name: 'bar',
//             type: 'bar',
//             start: 50,
//             barMinHeight: 20,
//             lage: true,
//             stack: 'one',
//             itemStyle: itemStyle,
//             data: data1
//         },

//     ]
// };

// myChart.on('brushSelected', renderBrushed);

// function renderBrushed(params) {
//     var brushed = [];
//     var brushComponent = params.batch[0];

//     for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
//         var rawIndices = brushComponent.selected[sIdx].dataIndex;
//         brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
//     }

//     myChart.setOption({
//         title: {
//             backgroundColor: '#333',
//             text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
//             bottom: 0,
//             right: 0,
//             width: 100,
//             textStyle: {
//                 fontSize: 12,
//                 color: '#fff'
//             }
//         }
//     });
// };
// if (option && typeof option === "object") {
//     myChart.setOption(option, true);
// }
       









/*
app.title = '柱状图框选';

var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

for (var i = 0; i < 30; i++) {
    if (i % 2 == 0){
        data1.push((Math.random() * 15).toFixed(2));    
    }else{
        
        data1.push((Math.random() * -13).toFixed(2));
    }
    

}

var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    backgroundColor: '#eee',
    legend: {
        data: ['bar', 'bar2'],
        align: 'left',
        left: 10
    },
    brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {},
    xAxis: {
        
        data: xAxisData,
        name: 'X Axis',
        silent: false,
        axisLine: {show: false},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        max: 20,
        min: -20,
        splitArea: {show: false}
    },
    grid: {
        left: 100,
        
    },
    visualMap: {
        type: 'continuous',
        dimension: 1,
        text: ['High', 'Low'],
        inverse: true,
        itemHeight: 200,
        calculable: true,
        min: -2,
        max: 6,
        top: 60,
        left: 10,
        inRange: {
            colorLightness: [0.4, 0.8]
        },
        outOfRange: {
            color: '#bbb'
        },
        controller: {
            inRange: {
                color: '#2f4554'
            }
        }
    },
    series: [
        {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data1
        },

    ]
};

myChart.on('brushSelected', renderBrushed);

function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }

    myChart.setOption({
        title: {
            backgroundColor: '#333',
            text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
            bottom: 0,
            right: 0,
            width: 100,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        }
    });
}
*/