import { PageTitle } from "@/components";
import Image from "next/image";
import Photography1 from "../../../public/photography/001.jpg";
import Photography2 from "../../../public/photography/002.jpg";
import Photography3 from "../../../public/photography/003.jpg";
import Photography4 from "../../../public/photography/004.jpg";
import Photography5 from "../../../public/photography/005.jpg";
import Photography6 from "../../../public/photography/006.jpg";
import Photography7 from "../../../public/photography/007.jpg";
import Photography8 from "../../../public/photography/008.jpg";
import Photography9 from "../../../public/photography/009.jpg";

const PHOTOS = [
  Photography1,
  Photography2,
  Photography3,
  Photography4,
  Photography5,
  Photography6,
  Photography7,
  Photography8,
  Photography9,
];

export default function Photography() {
  return (
    <div>
      <PageTitle>Photography</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PHOTOS.map((photo, index) => (
          <div className="overflow-hidden rounded-2xl border-1" key={index}>
            <Image src={photo} alt={`photo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
