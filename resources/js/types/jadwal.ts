export interface JadwalMeeting {
    id: number;
    user_id: number;
    murid: string[];
    kelas_id: number;
    section_id: number;
    tgl_jadwal: Date;
    jam_mulai: string;
    jam_selesai: string;
    platform: string;
    link: string;
    zoom_id: string;
    zoom_passcode: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    kelas: Kelas;
    section: Section;
}

export interface Kelas {
    id: number;
    level_id: number;
    type_id: number;
    category_id: number;
    user_id: number;
    title: string;
    slug: string;
    price: number;
    link_overview: LinkOverview;
    description: string;
    image: string;
    status: string;
    views: number;
    created_at: Date;
    updated_at: Date;
    level: Category;
    type: Category;
    category: Category;
    user: User;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    image?: string;
    created_at: Date;
    updated_at: Date;
}

export interface LinkOverview {
    url: string;
    embed_url: string;
    width: string;
    height: string;
    responsive: boolean;
    options: Options;
}

export interface Options {
    controls: string;
    nocookie: string;
    start: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    tempat_lahir: string;
    tanggal_lahir: Date;
    umur: number;
    phone: string;
    alamat: string;
    jk: string;
    role: string;
    bio: string;
    status: number;
    image: string;
    created_at: Date;
    updated_at: Date;
}

export interface Section {
    id: number;
    kelas_id: number;
    title: string;
    total_video: number;
    total_duration: string;
    created_at: Date;
    updated_at: Date;
    kelas: Kelas;
}
