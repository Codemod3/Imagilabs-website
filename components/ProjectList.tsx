"use client";

import { useState } from "react";
import { ArrowUpRight, X, ExternalLink, Globe } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

type Project = {
    title: string;
    type: string;
    url: string;
    description: string;
};

const projects: Project[] = [
    {
        title: "DirectSeatz",
        type: "Web Design",
        url: "https://directseatz.com",
        description: "Web Design project for DirectSeatz. A sleek, powerful website optimized to convert."
    },
    {
        title: "Gyaniversity",
        type: "Web Design Platform",
        url: "https://gyaniversity.com",
        description: "Modern educational platform design. Web Design project for Gyaniversity."
    },
    {
        title: "Shree Maruthi Industries",
        type: "Manufacturing Leader",
        url: "https://shreemaruthiindustries.com",
        description: "Web Design project for a manufacturing leader. Clean, professional corporate presence."
    }
];

export default function ProjectList() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    return (
        <>
            <div className="space-y-32">
                {projects.map((project, i) => (
                    <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Content */}
                        <div className="lg:col-span-5 flex flex-col items-start pt-12 border-t border-retro-black/20">
                            <span className="font-mono text-sm text-retro-rust mb-6">0{i + 1} / {project.type.toUpperCase()}</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-retro-black mb-6 group-hover:text-retro-rust transition-colors duration-300">
                                {project.title}
                            </h2>
                            <p className="text-lg text-retro-black/70 mb-10 text-balance">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setActiveProject(project)}
                                    className="px-6 py-3 bg-retro-black text-retro-white font-medium hover:bg-retro-rust transition-colors flex items-center gap-2"
                                >
                                    <Globe className="w-4 h-4" /> Live Demo
                                </button>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-retro-black/20 text-retro-black font-medium hover:border-retro-black transition-colors flex items-center gap-2"
                                >
                                    Visit Site <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="lg:col-span-7">
                            <SpotlightCard className="rounded-sm border-retro-black/10">
                                <div
                                    onClick={() => setActiveProject(project)}
                                    className="cursor-pointer aspect-[16/9] bg-retro-black/5 overflow-hidden relative group-hover:shadow-2xl transition-all duration-500 ease-out"
                                >
                                    {/* Abstract visual representation since we don't have screenshots yet */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-retro-beige/10 group-hover:bg-retro-beige/20 transition-colors">
                                        <span className="font-serif italic text-retro-black/30 text-2xl group-hover:text-retro-rust transition-colors">
                                            Preview: {project.title}
                                        </span>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full Screen Modal */}
            {activeProject && (
                <div className="fixed inset-0 z-[100] bg-retro-black/95 backdrop-blur-sm p-4 md:p-8 flex flex-col">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center text-white mb-4">
                        <div>
                            <h3 className="font-serif text-xl">{activeProject.title}</h3>
                            <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className="text-sm opacity-60 hover:opacity-100 hover:text-retro-rust transition-colors flex items-center gap-1">
                                {activeProject.url} <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                        <button
                            onClick={() => setActiveProject(null)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Iframe Container */}
                    <div className="flex-grow bg-white rounded-sm overflow-hidden shadow-2xl">
                        <iframe
                            src={activeProject.url}
                            className="w-full h-full border-0"
                            title={`${activeProject.title} Live Demo`}
                            loading="lazy"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
