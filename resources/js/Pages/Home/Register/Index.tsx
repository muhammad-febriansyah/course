import HomeLayout from "@/Layouts/HomeLayout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Setting } from "@/types/site";
import { Link, useForm } from "@inertiajs/react";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FormEventHandler, useState } from "react";
import PulsatingButton from "@/components/ui/pulsating-button";
import { useRoute } from "ziggy-js";
import { toast } from "sonner";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface Props {
    setting: Setting;
}
export default function Index({ setting }: Props) {
    const route = useRoute();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jk: "",
        phone: "",
    });

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        try {
            post(route("home.saveregister"), {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success("Pendaftaran anda berhasil disimpan.", {
                        position: "top-right",
                        richColors: true,
                    });
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

    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Registrasi
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
                                <BreadcrumbPage>Registrasi</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="col-span-1 px-6 py-10 bg-white rounded-2xl">
                        <div className="space-y-3 pb-7">
                            <h1 className="text-3xl font-bold text-biruTua">
                                Registrasi
                            </h1>
                            <p className="text-sm text-gray-500">
                                Silahkan isi form ini dengan benar dan lengkap
                                untuk mendaftar ke {setting.site_name}.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid items-center w-full gap-2 mb-5">
                                <Label htmlFor="name">Nama</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                    placeholder="Nama Lengkap"
                                />
                            </div>
                            <div className="grid items-center w-full gap-2 mb-5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="Masukan Email Anda"
                                />
                            </div>
                            <div className="grid items-center w-full gap-2 mb-5">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="Masukan Password Anda"
                                    required
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    name="password"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                <div className="grid items-center w-full gap-2 mb-5">
                                    <Label htmlFor="tempat_lahir">
                                        Tempat Lahir
                                    </Label>
                                    <Input
                                        type="text"
                                        id="tempat_lahir"
                                        name="tempat_lahir"
                                        required
                                        value={data.tempat_lahir}
                                        onChange={(e) =>
                                            setData(
                                                "tempat_lahir",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Tempat Lahir"
                                    />
                                </div>
                                <div className="grid items-center w-full gap-2 mb-5">
                                    <Label
                                        htmlFor="email"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Tgl Lahir
                                    </Label>
                                    <input
                                        type="date"
                                        name="tanggal_lahir"
                                        value={data.tanggal_lahir}
                                        onChange={(e) =>
                                            setData(
                                                "tanggal_lahir",
                                                e.target.value
                                            )
                                        }
                                        id="tanggal_lahir"
                                        className="px-4 py-2 text-sm text-gray-800 placeholder-gray-500 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                <div className="grid items-center w-full gap-2 mb-5">
                                    <Label htmlFor="jk">Jenis Kelamin</Label>
                                    <Select
                                        name="jk"
                                        value={data.jk}
                                        onValueChange={(e) => setData("jk", e)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Laki-Laki">
                                                Laki-Laki
                                            </SelectItem>
                                            <SelectItem value="Perempuan">
                                                Perempuan
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid items-center w-full gap-2 mb-5">
                                    <Label htmlFor="phone">No Telepon</Label>
                                    <Input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        placeholder="Nomor telepon"
                                    />
                                </div>
                            </div>
                            <p className="mb-3 text-sm text-gray-500 sm:mt-0">
                                Already have an account?
                                <Link
                                    href={route("home.login")}
                                    className="text-gray-700 underline"
                                >
                                    Log in
                                </Link>
                                .
                            </p>
                            <div className="flex items-center space-x-2">
                                {processing ? (
                                    <Button
                                        disabled
                                        className="w-full rounded-full bg-biru"
                                    >
                                        <Loader2 className="animate-spin" />
                                        Tunggu Sebentar...
                                    </Button>
                                ) : (
                                    <PulsatingButton
                                        type="submit"
                                        className="w-full bg-biru"
                                    >
                                        Registrasi
                                    </PulsatingButton>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center col-span-1">
                        <img src="/bg-log.png" alt="" />
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
