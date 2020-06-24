(function(){
	"use strict";
	
	angular.module('public')
	.controller('signUpController',signUpController);
	
	signUpController.$inject=['MenuService'];
	function signUpController(MenuService)
	{
		var $signUpCtrl=this;
		
		$signUpCtrl.submit=function()
		{
			MenuService.getFavouriteDish($signUpCtrl.user.favoriteDish).then(function(result)
			{
				$signUpCtrl.user.favDish=result.data;
				MenuService.setUserProfile($signUpCtrl.user);
				$signUpCtrl.success=true;
				$signUpCtrl.error=false;
			},function(result)
			{
				$signUpCtrl.success=false;
				$signUpCtrl.error=true;
			});
		};
	}

})();