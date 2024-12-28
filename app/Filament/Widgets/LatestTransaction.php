<?php

namespace App\Filament\Widgets;

use App\Models\Transaction;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\Concerns\InteractsWithPageFilters;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestTransaction extends BaseWidget
{
    use InteractsWithPageFilters;
    protected int | string | array $columnSpan = 'full';
    protected static ?string $heading = 'Transaksi Terbaru';
    protected static ?int $sort = 4;

    public function table(Table $table): Table
    {
        $startDate = $this->filters['startDate'] ?? null;
        $endDate = $this->filters['endDate'] ?? null;
        return $table
            ->query(
                fn() => Transaction::where('status', 'paid')
                    ->when($startDate, fn($query) => $query->where('created_at', '>=', $startDate))
                    ->when($endDate, fn($query) => $query->where('created_at', '<=', $endDate))->orderBy('created_at', 'desc')->limit(5)
            )
            ->defaultSort('created_at', 'desc')
            ->columns([
                TextColumn::make('No')->rowIndex()->toggleable(),
                TextColumn::make('nota')->label('Order ID')->toggleable(),
                TextColumn::make('user.name')->label('Pembeli')->searchable(),
                TextColumn::make('kelas.title')->label('Kelas')->toggleable(),
                TextColumn::make('amount')->label('Total')->money('IDR')->toggleable()->summarize([
                    Tables\Columns\Summarizers\Sum::make()
                        ->money('IDR'),
                ]),
                TextColumn::make('status')->label('Status')->toggleable()->badge()->color(function (string $state): string {
                    return match ($state) {
                        'pending' => 'warning',
                        'paid' => 'success',
                        'failed' => 'danger',
                    };
                })->icon(function (string $state): string {
                    return match ($state) {
                        'pending' => 'heroicon-s-clock',
                        'paid' => 'heroicon-s-check-circle',
                        'failed' => 'heroicon-s-x-circle',
                    };
                }),
                TextColumn::make('created_at')->label('tgl Trx')->date()->toggleable(),
            ]);
    }

    public static function infolist(): Infolist
    {
        return Infolist::make()
            ->schema([])->columns(['lg' => 3, 'md' => 2, 'sm' => 1]);
    }
}
