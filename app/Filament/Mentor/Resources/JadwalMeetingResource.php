<?php

namespace App\Filament\Mentor\Resources;

use App\Filament\Mentor\Resources\JadwalMeetingResource\Pages;
use App\Filament\Mentor\Resources\JadwalMeetingResource\RelationManagers;
use App\Models\Jadwal;
use App\Models\JadwalMeeting;
use App\Models\Section as ModelsSection;
use App\Models\Transaction;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Get;

class JadwalMeetingResource extends Resource
{
    protected static ?string $model = Jadwal::class;

    protected static ?string $navigationIcon = 'heroicon-o-bell-alert';
    protected static ?string $navigationGroup = 'Main Menu';
    protected static ?string $navigationLabel = 'Jadwal Meeting';
    protected static ?int $navigationSort = 6;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Jadwal Meeting Information')->schema([
                    Select::make('kelas_id')
                        ->options(
                            Transaction::query()
                                ->join('kelas', 'kelas.id', '=', 'transactions.kelas_id') // Melakukan join dengan tabel kelas
                                ->pluck('kelas.title', 'transactions.kelas_id') // Ambil title dari tabel kelas dan id kelas dari transactions
                        )
                        ->label('Kelas')
                        ->searchable()
                        ->live()
                        ->required()->columnSpan(['sm' => 1, 'lg' => 2]),
                    Select::make('section_id')
                        ->options(
                            fn(Get $get) => ModelsSection::where('kelas_id', $get('kelas_id')) // Menyaring berdasarkan kelas_id yang dipilih
                                ->pluck('title', 'id')
                        )
                        ->label('Section/Tahapan')
                        ->searchable()
                        ->required()->columnSpan(['sm' => 1, 'lg' => 2]),
                    Select::make('murid')
                        ->options(
                            Transaction::query()
                                ->join('users', 'users.id', '=', 'transactions.user_id') // Join dengan tabel users
                                ->pluck('users.name', 'users.id') // Ambil nama user dan user_id
                        )
                        ->label('Student')
                        ->searchable()
                        ->multiple()
                        ->required()->columnSpan(['sm' => 1, 'lg' => 2]),
                    DatePicker::make('tgl_jadwal')->native(false)->required()->label(
                        'Tanggal Jadwal'
                    )->default(now()),
                    TimePicker::make('jam_mulai')->required()->label('Jam Mulai')->native(false)->default('08:00'),
                    TimePicker::make('jam_selesai')->required()->label('Jam Selesai')->native(false)->default('09:00'),
                    TextInput::make('platform')->required()->label('Platform')->placeholder('Zoom, Google Meet, etc'),
                    TextInput::make('link')->required()->label('Link')->placeholder('Link Meeting'),
                    TextInput::make('zoom_id')->required()->label('Zoom ID')->placeholder('Zoom ID'),
                    TextInput::make('zoom_passcode')->required()->label('Zoom Passcode')->placeholder('Zoom Passcode')->columnSpan(['lg' => 2]),
                ])->columns(['sm' => 1, 'lg' => 2]),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make("No")->rowIndex(),
                TextColumn::make('kelas.title')->label('Kelas')->searchable(),
                TextColumn::make('section.title')->label('Section'),
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

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListJadwalMeetings::route('/'),
            'create' => Pages\CreateJadwalMeeting::route('/create'),
            'edit' => Pages\EditJadwalMeeting::route('/{record}/edit'),
        ];
    }
}
