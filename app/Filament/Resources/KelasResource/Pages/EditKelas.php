<?php

namespace App\Filament\Resources\KelasResource\Pages;

use App\Filament\Resources\KelasResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditKelas extends EditRecord
{
    protected static string $resource = KelasResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
    // protected function mutateFormDataBeforeSave(array $data): array
    // {
    //     // Ensure the 'link_overview' field is handled correctly
    //     if ($this->record && isset($data['link_overview'])) {
    //         // If 'link_overview' is a string (likely JSON), decode it
    //         if (is_string($data['link_overview'])) {
    //             $data['link_overview'] = json_decode($data['link_overview'], true);
    //         }

    //         // If there are changes in the 'link_overview' field, update it
    //         if ($data['link_overview'] !== $this->record->link_overview) {
    //             // If user edited the 'link_overview', use the new value
    //             $data['link_overview'] = json_encode($data['link_overview']);  // Re-encode to JSON before saving
    //         } else {
    //             // If there's no change, keep the original value (no need to update 'link_overview')
    //             $data['link_overview'] = $this->record->link_overview;
    //         }
    //     }

    //     return $data;
    // }
}
