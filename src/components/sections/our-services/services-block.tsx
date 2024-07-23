"use client";

import { servicesData } from "@/database/services.data";
import { ServiceCard } from "./service-card";

const ServicesBlock = () => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {servicesData.map((item, i) => (
        <ServiceCard key={i} {...item} />
      ))}
    </div>
  );
};

export default ServicesBlock;
