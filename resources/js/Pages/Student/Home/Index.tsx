import AOS from "aos";
import "aos/dist/aos.css"; // import the AOS styles
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { AboutData, FaqData, Setting } from "@/types/site";
import { Badge } from "@/components/ui/badge";
import { RainbowButton } from "@/components/ui/rainbow-button";
import PulsatingButton from "@/components/ui/pulsating-button";
import { useEffect, useState } from "react";
import StudentsLayout from "@/Layouts/StudentsLayouts";
import { Daum } from "@/types/kelas";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import NumberTicker from "@/components/ui/number-ticker";
import { Plus } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { route } from "ziggy-js";
import { motion } from "framer-motion";
interface Props {
    setting: Setting;
    totalstudent: number;
    totalkelas: number;
    totalmentor: number;
    about: AboutData;
    kelas: Daum[];
    latest: Daum[];
    faq: FaqData[];
}

export default function Home({
    setting,
    totalkelas,
    totalstudent,
    totalmentor,
    about,
    kelas,
    latest,
    faq,
}: Props) {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
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
        <StudentsLayout>
            <section>
                <div className="container relative flex flex-col items-center justify-between py-16 mt-10 lg:mt-0 lg:py-44 lg:flex-row lg:space-y-0 lg:space-x-12">
                    {/* Left section (Text and Buttons) */}
                    <div
                        data-aos="fade-right"
                        className="w-full mb-5 space-y-6 text-left lg:order-1 md:order-2 lg:w-1/2 lg:text-left"
                    >
                        <Badge className="px-4 py-2 text-white bg-biruTua">
                            🎉 {setting.badge}
                        </Badge>
                        <h1 className="text-4xl font-bold leading-tight md:leading-snug md:text-5xl text-biruTua">
                            {setting.heading}
                        </h1>
                        <p className="text-base leading-loose text-gray-500">
                            {setting.description}
                        </p>
                        <div className="flex flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
                            <Link href={route("student.kelas")}>
                                <PulsatingButton className="w-auto bg-biru ">
                                    Cari Kelas
                                </PulsatingButton>
                            </Link>
                            <Link href={route("student.aboutus")}>
                                <RainbowButton>Tentang Kami</RainbowButton>
                            </Link>
                        </div>
                    </div>

                    {/* Right section (Hero Video) */}
                    <div
                        data-aos="fade-left"
                        className="flex justify-center order-2 w-full pb-10 lg:order-2 md:order-1 lg:w-1/2 lg:justify-start"
                    >
                        <HeroVideoDialog
                            className={`w-full md:w-auto rounded-[40px] ${
                                isScrolled ? "" : "lg:z-[999]"
                            }`}
                            animationStyle="from-center"
                            videoSrc={setting.video.embed_url}
                            thumbnailSrc={`/storage/${setting.thumbnail}`}
                            thumbnailAlt="Hero Video"
                        />
                    </div>
                </div>
            </section>
            <section data-aos="fade-down" className="py-10 bg-biruTua">
                <div className="container">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        <div className="flex flex-col items-center justify-center gap-y-5">
                            <h1 className="flex items-center text-4xl font-bold text-white gap-x-1">
                                <NumberTicker
                                    value={totalkelas}
                                    className="text-4xl text-white"
                                />
                                <span>
                                    <Plus className="w-6 h-6" />
                                </span>
                            </h1>
                            <span className="text-2xl font-semibold text-white ">
                                Total Kelas
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-5">
                            <h1 className="flex items-center text-4xl font-bold text-white gap-x-1">
                                <NumberTicker
                                    value={totalmentor}
                                    className="text-4xl text-white"
                                />
                                <span>
                                    <Plus className="w-6 h-6" />
                                </span>
                            </h1>
                            <span className="text-2xl font-semibold text-white">
                                Total Mentor
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-5">
                            <h1 className="flex items-center text-4xl font-bold text-white gap-x-1">
                                <NumberTicker
                                    value={totalstudent}
                                    className="text-4xl text-white"
                                />
                                <span>
                                    <Plus className="w-6 h-6" />
                                </span>
                            </h1>
                            <span className="text-2xl font-semibold text-white">
                                Total Students
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-down" className="container py-20">
                <div className="grid items-center grid-cols-1 gap-y-10 md:gap-x-10 md:grid-cols-2">
                    <div className="order-2 md:order-1">
                        <img
                            src={`/storage/${about.image}`}
                            className="w-full h-[360px] md:h-[550px] rounded-2xl"
                            alt=""
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h1 className="mb-5 text-2xl font-bold leading-snug text-left md:text-4xl md:leading-normal text-biruTua">
                            {about.title}
                        </h1>
                        <p
                            className="text-base text-justify text-gray-500"
                            dangerouslySetInnerHTML={{
                                __html: about.description.slice(0, 500) + "...", // First 100 characters
                            }}
                        />
                        <Link href={route("student.aboutus")}>
                            <Button className="mt-5 rounded-full bg-biru">
                                Baca Selengkapnya
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <section
                data-aos="fade-down"
                className="container relative py-20 overflow-hidden bg-biruTua rounded-2xl"
            >
                <div className="grid grid-cols-1 gap-y-5 md:gap-x-5 md:grid-cols-2">
                    <div className="col-span-2 p-5 lg:col-span-1">
                        <h1 className="text-4xl font-semibold leading-normal text-white">
                            Gabung sekarang untuk mendapatkan pengalaman belajar
                            yang luar biasa!
                        </h1>
                        <p className="mt-5 text-base text-white">
                            Tak perlu khawatir jika kesulitan! Mentor kami siap
                            membantu Anda setiap langkahnya di kursus online
                            ini. Mulailah belajar dengan dukungan penuh!
                        </p>
                        <Link href={route("student.kelas")}>
                            <Button className="mt-5 rounded-full bg-biru">
                                Lihat Kelas
                            </Button>
                        </Link>
                    </div>
                    <div className="lg:col-span-1">
                        <Marquee
                            className="hidden lg:block h-96 justify-center overflow-hidden [--duration:30s] [--gap:1rem]"
                            vertical
                            style={{
                                transform:
                                    "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
                            }}
                        >
                            {kelas.map((data, idx) => (
                                <img
                                    key={idx}
                                    src={`/storage/${data.image}`}
                                    alt={data.title}
                                    className="w-3/4 mx-auto transition-all duration-200 border cursor-pointer h-1/2 rounded-2xl border-neutral-300 hover:ring-1 hover:ring-neutral-300"
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
            <section data-aos="fade-down" className="container py-20">
                <h1 className="mb-10 text-2xl font-bold leading-snug text-left md:text-4xl md:leading-normal text-biruTua">
                    Kelas Terbaru
                </h1>
                <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
                    {latest.map((kel) => (
                        <article
                            key={kel.id}
                            className="overflow-hidden transition bg-white rounded-2xl grid grid-rows-[auto_1fr_auto]"
                        >
                            <Link
                                href={route("student.detailkelas", kel.slug)}
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
                                                    ).toLocaleString("id-ID", {
                                                        style: "currency",
                                                        currency: "IDR",
                                                    })}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </Link>
                            <div className="flex items-center justify-start p-4 bg-white sm:p-6">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        fill="currentColor"
                                        className={`w-5 h-5 ${
                                            Number(kel.average_rating) > index
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
            </section>
            <section data-aos="fade-down" className="container py-20">
                <div className="space-y-10">
                    <div className="flex flex-col items-start space-y-3 md:items-center">
                        <Badge className="text-xl text-white bg-biruTua">
                            Tanya {setting.site_name}
                        </Badge>
                        <h1 className="text-2xl font-bold leading-snug text-left md:text-center md:text-5xl md:leading-normal text-biruTua">
                            Pertanyaan Yang Sering Diajukan😊
                        </h1>
                    </div>
                    <Accordion type="single" collapsible>
                        {faq.map((item) => (
                            <AccordionItem
                                value={item.id}
                                key={item.id}
                                className="w-full px-6 py-5 m-3 bg-white rounded-2xl"
                            >
                                <AccordionTrigger>
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </StudentsLayout>
    );
}
