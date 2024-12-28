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
import { Link } from "@inertiajs/react";
import { Setting } from "@/types/site";
import { KategoriType, KelasType, TipeKelasType } from "@/types/kelas";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { route } from "ziggy-js";

interface KelasProps {
    setting: Setting;
    kelas: KelasType;
    category: KategoriType[];
    tipekelas: TipeKelasType[];
}

export default function Kelas({
    setting,
    kelas,
    category,
    tipekelas,
}: KelasProps) {
    const [search, setSearch] = useState<string>("");
    const [selectedTipe, setSelectedTipe] = useState<string | undefined>("");
    const [selectedCategory, setSelectedCategory] = useState<
        string | undefined
    >("");

    // Filter dan search kelas berdasarkan state
    const filteredKelas = kelas.data.filter((kel) => {
        const matchesSearch = kel.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesTipe = selectedTipe
            ? kel.type.id === parseInt(selectedTipe)
            : true;
        const matchesCategory = selectedCategory
            ? kel.category.id === parseInt(selectedCategory)
            : true;

        return matchesSearch && matchesTipe && matchesCategory;
    });
    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">Kelas</h1>
                    <Breadcrumb className="flex flex-row items-center justify-center mx-auto space-x-2">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Kelas</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="p-5 bg-white rounded-2xl">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        <Input
                            type="text"
                            placeholder="Cari Kelas"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <select
                            value={selectedTipe}
                            onChange={(e) => setSelectedTipe(e.target.value)}
                            className="w-full text-gray-700 border-gray-300 rounded-lg sm:text-sm"
                        >
                            <option value="">Filter Tipe Kelas</option>
                            {tipekelas.map((tipe) => (
                                <option key={tipe.id} value={tipe.id}>
                                    {tipe.name}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                            className="w-full text-gray-700 border-gray-300 rounded-lg sm:text-sm"
                        >
                            <option value="">Filter Kategori Kelas</option>
                            {category.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {filteredKelas.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
                        {filteredKelas.map((kel) => (
                            <article
                                key={kel.id}
                                className="overflow-hidden transition bg-white rounded-2xl grid grid-rows-[auto_1fr_auto]"
                            >
                                <Link
                                    href={route("home.detailkelas", kel.slug)}
                                    className="relative block"
                                >
                                    <span className="absolute px-5 py-2 font-medium tracking-widest text-white uppercase -right-px -top-px rounded-tr-2xl bg-biru">
                                        {kel.category.name}
                                    </span>

                                    <img
                                        alt=""
                                        src={`/storage/${kel.image}`}
                                        className="object-cover w-full h-56"
                                    />

                                    <div className="p-4 bg-white sm:p-6">
                                        <h3 className="mt-0.5 text-biruTua text-xl line-clamp-2 font-bold">
                                            {kel.title}
                                        </h3>
                                        <div className="flow-root py-3 mt-5 border border-gray-100 rounded-lg shadow-sm">
                                            <dl className="-my-3 text-sm divide-y divide-gray-100">
                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">
                                                        Mentor
                                                    </dt>
                                                    <dd className="text-gray-700 sm:col-span-2">
                                                        {kel.user.name}
                                                    </dd>
                                                </div>
                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">
                                                        Harga
                                                    </dt>
                                                    <dd className="text-gray-700 sm:col-span-2">
                                                        {Number(
                                                            kel.price
                                                        ).toLocaleString(
                                                            "id-ID",
                                                            {
                                                                style: "currency",
                                                                currency: "IDR",
                                                            }
                                                        )}
                                                    </dd>
                                                </div>

                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">
                                                        Tipe Kelas
                                                    </dt>
                                                    <dd className="text-gray-700 sm:col-span-2">
                                                        {kel.type.name}
                                                    </dd>
                                                </div>

                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">
                                                        Tingkatan
                                                    </dt>
                                                    <dd className="text-gray-700 sm:col-span-2">
                                                        {kel.level.name}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </Link>

                                {/* Rating di bawah */}
                                <div className="flex items-center justify-start p-4 bg-white sm:p-6">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            fill="currentColor"
                                            className={`w-5 h-5 ${
                                                Number(kel.average_rating) >
                                                index
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                            }`}
                                        >
                                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-black">
                                        ({Number(kel.average_rating)})
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center w-full h-20 col-span-2 px-6 mt-10 space-x-3 bg-white rounded-2xl">
                        <AlertTriangle className="w-6 h-6 hover:text-biru" />
                        <span className="text-base font-bold transition-all duration-200 md:text-xl text-biruTua hover:text-biru">
                            Data tidak ditemukan.
                        </span>
                    </div>
                )}
                {kelas.last_page > 1 && (
                    <nav className="flex items-center mt-10 justify-start p-3 overflow-auto bg-white w-[355px] rounded-2xl">
                        {kelas.links.map((link, index) => {
                            let customLabel = link.label; // Default to the original label
                            if (link.label === "pagination.previous") {
                                customLabel = "Prev"; // Change to your desired label for the "Previous" link
                            } else if (link.label === "pagination.next") {
                                customLabel = "Next"; // Change to your desired label for the "Next" link
                            }

                            return (
                                <Link
                                    key={index}
                                    href={link.url}
                                    preserveScroll
                                    dangerouslySetInnerHTML={{
                                        __html: customLabel, // Use the custom label
                                    }}
                                    className={`px-3 py-2 mx-1 text-sm  bg-biru rounded-xl hover:bg-biru hover:text-white transition-all duration-200 ${
                                        link.active
                                            ? "bg-biru text-white"
                                            : "bg-gray-300 text-white"
                                    }`}
                                />
                            );
                        })}
                    </nav>
                )}
            </section>
        </HomeLayout>
    );
}
