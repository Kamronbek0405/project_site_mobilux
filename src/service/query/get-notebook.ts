"use server";
import { productTypes } from "../types/types";

const url = process.env.APP_URL;



export const GetNotebook = async (): Promise<productTypes[]> => {
    try {
        const res = await fetch(`${url}/notebook`);
        const data: productTypes[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching banners:', error);
        return [];
    }
};
