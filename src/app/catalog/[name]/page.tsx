import { CatalogCard } from "@/components/catalog-card/catalog-card";
import { getCatalogByName } from "@/service/query/get-catalog-name";
import React from 'react';
import { productTypes } from "@/service/types/types"; 

interface CatalogSingleProps {
  params: {
    name: string; 
  };
}

const CatalogSingle: React.FC<CatalogSingleProps> = async ({ params }) => {
  const { name } = params;

  const data: productTypes[] = await getCatalogByName(name); 

  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((item) => (
          <CatalogCard key={item.id} {...item} /> 
        ))}
      </div>
    </div>
  );
};

export default CatalogSingle;
