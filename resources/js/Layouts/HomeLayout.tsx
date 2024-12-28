import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar/Navbar";
import { Setting } from "@/types/site";
import { Head, usePage } from "@inertiajs/react";

type Props = {
    children: React.ReactNode;
};
interface SettingProps {
    setting: Setting;
}
function HomeLayout({ children }: Props) {
    const { setting } = usePage().props as unknown as SettingProps;
    return (
        <>
            <Head>
                <title>{setting.site_name}</title>
                <meta
                    head-key="description"
                    name="description"
                    content={setting.keyword}
                />
                <link rel="icon" type="image/svg+xml" href={setting.logo} />
            </Head>
            <div className="overflow-x-hidden">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}

export default HomeLayout;
