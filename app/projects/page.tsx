import Image from "next/image";
import coding from "../../public/images/971.jpg"
import coding2 from "../../public/images/programming-background-with-person-working-with-codes-computer.jpg"
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "First Project",
    Github: "#",
    Live: "#",
    description: "My first project.",
    Stack: "Next.js, TailwindCSS, TypeScript, Vercel",
    imageSrc: coding,
    imageAlt: "coding",
  },
  {
    id: 2,
    name: "Second Project",
    Github: "#",
    Live: "#",
    description: "My second project.",
    Stack: "React, Bootstrap, TypeScript, Vercel",
    imageSrc: coding2,
    imageAlt: "coding",
  },
  // More projects...
];

export default function Projects() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={project.Github}>
                    <Link href={project.Live}></Link>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {project.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{project.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {project.Stack}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
