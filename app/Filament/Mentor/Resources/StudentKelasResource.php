<?php

namespace App\Filament\Mentor\Resources;

use App\Filament\Mentor\Resources\StudentKelasResource\Pages;
use App\Filament\Mentor\Resources\StudentKelasResource\RelationManagers;
use App\Models\Kelas;
use App\Models\StudentKelas;
use App\Models\Transaction;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class StudentKelasResource extends Resource
{
    protected static ?string $model = Transaction::class;

    protected static ?string $navigationIcon = 'heroicon-o-lock-open';
    protected static ?string $navigationGroup = 'Main Menu';
    protected static ?string $navigationLabel = 'Student Kelas';
    protected static ?int $navigationSort = 7;

    public static function canCreate(): bool
    {
        return false;
    }

    public static function canEdit(Model $record): bool
    {
        return false;
    }

    public static function canDelete(Model $record): bool
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
                TextColumn::make('No')->rowIndex(),
                TextColumn::make('kelas.title')->label('Kelas')->searchable()->sortable(),
                TextColumn::make('user.name')->label('Murid')->sortable(),
            ])
            ->filters([
                SelectFilter::make('kelas_id')->label("Kelas")->searchable()
                    ->options(Kelas::pluck('title', 'id')),
            ], layout: FiltersLayout::Modal)
            ->actions([
                Tables\Actions\ViewAction::make()->label('')->icon('heroicon-s-eye')->button()->color('info'),
            ])
        ;
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
                Section::make('Detail Kelas')
                    ->schema([
                        TextEntry::make('kelas.title')->label('Judul'),
                        TextEntry::make('kelas.category.name')->label('Kategori'),
                        TextEntry::make('kelas.type.name')->label('Tipe Kelas'),
                        TextEntry::make('kelas.level.name')->label('Level Kelas'),
                        TextEntry::make('kelas.price')->label('Harga')->formatStateUsing(fn($state) => 'Rp ' . number_format($state, 0, ',', '.')),
                        TextEntry::make('kelas.created_at')->label('Dibuat Pada')->badge()->color('success')->dateTime(),
                        TextEntry::make('kelas.user.name')->label('Mentor'),
                    ])->columnSpan(['lg' => 2, 'md' => 1, 'sm' => 1]),
                Section::make()
                    ->schema([
                        ImageEntry::make('kelas.image')->label('Thumbnail')->width('100%')->height('250px'),
                    ])->columnSpan(['lg' => 1, 'md' => 1, 'sm' => 1]),

                Section::make('Detail Student')
                    ->schema([
                        TextEntry::make('user.name')->label('Nama'),
                        TextEntry::make('user.email')->label('Email'),
                        TextEntry::make('user.phone')->label('No Telepon'),
                        TextEntry::make('user.tempat_lahir')->label('Tempat Lahir'),
                        TextEntry::make('user.tanggal_lahir')->label('Tanggal Lahir'),
                        TextEntry::make('user.umur')->label('Umur'),
                        TextEntry::make('user.jk')->label('Jenis Kelamin'),
                        TextEntry::make('user.alamat')->label('Alamat'),
                    ])->columnSpan(['lg' => 3, 'md' => 1, 'sm' => 1])->columns(['lg' => 2, 'md' => 1, 'sm' => 1]),
            ])->columns(['lg' => 3, 'md' => 2, 'sm' => 1]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStudentKelas::route('/'),
            'create' => Pages\CreateStudentKelas::route('/create'),
            'edit' => Pages\EditStudentKelas::route('/{record}/edit'),
        ];
    }
}
