<?php

namespace App\Providers\Filament;

use App\Filament\Widgets\JumlahPendapatanChart;
use App\Filament\Widgets\LatestTransaction;
use App\Filament\Widgets\StatsStudent;
use App\Filament\Widgets\TotalTransaksiChart;
use App\Models\Setting;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Tapp\FilamentAuthenticationLog\FilamentAuthenticationLogPlugin;

class MainPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        $setting = Setting::first();
        return $panel
            ->default()
            ->id('main')
            ->path('main')
            ->login()
            ->brandName($setting->site_name)
            ->globalSearch(true)
            ->spa()
            ->sidebarCollapsibleOnDesktop(true)
            ->breadcrumbs(true)
            ->sidebarWidth('15rem')
            ->globalSearchKeyBindings(['command+k', 'ctrl+k'])
            ->favicon(asset('storage/' . $setting->logo))
            ->brandLogo(asset('storage/' . $setting->long_logo))
            ->brandLogoHeight('2rem')
            ->colors([
                'primary' => '#2f4cdd',
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                Widgets\AccountWidget::class,
                StatsStudent::class,
                TotalTransaksiChart::class,
                JumlahPendapatanChart::class,
                LatestTransaction::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->viteTheme('resources/css/filament/main/theme.css')
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}