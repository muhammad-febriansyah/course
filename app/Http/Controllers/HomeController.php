<?php

namespace App\Http\Controllers;

use App\Models\AboutUs;
use App\Models\Category;
use App\Models\CategoryNews;
use App\Models\ContactUs;
use App\Models\Faq;
use App\Models\Kelas;
use App\Models\News;
use App\Models\Section;
use App\Models\Setting;
use App\Models\Testimoni;
use App\Models\Type;
use App\Models\User;
use App\Models\Video;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
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
        return Inertia::render('Home/Index', [
            'totalkelas' => $totalkelas,
            'about' => $about,
            'latest' => $latest,
            'totalstudent' => $totalstudent,
            'kelas' => $kelas,
            'totalmentor' => $totalmentor,
            'faq' => $faq,
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
        ]);
    }

    public function aboutus()
    {
        $setting = Setting::first();
        $data = AboutUs::first();
        return Inertia::render('Home/AboutUs', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
            'data' => [
                'title' => $data->title,
                'description' => $data->description,
                'image' => asset('storage/' . $data->image),
            ],
        ]);
    }

    public function faq()
    {
        $setting = Setting::first();
        $data = Faq::latest()->get();
        return Inertia::render('Home/Faq', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
            'data' => $data,
        ]);
    }

    public function mentor()
    {
        $setting = Setting::first();
        $data = User::where('role', 'mentor')->latest()->get();
        return Inertia::render('Home/Mentor/Mentor', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
            'data' => $data,
        ]);
    }

    public function detailmentor($id)
    {
        $setting = Setting::first();
        $data = User::findOrFail($id);
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

        return Inertia::render('Home/Mentor/Detail', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
            'data' => $data,
            'testimoni' => $review,
            'kelas' => $kelas,
        ]);
    }

    public function news(Request $request)
    {
        $setting = Setting::first();
        $searchQuery = $request->input('query');
        $query = News::where('status', 1);
        if ($searchQuery) {
            $query = $query->where(function ($q) use ($searchQuery) {
                $q->where('title', 'like', '%' . $searchQuery . '%');
            });
        }
        $data = $query->where('status', 1)->latest()->paginate(4);
        $recent = News::where('status', 1)->latest()->limit(3)->get();
        $category = CategoryNews::withCount('news')->get();
        return Inertia::render('Home/News/Berita', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
            'news' => $data,
            'category' => $category,
            'recentNews' => $recent,
            'searchQuery' => $searchQuery,

        ]);
    }

    public function detailNews($slug)
    {
        $news = News::where('slug', $slug)->first();
        $news->views = $news->views + 1;
        $news->save();
        $setting = Setting::first();
        $recent = News::where('status', 1)->latest()->limit(3)->get();
        return Inertia::render('Home/News/DetailNews', [
            'news' => $news,
            'setting' => $setting,
            'recentNews' => $recent,
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
        ]);
    }

    public function kelas()
    {
        $setting = Setting::first();
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
        return Inertia::render('Home/Kelas/Kelas', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
            'kelas' => $data,
            'category' => $category,
            'tipekelas' => $tipekelas
        ]);
    }

    public function detailkelas($slug)
    {
        $kelas = Kelas::where('slug', $slug)->first();
        $kelas->views = $kelas->views + 1;
        $kelas->save();
        $setting = Setting::first();
        $sections = Section::where('kelas_id', $kelas->id)->get();
        $videos = Video::whereIn('section_id', $sections->pluck('id'))->get();
        $videoDemo = Video::whereHas('section', function ($query) use ($kelas) {
            $query->where('kelas_id', $kelas->id);
        })->limit(2)->get();
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
        return Inertia::render('Home/Kelas/Detail', [
            'kelas' => $kelas,
            'sectionData' => $sections,
            'video' => $videos,
            'videoDemo' => $videoDemo,
            'testimoni' => $testimoni,
            'allclass' => $allclass,
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
        ]);
    }


    public function contactus()
    {
        $setting = Setting::first();
        return Inertia::render('Home/ContactUs', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
        ]);
    }

    public function sendMessage(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:contact_us,email',
        ]);
        $q = new ContactUs();
        $q->name = $request->name;
        $q->email = $request->email;
        $q->subject = $request->subject;
        $q->message = $request->message;
        $q->save();
        return to_route('home.contactus');
    }

    public function login()
    {
        $setting = Setting::first();
        return Inertia::render('Home/Login/Index', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
        ]);
    }

    public function checklogin(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'status' => 1, 'role' => 'student'])) {
            $request->session()->regenerate();
            return to_route('student.home');
        }
        return to_route('home.login')->withErrors(['email' => 'Email ini tidak terdaftar.']);
    }

    public function register()
    {
        $setting = Setting::first();
        return Inertia::render('Home/Register/Index', [
            'setting' => [
                'site_name' => $setting->site_name,
                'keyword' => $setting->keyword,
                'email' => $setting->email,
                'phone' => $setting->phone,
                'address' => $setting->address,
                'description' => $setting->description,
                'heading' => $setting->heading,
                'badge' => $setting->badge,
                'yt' => $setting->yt,
                'ig' => $setting->ig,
                'fb' => $setting->fb,
                'logo' => asset('storage/' . $setting->logo),
                'long_logo' => asset('storage/' . $setting->long_logo),
                'thumbnail' => asset('storage/' . $setting->thumbnail),
                'video' => $setting->video,
            ],
        ]);
    }

    public  function saveregister(Request $request)
    {
        $check = User::where('email', $request->email)->first();
        if ($check) {
            return to_route('home.register');
        }
        $q = new User();
        $q->name = $request->name;
        $q->email = $request->email;
        $q->password = Hash::make($request->password);
        $q->tempat_lahir = $request->tempat_lahir;
        $tanggalLahir = Carbon::parse($request->tanggal_lahir);
        $umur = $tanggalLahir->diffInYears(Carbon::now());
        $q->umur = $umur;
        $q->jk = $request->jk;
        $q->phone = $request->phone;
        $q->role = "student";
        $q->status = 1;
        $q->save();
        return to_route('home.login');
    }
}
