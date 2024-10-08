export interface productTypes {
    img: string;
    title: string;
    brand: string;
    price: string;
    color: string;
    ram: string;
    rame: string;
    geForce?: string | null;
    core?: string;
    display?: string;
    memory?: string | null;
    weight?: string;
    text: string;
    name: string;
    id: number;
    quantity?: number;
    details: {
      display?: string | null;
      frequency?: string;
      weight?: string;
      security?: string;
      diagonal?: string;
    };
  }
  