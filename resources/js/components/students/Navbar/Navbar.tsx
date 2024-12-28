import { Setting } from "@/types/site";
import { Link, usePage } from "@inertiajs/react";
import { LogOut, Mail, MapPin, Menu, PhoneCall, Users, X } from "lucide-react";
import { useState, useEffect } from "react";
import { UrlMobileStudent, UrlStudent } from "@/utils/studentUrl";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/types/user";
import { Inertia } from "@inertiajs/inertia";
import { Button } from "@/components/ui/button";
import { route } from "ziggy-js";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";

interface SettingProps {
    setting: Setting;
    auth: UserType;
}

export default function Navbar() {
    const { setting } = usePage().props as unknown as SettingProps;
    const { auth } = usePage().props as unknown as SettingProps;
    const [open, setOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const { url: currentUrl } = usePage();
    const userImage = auth?.image; // Image URL from user (e.g., profile image)
    const userGender = auth?.jk; // Gender (e.g., "Laki-laki" or "Perempuan")
    const userName = auth?.name || "User"; // Fallback if the name is missing

    const avatarSrc = userImage
        ? `/storage/${userImage}` // Use the user's image from storage
        : userGender === "Laki-laki"
        ? "/lk.png" // Default image for male users
        : userGender === "Perempuan"
        ? "/cw.png" // Default image for female users
        : "/default-avatar.png"; // Fallback if gender or image is not available

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleLogout = () => {
        // Send a POST request to the logout route
        Inertia.post(
            route("logout"),
            {},
            {
                onSuccess: () => {
                    Inertia.visit("/"); // Redirect to homepage after logout
                },
                onError: (error) => {
                    console.error("Logout failed:", error);
                },
            }
        );
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[99]  transition-all duration-300 ${
                    isScrolled
                        ? "bg-white bg-opacity-30 backdrop-blur-md"
                        : "bg-white"
                }`}
            >
                <div
                    className={
                        isScrolled
                            ? "hidden"
                            : "hidden  mx-auto lg:block bg-biruTua"
                    }
                >
                    <div className="container flex items-center justify-between py-3">
                        <div className="flex items-center space-x-5 cursor-pointer">
                            <div className="flex items-center space-x-2 text-sm text-white transition-all duration-200 hover:text-biru">
                                <PhoneCall size={16} />
                                <span className="">{setting.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-white transition-all duration-200 hover:text-biru">
                                <Mail size={16} />
                                <span className="">{setting.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-white transition-all duration-200 cursor-pointer hover:text-biru">
                            <MapPin size={16} />
                            <span className="">{setting.address}</span>
                        </div>
                    </div>
                </div>
                <div className="container flex items-center justify-between py-3">
                    {/* logo nav */}
                    <div>
                        <Link href={route("student.home")}>
                            <img
                                src={`/storage/${setting.long_logo}`}
                                className="w-32"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    {/* menu nav */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center space-x-2 text-black">
                            {UrlStudent.map((url) => {
                                return (
                                    <li key={url.id}>
                                        <Link
                                            href={url.url}
                                            className={
                                                currentUrl === url.url
                                                    ? "inline-block px-3 py-1 text-biru font-bold  hover:text-biru hover:font-semibold transition-all duration-200"
                                                    : "inline-block px-3 py-1 font-medium hover:text-biru hover:font-semibold transition-all duration-200"
                                            }
                                        >
                                            {url.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* button nav */}
                    <div className="hidden lg:block">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center space-x-3">
                                <span className="font-medium text-biruTua">
                                    Hallo,{auth.name}
                                </span>
                                <Avatar>
                                    <Avatar>
                                        {auth.image != null ? (
                                            <AvatarImage
                                                src={`/storage/${auth.image}`}
                                                alt="Avatar"
                                            />
                                        ) : (
                                            <AvatarImage
                                                src="/default-avatar.svg"
                                                alt="Avatar"
                                            />
                                        )}
                                    </Avatar>

                                    <AvatarFallback>{auth.name}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="z-[9999]">
                                <DropdownMenuLabel>
                                    {auth.name}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link
                                        href={route("student.profile")}
                                        className="flex items-center space-x-3"
                                    >
                                        <Users />
                                        <span>Profile</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Button
                                        onClick={handleLogout}
                                        className="w-full"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    {/* mobile hamburger */}
                    <div
                        className="cursor-pointer lg:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <Sheet>
                            <SheetTrigger>
                                <Menu size={24} />
                            </SheetTrigger>
                            <SheetContent
                                side={"left"}
                                className="w-full top-14"
                            >
                                <SheetDescription className="py-10 mt-5 overflow-y-auto text-base font-semibold text-black max-h-96 scrollbar-thin">
                                    <ul className="flex flex-col px-5 gap-7">
                                        {UrlMobileStudent.map((url) => {
                                            return (
                                                <li key={url.id}>
                                                    <Link href={url.url}>
                                                        {url.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                        <Button
                                            onClick={handleLogout}
                                            className="w-full"
                                        >
                                            <LogOut size={16} />
                                            Logout
                                        </Button>
                                    </ul>
                                </SheetDescription>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>

            {/* responsive mobile menu */}
            {/* <MobileMenu open={open} /> */}
        </>
    );
}
