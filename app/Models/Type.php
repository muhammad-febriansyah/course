<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Type extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function Kelas(): HasMany
    {
        return $this->hasMany(Kelas::class);
    }
}
