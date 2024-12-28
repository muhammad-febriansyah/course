import HomeLayout from "@/Layouts/HomeLayout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@inertiajs/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqData, Setting } from "@/types/site";
import { Badge } from "@/components/ui/badge";

interface Props {
    data: FaqData[];
    setting: Setting;
}
export default function Faq({ data, setting }: Props) {
    return (
        <HomeLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[140px]">
                {/* Add margin-top to offset navbar height */}
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">FAQ</h1>
                    <Breadcrumb className="flex flex-row items-center justify-center mx-auto space-x-2">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>FAQ</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
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
                        {data.map((item) => (
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
        </HomeLayout>
    );
}
