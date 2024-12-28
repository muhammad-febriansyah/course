import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HomeLayout from "@/Layouts/HomeLayout";
import { Setting } from "@/types/site";
import { Link, useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import {
    Loader2,
    Mail,
    MapPin,
    Phone,
    SendHorizonalIcon,
    X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEventHandler, useState } from "react";
import { useRoute } from "ziggy-js";
import { toast } from "sonner";

interface SettingProps {
    setting: Setting;
}

export default function ContactUs() {
    const route = useRoute();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        try {
            post(route("home.sendMessage"), {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success(
                        "Pesan Anda berhasil dikirim! Terima kasih telah menghubungi kami.",
                        {
                            position: "top-right",
                            richColors: true,
                        }
                    );
                    reset();
                },
                onError: () => {
                    toast.error("Email ini sudah terdaftar.", {
                        position: "top-right",
                        richColors: true,
                    });
                },
            });
        } catch (error) {
            toast.error("Ada kesalahan saat mengirim pesan. Coba lagi nanti.");
        }
    };

    const { setting } = usePage().props as unknown as SettingProps;
    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Contact Us
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
                                <BreadcrumbPage>Contact Us</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-3">
                    <div className="flex flex-col items-center space-y-5">
                        <Mail size={50} className="text-biru" />
                        <h1 className="text-3xl font-bold text-biruTua">
                            Email Us
                        </h1>
                        <p className="text-lg font-bold text-biruTua">
                            {setting.email}
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <Phone size={50} className="text-biru" />
                        <h1 className="text-3xl font-bold text-biruTua">
                            Call Us
                        </h1>
                        <p className="text-lg font-bold text-biruTua">
                            {setting.phone}
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <MapPin size={50} className="text-biru" />
                        <h1 className="text-3xl font-bold text-biruTua">
                            Address
                        </h1>
                        <p className="text-base font-bold text-center text-biruTua">
                            {setting.address}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between px-6 pt-32 space-y-10 md:flex-row md:space-x-5">
                    <div className="px-6 py-10 bg-white md:w-1/2 rounded-2xl">
                        <div className="pb-10 space-y-3">
                            <h1 className="text-3xl font-bold text-biruTua">
                                Form Kontak Kami
                            </h1>
                            <p className="text-sm text-gray-500">
                                Kami selalu siap untuk membantu Anda. Isikan
                                formulir di bawah ini dan kami akan segera
                                merespon pertanyaan atau permintaan Anda.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                <div className="grid items-center w-full gap-2 mb-5">
                                    <Label htmlFor="name" className="mb-3">
                                        Nama
                                    </Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Nama Lengkap"
                                    />
                                </div>
                                <div className="grid items-center w-full gap-2 mb-5">
                                    <Label htmlFor="email" className="mb-3">
                                        Email
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="Email aktif"
                                    />
                                </div>
                            </div>
                            <div className="grid items-center w-full gap-2 mb-5">
                                <Label htmlFor="subject" className="mb-3">
                                    Subjek
                                </Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    placeholder="Subjek"
                                    name="subject"
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData("subject", e.target.value)
                                    }
                                />
                            </div>
                            <div className="grid items-center w-full gap-2 mb-5">
                                <Label htmlFor="message" className="mb-3">
                                    Pesan
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    placeholder="Pesan"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                {processing ? (
                                    <Button
                                        disabled
                                        className="rounded-full bg-biru"
                                    >
                                        <Loader2 className="animate-spin" />
                                        Tunggu Sebentar...
                                    </Button>
                                ) : (
                                    <Button
                                        type="submit"
                                        className="rounded-full bg-biru"
                                    >
                                        Kirim Pesan
                                        <SendHorizonalIcon className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/contactbg.png" className="w-full" alt="" />
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
