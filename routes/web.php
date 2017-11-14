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

use Illuminate\Http\Request;

Route::get('/', function () {
    return view('entrance');
});

// Module: Appuser Controller
Route::post('appusers/create', 'AppuserCtrl@postCreate');

Route::post('appusers/save', 'AppuserCtrl@save');

Route::put('appusers', 'AppuserCtrl@save');

Route::get('appusers/{id}', 'AppuserCtrl@getView')->where('id', '[0-9]+');

Route::get('appusers', 'AppuserCtrl@getList');

Route::get('appusers/{id}/delete', 'AppuserCtrl@getDelete')->where('id', '[0-9]+');

// Module: Group Controller
Route::post('groups/create', 'GroupCtrl@postCreate');

Route::get('groups', 'GroupCtrl@getList');

Route::get('groups/{id}', 'GroupCtrl@getView')->where('id', '[0-9]+');

Route::get('groups/{id}/delete','GroupCtrl@getDelete' )->where('id', '[0-9]+');
