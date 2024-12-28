<?php

namespace App\Filament\Resources\NewsCategoryResource\Pages;

use App\Filament\Resources\NewsCategoryResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;
use Illuminate\Contracts\Support\Htmlable;

class ManageNewsCategories extends ManageRecords
{
    protected static string $resource = NewsCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()->label('Form Kategori')->icon('heroicon-s-plus'),
        ];
    }

    public function getTitle(): string|Htmlable
    {
        return 'Kategori Berita/Artikel';
    }

    public function getModelLabel(): ?string
    {
        return 'Kategori Berita/Artikel';
    }
}
