import StudentsLayout from "@/Layouts/StudentsLayouts";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { UserType } from "@/types/user";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
interface Props {
    data: UserType[];
}
export default function Mentor({ data }: Props) {
    return (
        <StudentsLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[105px]">
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Mentor Kami
                    </h1>
                    <Breadcrumb className="flex flex-row items-center justify-center mx-auto space-x-2">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href={route("student.home")}>
                                        Home
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Mentor Kami</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="grid items-center grid-cols-1 gap-y-5 md:gap-x-5 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((mentor) => {
                        return (
                            <Link
                                href={route("student.detailmentor", mentor.id)}
                                key={mentor.id}
                            >
                                <div
                                    key={mentor.id}
                                    className="flex flex-col items-center justify-center p-5 bg-white gap-y-5 rounded-2xl"
                                >
                                    {mentor.image != null ? (
                                        <img
                                            src={`/storage/${mentor.image}`}
                                            alt={mentor.name}
                                            className="w-32 h-32 rounded-full"
                                        />
                                    ) : (
                                        <img
                                            src="/default-avatar.svg"
                                            alt={mentor.name}
                                            className="w-32 h-32 rounded-full"
                                        />
                                    )}
                                    <div className="flow-root py-3 border border-gray-100 rounded-lg shadow-sm">
                                        <dl className="-my-3 text-sm divide-y divide-gray-100">
                                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-medium text-gray-900">
                                                    Nama
                                                </dt>
                                                <dd className="text-gray-700 sm:col-span-2">
                                                    {mentor.name}
                                                </dd>
                                            </div>

                                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-medium text-gray-900">
                                                    Email
                                                </dt>
                                                <dd className="text-gray-700 sm:col-span-2">
                                                    {mentor.email}
                                                </dd>
                                            </div>

                                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-medium text-gray-900">
                                                    Nomor Telepon
                                                </dt>
                                                <dd className="text-gray-700 sm:col-span-2">
                                                    {mentor.phone}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </StudentsLayout>
    );
}
