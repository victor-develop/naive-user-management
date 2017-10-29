var frontend = angular.module('frontend', ['angular-loading-bar'])
    .controller('MainCtrl', function(NoticeService, $http) {
        var self = this;

        // TODO: test scripts, should be removed
        NoticeService.alert('NoticeService is ready');

        var u = {name: ''};
        u.name = makeid();
        var emptyu = {};
        $http.post('/appusers/create', u);
        $http.post('/appusers/create', emptyu);

        alert('hei!');

        var g = {name: ''};
        g.name = "group_" + makeid();
        var emptygroup = {};
        $http.post('/groups/create', g);
        $http.post('/groups/create', emptygroup);       

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          
            for (var i = 0; i < 12; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return text;
        }

        function assert(predicate) {
            if (!predicate) {
                alert("wrong!");
            }
        }
    })
    .factory('NoticeService', function(){
        var service = {};
        service.alert = function(info) {
            alert(info);
        };
        return service;
    })