import StudentsLayout from "@/Layouts/StudentsLayouts";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProfileFormData, UserType } from "@/types/user";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/react";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { route } from "ziggy-js";

interface Props {
    auth: UserType;
}
export default function Index({ auth }: Props) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const { data, setData, post, progress, processing, reset } =
        useForm<ProfileFormData>({
            name: auth.name,
            email: auth.email,
            image: null,
            password: "",
            tempat_lahir: auth.tempat_lahir,
            tanggal_lahir: auth.tanggal_lahir,
            jk: auth.jk,
            phone: auth.phone,
            alamat: auth.alamat,
        });

    useEffect(() => {
        if (auth.image) {
            setImagePreview(`/storage/${auth.image}`); // Update the preview with the current image URL
        }
    }, [auth.image]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl); // Update preview with the selected file
            setData((prevData) => ({
                ...prevData,
                image: file,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("student.updateProfile"), {
            onSuccess: () => {
                toast.success("Profile berhasil diperbarui!", {
                    position: "top-right",
                });
                Inertia.reload();
            },
            onError: (errors) => {
                console.log(errors);
                toast.error("Ada kesalahan sistem!", {
                    position: "top-right",
                });
            },
        });
    };
    return (
        <StudentsLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[105px]">
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Edit Profile
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
                                <BreadcrumbPage>Edit Profile</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-y-5 md:gap-x-5 md:grid-cols-3">
                        <div className="col-span-1 px-6 py-5 space-y-5 bg-white lg:col-span-2 rounded-2xl">
                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="name">Nama</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Nama Lengkap"
                                />
                            </div>
                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="Email"
                                />
                            </div>

                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    placeholder="Kosongkan jika tidak ingin diubah..."
                                />
                            </div>
                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="tempat_lahir">
                                    Tempat Lahir
                                </Label>
                                <Input
                                    type="text"
                                    id="tempat_lahir"
                                    name="tempat_lahir"
                                    value={data.tempat_lahir}
                                    onChange={(e) =>
                                        setData("tempat_lahir", e.target.value)
                                    }
                                    placeholder="Tempat Lahir"
                                />
                            </div>

                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="tanggal_lahir">
                                    Tanggal Lahir
                                </Label>
                                <Input
                                    type="date"
                                    id="tanggal_lahir"
                                    name="tanggal_lahir"
                                    value={data.tanggal_lahir}
                                    onChange={(e) =>
                                        setData("tanggal_lahir", e.target.value)
                                    }
                                />
                            </div>

                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="jk">Jenis Kelamin</Label>
                                <select
                                    id="jk"
                                    name="jk"
                                    value={data.jk} // Bind the selected value to the state
                                    onChange={(e) =>
                                        setData("jk", e.target.value)
                                    } // Update the state when a new option is selected
                                    className="p-2 border rounded"
                                >
                                    <option value="">
                                        Pilih Jenis Kelamin
                                    </option>
                                    <option
                                        value="Laki-laki"
                                        selected={data.jk === "Laki-laki"}
                                    >
                                        Laki-laki
                                    </option>
                                    <option
                                        value="Perempuan"
                                        selected={data.jk === "Perempuan"}
                                    >
                                        Perempuan
                                    </option>
                                </select>
                            </div>

                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    placeholder="Nomor Telepon"
                                />
                            </div>

                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="alamat">Alamat</Label>
                                <Textarea
                                    id="alamat"
                                    name="alamat"
                                    value={data.alamat}
                                    onChange={(e) =>
                                        setData("alamat", e.target.value)
                                    }
                                    placeholder="Alamat"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 p-6 bg-white max-h-min rounded-2xl">
                            <div className="grid items-center w-full gap-3">
                                <Label htmlFor="image">Avatar</Label>
                                {imagePreview && (
                                    <div className="flex justify-center mt-3 mb-5">
                                        <img
                                            src={imagePreview}
                                            alt="Image Preview"
                                            className="object-cover w-32 h-32 rounded-full" // Customize the size and styling as needed
                                        />
                                    </div>
                                )}
                                <div className="flex justify-center">
                                    <Input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        name="image"
                                        onChange={handleFileChange} // Handle file change event
                                    />
                                </div>
                            </div>

                            {processing ? (
                                <Button
                                    disabled
                                    className="mt-10 rounded-full bg-biru"
                                >
                                    <Loader2 className="animate-spin" />
                                    Tunggu Sebentar...
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    className="mt-10 rounded-full bg-biru"
                                >
                                    Update Profile
                                </Button>
                            )}
                        </div>
                    </div>
                </form>
            </section>
        </StudentsLayout>
    );
}
