/**
 * Created by song on 2018/3/21.
 */
function loadtop10() {
    updatePerson();
    updateDrugTop10();
    selectDrugResult();
}
function updatePerson(){
    var personname=$("#personname").val();
    //var personyear=$("#personyear").val();
    var personyear=2015;
    var param ="&year="+personyear;
    $.ajax({
        url: '/MIF/worker/init',
        type: 'get',
        data: param,
        dataType: 'json',
        success: function (data) {
            var newjson=[];
            for(var i = 0; i <data.workers.length; i++){
                newjson[i] = new Object();
                newjson[i].number = data.workers[i].number;
                newjson[i].year = data.workers[i].year;
                newjson[i].age = data.workers[i].age;
                newjson[i].state = data.workers[i].state;
                newjson[i].chroic = data.workers[i].chroic;
                newjson[i].days = data.workers[i].days;
                newjson[i].times = data.workers[i].times;
                newjson[i].single = data.workers[i].single;
            }
            var grid_selector = "#person-table";
            var pager_selector = "#person-pager";
            $('#person-table').jqGrid('GridUnload');          ///刷新grid框架
            $("#person-table").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','个人编号','年龄','在职离退状态','是否患有慢性病','累积住院天数','累积住院次数','个人支付'],
                colModel:
                    [
                        { name: 'year', index: "year", width: "5%", editable: true,align:"center"},
                        { name: 'number', index: 'number', width:  "20%",editable: true,align:"center" },
                        { name: 'age', index: 'age', width:  "5%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'state', index: 'state', width:  "10%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'chroic', index: 'chroic', width:  "10%",editable: true,align:"center" },
                        { name: 'days', index: "days", width: "10%", editable: true,align:"center"},
                        { name: 'times', index: 'times', width:  "10%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'single', index: 'single', width:  "8%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                    ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 15, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                altRows: true, //设置为交替行表格,默认为false
                multiselect: true, //是否多选
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true//自动宽
            });
        }
    });
}
function updateDrugTop10() {
    var identity = $("#identity").val();
    var year = $("#drugyear1").val();
    var params = "&identity=" + identity + "&year=" + year;
    $.ajax({
        url: '/MIF/drug/getTop10',
        type: 'get',
        data: params,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.drugs.length; i++) {
                newjson[i] = new Object();
                newjson[i].year = data.drugs[i].year;
                newjson[i].name = data.drugs[i].name;
                newjson[i].drugfees = data.drugs[i].drugfees;
            }
            var grid_selector = "#drug-table1";
            var pager_selector = "#drug-pager1";
            $('#drug-table1').jqGrid('GridUnload');          ///刷新grid框架
            $("#drug-table1").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '名称', '费用'],
                colModel: [
                    {name: 'year', index: 'year', width: "20%", align: "center", editable: true},
                    {name: 'name', index: 'name', width: "40%", align: "center", editable: true},
                    {
                        name: 'drugfees',
                        index: 'drugfees',
                        width: "40%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    }
                ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                altRows: true, //设置为交替行表格,默认为false
                multiselect: true, //是否多选
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true,//自动宽
                scroll: "auto",      //设置竖直滚动条的滑动
                loadComplete: function () {
                    var grid = $("#drug-table1");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <= ids.length; i++) {
                        grid.setRowData(ids[i], false, {height: 20 + i * 1.15});
                    }
                }
            });
            $('#drug-table1').closest("div.ui-jqgrid-view")
                .children("div.ui-jqgrid-titlebar")
                .css("text-align", "center")
                .children("span.ui-jqgrid-title")
                .css("float", "none");
            $("#drug-table1").closest(".ui-jqgrid-bdiv").css({'overflow-y': 'scroll'});
            $("#drug-table1").closest(".ui-jqgrid-bdiv").css({'overflow-x': 'scroll'});
        }
    });
}

