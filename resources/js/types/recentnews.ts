export interface RecentNews {
    id: number;
    user_id: number;
    category_news_id: number;
    title: string;
    slug: string;
    views: number;
    tags: string[];
    status: string;
    image: string;
    description: string;
    created_at: string;
    updated_at: string;
    user: User;
    category_news: CategoryNews;
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

export interface CategoryNews {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}
