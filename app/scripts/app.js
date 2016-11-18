'use strict';

/**
 * @ngdoc overview
 * @name 1110App
 * @description
 * # 1110App
 *
 * Main module of the application.
 */
angular
  .module('1110App', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'mgf',
    'zuoye'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state(
        'abc',{
          url:'/denglu',
          templateUrl:'views/denglu.html',
          controller:"yi"
        }
    ).
    state(
          'qwer',{
            url:'/aiya',
            templateUrl:'views/aiya.html',
            controller:"er"
          }
        )
  });
