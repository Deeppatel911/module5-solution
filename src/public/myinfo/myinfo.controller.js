(function(){
	"use strict";
	
	angular.module('public')
	.controller('myInfoController',myInfoController);
	
	myInfoController.$inject=['userInfo'];
	function myInfoController(userInfo)
	{
		var $myInfoCtrl=this;
		$myInfoCtrl.user=userInfo;
	}

})();