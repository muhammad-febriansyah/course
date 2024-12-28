import StudentsLayout from "@/Layouts/StudentsLayouts";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Daum, KelasType } from "@/types/kelas";
import { Kelas, SectionType } from "@/types/section";
import { VideoType } from "@/types/video";
import { Link, useForm } from "@inertiajs/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Loader2, PlayCircleIcon, StarIcon } from "lucide-react";
import { FormEventHandler, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { route } from "ziggy-js";
import { Inertia } from "@inertiajs/inertia";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JadwalMeeting } from "@/types/jadwal";

interface Props {
    kelas: Kelas;
    sectionData: SectionType[];
    video: VideoType[];
    jadwal: JadwalMeeting[];
}

export default function Detail({ sectionData, video, kelas, jadwal }: Props) {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(
        null
    );
    const [selectedVideoId, setSelectedVideoId] = useState<{
        sectionId: number;
        videoId: number;
    } | null>(null); // State untuk video aktif
    const [selectedVideoTitle, setSelectedVideoTitle] = useState<string | null>(
        null
    );
    const [activeSection, setActiveSection] = useState<string | null>(null); // State untuk menentukan section yang aktif
    const [sectionTitle, setSectionTitle] = useState<string | null>(null); // State untuk judul section
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false); // Dialog open state
    const [rating, setRating] = useState<number>(0); // To store the rating value (1 to 5)
    const [testimonial, setTestimonial] = useState<string>(""); // To store the testimonial text
    const [isLastVideo, setIsLastVideo] = useState<boolean>(false);
    const handleVideoClick = (
        videoUrl: string,
        videoTitle: string,
        sectionId: number,
        videoId: number,
        sectionTitle: string
    ) => {
        setSelectedVideoUrl(videoUrl);
        setSelectedVideoTitle(videoTitle);
        setSelectedVideoId({ sectionId, videoId });
        setSectionTitle(sectionTitle);

        // Find the last video in the entire video list
        const lastVideo = video.reduce(
            (prev, current) => (current.id > prev.id ? current : prev),
            video[0]
        );

        // Check if the clicked video is the last video
        if (videoId === lastVideo.id) {
            setIsLastVideo(true); // Mark this as the last video
        } else {
            setIsLastVideo(false); // If not the last video
        }

        // If the clicked video is the last video in the entire list, open the dialog
        if (videoId === lastVideo.id) {
            setIsDialogOpen(true); // Open dialog if it's the last video in the entire list
        }
    };

    const handleNextVideo = () => {
        if (selectedVideoId) {
            const currentSectionId = selectedVideoId.sectionId;
            const currentVideoId = selectedVideoId.videoId;

            // Find the next video
            const nextVideoIndex = video.findIndex(
                (vid) =>
                    (vid.section_id === currentSectionId &&
                        vid.id === currentVideoId + 1) ||
                    vid.section_id > currentSectionId // If it's the next section
            );

            if (nextVideoIndex !== -1) {
                const nextVideo = video[nextVideoIndex];
                setSelectedVideoUrl(nextVideo.url.embed_url);
                setSelectedVideoTitle(nextVideo.title);
                setSelectedVideoId({
                    sectionId: nextVideo.section_id,
                    videoId: nextVideo.id,
                });
                setActiveSection(nextVideo.section_id.toString()); // Update active section

                // Check if the next video is the last one
                const lastVideo = video.reduce(
                    (prev, current) => (current.id > prev.id ? current : prev),
                    video[0]
                );

                if (nextVideo.id === lastVideo.id) {
                    setIsLastVideo(true); // If next video is the last video
                } else {
                    setIsLastVideo(false); // Not the last video
                }
            }
        }
    };

    const handleRatingClick = (value: number) => {
        setRating(value); // Set the selected rating
        setData("rating", value);
    };
    const kelasId = kelas.id;
    const { data, setData, post, processing, errors, reset } = useForm({
        rating: rating,
        kelasId: kelasId, // Misalnya kelasId adalah 1
        testimonial: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            post(route("student.sendTestimonial"), {
                onSuccess: () => {
                    toast.success("Testimonial berhasil dikirim!", {
                        position: "top-right",
                    });
                    setIsDialogOpen(false);
                    Inertia.reload();
                },
                onError: () => {
                    toast.error(
                        "Terjadi kesalahan saat mengirim testimonial.",
                        {
                            position: "top-right",
                        }
                    );
                },
            });
        } catch (error) {
            toast.error("Terjadi kesalahan saat mengirim testimonial.", {
                position: "top-right",
            });
        }
    };
    const handleTestimonialChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setTestimonial(e.target.value); // Update testimonial text
    };

    useEffect(() => {
        const firstVideo = video[0];
        if (firstVideo) {
            setSelectedVideoUrl(firstVideo.url.embed_url);
            setSelectedVideoTitle(firstVideo.title);
            setSectionTitle(firstVideo.section.title);
            setSelectedVideoId({
                sectionId: firstVideo.section_id,
                videoId: firstVideo.id,
            });
            setActiveSection(firstVideo.section_id.toString()); // Set section pertama yang aktif
        }
    }, [video]);
    return (
        <StudentsLayout>
            <section className="flex items-center h-56 justify-center bg-white mt-14 lg:mt-[105px]">
                <div className="px-6 text-center space-y-7 ">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Detail Course
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
                                <BreadcrumbPage>Detail Course</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section className="container py-10">
                <Tabs defaultValue="course">
                    <TabsList>
                        <TabsTrigger value="course" className="rounded-full">
                            Course
                        </TabsTrigger>
                        <TabsTrigger value="jadwal" className="rounded-full">
                            Jadwal Meeting
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="course">
                        <div className="grid grid-cols-1 gap-y-5 lg:gap-x-10 lg:grid-cols-3">
                            <div className="col-span-1 bg-white rounded-2xl max-h-min">
                                <ScrollArea className="p-5 h-min">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full"
                                    >
                                        {sectionData.map((section, index) => (
                                            <AccordionItem
                                                value={index.toString()}
                                                key={index}
                                                className="px-6 my-3 mt-5 bg-gray-300 rounded-2xl"
                                            >
                                                <AccordionTrigger className="flex items-center text-black">
                                                    <div className="flex flex-row items-center font-semibold gap-x-3">
                                                        <span className="flex items-center justify-center text-white bg-gray-600 rounded-full w-7 h-7">
                                                            {index + 1}
                                                        </span>
                                                        {section.title}
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul>
                                                        {video
                                                            .filter(
                                                                (vid) =>
                                                                    vid.section_id ===
                                                                    section.id
                                                            )
                                                            .map(
                                                                (
                                                                    filteredVideo,
                                                                    videoIndex
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            videoIndex
                                                                        }
                                                                        className="flex flex-row items-center w-full px-5 py-3 gap-x-2"
                                                                    >
                                                                        <div
                                                                            onClick={() =>
                                                                                handleVideoClick(
                                                                                    filteredVideo
                                                                                        .url
                                                                                        .embed_url,
                                                                                    filteredVideo.title,
                                                                                    filteredVideo.section_id,
                                                                                    filteredVideo.id, // Pass section_id and id
                                                                                    filteredVideo
                                                                                        .section
                                                                                        .title // Pastikan ini adalah section.title yang benar
                                                                                )
                                                                            }
                                                                            className={`flex flex-row items-center justify-between w-full px-3 py-2 font-semibold text-white transition-all duration-200 rounded-full cursor-pointer ${
                                                                                selectedVideoId?.sectionId ===
                                                                                    filteredVideo.section_id &&
                                                                                selectedVideoId?.videoId ===
                                                                                    filteredVideo.id
                                                                                    ? "bg-biru" // Background biru jika video ini yang dipilih
                                                                                    : "bg-biruTua hover:bg-biru"
                                                                            } gap-x-2`}
                                                                        >
                                                                            <div className="flex flex-row items-center gap-x-2">
                                                                                <PlayCircleIcon className="w-6 h-6" />
                                                                                <span className="text-white">
                                                                                    {
                                                                                        filteredVideo.title
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                            <span className="hidden text-white md:block">
                                                                                {
                                                                                    filteredVideo.duration
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </ScrollArea>
                            </div>
                            <div className="col-span-2 rounded-2xl">
                                {selectedVideoUrl ? (
                                    <>
                                        <iframe
                                            width="100%"
                                            height="500px"
                                            className="rounded-2xl"
                                            src={selectedVideoUrl}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h1 className="mt-10 mb-5 text-2xl font-bold lg:text-4xl text-biruTua">
                                                    {selectedVideoTitle}
                                                </h1>

                                                <h1 className="text-lg text-gray-500">
                                                    {sectionTitle}
                                                </h1>
                                            </div>
                                            {!isLastVideo && (
                                                <Button
                                                    onClick={handleNextVideo}
                                                    className="rounded-full bg-biru"
                                                >
                                                    Selanjutnya
                                                </Button>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <p>
                                        Pilih video untuk menampilkan di sini.
                                    </p>
                                )}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="jadwal">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-2xl">
                                <thead className="text-base font-semibold text-white ltr:text-left bg-biru rtl:text-right">
                                    <tr>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            No
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Kelas
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Section
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Tgl Jadwal
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Jam Mulai
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Jam Selesai
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Platform
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Link
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Zoom Id
                                        </th>
                                        <th className="px-4 py-2 font-medium text-white whitespace-nowrap">
                                            Zoom Passcode
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-sm divide-y divide-gray-200">
                                    {jadwal.map((trx, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {trx.kelas.title}
                                            </td>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {trx.section.title}
                                            </td>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-normal">
                                                {new Date(
                                                    trx.tgl_jadwal
                                                ).toLocaleDateString("id-ID", {
                                                    weekday: "long",
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </td>

                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {trx.jam_mulai}
                                            </td>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {trx.jam_selesai}
                                            </td>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {trx.platform}
                                            </td>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                <a
                                                    href={trx.link}
                                                    target="_blank"
                                                >
                                                    {" "}
                                                    {trx.link}
                                                </a>
                                            </td>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {trx.zoom_id}
                                            </td>
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {trx.zoom_passcode}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
            {isDialogOpen && (
                <Dialog
                    open={isDialogOpen}
                    onOpenChange={(open) => setIsDialogOpen(open)}
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Berikan Rating seberapa bagus kelas ini 😊
                            </DialogTitle>
                            <DialogDescription>
                                <form onSubmit={handleSubmit}>
                                    <div className="my-5 space-y-5">
                                        <div className="grid flex-1 gap-2">
                                            <Label
                                                htmlFor="link"
                                                className="text-black"
                                            >
                                                Rating
                                            </Label>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg
                                                        key={star}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512"
                                                        className={`w-5 h-5 cursor-pointer ${
                                                            rating >= star
                                                                ? "text-yellow-400"
                                                                : "text-gray-300"
                                                        }`}
                                                        fill="currentColor"
                                                        onClick={() =>
                                                            handleRatingClick(
                                                                star
                                                            )
                                                        }
                                                    >
                                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="testimonial"
                                                className="block text-sm font-semibold text-gray-700"
                                            >
                                                Review
                                            </label>
                                            <Textarea
                                                id="testimonial"
                                                value={data.testimonial}
                                                onChange={(e) =>
                                                    setData(
                                                        "testimonial",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                                placeholder="Write your testimonial here..."
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end gap-2">
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
                                                Kirim Review
                                            </Button>
                                        )}
                                        <Button
                                            onClick={() =>
                                                setIsDialogOpen(false)
                                            } // Close the dialog
                                            className="text-white bg-gray-500 rounded-full"
                                        >
                                            Batal
                                        </Button>
                                    </div>
                                </form>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            )}
        </StudentsLayout>
    );
}
