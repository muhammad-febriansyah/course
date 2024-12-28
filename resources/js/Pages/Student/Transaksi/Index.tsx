import StudentsLayout from "@/Layouts/StudentsLayouts";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TransaksiType } from "@/types/transaksi";
import { Link } from "@inertiajs/react";
import { Eye } from "lucide-react";
import { route } from "ziggy-js";

interface Props {
    transaksi: TransaksiType[];
}

export default function Index({ transaksi }: Props) {
    return (
        <StudentsLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[105px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Transaksi
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
                                <BreadcrumbPage>Transaksi</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-2xl">
                        <thead className="text-base font-semibold text-white ltr:text-left bg-biru rtl:text-right">
                            <tr>
                                <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                    No
                                </th>
                                <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                    Order Id
                                </th>
                                <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                    Kelas
                                </th>
                                <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                    Qty
                                </th>
                                <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                    Total
                                </th>
                                <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                    Status
                                </th>
                                <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                    Tgl Trx
                                </th>
                                <th className="px-4 py-2">Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="text-sm divide-y divide-gray-200">
                            {transaksi.map((trx, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {trx.nota}
                                    </td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-normal">
                                        {trx.kelas.title}
                                    </td>

                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {trx.qty}
                                    </td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {Number(trx.amount).toLocaleString(
                                            "id-ID",
                                            {
                                                style: "currency",
                                                currency: "IDR",
                                            }
                                        )}
                                    </td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {/* Badge Dinamis Berdasarkan Status */}
                                        <span
                                            className={`inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-sm font-medium ${
                                                trx.status === "paid"
                                                    ? "bg-green-100 border-green-500 text-green-700" // Hijau untuk "paid"
                                                    : trx.status === "pending"
                                                    ? "bg-orange-100 border-orange-500 text-orange-700" // Oranye untuk "pending"
                                                    : trx.status === "failed"
                                                    ? "bg-red-100 border-red-500 text-red-700" // Merah untuk "failed"
                                                    : "bg-gray-100 border-gray-500 text-gray-700" // Default untuk status lainnya
                                            }`}
                                        >
                                            <p className="whitespace-nowrap">
                                                {trx.status
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    trx.status.slice(1)}
                                            </p>
                                        </span>
                                    </td>

                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {new Date(
                                            trx.created_at
                                        ).toLocaleDateString("id-ID", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        <Link
                                            className="inline-block px-2 py-2 text-sm font-medium text-white border rounded-full bg-biru border-biru hover:bg-transparent hover:text-biru focus:outline-none focus:ring active:text-indigo-500"
                                            href={route(
                                                "student.transaksidetail",
                                                trx.nota
                                            )}
                                        >
                                            <Eye />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </StudentsLayout>
    );
}
