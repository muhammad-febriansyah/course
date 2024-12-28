<?php

namespace App\Filament\Mentor\Resources\StudentKelasResource\Pages;

use App\Filament\Mentor\Resources\StudentKelasResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Contracts\Support\Htmlable;

class ListStudentKelas extends ListRecords
{
    protected static string $resource = StudentKelasResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    public function getTitle(): string|Htmlable
    {
        return 'Student Kelas';
    }
}
