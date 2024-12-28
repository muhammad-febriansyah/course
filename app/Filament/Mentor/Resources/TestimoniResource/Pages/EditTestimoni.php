<?php

namespace App\Filament\Mentor\Resources\TestimoniResource\Pages;

use App\Filament\Mentor\Resources\TestimoniResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTestimoni extends EditRecord
{
    protected static string $resource = TestimoniResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
