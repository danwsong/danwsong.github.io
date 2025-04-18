import { Link } from "@/components";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border-1">
      <Image src={image} alt={title} className="w-full h-auto" />
      <div className="p-8 border-t-1 gap-4 flex flex-col">
        <Link href={link} className="font-bold underline">
          {title}
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}
