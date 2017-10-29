<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GroupCtrl extends Controller
{
    public function postCreate(\App\Http\Requests\CreateGroup $request, \App\Group $Group) {
        $name = $request->input('name');
        $g = $Group->create(['name' => $name]);    
        return response()->success($g);
    }

    public function getDelete($id, Request $request, \App\Group $Group) {
        $group = $Group->with('appusers')->findOrFail($id);
        if ($group->appusers()->count() > 0) {
            return response()->errors(['Cannot delete a group that stil has users.']);
        }
        $group->delete();
        return response()->success();
    }

    public function getList(Request $request, \App\Group $Group) {
        $query = $Group;
        if ($request->input('expand') == 'all') {
            $query = $query->with('appusers');
        }
        return response()->success($query->get());
    }

    public function getView($id, Request $request, \App\Group $Group) {
        $group = $Group->with('appusers')->findOrFail($id);
        return response()->success($group);
    }
}
