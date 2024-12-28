<?php

namespace App\Filament\Mentor\Resources\SectionResource\Pages;

use App\Filament\Mentor\Resources\SectionResource;
use App\Models\Section;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListSections extends ListRecords
{
    protected static string $resource = SectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()->label('Form Section')->icon('heroicon-s-plus'),
        ];
    }

    protected function getTableQuery(): ?Builder
    {
        return Section::whereHas('kelas', function ($query) {
            $query->where('user_id', auth()->user()->id);
        });
    }
}