function selectDrugResult() {
    var identity = $("#identity1").val();
    var year = $("#drugyear2").val();
    var name = $("#drugname2").val();
    var params = "&identity=" + identity + "&year=" + year + "&name=" + name;
    $.ajax({
        url: '/MIF/drug/query',
        type: 'get',
        data: params,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.drugs.length; i++) {
                newjson[i] = new Object();
                newjson[i].year = data.drugs[i].year;
                newjson[i].name = data.drugs[i].name;
                newjson[i].drugfees = data.drugs[i].drugfees;
            }
            var grid_selector = "#drug-table2";
            var pager_selector = "#drug-pager2";
            $('#drug-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#drug-table2").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '名称', '药品费'],
                colModel: [
                    {name: 'year', index: 'year', width: "20%", align: "center", editable: true},
                    {name: 'name', index: 'name', width: "40%", align: "center", editable: true},
                    {
                        name: 'drugfees',
                        index: 'drugfees',
                        width: "40%",
                        align: "center",
                        editable: true,
                        sorttype: 'integer',
                        formatter: 'integer'
                    }
                ],
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                viewrecords: true,
                multiselect: true,
                altRows: true, //设置为交替行表格,默认为false
                loadonce: true,
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true, //自动宽
                loadComplete: function () {
                    $("#drug-table2").closest(".ui-jqgrid-bdiv").css({'overflow-x': 'scroll'});
                    $("#drug-table2").closest(".ui-jqgrid-bdiv").css({'overflow-y': 'scroll'});
                },
                onSelectRow: function (id, status, e) {
                    var row = $("#drug-table2").jqGrid('getRowData', id);
                    var name = row.name;
                    window.location.href='drug_details.jsp?identity='+identity+'&year='+0+'&name='+name;
                }
            });
            $("#drug-table2").jqGrid('navGrid', '#grid-pager2', {
                del: false,
                add: false,
                edit: false
            }, {}, {}, {}, {multipleSearch: true});
            $('#drug-table2').closest("div.ui-jqgrid-view")
                .children("div.ui-jqgrid-titlebar")
                .css("text-align", "center")
                .children("span.ui-jqgrid-title")
                .css("float", "none");

        }
    });
}
function back()
{
    window.location.reload();
    selectDrugResult();
}




//自动补全功能的实现
var availableTags = []
function queryByDrugname() {
    var identity = $("#identity1").val();
    var name = $("#drugname2").val();
    var params = "&identity=" + identity + "&year=" + 0 + "&name=" + name;
    $.ajax({
        url: '/MIF/drug/query',
        type: 'get',
        data: params,
        async: false,
        dataType: 'json',
        success: function (data) {
            var drugname = [];                             ///只展示其中的几列
            for (var i = 0; i < data.drugs.length; i++) {
                drugname.push(data.drugs[i].name);
            }
            //对drug名进行去重
            var arr = []
            for (var i = 0, l = drugname.length; i < l; i++) {
                if (arr.indexOf(drugname[i]) == -1) {
                    arr.push(drugname[i])
                }
            }
            availableTags = arr;
        }
    });
}
$(function () {
    queryByDrugname();
    $("#drugname2").autocomplete({
        source: availableTags
    });
});

function diseaseResult(){
    updateDiseaseTop10()
    selectDiseaseResult()
}
function updateDiseaseTop10()
{
    var identity=$("#identity").val();
    var year=$("#diseaseyear1").val();
    var orderBy =$("#orderBy").val();
    var params="&identity="+identity+"&year="+year+'&orderBy='+orderBy;
    var diseaseName=[];
    $.ajax({
        url:'/MIF/disease/getTop10',
        type:'get',
        data:params,
        dataType:'json',
        success:function(data){
            var newjson=[];                             ///只展示其中的几列
            for(var i = 0; i <data.diseases.length; i++){
                newjson[i] = new Object();
                newjson[i].year = data.diseases[i].year;
                newjson[i].name = data.diseases[i].name;
                diseaseName.push(data.diseases[i].name);
                newjson[i].h_fees= data.diseases[i][orderBy];
            }
            var grid_selector = "#disease-table1";
            var pager_selector = "#disease-pager1";
            $('#disease-table1').jqGrid('GridUnload');          ///刷新grid框架
            $("#disease-table1").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','名称','费用'],
                colModel:
                    [
                        { name: 'year', index: "year", width: "20%",align:"center", editable: true},
                        { name: 'name', index: 'name', width: "40%",align:"center",editable: true },
                        { name: 'h_fees', index: 'h_fees', width: "40%",align:"center", editable: true,sorttype:'integer',formatter:'integer'}
                    ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                //autowidth: true, //自动宽
                //scroll:"auto",
                loadComplete: function() {
                    var grid = $("#disease-table1");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                   //$("#disease-table1").closest(".ui-jqgrid-bdiv").css({ 'overflow-x' : 'scroll' });
                   // $("#disease-table1").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
                    $('#disease-table1').closest("div.ui-jqgrid-view")
                        .children("div.ui-jqgrid-titlebar")
                        .css("text-align", "center")
                        .children("span.ui-jqgrid-title")
                        .css("float", "none");
                }
            });
        }
    });
}

