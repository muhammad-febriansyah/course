import HomeLayout from "@/Layouts/HomeLayout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Setting } from "@/types/site";
import { Link } from "@inertiajs/react";
import { AlertTriangle, Clock, Tags, User2Icon } from "lucide-react";
import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { CategoryNews, NewsItem, PaginatedNews } from "@/types/news";
import { RecentNews } from "@/types/recentnews";

interface Props {
    news: PaginatedNews;
    recentNews: RecentNews[];
    setting: Setting;
    category: CategoryNews[];
    searchQuery: string | null;
}

export default function Berita({ news, category, recentNews }: Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState<NewsItem[]>(news.data);
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value;
        setSearchTerm(searchQuery);

        // Filter items based on the search term
        if (searchQuery.trim() === "") {
            setFilteredItems(news.data); // Show all news.data if search term is empty
        } else {
            const lowercasedSearchTerm = searchQuery.toLowerCase();
            const filtered = news.data.filter((item) =>
                item.description.toLowerCase().includes(lowercasedSearchTerm)
            );
            setFilteredItems(filtered);
        }
    };
    const handleCategoryClick = (categorySlug: string) => {
        setSelectedCategory(categorySlug);

        // Filter berita berdasarkan kategori yang dipilih
        const filteredNews = news.data.filter(
            (item) => item.category_news.slug === categorySlug
        );
        setFilteredItems(filteredNews);
    };

    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Berita/Artikel
                    </h1>
                    <Breadcrumb className="flex flex-row items-center justify-center mx-auto space-x-2">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Berita/Artikel</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>

            <section>
                <div className="container py-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="col-span-2">
                            {filteredItems.length > 0 ? (
                                <div className="grid grid-cols-1 mb-5 gap-y-5 gap-x-5 lg:grid-cols-2">
                                    {filteredItems.map((item: NewsItem) => (
                                        <Link
                                            href={`/home/detailnews/${item.slug}`}
                                            className="block mt-5"
                                            key={item.id}
                                        >
                                            <div className="w-full bg-white group rounded-2xl">
                                                <img
                                                    src={
                                                        "/storage/" + item.image
                                                    }
                                                    className="object-cover w-full transition duration-500 group-hover:scale-105 rounded-t-2xl h-52"
                                                    alt=""
                                                />
                                                <div className="p-5">
                                                    <h1 className="text-lg font-bold transition-all duration-200 md:text-2xl text-biruTua hover:text-biru">
                                                        {item.title}
                                                    </h1>
                                                    <div className="flex items-center justify-start pt-5 pb-3 space-x-3">
                                                        <span className="flex items-center text-sm text-gray-500 gap-x-1 hover:text-biru">
                                                            <User2Icon className="w-4 h-4" />{" "}
                                                            {item.user.name}
                                                        </span>
                                                        <span className="flex items-center text-sm text-gray-500 gap-x-1 hover:text-biru">
                                                            <Tags className="w-4 h-4" />
                                                            {
                                                                item
                                                                    .category_news
                                                                    .name
                                                            }
                                                        </span>
                                                    </div>

                                                    <p
                                                        className="mt-2 text-sm text-biruTua"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                item.description.substring(
                                                                    0,
                                                                    150
                                                                ) + "......",
                                                        }}
                                                    />

                                                    <Link
                                                        className="relative inline-flex items-center px-8 py-3 mt-5 overflow-hidden text-white rounded-2xl bg-biru group focus:outline-none focus:ring active:bg-indigo-500"
                                                        href={`/home/detailnews/${item.slug}`}
                                                    >
                                                        <span className="absolute transition-all -end-full group-hover:end-4">
                                                            <svg
                                                                className="size-5 rtl:rotate-180"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                                />
                                                            </svg>
                                                        </span>

                                                        <span className="text-sm font-medium transition-all group-hover:me-4">
                                                            Baca Selengkapnya
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center w-full h-20 col-span-2 px-6 space-x-3 bg-white rounded-2xl">
                                    <AlertTriangle className="w-6 h-6 hover:text-biru" />
                                    <span className="text-base font-bold transition-all duration-200 md:text-xl text-biruTua hover:text-biru">
                                        Data tidak ditemukan.
                                    </span>
                                </div>
                            )}
                            {news.last_page > 1 && (
                                <nav className="flex items-center mt-10 justify-start p-3 overflow-auto bg-white w-[355px] rounded-2xl">
                                    {news.links.map((link, index) => {
                                        let customLabel = link.label; // Default to the original label
                                        if (
                                            link.label === "pagination.previous"
                                        ) {
                                            customLabel = "Sebelumnya"; // Change to your desired label for the "Previous" link
                                        } else if (
                                            link.label === "pagination.next"
                                        ) {
                                            customLabel = "Selanjutnya"; // Change to your desired label for the "Next" link
                                        }

                                        return (
                                            <Link
                                                key={index}
                                                href={link.url}
                                                preserveScroll
                                                dangerouslySetInnerHTML={{
                                                    __html: customLabel, // Use the custom label
                                                }}
                                                className={`px-3 py-2 mx-1 text-sm  bg-biru rounded-full hover:bg-biru hover:text-white transition-all duration-200 ${
                                                    link.active
                                                        ? "bg-biru text-white"
                                                        : "bg-gray-500 text-white"
                                                }`}
                                            />
                                        );
                                    })}
                                </nav>
                            )}
                        </div>
                        <div className="col-span-2 space-y-5 md:col-span-1">
                            <div className="p-5 bg-white rounded-2xl">
                                <Input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    placeholder="Cari Berita..."
                                />
                            </div>
                            <div className="p-5 space-y-5 bg-white rounded-2xl">
                                <h3 className="text-xl font-semibold text-biruTua">
                                    Kategori
                                </h3>
                                <ul className="items-start justify-start space-y-3">
                                    {category.map((item, index) => (
                                        <li key={index + 1}>
                                            <button
                                                onClick={() =>
                                                    handleCategoryClick(
                                                        item.slug
                                                    )
                                                } // Ketika kategori diklik, filter berita
                                                className="text-base text-black transition-all duration-200 gap-x-2 hover:font-semibold hover:text-biru"
                                            >
                                                {item.name}
                                                <span className="text-base text-gray-500 text-end">
                                                    ({item.news_count})
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-5 bg-white rounded-2xl">
                                <h3 className="mb-5 text-xl font-semibold text-biruTua">
                                    Berita Terbaru
                                </h3>
                                {recentNews.map(
                                    (recentNews: RecentNews, index: number) => (
                                        <Link
                                            href={`/home/detailnews/${recentNews.slug}`}
                                            key={recentNews.id} // Use unique identifier instead of index
                                        >
                                            <div className="relative flex flex-col items-center p-3 mb-3 space-x-0 bg-white lg:flex-row lg:space-x-3 rounded-2xl">
                                                <img
                                                    src={`/storage/${recentNews.image}`}
                                                    className="object-cover w-full h-full mb-5 lg:w-32 lg:h-28 rounded-2xl lg:mb-0"
                                                    alt={recentNews.title}
                                                />
                                                <div className="flex flex-col items-start space-y-2">
                                                    <h3 className="text-base font-semibold text-biruTua hover:text-biru">
                                                        {recentNews.title}
                                                    </h3>
                                                    <p className="flex items-center text-sm italic text-gray-500 gap-x-2">
                                                        <Clock size={12} />
                                                        {formatDate(
                                                            recentNews.created_at
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <hr className="my-3 border-t border-gray-300" />
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
// 946042429
