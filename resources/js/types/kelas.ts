export interface KelasType {
    current_page: number;
    data: Daum[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: any;
    to: number;
    total: number;
}

export interface Daum {
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
    user: User;
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

export interface User {
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

export interface Link {
    url: string;
    label: string;
    active: boolean;
}

export interface KategoriType {
    id: number;
    name: string;
    slug: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface TipeKelasType {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}
