<!doctype html>
<html ng-app="frontend" ng-controller="MainCtrl as Main" lang="{{ app()->getLocale() }}">
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Naive User Management</title>

        <!-- CSS
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <link rel="stylesheet" href="/Skeleton-2.0.4/css/normalize.css">
        <link rel="stylesheet" href="/Skeleton-2.0.4/css/skeleton.css">

        <!-- Angular -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.9/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.9/angular-sanitize.min.js"></script>

        <!-- Angular HTTP Loading bar -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.js"></script>

        <!-- Angular UI Router -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.min.js"></script>

        <!-- Application Logic -->
        <script src="/js/frontend.js"></script>

        <!-- Styles -->
        <style>
        </style>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="one-half column" style="margin-top: 15%">
                    <h4>User Management</h4>
                    <p>Manage your users and their groups here.</p>
                </div>
            </div>
            <div ui-view></div>
        </div>        
    </body>
</html>