function selectDiseaseResult()
{
    var identity=$("#identity1").val();
    var diseaseyear=$("#diseaseyear2").val();
    var diseasename=$("#diseasename2").val();
    var param =  "&identity="+identity+"&year="+diseaseyear+"&name="+diseasename;
    $.ajax({
        url:'/MIF/disease/query',
        type:'get',
        data:param,
        dataType:'json',
        gridview: true,	//提高加载速度
        success:function(data){
            var newjson=[];
            for(var i = 0; i <data.diseases.length; i++){
                newjson[i] = new Object();
                newjson[i].year = data.diseases[i].year;
                newjson[i].name = data.diseases[i].name;
                newjson[i].h_fees = data.diseases[i].h_fees;
                newjson[i].avg_hfees = data.diseases[i].avg_hfees;
                newjson[i].h_groupfees = data.diseases[i].h_groupfees;
                newjson[i].avg_hgroupfees = data.diseases[i].avg_hgroupfees;
                newjson[i].h_count = data.diseases[i].h_count;
            }
            var grid_selector = "#disease-table2";
            var pager_selector = "#disease-pager2";
            $('#disease-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#disease-table2").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份','名称',"住院统筹支付","均次住院统筹支付","住院人次"],
                colModel:
                    [
                        { name: 'year', index: "year", width: "10%", editable: true,align:"center"},
                        { name: 'name', index: 'name', width:  "40%",editable: true,align:"center" },
                        { name: 'h_groupfees', index: 'h_groupfees', width:  "20%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'avg_hgroupfees', index: 'avg_hgroupfees', width:  "20%", editable: true,align:"center",sorttype:'integer',formatter:'integer'},
                        { name: 'h_count', index: 'h_count', width:  "10%", editable: true,align:"center",sorttype:'integer',formatter:'integer'}
                    ],
                pgbuttons:true,
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                autowidth: true,
                loadComplete: function() {
                    var grid = $("#disease-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                    $("#disease-table2").closest(".ui-jqgrid-bdiv").css({ 'overflow-x' : 'scroll' });
                    $("#disease-table2").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
                },
                onSelectRow: function(id,status,e){
                    var row = $("#disease-table2").jqGrid('getRowData',id);
                    var d_name=row.name;
                    window.location.href='disease_details.jsp?identity='+identity +'&year='+ diseaseyear+'&d_name='+d_name;
                }
            });
            $("#disease-table2").jqGrid('navGrid','#disease-table2',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
        }
    });
}
function back()
{
    window.location.reload();
    selectDiseaseResult();
}

//自动补全功能的实现
var availableTags = []
function queryByDiseasename(){
    $.ajax({
        url:'/MIF/disease/query',
        type:'get',
        async:false,
        dataType:'json',
        success:function(data){
            var diseasename=[];                             ///只展示其中的几列
            for(var i = 0; i <data.diseases.length; i++){
                diseasename.push(data.diseases[i].name);
            }
            //对病种名进行去重
            var arr =[]
            for(var i=0,l=diseasename.length;i<l;i++){
                if(arr.indexOf(diseasename[i])==-1){
                    arr.push(diseasename[i])
                }
            }
            availableTags =arr;

        }
    });
}
$(function() {
    queryByDiseasename();
    $("#diseasename2").autocomplete({
        source: availableTags
    });
});

//对获得到的数据按照年份进行排序
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

$('#myTab a').click(function (e) {
    e.preventDefault();//阻止a链接的跳转行为
    $(this).tab('show');//显示当前选中的链接及关联的content
}) ;


function updateHospitalTop10()
{
    var identity = 1;
    var year = $("#hospitalyear1").val();
    var orderBy = $("#orderBy1").val();
    var params = "&identity=" + identity + "&year=" + year + "&orderBy=" + orderBy;
    $.ajax({
        url: '/MIF/hospital/getTop10',
        type: 'get',
        data: params,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.hospitals.length; i++) {
                newjson[i] = new Object();
                newjson[i].h_name = data.hospitals[i].h_name;
                newjson[i].year = data.hospitals[i].year;
                newjson[i].h_fees = data.hospitals[i][orderBy];
                newjson[i].fake_name = data.hospitals[i].fake_name;
            }
            var grid_selector = "#hospital-table1";
            var pager_selector = "#hospital-pager1";
            $('#hospital-table1').jqGrid('GridUnload');          ///刷新grid框架
            $("#hospital-table1").jqGrid({
                data: newjson,
                datatype: "local",
                height: "auto",
                colNames: ['编号','医院名', '费用'],
                colModel: [
                    {name: 'h_name', index: 'h_name', width: "0%", align: "center", editable: true},
                    {name: 'fake_name', index: 'fake_name', width: "70%", align: "center", editable: true},
                    {name: "h_fees", index: "h_fees", width: "30%", align: "center", sorttype: 'integer', formatter: 'integer'},
                ],
                viewrecords: true, //是否在浏览导航栏显示记录总数
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                multiselect: true, //是否多选
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true,
                loadComplete: function () {
                    var grid = $("#hospital-table");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <= ids.length; i++) {
                        grid.setRowData(ids[i], false, {height: 20 + i * 1.15});
                    }
                }
            });
            $('#hospital-table').closest("div.ui-jqgrid-view")
                .children("div.ui-jqgrid-titlebar")
                .css("text-align", "center")
                .children("span.ui-jqgrid-title")
                .css("float", "none");
            //自应高度
        }
    });
}

