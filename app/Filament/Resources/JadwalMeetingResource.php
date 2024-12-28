<?php

namespace App\Filament\Resources;

use App\Filament\Resources\JadwalMeetingResource\Pages;
use App\Filament\Resources\JadwalMeetingResource\RelationManagers;
use App\Models\Jadwal;
use App\Models\JadwalMeeting;
use App\Models\Transaction;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class JadwalMeetingResource extends Resource
{
    protected static ?string $model = Jadwal::class;

    protected static ?string $navigationIcon = 'heroicon-o-bell-alert';
    protected static ?string $navigationGroup = 'Course';
    protected static ?string $navigationLabel = 'Jadwal Meeting';
    protected static ?int $navigationSort = 8;

    public static function canCreate(): bool
    {
        return false;
    }

    public static function canDelete(Model $record): bool
    {
        return false;
    }

    public static function canEdit(Model $record): bool
    {
        return false;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make("No")->rowIndex(),
                TextColumn::make('user.name')->label('Mentor')->searchable(),
                TextColumn::make('kelas.title')->label('Kelas')->searchable(),
                TextColumn::make('section.title')->label('Section')->searchable(),
                TextColumn::make('tgl_jadwal')->label('Tgl Jadwal')->date(),
                TextColumn::make('jam_mulai')->label('Jam Mulai'),
                TextColumn::make('jam_selesai')->label('Jam Selesai'),

            ])
            ->filters([
                SelectFilter::make('kelas_id')
                    ->options(
                        Transaction::query()
                            ->join('kelas', 'kelas.id', '=', 'transactions.kelas_id')
                            ->pluck('kelas.title', 'transactions.kelas_id')
                    )
                    ->label('Kelas')
                    ->searchable(),
                SelectFilter::make('user_id')
                    ->options(
                        User::where('role', 'mentor')->get()
                            ->pluck('name', 'id')
                    )
                    ->label('Mentor')
                    ->searchable(),
            ], layout: FiltersLayout::Modal)
            ->actions([
                Tables\Actions\EditAction::make()->button()->color('success')->icon('heroicon-o-pencil'),
                Tables\Actions\ViewAction::make()->button()->color('primary')->icon('heroicon-o-eye'),
                Tables\Actions\DeleteAction::make()->button()->color('danger')->icon('heroicon-o-trash'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                TextEntry::make('user.name')->label('Mentor'),
                TextEntry::make('kelas.title')->label('Kelas'),
                TextEntry::make('section.title')->label('Section'),
                TextEntry::make('murid')
                    ->label('Student')
                    ->formatStateUsing(function ($record) {
                        // Memeriksa jika 'murid' berisi array ID
                        $userIds = is_array($record->murid) ? $record->murid : [$record->murid];

                        // Ambil semua nama pengguna berdasarkan ID
                        $users = User::whereIn('id', $userIds)->get();

                        // Ambil nama-nama pengguna
                        $names = $users->pluck('name')->toArray();

                        // Gabungkan nama-nama dengan koma jika ada lebih dari satu
                        return implode(', ', $names);
                    }),

                TextEntry::make('tgl_jadwal')->label('Tgl Jadwal'),
                TextEntry::make('jam_mulai')->label('Jam Mulai'),
                TextEntry::make('jam_selesai')->label('Jam Selesai'),
                TextEntry::make('platform')->label('Platform'),
                TextEntry::make('link')->label('Link'),
                TextEntry::make('zoom_id')->label('Zoom ID'),
                TextEntry::make('zoom_passcode')->label('Zoom Passcode'),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListJadwalMeetings::route('/'),
            'create' => Pages\CreateJadwalMeeting::route('/create'),
            'edit' => Pages\EditJadwalMeeting::route('/{record}/edit'),
        ];
    }
}
