<?php

namespace App\Http\Controllers;

use App\Models\AboutUs;
use App\Models\Category;
use App\Models\Faq;
use App\Models\Jadwal;
use App\Models\Kelas;
use App\Models\Section;
use App\Models\Setting;
use App\Models\Testimoni;
use App\Models\Transaction;
use App\Models\Type;
use App\Models\User;
use App\Models\Video;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Midtrans;

class StudentController extends Controller

{
    public function __construct()
    {
        Midtrans\Config::$serverKey = env('MIDTRANS_SERVERKEY');
        Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');
        Midtrans\Config::$isSanitized = env('MIDTRANS_IS_SANITIZED');
        Midtrans\Config::$is3ds = env('MIDTRANS_IS_3DS');
    }


    public function index()
    {
        $auth = Auth::user();
        $setting = Setting::first();
        $totalkelas = Kelas::count();
        $totalstudent = User::where('role', 'student')->count();
        $totalmentor    = User::where('role', 'mentor')->count();
        $about = AboutUs::first();
        $kelas = Kelas::where('status', 'disetujui')->get();
        $faq = Faq::latest()->get();
        $latest = Kelas::select(
            'kelas.*',
            DB::raw('AVG(testimonis.rating) as average_rating')
        )
            ->leftJoin('testimonis', 'kelas.id', '=', 'testimonis.kelas_id')
            ->where('kelas.status', 'disetujui')
            ->groupBy('kelas.id')
            ->latest()
            ->limit(4)->get();
        return Inertia::render('Student/Home/Index', ['auth' => $auth, 'setting' => $setting, 'totalkelas' => $totalkelas, 'totalstudent' => $totalstudent, 'totalmentor' => $totalmentor, 'about' => $about, 'kelas' => $kelas, 'faq' => $faq, 'latest' => $latest]);
    }

    public function aboutus()
    {
        $auth = Auth::user();
        $about = AboutUs::first();
        $faq = Faq::latest()->get();
        $setting = Setting::first();
        return Inertia::render('Student/AboutUs/Index', ['auth' => $auth, 'setting' => $setting, 'about' => $about, 'faq' => $faq]);
    }

    public function kelas()
    {
        $auth = Auth::user();
        $data = Kelas::select(
            'kelas.*',
            DB::raw('AVG(testimonis.rating) as average_rating')
        )
            ->leftJoin('testimonis', 'kelas.id', '=', 'testimonis.kelas_id')
            ->where('kelas.status', 'disetujui')
            ->groupBy('kelas.id')
            ->latest()
            ->paginate(6);
        $category = Category::all();
        $tipekelas = Type::all();
        $setting = Setting::first();
        return Inertia::render('Student/Kelas/Index', ['auth' => $auth, 'setting' => $setting, 'kelas' => $data, 'category' => $category, 'tipekelas' => $tipekelas]);
    }

    public function detailkelas($slug)
    {
        $kelas = Kelas::where('slug', $slug)->first();
        $auth = Auth::user();
        $kelas->views = $kelas->views + 1;
        $kelas->save();
        $setting = Setting::first();
        $sections = Section::where('kelas_id', $kelas->id)->get();
        $videos = Video::whereIn('section_id', $sections->pluck('id'))->get();
        $testimoni = Testimoni::where('kelas_id', $kelas->id)
            ->latest()
            ->get();

        $allclass = Kelas::select(
            'kelas.*',
            DB::raw('AVG(testimonis.rating) as average_rating')
        )
            ->leftJoin('testimonis', 'kelas.id', '=', 'testimonis.kelas_id')
            ->where('kelas.status', 'disetujui')
            ->where('kelas.id', '!=', $kelas->id)
            ->where('kelas.user_id', $kelas->user_id)
            ->groupBy('kelas.id')
            ->latest()
            ->limit(4)
            ->get();
        $videoDemo = Video::whereHas('section', function ($query) use ($kelas) {
            $query->where('kelas_id', $kelas->id);
        })->limit(2)->get();
        return Inertia::render('Student/Kelas/Detail', [
            'kelas' => $kelas,
            'sectionData' => $sections,
            'video' => $videos,
            'videoDemo' => $videoDemo,
            'setting' => $setting,
            'auth' => $auth,
            'allclass' => $allclass,
            'testimoni' => $testimoni,
        ]);
    }

    public function transaksi()
    {
        $auth = Auth::user();
        $transaksi = Transaction::where('status', 'paid')->latest()->where('user_id', $auth->id)->get();
        $setting = Setting::first();
        return Inertia::render('Student/Transaksi/Index', ['auth' => $auth, 'setting' => $setting, 'transaksi' => $transaksi]);
    }

