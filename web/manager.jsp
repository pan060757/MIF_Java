<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2018/3/21
  Time: 22:08
  To change this template use File | Settings | File Templates.
--%>
<%--
  Created by IntelliJ IDEA.
  User: songsong
  Date: 2017/12/22
  Time: 19:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>统计报表页面</title>
    <link rel="stylesheet" href="css/style.default.css" type="text/css"/>
    <script type="text/javascript" src="js/plugins/jquery-1.7.min.js"></script>
    <script type="text/javascript" src="js/plugins/jquery-ui-1.8.16.custom.min.js"></script>
    <script type="text/javascript" src="js/plugins/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/plugins/jquery.flot.min.js"></script>
    <script type="text/javascript" src="js/plugins/jquery.flot.pie.js"></script>
    <script type="text/javascript" src="js/plugins/jquery.flot.resize.min.js"></script>
    <script type="text/javascript" src="js/custom/general.js"></script>
    <script type="text/javascript" src="js/custom/charts.js"></script>
    <!--[if lte IE 8]>
    <script language="javascript" type="text/javascript" src="js/plugins/excanvas.min.js"></script><![endif]-->
    <!--[if IE 9]>
    <link rel="stylesheet" media="screen" href="css/style.ie9.css"/>
    <![endif]-->
    <!--[if IE 8]>
    <link rel="stylesheet" media="screen" href="css/style.ie8.css"/>
    <![endif]-->
    <!--[if lt IE 9]>
    <script src="js/plugins/css3-mediaqueries.js"></script>
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
    <link href="css/common.css" rel="stylesheet"/>
    <link href="css/font-awesome.css" rel="stylesheet"/>
    <!-- CUSTOM STYLE  -->

    <link href="css/spider.css" rel="stylesheet"/>
    <link href="css/style.css" rel="stylesheet"/>
    <!-- GOOGLE FONT -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
    <link rel="stylesheet" type="text/css" href="css/ui.jqgrid.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.custom.css"/>
    <link rel="stylesheet" type="text/css" href="css/theme.css"/>

    <script type="text/javascript" src="js/echarts.common.min.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script type="text/javascript" src="js/sub-menu.js"></script>
    <script type="text/javascript" src="js/grid.locale-cn.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/jquery.jqGrid.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/echarts.js"></script>


</head>

<body onload="load()">
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
                            <a href="outlier_detection.jsp">住院异常检测</a>
                        </li>
                        <li>
                            <a href="hospital_anomaly_detection.jsp">医院异常检测</a>
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
                        <li>
                            <a href="dbscan.jsp">DBSCAN聚类分析方法</a>
                        </li>
                        <li>
                            <a href="lof.jsp">局部异常因子(LOF)算法</a>
                        </li>
                        <li>
                            <a href="context_method.jsp">基于context的异常检测</a>
                        </li>
                    </ul>
                </li>
                <li><input class="form-control search" placeholder=" Search" type="text"></li>
            </ul>
        </div>
    </div>
</header>

<!--breadcrumbs start-->
<div class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-4">
                <h1>医疗费用支出分析</h1>
            </div>
            <div class="col-lg-8 col-sm-8">
                <ol class="breadcrumb pull-right">
                </ol>
            </div>
        </div>
    </div>
</div>
<ul id="myTab" class="nav nav-tabs">
    <li class="active">
        <a href="#fees" data-toggle="tab">
            费用分布
        </a>
    </li>
    <li><a href="#count" data-toggle="tab">
        人次分布
    </a>
    </li>
</ul>
<div id="myTabContent" class="tab-content">
    <div class="tab-pane fade in active" id="fees">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-7">
                <div class="contenttitle2">
                    <h3>区县费用支出分布</h3>
                </div>
                <div id="region" style="height:250px;"></div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="contenttitle2">
                    <h3>年龄结构费用分布</h3>
                </div>
                <div id="age_group" style="height:250px;"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="contenttitle2">
                    <h3>不同医院等级费用支出分布</h3>
                </div>
                <div id="hospital" style="height:250px;"></div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="contenttitle2">
                    <h3>药品费用支出分布</h3>
                </div>
                <div id="drug" style="height:250px;"></div>
            </div>
        </div>
    </div>
    <!--small footer start -->
    <footer class="footer-small">
        <div class="container">
            <div class="col-md-12">
                <div class="copyright"><p>&copy; Copyright -泸州市医疗保险管理局</p></div>
            </div>
        </div>
    </footer>
    <!--small footer end-->
    <script type="text/javascript" src="js/manager.js" charset="utf-8"></script>
</body>
</html>
