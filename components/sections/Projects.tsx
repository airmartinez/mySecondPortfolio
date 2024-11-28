import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js and Stripe integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["React", "Node.js", "Socket.io"],
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;