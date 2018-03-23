<%--
  Created by IntelliJ IDEA.
  User: songsong
  Date: 2018/3/21
  Time: 14:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

  <meta charset="utf-8" />

  <title>Metronic | Admin Dashboard Template</title>

  <meta content="width=device-width, initial-scale=1.0" name="viewport" />

  <meta content="" name="description" />

  <meta content="" name="author" />

  <!-- BEGIN GLOBAL MANDATORY STYLES -->

  <link href="media/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

  <link href="media/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>

  <link href="media/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

  <link href="media/css/style-metro.css" rel="stylesheet" type="text/css"/>

  <link href="media/css/style.css" rel="stylesheet" type="text/css"/>

  <link href="media/css/style-responsive.css" rel="stylesheet" type="text/css"/>

  <link href="media/css/default.css" rel="stylesheet" type="text/css" id="style_color"/>

  <link href="media/css/uniform.default.css" rel="stylesheet" type="text/css"/>

  <!-- END GLOBAL MANDATORY STYLES -->

  <!-- BEGIN PAGE LEVEL STYLES -->

  <link href="media/css/jquery.gritter.css" rel="stylesheet" type="text/css"/>

  <link href="media/css/daterangepicker.css" rel="stylesheet" type="text/css" />

  <link href="media/css/fullcalendar.css" rel="stylesheet" type="text/css"/>

  <link href="media/css/jqvmap.css" rel="stylesheet" type="text/css" media="screen"/>

  <link href="media/css/jquery.easy-pie-chart.css" rel="stylesheet" type="text/css" media="screen"/>

  <!-- END PAGE LEVEL STYLES -->

  <link rel="shortcut icon" href="media/image/favicon.ico" />

</head>

<!-- END HEAD -->

<!-- BEGIN BODY -->
<body class="load()">
<div class="row-fluid">
<div class="span6">
  <!-- BEGIN PORTLET-->
  <div class="portlet solid bordered light-grey">

    <div class="portlet-title">

      <div class="caption"><i class="icon-bar-chart"></i>Site Visits</div>

      <div class="tools">

        <div class="btn-group pull-right" data-toggle="buttons-radio">

          <a href="" class="btn mini">Users</a>

          <a href="" class="btn mini active">Feedbacks</a>

        </div>

      </div>

    </div>

    <div class="portlet-body">

      <div id="site_statistics_loading">

        <img src="media/image/loading.gif" alt="loading" />

      </div>

      <div id="site_statistics_content" class="hide">

        <div id="site_statistics" class="chart"></div>

      </div>

    </div>

  </div>

  <!-- END PORTLET-->

</div>

<div class="span6">

  <!-- BEGIN PORTLET-->

  <div class="portlet solid light-grey bordered">

    <div class="portlet-title">

      <div class="caption"><i class="icon-bullhorn"></i>Activities</div>

      <div class="tools">

        <div class="btn-group pull-right" data-toggle="buttons-radio">

          <a href="" class="btn blue mini active">Users</a>

          <a href="" class="btn blue mini">Orders</a>

        </div>

      </div>

    </div>

    <div class="portlet-body">

      <div id="site_activities_loading">

        <img src="media/image/loading.gif" alt="loading" />

      </div>

      <div id="site_activities_content" class="hide">

        <div id="site_activities" style="height:100px;"></div>

      </div>

    </div>

  </div>

  <!-- END PORTLET-->

  <!-- BEGIN PORTLET-->

  <div class="portlet solid bordered light-grey">

    <div class="portlet-title">

      <div class="caption"><i class="icon-signal"></i>Server Load</div>

      <div class="tools">

        <div class="btn-group pull-right" data-toggle="buttons-radio">

          <a href="" class="btn red mini active">

            <span class="hidden-phone">Database</span>

            <span class="visible-phone">DB</span></a>

          <a href="" class="btn red mini">Web</a>

        </div>

      </div>

    </div>

    <div class="portlet-body">

      <div id="load_statistics_loading">

        <img src="media/image/loading.gif" alt="loading" />

      </div>

      <div id="load_statistics_content" class="hide">

        <div id="load_statistics" style="height:108px;"></div>

      </div>

    </div>

  </div>

  <!-- END PORTLET-->

</div>

</div>

<div class="clearfix"></div>

