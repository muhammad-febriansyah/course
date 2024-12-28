<?php

namespace App\Filament\Mentor\Resources\JadwalMeetingResource\Pages;

use App\Filament\Mentor\Resources\JadwalMeetingResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditJadwalMeeting extends EditRecord
{
    protected static string $resource = JadwalMeetingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
