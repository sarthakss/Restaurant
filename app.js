(function(){
	'use strict';
	angular
	.module('restaurant',[])
    .config(moduleConfig)
    .controller('MainController',MainController)

    moduleConfig.$inject=[];
    function moduleConfig(){

    }

    MainController.$inject=[];
    function MainController(){

    	var mainVm=this;

        mainVm.templateUrl='mainTemp.html';




    }









})();