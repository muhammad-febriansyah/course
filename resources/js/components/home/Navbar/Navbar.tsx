import { Setting } from "@/types/site";
import { Url, UrlMobile } from "@/utils/url";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDown, Mail, MapPin, Menu, PhoneCall, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";

interface SettingProps {
    setting: Setting;
}

export default function Navbar() {
    const { setting } = usePage().props as unknown as SettingProps;
    const [open, setOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const { url: currentUrl } = usePage();
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
                        <Link href={route("home")}>
                            <img
                                src={setting.long_logo}
                                className="w-32"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    {/* menu nav */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center space-x-2 text-black">
                            {Url.map((url) => {
                                return (
                                    <li
                                        key={url.id}
                                        className={
                                            url.subMenu
                                                ? "relative cursor-pointer group"
                                                : ""
                                        }
                                    >
                                        <Link
                                            href={url.url}
                                            className={
                                                currentUrl === url.url
                                                    ? "inline-block px-3 py-1 text-biru font-bold  hover:text-biru hover:font-semibold transition-all duration-200"
                                                    : url.subMenu
                                                    ? "flex items-center px-3 py-1 font-medium hover:text-biru hover:font-semibold transition-all duration-200 gap-[2px] h-[72px]"
                                                    : "inline-block px-3 py-1 font-medium hover:text-biru hover:font-semibold transition-all duration-200"
                                            }
                                        >
                                            {url.name}
                                            {url.subMenu && (
                                                <ChevronDown className="transition-all duration-200 group-hover:rotate-180" />
                                            )}
                                        </Link>
                                        <div className="absolute -left-9 z-[99] hidden w-[180px] bg-biruTua rounded-xl p-5 text-white group-hover:block">
                                            <ul className="space-y-3">
                                                {url.subMenu?.map((subMenu) => {
                                                    return (
                                                        <li
                                                            key={
                                                                subMenu.idSubMenu
                                                            }
                                                            className="px-3 transition-all duration-200 rounded-lg hover:bg-white hover:text-biru hover:font-semibold"
                                                        >
                                                            <Link
                                                                href={
                                                                    subMenu.url
                                                                }
                                                            >
                                                                {subMenu.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* button nav */}
                    <div className="flex items-center space-x-1">
                        <Link
                            href="/home/login"
                            className="hidden px-6 py-2 font-semibold transition-all duration-300 bg-white border-2 rounded-full text-biruTua border-biruTua lg:block hover:bg-biruTua hover:text-white hover:ring hover:ring-white"
                        >
                            Login
                        </Link>
                        <Link
                            href="/home/register"
                            className="hidden px-6 py-2 font-semibold text-white transition-all duration-300 border-2 rounded-full lg:block bg-biruTua hover:bg-white hover:text-biruTua hover:ring hover:ring-biruTua"
                        >
                            Registrasi
                        </Link>
                    </div>
                    {/* mobile hamburger */}
                    <div className="cursor-pointer lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Menu size={24} />
                            </SheetTrigger>
                            <SheetContent
                                side={"left"}
                                className="w-full top-14"
                            >
                                <SheetDescription className="py-10 mt-5 overflow-y-auto h-[1000px] text-base font-semibold text-black max-h-96 scrollbar-thin">
                                    <ul className="flex flex-col px-5 gap-7">
                                        {UrlMobile.map((url) => {
                                            return (
                                                <li key={url.id}>
                                                    <Link href={url.url}>
                                                        {url.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
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
