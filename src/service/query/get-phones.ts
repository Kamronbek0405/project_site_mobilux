"use server";

const url = process.env.APP_URL;

export interface phonesType {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

export const GetPhones = async (): Promise<phonesType[]> => {
  try {
    const res = await fetch(`${url}/phones`);
    const data: phonesType[] = await res.json();  
    return data;
  } catch (error) {
    console.error("Error fetching phones:", error);
    return []; 
  }
};
