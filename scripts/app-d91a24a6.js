"use strict";angular.module("cypress",["ngAnimate","ngCookies","ngSanitize","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("charts",{url:"/charts",templateUrl:"app/charts/charts.html",controller:"ChartsCtrl"}),a.otherwise("/")}]),angular.module("cypress").controller("MainCtrl",["$scope",function(e){e.awesomeThings=[{key:"angular",title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{key:"browsersync",title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{key:"gulp",title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{key:"jasmine",title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{key:"karma",title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{key:"protractor",title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{key:"jquery",title:"jQuery",url:"http://jquery.com/",description:"jQuery is a fast, small, and feature-rich JavaScript library.",logo:"jquery.jpg"},{key:"bootstrap",title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{key:"node-sass",title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}],angular.forEach(e.awesomeThings,function(e){e.rank=Math.random()})}]),angular.module("cypress").controller("ChartsCtrl",["$scope","$http","$filter",function(e,a,t){e.model={data:{url:"http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Education_WebMercator/MapServer/5"},style:"bf8b9ecffac54bda99b0b6f3058f160a",styleObj:{},styleJson:"{}",canRender:!1},e.canRender=function(){return e.model.canRender},e.fetchStyle=function(a){Cedar.fetchStyle(a.style,e.fetchStyleCallback)},e.fetchStyleCallback=function(a){e.model.styleObj=a,e.model.styleJson=t("json")(a),e.model.canRender=!0,e.$apply()},e.updateChart=function(a){var t={el:"#chart-area",x:"CAPACITY",y:"POPULATION_ENROLLED_2008",color:"FACUSE"};t.url=a.data.url;var r=JSON.parse(e.model.styleJson);Cedar.setStyle(r),Cedar.generate(t)}}]),angular.module("cypress").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),function(e){try{e=angular.module("cypress")}catch(a){e=angular.module("cypress",[])}e.run(["$templateCache",function(e){e.put("app/charts/charts.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><form role="form"><div class="row"><div class="col-lg-4 col-sm-6 col-md-4"><div class="form-group"><label>Data</label> <input type="text" class="form-control" placeholder="Data Url" ng-model="model.data.url"></div><div class="form-group"><label>Style Item Id</label><div class="input-group"><input type="text" class="form-control" ng-model="model.style" placeholder="Style Url"> <span class="input-group-btn"><button class="btn btn-success" type="button" ng-click="fetchStyle(model)">Fetch!</button></span></div><label for="">Style Json</label> <textarea ng-model="model.styleJson" class="form-control" rows="20"></textarea></div><button class="btn btn-primary" ng-click="updateChart(model)" ng-disabled="!canRender()">Render Chart</button></div><div class="col-lg-8"><div id="chart-area"></div></div></div><div class="row" ng-show="false"><div class="col-lg-4"><button class="btn green">Save to Online</button></div><div class="col-lg-4"><input placeholder="ago item id"></div><div class="col-lg-4"><button class="btn green">Load from Online</button></div></div></form><hr><div class="footer"><p>With ♥ from <a href="http://dc.esri.com">@EsriDC</a></p></div></div>')}])}(),function(e){try{e=angular.module("cypress")}catch(a){e=angular.module("cypress",[])}e.run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn btn-lg btn-success" ng-href="#">Splendid!</a></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class="footer"><p>With ♥ from <a href="http://dc.esri.com">@EsriDC</a></p></div></div>')}])}(),function(e){try{e=angular.module("cypress")}catch(a){e=angular.module("cypress",[])}e.run(["$templateCache",function(e){e.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Cypress</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ui-sref-active="active"><a ui-sref="home">Home</a></li><li ui-sref-active="active"><a ui-sref="charts">My Charts</a></li></ul></div></nav>')}])}();