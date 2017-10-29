var frontend = angular.module('frontend', ['angular-loading-bar'])
    .controller('MainCtrl', function(NoticeService, $http) {
        var self = this;
        NoticeService.alert('NoticeService is ready');

        var u = {name: "Makci"} ;
        var emptyu = {};
        $http.post('/appusers/create', u);
        $http.post('/appusers/create', emptyu);
    })
    .factory('NoticeService', function(){
        var service = {};
        service.alert = function(info) {
            alert(info);
        };
        return service;
    })