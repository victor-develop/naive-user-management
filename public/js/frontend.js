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

        var g = {name: ''};
        g.name = "group_" + makeid();
        var emptygroup = {};
        $http.post('/groups/create', g);
        $http.post('/groups/create', emptygroup);   
        

        
        $http.get('groups')
        .then((response) => {
            return response.data.data.map(g => g.id);
        })
        .then((group_ids)=> {
            var user_withGroup = {name: '', groups: []};
            user_withGroup.name = "ug" + makeid();
            user_withGroup.groups = getRandom(group_ids, 3);     
            $http.post('/appusers/create', user_withGroup); 
        });

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          
            for (var i = 0; i < 12; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return text;
        }

        function getRandom(arrayNum, count) {
            // Make a copy of the array
            var tmp = arrayNum.slice(arrayNum);
            var ret = [];
            
            for (var i = 0; i < count; i++) {
              var index = Math.floor(Math.random() * tmp.length);
              var removed = tmp.splice(index, 1);
              // Since we are only removing one element
              ret.push(removed[0]);
            }
            return ret;  
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