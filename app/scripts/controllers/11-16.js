angular.module("mgf",[]).directive('auto',function (){
    return{
    	restrict:'ECMA',
    	template:'<div id="carousel-example-generic{{b}}" class="carousel slide" data-ride="carousel"><!-- Indicators --><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"><> <li data-target="#carousel-example-generic" data-slide-to="1"><><li data-target="#carousel-example-generic" data-slide-to="2"><></ol><!-- Wrapper for slides --><div class="carousel-inner" role="listbox"><div class="item" ng-repeat="x in fdata" ng-class="{active:$index==0}"><img ng-src="{{x.img}}" alt="..."><div class="carousel-caption"> ... </div></div> ... </div><!-- Controls --> <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a  class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div>',
     	replace:true,
     	scope:true,
        scope:{fdata:'=data'},
     	link:function(scope,element,attr){
     		scope.b = attr['a']
     	}
    }
    
})