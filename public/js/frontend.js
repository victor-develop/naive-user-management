var frontend = angular.module('frontend', ['angular-loading-bar','ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/404");

        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "/js/partials/main.html",
            })
            .state('main.appusers', {
                url: "/appusers",
                abstract: true,
                template: "<div ui-view></div>"
            })
            .state('main.appusers.manage', {
                url: "/manage",
                component: "appusers.tabular",
                resolve: {
                    appusers: function(AppuserService) {
                        return AppuserService.list();
                    }
                }
            })
            .state('404', {
                url: "/404",
                external: true
            });
        
        $urlRouterProvider.when('', goMain);
        $urlRouterProvider.when('/', goMain);
        function goMain($state, $match) {
            $state.go('main');
        }
        
    })    
    .controller('MainCtrl', function(NoticeService, $http) {
        var self = this;

        // TODO: test scripts, should be removed
    /*
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
            // test create
            $http.post('/appusers/create', user_withGroup); 

            // test save
            $http.get('appusers?expand=all')
            .then( (xhrres) =>{
               return xhrres.data.data;
            })
            .then((users)=> {
                return getRandom(users,1)[0];
            })
            .then((firstUser)=>{
                var editedUser = {name: firstUser.name, id: firstUser.id, groups:[]};
                editedUser.groups = getRandom(group_ids, 3);
                $http.post('/appusers/save', editedUser);
            })
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
    */
    })
    .factory('NoticeService', function() {
        var service = {};
        service.alert = function(info) {
            alert(info);
        };
        return service;
    })
    .factory('RestClient', function(NoticeService, $http, $q) {
        var service = {};

        service.get = function(url) {
            return $http.get(url)
                .then(onSuccess, onErrors);
        }
        
        return service;

        // internal functions----------------------
        function onSuccess(xhrResponse) {
            return xhrResponse.data.data;
        }
        function onErrors(xhrResponse) {
            var content = xhrResponse.data;
            if (content.data.error_key == "validation") {
                var msg = '';
                var errors = xhr_response.data.data.errors;
                for(var error_field  in errors) {
                    msg += error_field + ': ' + errors[error_field];
                }
                NoticeService.alert(msg);
            }
            else {
                NoticeService.alert(content.error_messages);
            }
            return $q.reject(content);
        }
    })
    .factory('AppuserService', function(RestClient) {
        var service = {};
        service.list = function() {
            return RestClient.get('/appusers');
        }
        service.delete = function(user) {
            return RestClient.get('/appusers/' + user.id + '/delete');
        }
        return service;        
    })
    .component("appusers.tabular", {
        templateUrl: "/js/partials/appusers/tabular.html",
        bindings: {
            'appusers': '<'
        },
        controller:  function(AppuserService, NoticeService) {
            var self = this;
            self.delete = function(user) {
                AppuserService.delete(user)
                .then(function(){
                    self.appusers = self.appusers.filter(function(eachUser) {
                        return eachUser.id != user.id;
                    })
                });
            }
        }
    });