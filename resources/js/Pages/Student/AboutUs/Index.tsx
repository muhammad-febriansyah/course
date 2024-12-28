import StudentsLayout from "@/Layouts/StudentsLayouts";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AboutData, FaqData, Setting } from "@/types/site";
import { Link } from "@inertiajs/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface Props {
    about: AboutData;
    faq: FaqData[];
    setting: Setting;
}
export default function Index({ about, faq, setting }: Props) {
    return (
        <StudentsLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[105px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Tentang Kami
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
                            className="text-justify text-gray-800"
                            dangerouslySetInnerHTML={{
                                __html: about.description,
                            }}
                        />
                    </div>
                </div>
            </section>

            <section className="container py-20">
                <div className="space-y-10">
                    <div className="flex flex-col items-start space-y-3 md:items-center">
                        <Badge className="text-xl text-white bg-biruTua">
                            Tanya {setting.site_name}
                        </Badge>
                        <h1 className="text-2xl font-bold leading-snug text-left md:text-center md:text-5xl md:leading-normal text-biruTua">
                            Pertanyaan Yang Sering Diajukan😊
                        </h1>
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full px-6 py-5 bg-white rounded-2xl"
                    >
                        {faq.map((item) => (
                            <AccordionItem value={item.id} key={item.id}>
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
