<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appuser extends Model
{
    protected $fillable = ['name'];

    public function groups() {
        return $this->belongsToMany('App\Group')->withTimestamps();
    }

    public function cascade_delete() {
        $this->groups()->detach();
        $this->delete();
    }
}
