import { Code2, Laptop, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Backend Development",
      description: "Node.js, Express, PostgreSQL, MongoDB",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "DevOps",
      description: "Docker, AWS, CI/CD, Git",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 5 years of experience in web development, I specialize in building
            scalable applications using modern technologies and best practices.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {skill.icon}
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;