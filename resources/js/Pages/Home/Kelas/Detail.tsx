import HomeLayout from "@/Layouts/HomeLayout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import PulsatingButton from "@/components/ui/pulsating-button";
import { Daum } from "@/types/kelas";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { LockIcon } from "lucide-react";
import { SectionType } from "@/types/section";
import { VideoType } from "@/types/video";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TestimoniType } from "@/types/testimoni";

interface Props {
    kelas: Daum;
    sectionData: SectionType[];
    video: VideoType[];
    videoDemo: VideoType[];
    allclass: Daum[];
    testimoni: TestimoniType[];
}

export default function Detail({
    kelas,
    sectionData,
    video,
    videoDemo,
    allclass,
    testimoni,
}: Props) {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true); // Set to true when scrolled
            } else {
                setIsScrolled(false); // Set to false when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Detail Kelas
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
                                <BreadcrumbPage>Detail Kelas</BreadcrumbPage>
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
                            </div>
                        </div>
                        <Tabs
                            defaultValue="about"
                            className="mt-10 overflow-auto"
                        >
                            <TabsList>
                                <TabsTrigger
                                    value="about"
                                    className="rounded-full"
                                >
                                    About
                                </TabsTrigger>
                                <TabsTrigger
                                    value="pelajaran"
                                    className="rounded-full"
                                >
                                    Pelajaran
                                </TabsTrigger>
                                <TabsTrigger
                                    value="mentor"
                                    className="rounded-full"
                                >
                                    Mentor
                                </TabsTrigger>
                                <TabsTrigger
                                    value="testimoni"
                                    className="rounded-full"
                                >
                                    Reviews
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent
                                value="about"
                                className="p-5 bg-white rounded-2xl"
                            >
                                <p
                                    className="mt-5 text-sm leading-relaxed text-gray-700"
                                    dangerouslySetInnerHTML={{
                                        __html: kelas.description,
                                    }}
                                />
                            </TabsContent>
                            <TabsContent value="pelajaran">
                                <h1 className="mt-10 text-2xl font-bold text-left md:text-3xl text-biruTua">
                                    Pelajaran Kursus
                                </h1>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    {sectionData.map((section, index) => (
                                        <AccordionItem
                                            value={index.toString()}
                                            key={index}
                                            className="px-6 my-3 mt-5 bg-white rounded-2xl"
                                        >
                                            <AccordionTrigger className="flex items-center text-black">
                                                <div className="flex flex-row items-center font-semibold gap-x-3">
                                                    <span className="flex items-center justify-center text-white bg-gray-600 rounded-full w-7 h-7">
                                                        {index + 1}
                                                    </span>
                                                    {section.title}
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul>
                                                    {/* Filter videos for the current section */}
                                                    {video
                                                        .filter(
                                                            (vid) =>
                                                                vid.section_id ===
                                                                section.id
                                                        )
                                                        .map(
                                                            (
                                                                filteredVideo,
                                                                videoIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        filteredVideo.id
                                                                    }
                                                                >
                                                                    {/* Check if it's the first section (index === 0) */}
                                                                    {index ===
                                                                    0 ? (
                                                                        // In the first section, videos are clickable
                                                                        <Dialog>
                                                                            <DialogTrigger className="flex flex-row items-center w-full px-5 py-3 gap-x-2">
                                                                                <div className="flex flex-row items-center font-semibold gap-x-2 text-biruTua">
                                                                                    <img
                                                                                        src="/play.svg"
                                                                                        alt=""
                                                                                        className="w-6 h-6"
                                                                                    />
                                                                                    <span>
                                                                                        {
                                                                                            filteredVideo.title
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                                <span className="ml-auto font-semibold text-biruTua">
                                                                                    {
                                                                                        filteredVideo.duration
                                                                                    }
                                                                                </span>
                                                                            </DialogTrigger>
                                                                            <DialogContent>
                                                                                <DialogHeader>
                                                                                    <DialogTitle>
                                                                                        {
                                                                                            filteredVideo.title
                                                                                        }
                                                                                    </DialogTitle>
                                                                                    <DialogDescription>
                                                                                        <iframe
                                                                                            width="100%"
                                                                                            height="400px"
                                                                                            className="rounded-lg"
                                                                                            src={
                                                                                                filteredVideo
                                                                                                    .url
                                                                                                    .embed_url
                                                                                            }
                                                                                            title="YouTube video player"
                                                                                            frameBorder="0"
                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                                                            allowFullScreen
                                                                                        ></iframe>
                                                                                    </DialogDescription>
                                                                                </DialogHeader>
                                                                            </DialogContent>
                                                                        </Dialog>
                                                                    ) : (
                                                                        // Non-clickable videos for other sections
                                                                        <div className="flex flex-row items-center w-full px-5 py-3 text-gray-400 gap-x-2">
                                                                            <div className="flex flex-row items-center font-semibold gap-x-2">
                                                                                <LockIcon className="w-6 h-6" />
                                                                                <span>
                                                                                    {
                                                                                        filteredVideo.title
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                            <span className="ml-auto font-semibold">
                                                                                {
                                                                                    filteredVideo.duration
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                            <TabsContent value="mentor">
                                <div className="flex items-center p-5 mt-10 space-x-5 bg-white rounded-2xl">
                                    {kelas.user.image ? (
                                        <img
                                            src={`/storage/${kelas.user.image}`}
                                            alt="User Avatar"
                                            className="object-cover w-16 h-16 rounded-full"
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
                                            className="hidden text-sm leading-relaxed text-gray-500 lg:block "
                                            dangerouslySetInnerHTML={{
                                                __html: kelas.user.bio,
                                            }}
                                        />
                                    </div>
                                </div>
                                <h1 className="mt-10 mb-5 text-2xl font-bold">
                                    Kelas lainya dari mentor: {kelas.user.name}
                                </h1>
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                    {allclass.map((kel) => (
                                        <article
                                            key={kel.id}
                                            className="overflow-hidden transition bg-white rounded-2xl grid grid-rows-[auto_1fr_auto]"
                                        >
                                            <Link
                                                href={`/student/detailkelas/${kel.slug}`}
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
                            <TabsContent value="testimoni">
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
                    <div className="col-span-1 p-5 overflow-y-auto bg-white max-h-min rounded-2xl">
                        <h1 className="mb-5 text-2xl font-bold text-biruTua">
                            {
                                videoDemo.filter(
                                    (video) =>
                                        video.section.kelas.id === kelas.id
                                ).length
                            }{" "}
                            Pelajaran Demo Kelas
                        </h1>
                        <div className="space-y-3">
                            {videoDemo
                                .filter(
                                    (videoDemo) =>
                                        videoDemo.section.kelas.id === kelas.id
                                )
                                .map((videoDemo, index) => (
                                    <div
                                        key={index}
                                        className="px-5 py-3 bg-gray-200 rounded-full"
                                    >
                                        <Dialog>
                                            <DialogTrigger className="flex flex-row items-center w-full gap-x-2">
                                                <div className="flex flex-row items-center gap-x-2">
                                                    <img
                                                        src="/play.svg"
                                                        alt=""
                                                        className="w-6 h-6"
                                                    />
                                                    <span>
                                                        {videoDemo.title}
                                                    </span>
                                                </div>
                                                <span className="ml-auto">
                                                    {videoDemo.duration}
                                                </span>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        {videoDemo.title}
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        <iframe
                                                            width="100%"
                                                            height="400px"
                                                            className="rounded-lg"
                                                            src={
                                                                videoDemo.url
                                                                    .embed_url
                                                            }
                                                            title="YouTube video player"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                ))}
                        </div>
                        <br />
                        <br />
                        <Link href="/home/login" className="mt-5">
                            <PulsatingButton className="w-full bg-biru">
                                Gabung Kelas Sekarang
                            </PulsatingButton>
                        </Link>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
