import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-primary">Jhonryl Martinez</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            A passionate full-stack developer crafting beautiful and functional web experiences.
            Specialized in React, Node.js, and modern web technologies.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;