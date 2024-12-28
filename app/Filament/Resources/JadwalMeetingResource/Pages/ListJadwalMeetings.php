<?php

namespace App\Filament\Resources\JadwalMeetingResource\Pages;

use App\Filament\Resources\JadwalMeetingResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListJadwalMeetings extends ListRecords
{
    protected static string $resource = JadwalMeetingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