<div class="row-fluid">

  <div class="span6">

    <div class="portlet box purple">

      <div class="portlet-title">

        <div class="caption"><i class="icon-calendar"></i>General Stats</div>

        <div class="actions">

          <a href="javascript:;" class="btn yellow easy-pie-chart-reload"><i class="icon-repeat"></i> Reload</a>

        </div>

      </div>

      <div class="portlet-body">

        <div class="row-fluid">

          <div class="span4">

            <div class="easy-pie-chart">

              <div class="number transactions"  data-percent="55"><span>+55</span>%</div>

              <a class="title" href="#">Transactions <i class="m-icon-swapright"></i></a>

            </div>

          </div>

          <div class="margin-bottom-10 visible-phone"></div>

          <div class="span4">

            <div class="easy-pie-chart">

              <div class="number visits"  data-percent="85"><span>+85</span>%</div>

              <a class="title" href="#">New Visits <i class="m-icon-swapright"></i></a>

            </div>

          </div>

          <div class="margin-bottom-10 visible-phone"></div>

          <div class="span4">

            <div class="easy-pie-chart">

              <div class="number bounce"  data-percent="46"><span>-46</span>%</div>

              <a class="title" href="#">Bounce <i class="m-icon-swapright"></i></a>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="span6">

    <div class="portlet box blue">

      <div class="portlet-title">

        <div class="caption"><i class="icon-calendar"></i>Server Stats</div>

        <div class="tools">

          <a href="" class="collapse"></a>

          <a href="#portlet-config" data-toggle="modal" class="config"></a>

          <a href="" class="reload"></a>

          <a href="" class="remove"></a>

        </div>

      </div>

      <div class="portlet-body">

        <div class="row-fluid">

          <div class="span4">

            <div class="sparkline-chart">

              <div class="number" id="sparkline_bar"></div>

              <a class="title" href="#">Network <i class="m-icon-swapright"></i></a>

            </div>

          </div>

          <div class="margin-bottom-10 visible-phone"></div>

          <div class="span4">

            <div class="sparkline-chart">

              <div class="number" id="sparkline_bar2"></div>

              <a class="title" href="#">CPU Load <i class="m-icon-swapright"></i></a>

            </div>

          </div>

          <div class="margin-bottom-10 visible-phone"></div>

          <div class="span4">

            <div class="sparkline-chart">

              <div class="number" id="sparkline_line"></div>

              <a class="title" href="#">Load Rate <i class="m-icon-swapright"></i></a>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

<div class="clearfix"></div>

