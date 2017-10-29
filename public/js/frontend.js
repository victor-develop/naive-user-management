var frontend = angular.module('frontend', ['angular-loading-bar'])
    .controller('MainCtrl', function(NoticeService) {
        var self = this;
        NoticeService.alert('NoticeService is ready');
    })
    .factory('NoticeService', function(){
        var service = {};
        service.alert = function(info) {
            alert(info);
        };
        return service;
    })