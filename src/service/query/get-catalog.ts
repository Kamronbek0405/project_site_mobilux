"use server";

import { productTypes } from "../types/types";

const url = process.env.APP_URL;

export interface catalogType {
    id: number;
    img: string;
    text: string;
    name: string
}

export const    GetCatalog = async (): Promise<productTypes[]> => {
    try {
        const res = await fetch(`${url}/catalog`);
        const data: productTypes[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching banners:', error);
        return [];
    }
};
