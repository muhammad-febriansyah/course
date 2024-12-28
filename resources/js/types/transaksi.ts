export interface TransaksiType {
    id: number;
    user_id: number;
    kelas_id: number;
    nota: string;
    qty: number;
    amount: string;
    payment_type: string;
    status: string;
    created_at: string;
    updated_at: string;
    user: User;
    kelas: Kelas;
}

export interface User {
    id: number;
    name: string;
    email: string;
    tempat_lahir: string;
    tanggal_lahir: any;
    umur: number;
    phone: string;
    alamat: any;
    jk: string;
    role: string;
    bio: any;
    status: number;
    image: any;
    created_at: string;
    updated_at: string;
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
    created_at: string;
    updated_at: string;
    average_rating: number;
    level: Level;
    type: Type;
    category: Category;
    user: User2;
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

export interface Level {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface Type {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface User2 {
    id: number;
    name: string;
    email: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    umur: number;
    phone: string;
    alamat: string;
    jk: string;
    role: string;
    bio: string;
    status: number;
    image: string;
    created_at: string;
    updated_at: string;
}
