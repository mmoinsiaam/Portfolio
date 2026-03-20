import hacImg from "../assets/HaC.png";
import tempImg from "../assets/temp.jpg";
import etchImg from "../assets/etch.png";
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Homelab As Code",
        description: "Automates homelab infrastructure using Docker, Terraform, and Ansible for reproducible deployments.",
        image: hacImg,
        tags: ["Docker", "Terraform", "Ansible", "Cloud Images", "Infrastructure as Code", "Linux"],
        demoUrl: "",
        githubUrl: "https://github.com/mmoinsiaam/HaC",
    },
    {
        id: 2,
        title: "Containerized Temp Monitor",
        description: "Checks Pi temperature using cron jobs and sends automated email alerts when thresholds are exceeded, all containerized with Docker.",
        image: tempImg,
        tags: ["Docker", "Raspberry Pi", "Cron Jobs", "Python", "Monitoring", "Email Automation", "Linux"],
        demoUrl: "",
        githubUrl: "https://github.com/mmoinsiaam/Docker-monitor_temp",
    },
    {
        id: 3,
        title: "Etch-A-Sketch",
        description: "Interactive drawing app built with JavaScript featuring dynamic grid controls and real-time rendering.",
        image: etchImg,
        tags: ["JavaScript", "HTML", "CSS", "DOM Manipulation", "Interactive UI","Event Handling"],
        demoUrl: "https://mmoinsiaam.github.io/",
        githubUrl: "https://github.com/mmoinsiaam/Etch-A-Sketch",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {project.demoUrl && (
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank" 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > 
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                        <a 
                                        href={project.githubUrl} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > 
                                            <Github size={20} />
                                        </a> 
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/mmoinsiaam" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check Out My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}