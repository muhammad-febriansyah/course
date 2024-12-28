import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import StudentsLayout from "@/Layouts/StudentsLayouts";
import { Category, TransaksiType, Type } from "@/types/transaksi";
import { Link } from "@inertiajs/react";
import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { route } from "ziggy-js";

interface KelasProps {
    kelas: TransaksiType[];
    category: Category[];
    tipekelas: Type[];
}
export default function Index({ kelas, category, tipekelas }: KelasProps) {
    const [search, setSearch] = useState<string>("");
    const [selectedTipe, setSelectedTipe] = useState<string | undefined>("");
    const [selectedCategory, setSelectedCategory] = useState<
        string | undefined
    >("");

    // Filter dan search kelas berdasarkan state
    const filteredKelas = kelas.filter((kel) => {
        const matchesSearch = kel.kelas.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesTipe = selectedTipe
            ? kel.kelas.type.id === parseInt(selectedTipe)
            : true;
        const matchesCategory = selectedCategory
            ? kel.kelas.category.id === parseInt(selectedCategory)
            : true;

        return matchesSearch && matchesTipe && matchesCategory;
    });
    return (
        <StudentsLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[105px]">
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        My Course
                    </h1>
                    <Breadcrumb className="flex flex-row items-center justify-center mx-auto space-x-2">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/student/home">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>My Course</BreadcrumbPage>
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
                                    href={route(
                                        "student.detailcourse",
                                        kel.kelas.slug
                                    )}
                                    className="relative block"
                                >
                                    <span className="absolute px-5 py-2 font-medium tracking-widest text-white uppercase -right-px -top-px rounded-tr-2xl bg-biru">
                                        {kel.kelas.category.name}
                                    </span>

                                    <img
                                        alt=""
                                        src={`/storage/${kel.kelas.image}`}
                                        className="object-cover w-full h-56"
                                    />

                                    <div className="p-4 bg-white sm:p-6">
                                        <h3 className="mt-0.5 text-biruTua text-xl font-bold">
                                            {kel.kelas.title}
                                        </h3>
                                        <div className="flow-root py-3 mt-5 border border-gray-100 rounded-lg shadow-sm">
                                            <dl className="-my-3 text-sm divide-y divide-gray-100">
                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">
                                                        Mentor
                                                    </dt>
                                                    <dd className="text-gray-700 sm:col-span-2">
                                                        {kel.kelas.user.name}
                                                    </dd>
                                                </div>
                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">
                                                        Harga
                                                    </dt>
                                                    <dd className="text-gray-700 sm:col-span-2">
                                                        {Number(
                                                            kel.kelas.price
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
                                                        {kel.kelas.type.name}
                                                    </dd>
                                                </div>

                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">
                                                        Tingkatan
                                                    </dt>
                                                    <dd className="text-gray-700 sm:col-span-2">
                                                        {kel.kelas.level.name}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </Link>
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
            </section>
        </StudentsLayout>
    );
}
