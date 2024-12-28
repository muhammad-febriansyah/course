<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsResource\Pages;
use App\Filament\Resources\NewsResource\RelationManagers;
use App\Models\CategoryNews;
use App\Models\News;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Support\Enums\FontWeight;
use Filament\Tables;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationGroup = 'Main Menu';
    protected static ?string $navigationLabel = 'Berita/Artikel';
    protected static ?int $navigationSort = 10;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make([
                    TextInput::make('title')->label('Judul')->required()->placeholder('Judul'),
                    Select::make('category_news_id')
                        ->label('Kategori Berita')
                        ->options(CategoryNews::all()->pluck('name', 'id'))
                        ->required()
                        ->searchable()
                        ->createOptionForm([
                            TextInput::make('name')
                                ->live(onBlur: true)
                                ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                                ->required()->label('Kategori'),
                            TextInput::make('slug')->readOnly(),
                        ])
                        ->createOptionUsing(function (array $data): int {
                            return CategoryNews::create($data)->id;
                        }),
                    TagsInput::make('tags'),
                    RichEditor::make('description')->label('Body')->required()->columns(1),
                ])->columnSpan(2)->columns(1),
                Section::make([
                    Toggle::make('status')
                        ->label('Status Berita')
                        ->onColor('success')
                        ->offColor('danger'),
                    FileUpload::make('image')
                        ->disk('public')
                        ->directory('image-upload-server')
                        ->label('Foto/Gambar')
                        ->maxSize(3072)
                        ->image()
                        ->deletable(true)
                        ->deleteUploadedFileUsing(function ($record, $file) {
                            if (isset($record->image)) {
                                if ($record->image == $file) {
                                    if (File::exists(public_path('storage\\' . $record->image))) {
                                        File::delete(public_path('storage\\' . $record->image));
                                    }
                                }
                            }
                        })
                        ->required()->columns(1),

                ])->columnSpan(1),

            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\Layout\Stack::make([
                    Tables\Columns\ImageColumn::make('image')
                        ->height('170px')
                        ->width('100%')->extraAttributes(['class' => 'object-cover']),
                    Tables\Columns\Layout\Stack::make([
                        Tables\Columns\TextColumn::make('title')
                            ->weight(FontWeight::Bold)->searchable()->sortable()->label('Judul'),
                        Tables\Columns\TextColumn::make('categoryNews.name')
                            ->color('warning')
                            ->badge()
                            ->alignCenter()->extraAttributes(['class' => 'mt-2'])->icon('heroicon-o-tag'),

                        Tables\Columns\TextColumn::make('views')
                            ->color('success')
                            ->badge()
                            ->alignCenter()
                            ->label('Dibaca')->extraAttributes(['class' => 'mt-2'])->suffix(' Views'),

                        Tables\Columns\TextColumn::make('status')
                            ->badge()
                            ->color(fn(string $state): string => match ($state) {
                                '0' => 'danger',
                                '1' => 'primary',
                            })
                            ->formatStateUsing(fn($record) => $record->status == '1' ? 'Publish' : 'Draft')
                            ->icon(function ($record) {
                                return match ($record->status) {
                                    '0' => 'heroicon-o-x-circle',
                                    '1' => 'heroicon-o-check-circle',
                                };
                            })
                            ->alignCenter()->extraAttributes(['class' => 'mt-2']),
                        Tables\Columns\TextColumn::make('created_at')
                            ->color('gray')
                            ->dateTime()
                            ->badge()
                            ->alignCenter()
                            ->extraAttributes(['class' => 'mt-2'])->prefix('Dibuat Pada : '),

                    ]),
                ])->space(3)->extraAttributes(['class' => 'space-y-2']),
                Tables\Columns\Layout\Panel::make([
                    Tables\Columns\Layout\Split::make([
                        Tables\Columns\ColorColumn::make('color')
                            ->grow(false),
                        Tables\Columns\TextColumn::make('description')->html()
                            ->color('gray')->limit(100),
                    ]),
                ])->collapsible()->collapsed(),
            ])
            ->filters([
                SelectFilter::make('category_news_id')->searchable()->label('Kategori Berita')->options(CategoryNews::all()->pluck('name', 'id')),
                SelectFilter::make('status')->label('Status')->options([
                    '0' => 'Draft',
                    '1' => 'Publish',
                ]),
            ], layout: FiltersLayout::Modal)
            ->paginated([
                18,
                36,
                72,
                'all',
            ])
            ->contentGrid([
                'md' => 2,
                'xl' => 3,
            ])
            ->actions([
                Tables\Actions\EditAction::make()->label('')->icon('heroicon-s-pencil')->button()->color('success'),
                Tables\Actions\DeleteAction::make()->after(function ($record) {
                    File::delete(public_path('storage\\' . $record->image));
                })->icon('heroicon-o-trash')->color('danger')->button()->label(''),
                Tables\Actions\ViewAction::make()->label('')->icon('heroicon-s-eye')->button()->color('warning'),

            ])
            ->bulkActions([
                DeleteBulkAction::make()
                    ->after(function ($records) {
                        foreach ($records as $record) {
                            File::delete(public_path('storage\\' . $record->image));
                        }
                    }),
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
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}
