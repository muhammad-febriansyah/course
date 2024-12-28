import HomeLayout from "@/Layouts/HomeLayout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@inertiajs/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserType } from "@/types/user";
import { Daum } from "@/types/kelas";
import { TestimoniType } from "@/types/testimoni";
import { route } from "ziggy-js";

interface Props {
    data: UserType;
    kelas: Daum[];
    testimoni: TestimoniType[];
}
export default function Detail({ data, kelas, testimoni }: Props) {
    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Detail Mentor
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
                                <BreadcrumbPage>Detail Mentor</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="grid grid-cols-1 gap-y-5 md:gap-x-5 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col col-span-1 p-5 bg-white max-h-min rounded-2xl">
                        <div className="flex items-center space-x-5 bg-white rounded-2xl">
                            {data.image ? (
                                <img
                                    src={`/storage/${data.image}`}
                                    alt="User Avatar"
                                    className="object-cover"
                                />
                            ) : data.jk === "Laki-laki" ? (
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
                                    {data.name}
                                </h1>
                                <span className="text-base underline text-biruTua">
                                    Mentor
                                </span>
                            </div>
                        </div>
                        <p
                            className="hidden mt-5 text-sm leading-relaxed text-gray-500 lg:block "
                            dangerouslySetInnerHTML={{
                                __html: data.bio,
                            }}
                        />
                    </div>
                    <div className="col-span-2 p-5 ">
                        <Tabs defaultValue="kelas">
                            <TabsList>
                                <TabsTrigger
                                    value="kelas"
                                    className="rounded-full"
                                >
                                    Kelas
                                </TabsTrigger>
                                <TabsTrigger
                                    value="review"
                                    className="rounded-full"
                                >
                                    Reviews
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="kelas">
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                    {kelas.map((kel) => (
                                        <article
                                            key={kel.id}
                                            className="overflow-hidden transition bg-white rounded-2xl grid grid-rows-[auto_1fr_auto]"
                                        >
                                            <Link
                                                href={route(
                                                    "home.detailkelas",
                                                    kel.slug
                                                )}
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
                                                                    Harga
                                                                </dt>
                                                                <dd className="text-gray-700 sm:col-span-2">
                                                                    {Number(
                                                                        kel.price
                                                                    ).toLocaleString(
                                                                        "id-ID",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "IDR",
                                                                        }
                                                                    )}
                                                                </dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* Rating di bawah */}
                                            <div className="flex items-center justify-start p-4 bg-white sm:p-6">
                                                {Array.from(
                                                    { length: 5 },
                                                    (_, index) => (
                                                        <svg
                                                            key={index}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                            fill="currentColor"
                                                            className={`w-5 h-5 ${
                                                                Number(
                                                                    kel.average_rating
                                                                ) > index
                                                                    ? "text-yellow-400"
                                                                    : "text-gray-300"
                                                            }`}
                                                        >
                                                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                                        </svg>
                                                    )
                                                )}
                                                <span className="ml-2 text-black">
                                                    (
                                                    {Number(kel.average_rating)}
                                                    )
                                                </span>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="review">
                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                    {testimoni.map((testimoni, index) => (
                                        <div
                                            className="p-5 bg-white rounded-2xl"
                                            key={index}
                                        >
                                            <div className="flex items-center space-x-3">
                                                {testimoni.user.image !=
                                                null ? (
                                                    <img
                                                        src={`/storage/${testimoni.user.image}`}
                                                        className="object-cover w-16 h-16 rounded-full"
                                                        alt=""
                                                    />
                                                ) : (
                                                    <img
                                                        src="/default-avatar.svg"
                                                        className="object-cover w-16 h-16 rounded-full"
                                                        alt=""
                                                    />
                                                )}
                                                <div className="flex flex-col mt-2 gap-y-1">
                                                    <h1 className="text-lg font-semibold text-black line-clamp-2">
                                                        {testimoni.user.name}
                                                    </h1>
                                                    <span className="text-sm text-gray-500 underline">
                                                        Student
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="mt-5 text-base text-black">
                                                {testimoni.body}
                                            </p>
                                            <div className="flex items-center justify-start mt-10 bg-white">
                                                {Array.from(
                                                    { length: 5 },
                                                    (_, index) => (
                                                        <svg
                                                            key={index}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                            fill="currentColor"
                                                            className={`w-5 h-5 ${
                                                                Number(
                                                                    testimoni.rating
                                                                ) > index
                                                                    ? "text-yellow-400"
                                                                    : "text-gray-300"
                                                            }`}
                                                        >
                                                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                                        </svg>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
