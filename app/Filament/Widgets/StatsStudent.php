<?php

namespace App\Filament\Widgets;

use App\Models\Kelas;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
use Filament\Widgets\Concerns\InteractsWithPageFilters;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsStudent extends BaseWidget
{
    use InteractsWithPageFilters;
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        $startDate = $this->filters['startDate'] ?? null;
        $endDate = $this->filters['endDate'] ?? null;

        // Start the query for students
        $studentQuery = User::where('role', 'student')->where('status', 1);

        // Start the transaction queries
        $trxQuery = Transaction::query();
        $jmltrxQuery = Transaction::query();

        // Apply filters on startDate and endDate, if provided
        if ($startDate) {
            $studentQuery->where('created_at', '>=', Carbon::parse($startDate));
            $trxQuery->where('created_at', '>=', Carbon::parse($startDate));
            $jmltrxQuery->where('created_at', '>=', Carbon::parse($startDate));
        }

        if ($endDate) {
            $studentQuery->where('created_at', '<=', Carbon::parse($endDate));
            $trxQuery->where('created_at', '<=', Carbon::parse($endDate));
            $jmltrxQuery->where('created_at', '<=', Carbon::parse($endDate));
        }

        // Get counts and sums after applying the filters (or not, if no filter is set)
        $countStudent = $studentQuery->count();
        $countTrx = $trxQuery->count();
        $countJmlTrx = $jmltrxQuery->sum('amount');
        if (auth()->user()->role == 'mentor') {
            $pending = Kelas::where('user_id', auth()->user()->id)->where('status', 'pending')->count();
            $ditolak = Kelas::where('user_id', auth()->user()->id)->where('status', 'ditolak')->count();
            $disetujui = Kelas::where('user_id', auth()->user()->id)->where('status', 'disetujui')->count();

            return [
                Stat::make('Kelas Pending', $pending),
                Stat::make('Kelas Ditolak', $ditolak),
                Stat::make('Kelas Disetujui', $disetujui),
            ];
        } else {
            return [
                Stat::make('Total Student', $countStudent),
                Stat::make('Total Transaksi', $countTrx),
                Stat::make('Jumlah Pendapatan', number_format($countJmlTrx, 0, ',', '.')),
            ];
        }
    }
}
