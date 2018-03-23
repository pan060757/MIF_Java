/**
 * Created by songsong on 2017/12/22.
 */
function load() {
    var identity = $("#identity").val();
    var param = '&identity=' + '1';
    //收支走向
    var charts = [];
    $.ajax({
            url: '/MIF/statistic/totalTrend',
            type: 'get',
            data: param,
            dataType: 'json',
            success: function (data) {
                var income = [];     ///只展示其中的几列
                var cost = [];
                for (var i = 0; i < data.tts.length; i++) {
                    income.push((parseFloat(data.tts[i].income) / 10000).toFixed(2));
                    cost.push(-(parseFloat(data.tts[i].cost) / 10000).toFixed(2));
                }
                //收支走向
                var line = echarts.init(document.getElementById('charge_cost'));
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['支出', '收入']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            axisTick: {show: false},
                            data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'
                                , '2013', '2014', '2015']
                        }
                    ],
                    series: [
                        {
                            name: '收入',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            data: income
                        },
                        {
                            name: '支出',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'left'
                                }
                            },
                            data: cost
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);
                charts.push(line);
                //基金结余情况
                var line = echarts.init(document.getElementById('balance'));
                option = {
                    title: {
                        text: '2015年账户结余情况',
                        x: 'right'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['统筹账户支出', '统筹账户结余', '个人账户支出', '个人账户结余']
                    },
                    series: [
                        {
                            name: '统筹账户',
                            type: 'pie',
                            radius: '45%',
                            center: ['40%', '70%'],
                            data: [
                                {value: 80352.9, name: '统筹账户支出'},
                                {value: 6703.83, name: '统筹账户结余'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        },
                        {
                            name: '个人账户',
                            type: 'pie',
                            radius: '45%',
                            center: ['70%', '70%'],
                            data: [
                                {value: 39489, name: '个人账户支出'},
                                {value: 17126, name: '个人账户结余'}
                            ]
                        }
                    ]
                };
                line.setOption(option);

                //平均工资
                var line = echarts.init(document.getElementById('avgWage'));
                var wage = [];
                for (var i = 0; i < data.tts.length; i++) {
                    wage.push(data.tts[i].avgwage);
                }
                option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        show: true,
                        x: 'right',
                        y: 'top',
                        data: ['平均工资',]
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'
                                , '2013', '2014', '2015']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '平均工资',
                            type: 'line',
                            stack: '总量1',
                            data: wage
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);
                charts.push(line);
                //参保人数
                var line = echarts.init(document.getElementById('numbers'));
                var numbers = [];
                for (var i = 0; i < data.tts.length; i++) {
                    numbers.push(data.tts[i].numbers);
                }
                option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        show: true,
                        x: 'right',
                        y: 'top',
                        data: ['参保人数']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'
                                , '2013', '2014', '2015']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '参保人数',
                            type: 'line',
                            stack: '总量1',
                            data: numbers
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);
                charts.push(line);
                //在职离退人数
                var line = echarts.init(document.getElementById('working_retired'));
                var working = [];     ///只展示其中的几列
                var retired = [];
                for (var i = 0; i < data.tts.length; i++) {
                    working.push(data.tts[i].working);
                    retired.push(data.tts[i].retired);
                }
                option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['在职人数', '离退人数']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'
                                , '2013', '2014', '2015']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '离退人数',
                            type: 'bar',
                            data: retired,
                            itemStyle: {
                                normal: {color: '#ffb848'}
                            }
                        },
                        {
                            name: '在职人数',
                            type: 'bar',
                            data: working,
                            itemStyle: {
                                normal: {color: '#35aa47'}
                            }
                        }
                    ]
                };
                //为echarts对象加载数据
                line.setOption(option);
                charts.push(line);
                //新参保和退保情况
                var line = echarts.init(document.getElementById('new_back'));
                var timeData = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];
                var new_number = [20362, 28841, 16539, 21498, 99793, 38516, 25575, 36837, 53089, 39398, 38936, 53907, 48777, 44193];
                var back_number = [1988, 4250, 3667, 4670, 3445, 5856, 6848, 8557, 11230, 13569, 14794, 18860, 25243, 33666];
                var option = {
                    title: {
                        text: '新参保和退保情况',
                        subtext: '数据来自泸州医保局',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    legend: {
                        data: ['新参保人数', '退保人数'],
                        x: 'left'
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    axisPointer: {
                        link: {xAxisIndex: 'all'}
                    },
                    dataZoom: [
                        {
                            show: true,
                            realtime: true,
                            start: 30,
                            end: 70,
                            xAxisIndex: [0, 1]
                        },
                        {
                            type: 'inside',
                            realtime: true,
                            start: 30,
                            end: 70,
                            xAxisIndex: [0, 1]
                        }
                    ],
                    grid: [{
                        left: 50,
                        right: 50,
                        height: '35%'
                    }, {
                        left: 50,
                        right: 50,
                        top: '55%',
                        height: '35%'
                    }],
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {onZero: true},
                            data: timeData
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {onZero: true},
                            data: timeData,
                            position: 'top'
                        }
                    ],
                    yAxis: [
                        {
                            name: '新参保人数',
                            type: 'value'
                        },
                        {
                            gridIndex: 1,
                            name: '退保人数',
                            type: 'value',
                            inverse: true
                        }
                    ],
                    series: [
                        {
                            name: '新参保人数',
                            type: 'line',
                            symbolSize: 10,
                            hoverAnimation: false,
                            data: new_number
                        },
                        {
                            name: '退保人数',
                            type: 'line',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            symbolSize: 10,
                            hoverAnimation: false,
                            data: back_number
                        }
                    ]
                };
                line.setOption(option);
                charts.push(line);
                //年龄结构
                var param = '&identity=' + '1';
                var line = echarts.init(document.getElementById('age_group'));
                $.ajax({
                        url: '/MIF/statistic/ageDistribution',
                        type: 'get',
                        data: param,
                        dataType: 'json',
                        success: function (data) {
                            var newjson = [];                             ///只展示其中的几列
                            for (var i = 0; i < data.ads.length; i++) {
                                newjson.push(data.ads[i].c_count);
                            }
                            var dataMap = {};

                            function dataFormatter(obj) {
                                var pList = ['20岁以下', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100岁以上']
                                for (var year = 2006; year <= 2015; year++) {
                                    var max = 0;
                                    var sum = 0;
                                    temp = obj[year];
                                    for (var i = 0, l = temp.length; i < l; i++) {
                                        max = Math.max(max, temp[i]);
                                        sum += temp[i];
                                        obj[year][i] = {
                                            name: pList[i],
                                            value: temp[i]
                                        }
                                    }
                                    obj[year + 'max'] = Math.floor(max / 100) * 100;
                                    obj[year + 'sum'] = sum;
                                }
                                return obj;
                            }

                            dataMap.c_count = dataFormatter({
                                //max : 26600,
                                2015: newjson.slice(90, 100),
                                2014: newjson.slice(80, 90),
                                2013: newjson.slice(70, 80),
                                2012: newjson.slice(60, 70),
                                2011: newjson.slice(50, 60),
                                2010: newjson.slice(40, 50),
                                2009: newjson.slice(30, 40),
                                2008: newjson.slice(20, 30),
                                2007: newjson.slice(10, 20),
                                2006: newjson.slice(0, 10)
                            });
                            option = {
                                baseOption: {
                                    timeline: {
                                        axisType: 'category',
                                        autoPlay: true,
                                        playInterval: 1000,
                                        data: [
                                            '2006-01-01', '2007-01-01', '2008-01-01',
                                            '2009-01-01',
                                            '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01',
                                            '2015-01-01'
                                        ],
                                        label: {
                                            formatter: function (s) {
                                                return (new Date(s)).getFullYear();
                                            }
                                        }
                                    },
                                    tooltip: {},
                                    legend: {
                                        x: 'center',
                                        data: ['参保人数']
                                    },
                                    calculable: true,
                                    grid: {
                                        top: 80,
                                        bottom: 100,
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow',
                                                label: {
                                                    show: true,
                                                    formatter: function (param) {
                                                        return param.value.replace('\n', '');
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    xAxis: [
                                        {
                                            'type': 'category',
                                            'axisLabel': {'interval': 0},
                                            'data': [
                                                '20岁以下', '\n20-30', '30-40', '\n40-50', '50-60', '\n60-70', '70-80', '\n80-90', '90-100', '\n100岁以上'
                                            ],
                                            splitLine: {show: false}
                                        }
                                    ],
                                    yAxis: [
                                        {
                                            type: 'value',
                                            name: '各年龄段参保人数'
                                        }
                                    ],
                                    series: [
                                        {name: '参保人数', type: 'bar'},
                                    ]
                                },
                                options: [
                                    {
                                        series: [
                                            {data: dataMap.c_count['2006']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2007']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2008']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2009']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2010']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2011']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2012']},
                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2013']}

                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2014']}
                                        ]
                                    },
                                    {
                                        series: [
                                            {data: dataMap.c_count['2015']}

                                        ]
                                    }
                                ]
                            };
                            line.setOption(option);
                            charts.push(line);
                        }
                    }
                );
            }
        }
    );
    //各等级医院数目
    var line = echarts.init(document.getElementById('hospital_nums'));
    var option = {
        title : {
            text: '2015年各等级医院数目分布情况',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x : 'left',
            data:['社区','无等级','一级','二级','三级','异地']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 110],
                center : ['35%', '50%'],
                roseType : 'area',
                data:[
                    {value:8, name:'社区'},
                    {value:69, name:'无等级'},
                    {value:181, name:'一级'},
                    {value:101, name:'二级'},
                    {value:122, name:'三级'},
                    {value:179, name:'异地'},
                ]
            }
        ]
    }
    line.setOption(option);
    charts.push(line);
    //医疗服务
    var param = '&identity=' + '1';
    var line = echarts.init(document.getElementById('hospital_count'));
    $.ajax({
        url: '/MIF/statistic/feesDetail',
        type: 'get',
        data: param,
        dataType: 'json',
        success: function (data) {
                var m_count = [];                             ///只展示其中的几列
                var h_count = [];
                for (var i = 0; i < data.fds.length; i++) {
                    if (data.fds[i].year > '2009') {
                        m_count.push(data.fds[i].m_count);
                        h_count.push(data.fds[i].h_count);
                    }
                }
                var dataMap = {};
                function dataFormatter(obj) {
                    var pList = ['一级', '二级', '三级', '无等级', '异地', '社区']
                    for (var year = 2010; year <= 2015; year++) {
                        var max = 0;
                        var sum = 0;
                        temp = obj[year];
                        for (var i = 0, l = temp.length; i < l; i++) {
                            max = Math.max(max, temp[i]);
                            sum += temp[i];
                            obj[year][i] = {
                                name: pList[i],
                                value: temp[i]
                            }
                        }
                        obj[year + 'max'] = Math.floor(max / 100) * 100;
                        obj[year + 'sum'] = sum;
                    }
                    return obj;
                }

                dataMap.m_count = dataFormatter({
                    //max : 26600,
                    2015: m_count.slice(30, 36),
                    2014: m_count.slice(24, 30),
                    2013: m_count.slice(18, 24),
                    2012: m_count.slice(12, 18),
                    2011: m_count.slice(6, 12),
                    2010: m_count.slice(0, 6)
                });
                dataMap.h_count = dataFormatter({
                    //max : 26600,
                    2015: h_count.slice(30, 36),
                    2014: h_count.slice(24, 30),
                    2013: h_count.slice(18, 24),
                    2012: h_count.slice(12, 18),
                    2011: h_count.slice(6, 12),
                    2010: h_count.slice(0, 6)
                });
                var option = {
                    baseOption: {
                        timeline: {
                            axisType: 'category',
                            autoPlay: true,
                            playInterval: 1000,
                            data: [
                                '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01',
                                '2015-01-01'
                            ],
                            label: {
                                formatter: function (s) {
                                    return (new Date(s)).getFullYear();
                                }
                            }
                        },
                        tooltip: {},
                        legend: {
                            x: 'center',
                            data: ['门诊人次', '住院人次']
                        },
                        calculable: true,
                        grid: {
                            top: 80,
                            bottom: 100,
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow',
                                    label: {
                                        show: true,
                                        formatter: function (params) {
                                            return params.value.replace('\n', '');
                                        }
                                    }
                                }
                            }
                        },
                        xAxis: [
                            {
                                'type': 'category',
                                'axisLabel': {'interval': 0},
                                'data': ['一级', '二级', '三级', '无等级', '异地', '社区'],
                                splitLine: {show: false}
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: '各等级医院就医人次'
                            }
                        ],
                        series: [
                            {name: '门诊人次', type: 'bar'},
                            {name: '住院人次', type: 'bar'},
                        ]
                    },
                    options: [
                        {
                            series: [
                                {data: dataMap.m_count['2010']},
                                {data: dataMap.h_count['2010']}

                            ]
                        },
                        {
                            series: [
                                {data: dataMap.m_count['2011']},
                                {data: dataMap.h_count['2011']}

                            ]
                        },
                        {
                            series: [
                                {data: dataMap.m_count['2012']},
                                {data: dataMap.h_count['2012']}
                            ]
                        },
                        {
                            series: [
                                {data: dataMap.m_count['2013']},
                                {data: dataMap.h_count['2013']}

                            ]
                        },
                        {
                            series: [
                                {data: dataMap.m_count['2014']},
                                {data: dataMap.h_count['2014']}
                            ]
                        },
                        {
                            series: [
                                {data: dataMap.m_count['2015']},
                                {data: dataMap.h_count['2015']}
                            ]
                        }
                    ]
                };
                line.setOption(option);
                charts.push(line);
            }
    });
    $(window).resize(function () {
        for (var i = 0; i < charts.length; i++) {
            charts[i].resize();
        }
    });
    //解决tab切换不显示问题 在加载窗口后重新渲染。
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        for (var i = 0; i < charts.length; i++) {
            charts[i].resize();
        }
    });
}
function getCity() {
    var city = [
        ['统筹费用支出', '人次', '药品费用'],
        ['人次分布', '费用分布'],
    ];
    //获得省份下拉框的对象
    var sltProvince = document.form1.feesDetail;
    //获得城市下拉框的对象
    var sltCity = document.form1.selectBy;

    //得到对应省份的城市数组
    var provinceCity = city[sltProvince.selectedIndex - 1];

    //清空城市下拉框，仅留提示选项
    sltCity.length = 0;
    //将城市数组中的值填充到城市下拉框中
    //将城市数组中的值填充到城市下拉框中
    if (sltProvince.selectedIndex == 1) {
        sltCity[0] = new Option(provinceCity[0], "groupfees");
        sltCity[1] = new Option(provinceCity[1], "count");
        sltCity[2] = new Option(provinceCity[2], "drugfees");
    }
    else {
        sltCity[0] = new Option(provinceCity[0], "count");
        sltCity[1] = new Option(provinceCity[1], "fees");
    }
}