<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable = ['name'];
    
    public function appusers() {
        return $this->belongsToMany('App\Appuser')->withTimestamps();
    }    
}