function selectHospitalResult()
{
    var identity = $("#identity1").val();
    var year = $("#hospitalyear2").val();
    var grade = $("#hospitallevel").val();
    var h_name = $("#hospitalname2").val();
    var param = "&identity=" + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year;
    $.ajax({
        url: '/MIF/hospital/query',
        type: 'get',
        data: param,
        dataType: 'json',
        success: function (data) {
            var newjson = [];                             ///只展示其中的几列
            for (var i = 0; i < data.hospitals.length; i++) {
                newjson[i] = new Object();
                newjson[i].year = data.hospitals[i].year;
                newjson[i].h_name = data.hospitals[i].h_name;
                newjson[i].grade = data.hospitals[i].grade;
                newjson[i].h_groupfees = data.hospitals[i].h_groupfees;
                newjson[i].avg_hgroupfees = data.hospitals[i].avg_hgroupfees;
                newjson[i].m_groupfees = data.hospitals[i].m_groupfees;
                newjson[i].avg_mgroupfees = data.hospitals[i].avg_mgroupfees;
                newjson[i].m_count = data.hospitals[i].m_count;
                newjson[i].h_count = data.hospitals[i].h_count;
                newjson[i].fake_name = data.hospitals[i].fake_name;
            }
            var grid_selector = "#hospital-table2";
            var pager_selector = "#hospital-pager2";
            $('#hospital-table2').jqGrid('GridUnload');          ///刷新grid框架
            $("#hospital-table2").jqGrid({
                data:newjson,
                datatype: "local",
                height: "auto",
                colNames: ['年份', '医院名','编号', "医院等级", "住院统筹支付", "均次住院统筹支付", "门诊统筹支付", "均次门诊统筹支付"],
                colModel: [
                    {name: 'year', index: "year", width: "5%", align: "center", editable: true},
                    {name: 'fake_name', index: 'fake_name', width: "35%", align: "center", editable: true},
                    {name: 'h_name', index: 'h_name', width: "0%", align: "center", editable: true},
                    {name: 'grade', index: 'grade', width: "8%", align: "center", editable: true},
                    {name: 'h_groupfees', index: 'h_groupfees', width: "12%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'avg_hgroupfees', index: 'avg_hgroupfees', width: "14%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'm_groupfees', index: 'm_groupfees', width: "12%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                    {name: 'avg_mgroupfees', index: 'avg_mgroupfees', width: "14%", align: "center", editable: true, sorttype: 'integer', formatter: 'integer'},
                ],
                rowNum: 10, //每页显示记录数
                pager: pager_selector, //分页、按钮所在的浏览导航栏
                viewrecords: true,
                altRows: true, //设置为交替行表格,默认为false
                loadonce:true,
                multiboxonly: true, //是否只能点击复选框多选
                autowidth: true, //自动宽
                multiselect:true,
                loadComplete: function() {
                    var grid = $("#hospital-table2");
                    var ids = grid.getDataIDs();
                    for (var i = 0; i <=ids.length; i++) {
                        grid.setRowData ( ids[i], false, {height: 20+i*1.15} );
                    }
                    $("#hospital-table2").closest(".ui-jqgrid-bdiv").css({ 'overflow-x' : 'scroll' });
                    $("#hospital-table2").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
                }
            });
            $("#hospital-table2").jqGrid('navGrid','#grid-pager2',{del:false,add:false,edit:false},{},{},{},{multipleSearch:true});
        }
    });
}
function back() {
    window.location.reload();
    selectResult();
}


function getSelecteds() {
//获取多选到的id集合
    var ids = $("#grid-table2").jqGrid("getGridParam", "selarrrow");
//遍历访问这个集合
    var row1 = $("#grid-table2").jqGrid('getRowData', ids[0]);
    var h_name1=row1.h_name;
    var row2 = $("#grid-table2").jqGrid('getRowData', ids[1]);
    var h_name2=row2.h_name;
    window.location.href='hospital_compare.jsp?h_name1=' + h_name1 + '&h_name2=' + h_name2;
}

function getDetails() {
//获取多选到的id集合

    //window.location.href('hospital_details.jsp');
    var identity = $("#identity1").val();
    var year = $("#hospitalyear").val();
    var grade = $("#hospitallevel").val();
    var rowid = $("#grid-table2").jqGrid("getGridParam", "selrow");
    var row = $("#grid-table2").jqGrid('getRowData', rowid);
    var h_name = row.h_name;
    var h_grade=row.grade;
    var avg_hgroupfees=row.avg_hgroupfees
    var param = "&identity=" + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year;
    var param1 = '&h_name=' + h_name;
    window.location.href='hospital_details.jsp?identity=' + identity + '&grade=' + grade + '&h_name=' + h_name + '&year=' + year+'&avg_hgroupfees='+avg_hgroupfees;
}
//自动补全功能的实现
var availableTags = []
function queryByHospitalname(){
    $.ajax({
        url:'/MIF/hospital/query',
        type:'get',
        async:false,
        dataType:'json',
        success:function(data){
            var h_name=[];                             ///只展示其中的几列
            for(var i = 0; i <data.hospitals.length; i++){
                h_name.push(data.hospitals[i].h_name);
            }
            //对医院名进行去重

            var arr =[]
            for(var i=0,l=h_name.length;i<l;i++){
                if(arr.indexOf(h_name[i])==-1){
                    arr.push(h_name[i])
                }
            }
            availableTags =arr;
        }
    });
}
$(function () {
    queryByHospitalname();
    $("#hospitalnum").autocomplete({
        source: availableTags
    });
});
function hospitalResult(){
    updateHospitalTop10();
    selectHospitalResult();
}
//对获得到的数据按照年份进行排序
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}