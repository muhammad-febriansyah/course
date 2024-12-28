// Types.ts

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
    news_count: string;
}

export interface NewsItem {
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

export interface PaginatedNews {
    current_page: number;
    data: NewsItem[];
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    links: Array<{ url: string; label: string; active: boolean }>;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}
