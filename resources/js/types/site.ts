export interface VideoOptions {
    controls: string;
    nocookie: string;
    start: string;
}

export interface VideoData {
    width: string;
    height: string;
    responsive: boolean;
    url: string;
    embed_url: string;
    options: VideoOptions;
}

export interface Setting {
    site_name: string;
    keyword: string;
    email: string;
    address: string;
    phone: string;
    description: string;
    yt: string;
    ig: string;
    fb: string;
    logo: string;
    long_logo: string;
    thumbnail: string;
    heading: string;
    video: VideoData;
    badge: string;
}

export interface AboutData {
    title: string;
    description: string;
    image: string;
}

export interface FaqData {
    id: string;
    question: string;
    answer: string;
}
