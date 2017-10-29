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
            .state('main.appusers.edit', {
                url: '/edit/{id}',
                component: 'appusers.edit',
                resolve: {
                    appuser: function(AppuserService, $transition$) {
                        var appuser_id = $transition$.params().id;
                        return AppuserService.getByID(appuser_id);
                    },
                    groups: function(GroupService) {
                        return GroupService.list();
                    }
                }
            })
            .state('main.appusers.create', {
                url: '/create',
                component: 'appusers.edit',
                resolve: {
                    appuser: function(AppuserService) {
                        return AppuserService.newModel();
                    },
                    groups: function(GroupService) {
                        return GroupService.list();
                    }                    
                }
            })
            .state('main.groups', {
                url: "/groups",
                abstract: true,
                template: "<div ui-view></div>"
            })            
            .state('main.groups.manage', {
                url: "/manage",
                component: "groups.tabular",
                resolve: {
                    groups: function(GroupService) {
                        return GroupService.list();
                    }
                }
            })
            .state('main.groups.create', {
                url: '/create',
                component: 'groups.edit',
                resolve: {
                    group: function(GroupService) {
                        return GroupService.newModel();
                    }                    
                }
            })            
            .state('main.404', {
                url: "/404",
                external: true,
                template: "<h5>Not Found.</h5>"
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

        service.post = function(url, data) {
            return $http.post(url, data)
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
    .factory('AppuserService', function(RestClient, $q) {
        var service = {};
        service.list = function() {
            return RestClient.get('/appusers');
        }
        service.delete = function(user) {
            return RestClient.get('/appusers/' + user.id + '/delete');
        }
        service.getByID = function(id) {
            return RestClient.get('/appusers/' + id);
        }
        service.save = function(user) {
            if (!user.id) {
                return RestClient.post('/appusers/create', user);
            }
            return RestClient.post('/appusers/save', user);
        }
        service.newModel = function() {
            var newOne = {
                name: '',
                groups: []
            }
            return $q.resolve(newOne);
        }
        return service;        
    })
    .factory('GroupService', function(RestClient, $q) {
        var service = {};
        service.list = function() {
            return RestClient.get('/groups');
        }
        service.delete = function(group) {
            return RestClient.get('/groups/' + group.id + '/delete');
        }
        service.save = function(group) {
            if (!group.id) {
                return RestClient.post('/groups/create', group);
            }
            return RestClient.post('/groups/save', group);
        }
        service.newModel = function() {
            var newOne = {
                name: ''
            };
            return $q.resolve(newOne);
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
    })
    .component("appusers.edit", {
        templateUrl: "/js/partials/appusers/edit.html",
        bindings: {
            appuser: '<',
            groups: '<'            
        },
        controller: function(AppuserService, GroupService,NoticeService, $state) {
            var self = this;
            self.usermeta = {
                groups: {}
            };
            self.appuser.groups.forEach(function(eachGroup) {
                self.usermeta.groups['' + eachGroup.id] = true;
            });

            self.save = function() {
                self.appuser.groups = [];

                for(var selected_group_id in self.usermeta.groups) {
                    if (self.usermeta.groups[selected_group_id] == true) {
                        self.appuser.groups.push(selected_group_id);
                    }
                }

                AppuserService.save(self.appuser)
                .then(function(response){
                    NoticeService.alert("success!");
                    $state.go('^.manage');
                });
            }
        }
    })
    .component("groups.edit", {
        templateUrl: "/js/partials/groups/edit.html",
        bindings: {
            group: '<'            
        },
        controller: function(GroupService,NoticeService, $state) {
            var self = this;
            self.save = function() {
                GroupService.save(self.group)
                .then(function(response){
                    NoticeService.alert("success!");
                    $state.go('^.manage');
                });
            }
        }
    })    
    .component('groups.tabular', {
        templateUrl: "/js/partials/groups/tabular.html",
        bindings: {
            groups: '<'
        },
        controller:  function(GroupService, NoticeService) {
            var self = this;
            self.delete = function(group) {
                GroupService.delete(group)
                .then(function(){
                    self.groups = self.groups.filter(function(eachGroup) {
                        return eachGroup.id != group.id;
                    })
                });
            }
        }
    })
    