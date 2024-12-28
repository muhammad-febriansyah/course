<?php

namespace App\Filament\Mentor\Resources\SectionResource\Pages;

use App\Filament\Mentor\Resources\SectionResource;
use App\Models\Kelas;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateSection extends CreateRecord
{
    protected static string $resource = SectionResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if (isset($data['kelas_id'])) {
            $kelas = Kelas::find($data['kelas_id']);
            $data['kelas_id'] = $kelas->id;
        }
        return $data;
    }
}