<div class="row-fluid">

  <div class="span6">

    <!-- BEGIN REGIONAL STATS PORTLET-->

    <div class="portlet">

      <div class="portlet-title">

        <div class="caption"><i class="icon-globe"></i>Regional Stats</div>

        <div class="tools">

          <a href="" class="collapse"></a>

          <a href="#portlet-config" data-toggle="modal" class="config"></a>

          <a href="" class="reload"></a>

          <a href="" class="remove"></a>

        </div>

      </div>

      <div class="portlet-body">

        <div id="region_statistics_loading">

          <img src="media/image/loading.gif" alt="loading" />

        </div>

        <div id="region_statistics_content" class="hide">

          <div class="btn-toolbar">

            <div class="btn-group " data-toggle="buttons-radio">

              <a href="" class="btn mini active">Users</a>

              <a href="" class="btn mini">Orders</a>

            </div>

            <div class="btn-group pull-right">

              <a href="" class="btn mini dropdown-toggle" data-toggle="dropdown">

                Select Region <span class="icon-angle-down"></span>

              </a>

              <ul class="dropdown-menu pull-right">

                <li><a href="javascript:;" id="regional_stat_world">World</a></li>

                <li><a href="javascript:;" id="regional_stat_usa">USA</a></li>

                <li><a href="javascript:;" id="regional_stat_europe">Europe</a></li>

                <li><a href="javascript:;" id="regional_stat_russia">Russia</a></li>

                <li><a href="javascript:;" id="regional_stat_germany">Germany</a></li>

              </ul>

            </div>

          </div>

          <div id="vmap_world" class="vmaps chart hide"></div>

          <div id="vmap_usa" class="vmaps chart hide"></div>

          <div id="vmap_europe" class="vmaps chart hide"></div>

          <div id="vmap_russia" class="vmaps chart hide"></div>

          <div id="vmap_germany" class="vmaps chart hide"></div>

        </div>

      </div>

    </div>

    <!-- END REGIONAL STATS PORTLET-->

  </div>

  <div class="span6">

    <!-- BEGIN PORTLET-->

    <div class="portlet paddingless">

      <div class="portlet-title line">

        <div class="caption"><i class="icon-bell"></i>Feeds</div>

        <div class="tools">

          <a href="" class="collapse"></a>

          <a href="#portlet-config" data-toggle="modal" class="config"></a>

          <a href="" class="reload"></a>

          <a href="" class="remove"></a>

        </div>

      </div>

      <div class="portlet-body">

        <!--BEGIN TABS-->

        <div class="tabbable tabbable-custom">

          <ul class="nav nav-tabs">

            <li class="active"><a href="#tab_1_1" data-toggle="tab">System</a></li>

            <li><a href="#tab_1_2" data-toggle="tab">Activities</a></li>

            <li><a href="#tab_1_3" data-toggle="tab">Recent Users</a></li>

          </ul>

          <div class="tab-content">

            <div class="tab-pane active" id="tab_1_1">
              <table border="1">
                <tr>
                  <th>Month</th>
                  <th>Savings</th>
                </tr>
                <tr>
                  <td>January</td>
                  <td>$100</td>
                </tr>
              </table>
            </div>
            <div class="tab-pane" id="tab_1_2">

              <div class="scroller" data-height="290px" data-always-visible="1" data-rail-visible1="1">

                <ul class="feeds">

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New user registered

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          Just now

                        </div>

                      </div>

                    </a>

                  </li>

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New order received

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          10 mins

                        </div>

                      </div>

                    </a>

                  </li>

                  <li>

                    <div class="col1">

                      <div class="cont">

                        <div class="cont-col1">

                          <div class="label label-important">

                            <i class="icon-bolt"></i>

                          </div>

                        </div>

                        <div class="cont-col2">

                          <div class="desc">

                            Order #24DOP4 has been rejected.

                            <span class="label label-important label-mini">Take action <i class="icon-share-alt"></i></span>

                          </div>

                        </div>

                      </div>

                    </div>

                    <div class="col2">

                      <div class="date">

                        24 mins

                      </div>

                    </div>

                  </li>

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New user registered

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          Just now

                        </div>

                      </div>

                    </a>

                  </li>

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New user registered

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          Just now

                        </div>

                      </div>

                    </a>

                  </li>

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New user registered

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          Just now

                        </div>

                      </div>

                    </a>

                  </li>

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New user registered

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          Just now

                        </div>

                      </div>

                    </a>

                  </li>

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New user registered

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          Just now

                        </div>

                      </div>

                    </a>

                  </li>

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New user registered

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          Just now

                        </div>

                      </div>

                    </a>

                  </li>

                  <li>

                    <a href="#">

                      <div class="col1">

                        <div class="cont">

                          <div class="cont-col1">

                            <div class="label label-success">

                              <i class="icon-bell"></i>

                            </div>

                          </div>

                          <div class="cont-col2">

                            <div class="desc">

                              New user registered

                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="col2">

                        <div class="date">

                          Just now

                        </div>

                      </div>

                    </a>

                  </li>

                </ul>

              </div>

            </div>

            <div class="tab-pane" id="tab_1_3">

              <div class="scroller" data-height="290px" data-always-visible="1" data-rail-visible1="1">

                <div class="row-fluid">

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Robert Nilson</a>

                        <span class="label label-success">Approved</span>

                      </div>

                      <div>29 Jan 2013 10:45AM</div>

                    </div>

                  </div>

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Lisa Miller</a>

                        <span class="label label-info">Pending</span>

                      </div>

                      <div>19 Jan 2013 10:45AM</div>

                    </div>

                  </div>

                </div>

                <div class="row-fluid">

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Eric Kim</a>

                        <span class="label label-info">Pending</span>

                      </div>

                      <div>19 Jan 2013 12:45PM</div>

                    </div>

                  </div>

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Lisa Miller</a>

                        <span class="label label-important">In progress</span>

                      </div>

                      <div>19 Jan 2013 11:55PM</div>

                    </div>

                  </div>

                </div>

                <div class="row-fluid">

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Eric Kim</a>

                        <span class="label label-info">Pending</span>

                      </div>

                      <div>19 Jan 2013 12:45PM</div>

                    </div>

                  </div>

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Lisa Miller</a>

                        <span class="label label-important">In progress</span>

                      </div>

                      <div>19 Jan 2013 11:55PM</div>

                    </div>

                  </div>

                </div>

                <div class="row-fluid">

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div><a href="#">Eric Kim</a> <span class="label label-info">Pending</span>

                      </div>

                      <div>19 Jan 2013 12:45PM</div>

                    </div>

                  </div>

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Lisa Miller</a>

                        <span class="label label-important">In progress</span>

                      </div>

                      <div>19 Jan 2013 11:55PM</div>

                    </div>

                  </div>

                </div>

                <div class="row-fluid">

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div><a href="#">Eric Kim</a> <span class="label label-info">Pending</span>

                      </div>

                      <div>19 Jan 2013 12:45PM</div>

                    </div>

                  </div>

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Lisa Miller</a>

                        <span class="label label-important">In progress</span>

                      </div>

                      <div>19 Jan 2013 11:55PM</div>

                    </div>

                  </div>

                </div>

                <div class="row-fluid">

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Eric Kim</a>

                        <span class="label label-info">Pending</span>

                      </div>

                      <div>19 Jan 2013 12:45PM</div>

                    </div>

                  </div>

                  <div class="span6 user-info">

                    <img alt="" src="media/image/avatar.png" />

                    <div class="details">

                      <div>

                        <a href="#">Lisa Miller</a>

                        <span class="label label-important">In progress</span>

                      </div>

                      <div>19 Jan 2013 11:55PM</div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <!--END TABS-->

      </div>

    </div>

    <!-- END PORTLET-->

  </div>

