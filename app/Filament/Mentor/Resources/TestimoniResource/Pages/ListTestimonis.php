<?php

namespace App\Filament\Mentor\Resources\TestimoniResource\Pages;

use App\Filament\Mentor\Resources\TestimoniResource;
use App\Models\Testimoni;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListTestimonis extends ListRecords
{
    protected static string $resource = TestimoniResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function getTableQuery(): ?Builder
    {
        return Testimoni::query()->where('kelas.user_id', auth()->user()->id);
    }
}
