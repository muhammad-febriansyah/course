<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SectionResource\Pages;
use App\Filament\Resources\SectionResource\RelationManagers;
use App\Models\Kelas;
use App\Models\Section;
use Awcodes\Matinee\Matinee;
use Filament\Forms;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section as ComponentsSection;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SectionResource extends Resource
{
    protected static ?string $model = Section::class;

    protected static ?string $navigationIcon = 'heroicon-o-video-camera';
    protected static ?string $navigationGroup = 'Course';
    protected static ?string $navigationLabel = 'Section Video';
    protected static ?string $navigationParentItem = 'Kelas';
    protected static ?int $navigationSort = 5;

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
                ComponentsSection::make()
                    ->schema([
                        TextInput::make('title')->label('Judul')->placeholder('Judul Section')->required(),
                        Select::make('kelas_id')
                            ->label('Kelas')
                            ->options(Kelas::all()->pluck('title', 'id'))
                            ->required()
                            ->searchable(),
                        TextInput::make('total_video')->label('Total Video')->placeholder('Total Video')->required()->numeric()->suffix('Video'),
                        TextInput::make('total_duration')->label('Total Durasi Video')->placeholder('Total Durasi Video')->required(),
                    ])->columnSpan(['lg' => 2, 'md' => 1, 'sm' => 1])->columns(['lg' => 2, 'md' => 1, 'sm' => 1]),
                Repeater::make('videos')->label('Video')->collapsed()->cloneable()->relationship('videos')
                    ->schema([
                        TextInput::make('title')->label('Judul')->placeholder('Judul Video')->required(),
                        TextInput::make('duration')->label('Durasi')->placeholder('Durasi Video')->required(),
                        Matinee::make('url')
                            ->required()
                            ->label('Url Video')
                            ->showPreview()->columnSpan(['lg' => 2, 'md' => 1, 'sm' => 1]),
                    ])
                    ->columns(['lg' => 2, 'md' => 2, 'sm' => 1])->columnSpan(['lg' => 2, 'md' => 1, 'sm' => 1])

            ])->columns(['lg' => 2, 'md' => 2, 'sm' => 1]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('No')->rowIndex(),
                TextColumn::make('title')->label('Judul')->searchable(),
                TextColumn::make('kelas.title')->label('Kelas'),
                TextColumn::make('total_video')->label('Total Video')->suffix(' Video'),
                TextColumn::make('total_duration')->label('Durasi Video'),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make()->label('Edit')->icon('heroicon-s-pencil')->button()->color('success'),
                Tables\Actions\DeleteAction::make()->label('Hapus')->icon('heroicon-s-trash')->button()->color('danger'),
                Tables\Actions\ViewAction::make()->label('Lihat')->icon('heroicon-s-eye')->button()->color('warning'),

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
            'index' => Pages\ListSections::route('/'),
            'create' => Pages\CreateSection::route('/create'),
            'edit' => Pages\EditSection::route('/{record}/edit'),
        ];
    }
}
