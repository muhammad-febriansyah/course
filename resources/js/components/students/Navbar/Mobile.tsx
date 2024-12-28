import { UrlMobileStudent } from "@/utils/studentUrl";
import { Link } from "@inertiajs/react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({ open }: { open: boolean }) {
    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 z-[99999] w-full h-screen top-16"
                >
                    <div className="py-10 m-0 text-base font-semibold text-white bg-biru">
                        <ul className="flex flex-col px-5 gap-7">
                            {UrlMobileStudent.map((url) => {
                                return (
                                    <li key={url.id}>
                                        <Link href={url.url}>{url.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
