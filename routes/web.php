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
Route::post('appusers/create', function(\App\Http\Requests\CreateAppuser $request, \App\Appuser $Appuser) {
    $name = $request->input('name');
    $u = $Appuser->create(['name' => $name]);

    $group_ids = $request->input('groups');
    $u->groups()->sync($group_ids);

    $u->load('groups');
    return response()->success($u);
});

Route::post('appusers/save', function(\App\Http\Requests\SaveAppuser $request, \App\Appuser $Appuser) {
    $user_id = $request->input('id');
    $name = $request->input('name');
    $u = $Appuser->findOrFail($user_id);

    $u->name = $name;

    $group_ids = $request->input('groups');
    $u->groups()->sync($group_ids);

    $u->load('groups');
    return response()->success($u);
});

Route::get('appusers/{id}', function($id, Request $request, \App\Appuser $Appuser) {
    $u = $Appuser->with('groups')->findOrFail($id);
    return response()->success($u);
})->where('id', '[0-9]+');

Route::get('appusers', function(Request $request, \App\Appuser $Appuser) {
    $query = $Appuser;
    if ($request->input('expand') == 'all') {
        $query = $query->with('groups');
    }
    return response()->success($query->get());
});

Route::get('appusers/{id}/delete', function($id, Request $request, \App\Appuser $Appuser) {
    $u = $Appuser->with('groups')->findOrFail($id);
    $u->cascade_delete();
    return response()->success();
})->where('id', '[0-9]+');

// Module: Group Controller
Route::post('groups/create', function(\App\Http\Requests\CreateGroup $request, \App\Group $Group) {
    $name = $request->input('name');
    $g = $Group->create(['name' => $name]);    
    return response()->success($g);
});

Route::get('groups', function(Request $request, \App\Group $Group) {
    $query = $Group;
    if ($request->input('expand') == 'all') {
        $query = $query->with('appusers');
    }
    return response()->success($query->get());
});

Route::get('groups/{id}', function($id, Request $request, \App\Group $Group) {
    $group = $Group->with('appusers')->findOrFail($id);
    return response()->success($group);
})->where('id', '[0-9]+');

Route::get('groups/{id}/delete', function($id, Request $request, \App\Group $Group) {
    $group = $Group->with('appusers')->findOrFail($id);
    if ($group->appusers()->count() > 0) {
        return response()->errors(['Cannot delete a group with users assigned.']);
    }
    $group->delete();
    return response()->success();
})->where('id', '[0-9]+');

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