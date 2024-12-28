<?php

namespace App\Filament\Resources\TransaksiResource\Widgets;

use App\Filament\Resources\TransaksiResource\Pages\ListTransaksis;
use App\Models\User;
use Filament\Notifications\Notification;
use Filament\Widgets\Concerns\InteractsWithPageTable;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\File;

class StatsTransaksi extends BaseWidget
{
    use InteractsWithPageTable;

    protected function getTablePage(): string
    {
        return ListTransaksis::class;
    }


    protected function getStats(): array
    {
        return [
            Stat::make('Total Transaksi', $this->getPageTableQuery()->count()),
            Stat::make('Kelas Terjual', $this->getPageTableQuery()->where('status', 'paid')->count()),
            Stat::make('Jumlah Pendapatan', number_format($this->getPageTableQuery()->where('status', 'paid')->sum('amount'), 0, ',', '.')),
        ];
    }
}
