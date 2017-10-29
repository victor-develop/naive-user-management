<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('entrance');
});

// test section
$genuser = function() {
    $user = new \App\Appuser;
    $user->name = "random_user".rand();
    $user->save();
    return $user;
};

$gengroup = function() {
    $group = new \App\Group;
    $group->name = "random_group".rand();
    $group->save();
    return $group;
};

Route::get('/appusers/gen', function() use ($genuser) {
    $u = $genuser();
    return response()->success($u->with('groups')->get());
});

Route::get('/groups/gen', function() use ($gengroup) {
    $g = $gengroup();
    return response()->success($g->with('appusers')->get());
});

Route::get('/appusers-groups/gen', function() use ($genuser, $gengroup) {
    $u = $genuser();
    $g1 = $gengroup();
    $g2 = $gengroup();
    $u->groups()->saveMany([$g1, $g2]);
    $u->load('groups');
});

Route::get('/test/macro/success', function () {
    return response()->success();
});

Route::get('/test/macro/error', function () {
    return response()->errors(['something wrong']);
});