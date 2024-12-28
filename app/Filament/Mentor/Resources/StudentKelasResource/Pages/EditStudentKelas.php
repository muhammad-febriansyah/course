<?php

namespace App\Filament\Mentor\Resources\StudentKelasResource\Pages;

use App\Filament\Mentor\Resources\StudentKelasResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditStudentKelas extends EditRecord
{
    protected static string $resource = StudentKelasResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
