"use server";

const url = process.env.APP_URL;

interface BannerType {
    id: number;
    img: string;
}

export const GetBanners = async (): Promise<BannerType[]> => {
    try {
        const res = await fetch(`${url}/banners`);
        const data: BannerType[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching banners:', error);
        return [];
    }
};
