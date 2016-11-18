angular.module("zuoye",[]).directive('zuoye',function (){
    return{
    	restrict:'ECMA',
        template:'<div class="content"><div class="top"><p>国内</p></div><div class="content_left"><ul><li ng-repeat="x in fdata"><a href="javascript:;">{{x.title}}</a></li></ul></div><div class="content_content" ng-repeat="z in cdata" ><h1>国内图片</h1><img ng-src="{{z.img}}"></div></div>',
     	replace:true,
        scope:{fdata:'=data',cdata:'=dataa'}
    }
})