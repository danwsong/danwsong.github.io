import { PageTitle, ProjectCard } from "@/components";
import gemuboi from "../../../public/gemuboi.png";

const PROJECTS = [
  {
    title: "gemuboi.js",
    description:
      "A browser-based Game Boy emulator with audio support and support for persistent game save storage, built in pure vanilla JavaScript.",
    image: gemuboi,
    link: "https://gemuboi.danwsong.com/",
  },
];

export default function Projects() {
  return (
    <div>
      <PageTitle>Projects</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
