import Image, { StaticImageData } from "next/image";
import React from "react";

// Define the type for props
interface CategoryCardProps {
  title: string;
  image: StaticImageData; // Import StaticImageData from next/image
  link: string;
}

const CategoryCard = (data: CategoryCardProps) => {
  const { title, image, link } = data;
  return (
    <div className="mb-52">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover"
      />
      <h3
        className="text-center text-[12px] pt-2 pb-2 md:text-[15px] lg:text-[18px]"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
    </div>
  );
};

export default CategoryCard;
