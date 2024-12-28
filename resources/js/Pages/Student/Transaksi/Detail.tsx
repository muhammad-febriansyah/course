import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import StudentsLayout from "@/Layouts/StudentsLayouts";
import { Kelas, TransaksiType, User } from "@/types/transaksi";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

interface Props {
    transaksi: TransaksiType;
    kelas: Kelas;
    user: User;
}
export default function Detail({ transaksi, kelas, user }: Props) {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <StudentsLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[105px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Detail Transaksi
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
                                <BreadcrumbPage>
                                    Detail Transaksi
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="p-5 bg-white rounded-2xl">
                            <HeroVideoDialog
                                className={`w-full md:w-auto rounded-[40px] ${
                                    isScrolled ? "" : "lg:z-[999]"
                                }`}
                                animationStyle="from-center"
                                videoSrc={kelas.link_overview.embed_url}
                                thumbnailSrc={`/storage/${kelas.image}`}
                                thumbnailAlt="Hero Video"
                            />
                            <div className="mt-5 space-y-5">
                                <h1 className="text-2xl font-bold text-left md:text-3xl text-biruTua">
                                    {kelas.title}
                                </h1>
                                <div className="flow-root py-3 border border-gray-100 rounded-lg shadow-sm">
                                    <dl className="-my-3 text-sm divide-y divide-gray-100">
                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">
                                                Harga Kelas
                                            </dt>
                                            <dd className="text-gray-700 sm:col-span-2">
                                                Rp.{" "}
                                                {Number(
                                                    kelas.price
                                                ).toLocaleString("id-ID")}
                                            </dd>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">
                                                Tingkatan
                                            </dt>
                                            <dd className="text-gray-700 sm:col-span-2">
                                                {kelas.level.name}
                                            </dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">
                                                Tipe Kelas
                                            </dt>
                                            <dd className="text-gray-700 sm:col-span-2">
                                                {kelas.type.name}
                                            </dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">
                                                Kategori
                                            </dt>
                                            <dd className="text-gray-700 sm:col-span-2">
                                                {kelas.category.name}
                                            </dd>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">
                                                Views
                                            </dt>
                                            <dd className="text-gray-700 sm:col-span-2">
                                                {kelas.views} Views
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <p
                                    className="mt-5 text-sm leading-relaxed text-gray-700"
                                    dangerouslySetInnerHTML={{
                                        __html: kelas.description,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center p-5 mt-10 space-x-5 bg-white rounded-2xl">
                            {kelas.user.image ? (
                                <img
                                    src={`/storage/${kelas.user.image}`}
                                    alt="User Avatar"
                                    className="object-cover"
                                />
                            ) : kelas.user.jk === "Laki-laki" ? (
                                <img
                                    src="/lk.png"
                                    className="object-cover "
                                    alt="Laki-laki Avatar"
                                />
                            ) : (
                                <img
                                    src="/cw.png"
                                    alt="Perempuan Avatar"
                                    className="object-cover "
                                />
                            )}
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold text-biruTua">
                                    {kelas.user.name}
                                </h1>
                                <span className="text-base underline text-biruTua">
                                    Mentor
                                </span>
                                <p
                                    className="text-sm leading-relaxed text-gray-500 "
                                    dangerouslySetInnerHTML={{
                                        __html: kelas.user.bio,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-5 overflow-y-auto bg-white max-h-min rounded-2xl">
                        <h1 className="mb-5 text-2xl font-bold text-biruTua">
                            Detail Transaksi
                        </h1>
                        <div className="flow-root py-3  border border-gray-100 shadow-sm rounded-2xl">
                            <dl className="-my-3 text-sm divide-y divide-gray-100">
                                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">
                                        Order Id
                                    </dt>
                                    <dd className="text-gray-700 sm:col-span-2">
                                        {transaksi.nota}
                                    </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">
                                        Qty
                                    </dt>
                                    <dd className="text-gray-700 sm:col-span-2">
                                        {transaksi.qty}
                                    </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">
                                        Jumlah Pembayaran
                                    </dt>
                                    <dd className="text-gray-700 sm:col-span-2">
                                        {Number(
                                            transaksi.amount
                                        ).toLocaleString("id-ID")}
                                    </dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">
                                        Tgl Transaksi
                                    </dt>
                                    <dd className="text-gray-700 sm:col-span-2">
                                        {new Date(
                                            transaksi.created_at
                                        ).toLocaleDateString("id-ID", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">
                                        Status
                                    </dt>
                                    <dd className="text-gray-700 sm:col-span-2">
                                        <span
                                            className={`inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-sm font-medium ${
                                                transaksi.status === "paid"
                                                    ? "bg-green-100 border-green-500 text-green-700" // Hijau untuk "paid"
                                                    : transaksi.status ===
                                                      "pending"
                                                    ? "bg-orange-100 border-orange-500 text-orange-700" // Oranye untuk "pending"
                                                    : transaksi.status ===
                                                      "failed"
                                                    ? "bg-red-100 border-red-500 text-red-700" // Merah untuk "failed"
                                                    : "bg-gray-100 border-gray-500 text-gray-700" // Default untuk status lainnya
                                            }`}
                                        >
                                            <p className="whitespace-nowrap">
                                                {transaksi.status
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    transaksi.status.slice(1)}
                                            </p>
                                        </span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </StudentsLayout>
    );
}
