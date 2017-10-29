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
Route::get('/test/macro/success', function () {
    return response()->success();
});

Route::get('/test/macro/error', function () {
    return response()->errors(['something wrong']);
});