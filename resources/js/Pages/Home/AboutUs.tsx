import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HomeLayout from "@/Layouts/HomeLayout";
import { AboutData } from "@/types/site";
import { Link, usePage } from "@inertiajs/react";

interface Props {
    data: AboutData;
}

export default function AboutUs() {
    const { data } = usePage().props as unknown as Props;
    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Tentang Kami
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
                                <BreadcrumbPage>Tentang Kami</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="grid items-center grid-cols-1 gap-y-10 md:gap-x-10 md:grid-cols-2">
                    <div className="order-2 md:order-1">
                        <img
                            src={data.image}
                            className="w-full h-[330px] md:h-[450px] rounded-2xl"
                            alt=""
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h1 className="mb-5 text-2xl font-bold leading-snug text-left md:text-4xl md:leading-normal text-biruTua">
                            {data.title}
                        </h1>
                        <p
                            className="text-justify text-gray-800"
                            dangerouslySetInnerHTML={{
                                __html: data.description,
                            }}
                        />
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
