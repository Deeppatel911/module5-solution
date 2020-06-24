(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://deeppatel0911-angjs.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
