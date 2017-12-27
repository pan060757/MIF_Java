<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2017/3/28
  Time: 17:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <title>Luzhou Medical Fund Supervisory Platform</title>
    <!-- BOOTSTRAP CORE STYLE  -->
    <link href="css/bootstrap.css" rel="stylesheet"/>
    <!-- FONT AWESOME STYLE  -->
    <link href="css/font-awesome.css" rel="stylesheet"/>
    <!-- CUSTOM STYLE  -->
    <link href="css/common.css" rel="stylesheet"/>
    <link href="css/spider.css" rel="stylesheet"/>
    <link href="css/style.css" rel="stylesheet"/>
    <script type="text/javascript" src="js/common.js"></script>
    <!-- GOOGLE FONT -->
    <script type="text/javascript" src="js/echarts.common.min.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
    <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/echarts.js"></script>

</head>
<body onload="loadDrug()">
<!--header start-->
<header class="head-section">
    <div class="navbar navbar-default navbar-static-top container">
        <div class="navbar-header">
            <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">泸州市<span>医保基金</span>监督平台</a>

            <p>Luzhou Medical Fund Supervisory Platform</p>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li>
                    <a href="index.jsp">主页</a>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">汇总分析 <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="payment.jsp">基金收入模块</a>
                        </li>
                        <li>
                            <a href="expense.jsp">基金支出模块</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">收支建模<i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="predict.jsp">收支走向预测</a>
                        </li>
                        <li>
                            <a href="charge.jsp">基金缴费模型</a>
                        </li>
                        <li>
                            <a href="cost.jsp">医疗待遇支付模型</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">费用管理<i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="region.jsp">区县</a>
                        </li>
                        <li>
                            <a href="hospital.jsp">医院</a>
                        </li>
                        <li>
                            <a href="disease.jsp">病种</a>
                        </li>
                        <li>
                            <a href="drug.jsp">药品</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">异常检测 <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="outlier_detection.jsp">异常检测</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover=
                            "dropdown" data-toggle="dropdown" href="#">建模方法介绍 <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="gm11.jsp">灰度预测模型</a>
                        </li>
                        <li>
                            <a href="e_smoothing.jsp">指数平滑法</a>
                        </li>
                        <li>
                            <a href="arima.jsp">ARIMA</a>
                        </li>
                    </ul>
                </li>
                <li><input class="form-control search" placeholder=" Search" type="text"></li>
            </ul>
        </div>
    </div>
</header>
<!--header end-->

<!--breadcrumbs start-->
<div class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-4">
                <h1>汇总分析模块 — 基金支出</h1>
            </div>
            <div class="col-lg-8 col-sm-8">
                <ol class="breadcrumb pull-right">
                </ol>
            </div>
        </div>
    </div>
</div>

<!-- MENU SECTION END-->
<div class="container">
    <div class="text-center feature-head wow fadeInDown">
        <h1 class="">
            不同等级医院对比
        </h1>
    </div>
    <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="panel-body">
                <form id="queryPredict" name="form1">
                    <span style="font-size:18px">选择保险类型：</span>
                    <select id="identity" class="form-control select_style">
                        <option></option>
                        <option value="1">城镇职工</option>
                        <option value="2">城镇居民</option>
                    </select>
                    <span style="font-size:18px">选择内容：</span>
                    <select name="feesDetail" id="feesDetail" class="form-control select_style"
                            onChange="getCity()">
                        <option></option>
                        <option value="feesDetail">医院等级</option>
                        <option value="ageGroup">参保人群</option>
                    </select>
                    <span style="font-size:18px">选择查看：</span>
                    <select id="selectBy" name="selectBy" class="form-control select_style"
                            style="width:200px;margin-left: 100px">
                    </select>
                    </br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input id="query1" class="btn btn-primary" type="button"  value="查询" onclick="plot_statistic()"/>
                    <button type="reset" class="btn btn-primary">重置</button>
                </form>
            </div>
        </div>
        <!--图形展示-->
        <div class="col-md-8 col-sm-8 col-xs-12">
            <div id="detail-information" class="plotsize">
            </div>
        </div>
    </div>
</div>


<div class="container">
    <div class="text-center feature-head wow fadeInDown">
        <h1 class="">
            同一等级医院逐年变化趋势
        </h1>
    </div>
    <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="panel-body">
                <form id="queryPredict1" name="form2">
                    <span style="font-size:18px">选择保险类型：</span>
                    <select id="identity1" class="form-control select_style">
                        <option></option>
                        <option value="1">城镇职工</option>
                        <option value="2">城镇居民</option>
                    </select>
                    <span style="font-size:18px">选择医院等级：</span>
                    <select name="feesDetail" id="feesDetail1" class="form-control select_style">
                        <option></option>
                        <option value="无等级">无等级</option>
                        <option value="一级">一级</option>
                        <option value="二级">二级</option>
                        <option value="三级">三级</option>
                        <option value="社区">社区</option>
                        <option value="异地">异地</option>
                    </select>
                    <span style="font-size:18px">选择查看：</span>
                    <select id="selectBy1" name="selectBy" class="form-control select_style"
                            style="width:200px;margin-left: 100px">
                        <option></option>
                        <option value="统筹费用支出">统筹费用支出</option>
                        <option value="人次">人次</option>
                        <option value="药品费">药品费</option>
                    </select>
                    </br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input id="query2" class="btn btn-primary" type="button"  value="查询" onclick="getDetails()"/>
                    <button type="reset" class="btn btn-primary">重置</button>
                </form>
            </div>
        </div>
        <!--图形展示-->
        <div class="col-md-8 col-sm-8 col-xs-12">
            <div id="detail-information1" class="plotsize">
            </div>
        </div>
    </div>
</div>
<!--small footer start -->
<footer class="footer-small">
    <div class="container">
        <div class="row">
            <div class="col-md-12" align="center">
                <div class="copyright"><p>&copy; Copyright -泸州市医疗保险管理局</p></div>
            </div>
        </div>
    </div>
</footer>
<!--small footer end-->

<script type="text/javascript" src="js/expense.js" charset="utf-8"></script>
</body>
</html>
