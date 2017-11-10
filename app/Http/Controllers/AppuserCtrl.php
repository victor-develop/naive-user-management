<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppuserCtrl extends Controller
{
    public function postCreate(\App\Http\Requests\CreateAppuser $request, \App\Appuser $Appuser) {
        $name = $request->input('name');
        $u = $Appuser->create(['name' => $name]);
    
        $group_ids = $request->input('groups');
        $u->groups()->sync($group_ids);
    
        $u->load('groups');
        return response()->success($u);
    }

    public function save(\App\Http\Requests\SaveAppuser $request, \App\Appuser $Appuser) {
        $user_id = $request->input('id');
        $name = $request->input('name');
        $u = $Appuser->findOrFail($user_id);
    
        $u->name = $name;
    
        $group_ids = $request->input('groups');
        $u->groups()->sync($group_ids);
    
        $u->load('groups');
        return response()->success($u);
    }

    public function getDelete($id, Request $request, \App\Appuser $Appuser) {
        $u = $Appuser->with('groups')->findOrFail($id);
        $u->cascade_delete();
        return response()->success();
    }

    public function getList(Request $request, \App\Appuser $Appuser) {
        $query = $Appuser;
        if ($request->input('expand') == 'all') {
            $query = $query->with('groups');
        }
        return response()->success($query->get());
    }

    public function getView($id, Request $request, \App\Appuser $Appuser) {
        $u = $Appuser->with('groups')->findOrFail($id);
        return response()->success($u);
    }
}