    public function transaksidetail($nota)
    {
        $auth = Auth::user();
        $transaksi = Transaction::where('nota', $nota)->first();
        $kelas = Kelas::where('id', $transaksi->kelas_id)->first();
        $user = User::where('id', $transaksi->user_id)->first();
        $setting = Setting::first();
        return Inertia::render('Student/Transaksi/Detail', ['auth' => $auth, 'setting' => $setting, 'transaksi' => $transaksi, 'kelas' => $kelas, 'user' => $user]);
    }

    public function profile()
    {
        $auth = User::findOrFail(Auth::user()->id);
        $setting = Setting::first();
        return Inertia::render('Student/Profile/Index', ['auth' => $auth, 'setting' => $setting]);
    }

    public function mycourse()
    {
        $auth = User::findOrFail(Auth::user()->id);
        $setting = Setting::first();
        $data = Transaction::where('status', 'paid')->where('user_id', $auth->id)->latest()->get();
        $category = Category::all();
        $tipekelas = Type::all();
        return Inertia::render('Student/Course/Index', ['auth' => $auth, 'setting' => $setting, 'kelas' => $data, 'category' => $category, 'tipekelas' => $tipekelas]);
    }

    public function detailcourse($slug)
    {
        $kelas = Kelas::where('slug', $slug)->first();
        $auth = Auth::user();
        $kelas->views = $kelas->views + 1;
        $kelas->save();
        $setting = Setting::first();
        $sections = Section::where('kelas_id', $kelas->id)->get();
        $videos = Video::whereIn('section_id', $sections->pluck('id'))->get();
        $videoDemo = Video::whereHas('section', function ($query) use ($kelas) {
            $query->where('kelas_id', $kelas->id);
        })->get();
        $namaUserLogin = $auth->id;
        $jadwal = Jadwal::where('murid', 'like', "%$namaUserLogin%")
            ->orWhere('murid', 'like', "$namaUserLogin,%")
            ->orWhere('murid', 'like', "%,$namaUserLogin")
            ->orWhere('murid', $namaUserLogin)
            ->get();
        return Inertia::render('Student/Course/Detail', [
            'kelas' => $kelas,
            'sectionData' => $sections,
            'video' => $videos,
            'videoDemo' => $videoDemo,
            'setting' => $setting,
            'auth' => $auth,
            'jadwal' => $jadwal
        ]);
    }

    public function sendTestimonial(Request $request)
    {
        $q = new Testimoni();
        $q->user_id = Auth::user()->id;
        $q->rating = $request->rating;
        $q->body = $request->testimonial;
        $q->kelas_id = $request->kelasId;
        $q->save();
    }

    public function updateProfile(Request $request)
    {
        $request->validate([
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:3048',
        ]);
        $user = User::findOrFail(Auth::user()->id);
        if ($request->file('image')) {
            $filename = $request->image->store('profile', 'public');
            $user->image = $filename;
        }
        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->has('password') && $request->password) {
            $user->password = Hash::make($request->password);
        }
        $user->tempat_lahir = $request->tempat_lahir;
        $tanggalLahir = Carbon::parse($request->tanggal_lahir);
        $umur = $tanggalLahir->diffInYears(Carbon::now());
        $user->tanggal_lahir = $request->tanggal_lahir;
        $user->umur = $umur;
        $user->jk = $request->jk;
        $user->phone = $request->phone;
        $user->alamat = $request->alamat;
        $user->save();
    }

    public function mentor()
    {
        $setting = Setting::first();
        $data = User::where('role', 'mentor')->latest()->get();
        $auth = Auth::user();
        return Inertia::render('Student/Mentor/Mentor', [
            'setting' => $setting,
            'data' => $data,
            'auth' => $auth
        ]);
    }

    public function detailmentor($id)
    {
        $setting = Setting::first();
        $data = User::findOrFail($id);
        $auth = Auth::user();
        $kelas = Kelas::select(
            'kelas.*',
            DB::raw('AVG(testimonis.rating) as average_rating')
        )
            ->leftJoin('testimonis', 'kelas.id', '=', 'testimonis.kelas_id')
            ->where('kelas.status', 'disetujui')
            ->where('kelas.user_id', $data->id)
            ->groupBy('kelas.id')
            ->latest()
            ->limit(4)
            ->get();
        $review = Testimoni::whereHas('kelas', function ($query) use ($id) {
            $query->where('user_id', $id); // Menggunakan user_id yang ada di tabel kelas
        })->latest()->get();

        return Inertia::render('Student/Mentor/Detail', [
            'setting' => $setting,
            'data' => $data,
            'testimoni' => $review,
            'kelas' => $kelas,
            'auth' => $auth
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return to_route('home');
    }
}
