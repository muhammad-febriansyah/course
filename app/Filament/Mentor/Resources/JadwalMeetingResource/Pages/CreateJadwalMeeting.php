<?php

namespace App\Filament\Mentor\Resources\JadwalMeetingResource\Pages;

use App\Filament\Mentor\Resources\JadwalMeetingResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateJadwalMeeting extends CreateRecord
{
    protected static string $resource = JadwalMeetingResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->user()->id;
        return $data;
    }
}
