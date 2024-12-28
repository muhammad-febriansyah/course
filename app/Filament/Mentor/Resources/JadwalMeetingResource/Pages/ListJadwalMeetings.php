<?php

namespace App\Filament\Mentor\Resources\JadwalMeetingResource\Pages;

use App\Filament\Mentor\Resources\JadwalMeetingResource;
use App\Models\Jadwal;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListJadwalMeetings extends ListRecords
{
    protected static string $resource = JadwalMeetingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()->label('Form Jadwal Meeting')->icon('heroicon-o-plus'),
        ];
    }

    protected function getTableQuery(): ?Builder
    {
        return Jadwal::query()->where('user_id', auth()->user()->id);
    }
}
