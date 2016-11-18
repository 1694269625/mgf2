'use strict';

/**
 * @ngdoc function
 * @name 1110App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1110App
 */
		angular.module('1110App').controller("abc", function($scope, $http) {
				$http({
					method: "get",
					url: "http://www.somenote.cn:1602/list1",
				}).success(function(e) {
					$scope.data=e[0].content
					
				})
		})
