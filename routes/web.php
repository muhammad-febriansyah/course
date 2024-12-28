<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/home/aboutus', [HomeController::class, 'aboutus'])->name('home.aboutus');
Route::get('/home/faq', [HomeController::class, 'faq'])->name('home.faq');
Route::get('/home/mentor', [HomeController::class, 'mentor'])->name('home.mentor');
Route::get('/home/detailmentor/{id}', [HomeController::class, 'detailmentor'])->name('home.detailmentor');
Route::get('/home/news', [HomeController::class, 'news'])->name('home.news');
Route::get('/home/detailnews/{slug}', [HomeController::class, 'detailnews'])->name('home.detailnews');
Route::get('/home/kelas', [HomeController::class, 'kelas'])->name('home.kelas');
Route::get('/home/detailkelas/{slug}', [HomeController::class, 'detailkelas'])->name('home.detailkelas');
Route::get('/home/{slug}/load-more-sections', [HomeController::class, 'loadMoreSections'])->name('home.loadMoreSections');
Route::get('/home/contactus', [HomeController::class, 'contactus'])->name('home.contactus');
Route::post('/home/sendMessage', [HomeController::class, 'sendMessage'])->name('home.sendMessage');
Route::get('/home/login', [HomeController::class, 'login'])->name('home.login');
Route::post('/home/checklogin', [HomeController::class, 'checklogin'])->name('home.checklogin');
Route::get('/home/register', [HomeController::class, 'register'])->name('home.register');
Route::post('/home/saveregister', [HomeController::class, 'saveregister'])->name('home.saveregister');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/student/home', [StudentController::class, 'index'])->name('student.home');
    Route::get('/student/aboutus', [StudentController::class, 'aboutus'])->name('student.aboutus');
    Route::get('/student/kelas', [StudentController::class, 'kelas'])->name('student.kelas');
    Route::get('/student/detailkelas/{slug}', [StudentController::class, 'detailkelas'])->name('student.detailkelas');
    Route::post('/student/createTransaction', [PaymentController::class, 'createTransaction'])->name('student.createTransaction');
    Route::get('/student/transaksi', [StudentController::class, 'transaksi'])->name('student.transaksi');
    Route::get('/student/transaksidetail/{nota}', [StudentController::class, 'transaksidetail'])->name('student.transaksidetail');
    Route::get('/student/mycourse', [StudentController::class, 'mycourse'])->name('student.mycourse');
    Route::get('/student/detailcourse/{slug}', [StudentController::class, 'detailcourse'])->name('student.detailcourse');
    Route::post('/student/sendTestimonial', [StudentController::class, 'sendTestimonial'])->name('student.sendTestimonial');
    Route::get('/student/profile', [StudentController::class, 'profile'])->name('student.profile');
    Route::post('/student/updateProfile', [StudentController::class, 'updateProfile'])->name('student.updateProfile');
    Route::get('/student/mentor', [StudentController::class, 'mentor'])->name('student.mentor');
    Route::get('/student/detailmentor/{id}', [StudentController::class, 'detailmentor'])->name('student.detailmentor');

    Route::post('/logout', [StudentController::class, 'logout'])->name('logout');





    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
