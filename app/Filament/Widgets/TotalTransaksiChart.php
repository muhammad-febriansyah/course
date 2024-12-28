<?php

namespace App\Filament\Widgets;

use App\Models\Transaction;
use Filament\Widgets\ChartWidget;
use Filament\Widgets\Concerns\InteractsWithPageFilters;

class TotalTransaksiChart extends ChartWidget
{

    use InteractsWithPageFilters;
    protected static ?string $heading = 'Total Transaksi';
    protected static string $color = 'warning';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        // Ambil filter tanggal mulai dan selesai
        $startDate = $this->filters['startDate'] ?? null;
        $endDate = $this->filters['endDate'] ?? null;

        // Query untuk mengambil data transaksi
        $trxQuery = Transaction::query();

        // Menambahkan filter berdasarkan tanggal jika tersedia
        if ($startDate) {
            $trxQuery->where('created_at', '>=', $startDate);
        }
        if ($endDate) {
            $trxQuery->where('created_at', '<=', $endDate);
        }

        // Menambahkan filter untuk status 'paid'
        $trxQuery->where('status', 'paid'); // Asumsi status ada di kolom 'status' dan nilainya 'paid'

        // Ambil data transaksi per bulan dengan jumlah total orders
        $monthlyData = $trxQuery->selectRaw('MONTH(created_at) as month, COUNT(*) as total_orders')
            ->groupByRaw('MONTH(created_at)')
            ->orderByRaw('MONTH(created_at)')
            ->get();

        // Siapkan array untuk data dan label
        $data = [];
        $labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // Inisialisasi data untuk setiap bulan dengan nilai default 0
        $monthlyOrders = array_fill(0, 12, 0); // 12 bulan, default 0

        // Isi data transaksi ke dalam array berdasarkan bulan
        foreach ($monthlyData as $transaction) {
            $monthIndex = $transaction->month - 1; // Index bulan dimulai dari 0 (Jan = 0, Feb = 1, dst)
            $monthlyOrders[$monthIndex] = $transaction->total_orders;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Paid Orders',
                    'data' => $monthlyOrders,
                    'fill' => 'start',
                ],
            ],
            'labels' => $labels,
        ];
    }


    protected function getType(): string
    {
        return 'line';
    }
}
