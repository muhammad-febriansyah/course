import HomeLayout from "@/Layouts/HomeLayout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NewsItem, PaginatedNews } from "@/types/news";
import { RecentNews } from "@/types/recentnews";
import { Setting } from "@/types/site";
import { Link } from "@inertiajs/react";
import { Clock, Eye, User } from "lucide-react";

interface Props {
    news: NewsItem;
    recentNews: RecentNews[];
    setting: Setting;
}
export default function DetailNews({ news, recentNews }: Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };
    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Detail Berita/Artikel
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
                                <BreadcrumbPage>
                                    Detail Berita/Artikel
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="col-span-1 md:col-span-2">
                        <div className="p-5 bg-white rounded-2xl">
                            <img
                                src={`/storage/${news.image}`}
                                className="object-cover w-full h-full mb-5 rounded-2xl"
                                alt={news.title}
                            />
                            <h3 className="mb-5 text-xl font-semibold md:text-2xl text-biruTua">
                                {news.title}
                            </h3>
                            <div className="mb-5 overflow-x-auto border border-gray-200 rounded-xl">
                                <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                Author
                                            </th>
                                            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                Tgl Posting
                                            </th>
                                            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                Views
                                            </th>
                                            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                Kategori
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="text-center">
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {news.user.name}
                                            </td>
                                            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                                                {formatDate(news.created_at)}
                                            </td>
                                            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                                                {news.views} Views
                                            </td>
                                            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                                                {news.category_news.name}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p
                                className="text-sm leading-normal text-gray-500"
                                dangerouslySetInnerHTML={{
                                    __html: news.description,
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 ">
                        <div className="p-5 bg-white rounded-2xl">
                            <h3 className="mb-5 text-xl font-semibold text-biruTua">
                                Berita Terbaru
                            </h3>
                            {recentNews.map(
                                (recentNews: RecentNews, index: number) => (
                                    <Link
                                        href={`/home/detailnews/${recentNews.slug}`}
                                        key={recentNews.id}
                                        preserveScroll
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
            </section>
        </HomeLayout>
    );
}