</div>


<!-- END FOOTER -->

<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->

<!-- BEGIN CORE PLUGINS -->

<script src="media/js/jquery-1.10.1.min.js" type="text/javascript"></script>

<script src="media/js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>

<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->

<script src="media/js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>

<script src="media/js/bootstrap.min.js" type="text/javascript"></script>

<!--[if lt IE 9]>

<script src="media/js/excanvas.min.js"></script>

<script src="media/js/respond.min.js"></script>

<![endif]-->

<script src="media/js/jquery.slimscroll.min.js" type="text/javascript"></script>

<script src="media/js/jquery.blockui.min.js" type="text/javascript"></script>

<script src="media/js/jquery.cookie.min.js" type="text/javascript"></script>

<script src="media/js/jquery.uniform.min.js" type="text/javascript" ></script>

<!-- END CORE PLUGINS -->

<!-- BEGIN PAGE LEVEL PLUGINS -->

<script src="media/js/jquery.vmap.js" type="text/javascript"></script>

<script src="media/js/jquery.vmap.russia.js" type="text/javascript"></script>

<script src="media/js/jquery.vmap.world.js" type="text/javascript"></script>

<script src="media/js/jquery.vmap.europe.js" type="text/javascript"></script>

<script src="media/js/jquery.vmap.germany.js" type="text/javascript"></script>

<script src="media/js/jquery.vmap.usa.js" type="text/javascript"></script>

<script src="media/js/jquery.vmap.sampledata.js" type="text/javascript"></script>

<script src="media/js/jquery.flot.js" type="text/javascript"></script>

<script src="media/js/jquery.flot.resize.js" type="text/javascript"></script>

<script src="media/js/jquery.pulsate.min.js" type="text/javascript"></script>

<script src="media/js/date.js" type="text/javascript"></script>

<script src="media/js/daterangepicker.js" type="text/javascript"></script>

<script src="media/js/jquery.gritter.js" type="text/javascript"></script>

<script src="media/js/fullcalendar.min.js" type="text/javascript"></script>

<script src="media/js/jquery.easy-pie-chart.js" type="text/javascript"></script>

<script src="media/js/jquery.sparkline.min.js" type="text/javascript"></script>

<!-- END PAGE LEVEL PLUGINS -->

<!-- BEGIN PAGE LEVEL SCRIPTS -->

<script src="media/js/app.js" type="text/javascript"></script>

<script src="media/js/index.js" type="text/javascript"></script>

<!-- END PAGE LEVEL SCRIPTS -->

<script>

  jQuery(document).ready(function() {

    App.init(); // initlayout and core plugins

    Index.init();

    Index.initJQVMAP(); // init index page's custom scripts

    Index.initCalendar(); // init index page's custom scripts

    Index.initCharts(); // init index page's custom scripts

    Index.initChat();

    Index.initMiniCharts();

    Index.initDashboardDaterange();

    Index.initIntro();

  });

</script>

<!-- END JAVASCRIPTS -->

</body>
</html>