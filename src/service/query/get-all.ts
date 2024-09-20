"use server";

const url = process.env.APP_URL;

interface allType {
    id: number;
    img: string;
    title: string;
    brand: string;   
    price: string; 
    color?: string; 
    ram?: string; 
    geForce?: string; 
    core?: string;
    display?: string;
    memory?: string; 
    weight?: string;
}

export const GetAll = async (query: string): Promise<allType[]> => {
    try {
        
        const res = await fetch(`${url}/all?search=${encodeURIComponent(query)}`);
        const data: allType[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
