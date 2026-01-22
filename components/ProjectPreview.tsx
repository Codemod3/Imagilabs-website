"use client";
import { useState } from 'react';
import { X } from 'lucide-react';

interface ProjectPreviewProps {
    project: {
        title: string;
        url: string;
    };
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsFullscreen(true)}
                className="aspect-video w-full flex flex-col group-hover:bg-[#1a1a1a] transition-colors cursor-pointer relative overflow-hidden"
            >
                {/* Browser Bar */}
                <div className="h-8 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    <div className="ml-4 h-4 w-1/2 bg-[#3d3d3d] rounded-md text-white/40 text-xs flex items-center px-2 truncate">
                        {project.url}
                    </div>
                </div>

                {/* Content Mock */}
                <div className="flex-1 p-8 flex items-center justify-center relative bg-[#121212]">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:animate-[shimmer_2s_infinite]"></div>
                    <div className="text-center z-10">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-dashed border-white/10 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                            <div className="w-10 h-10 bg-retro-rust rounded-full opacity-50 blur-md"></div>
                        </div>
                        <p className="text-white font-serif italic text-3xl tracking-wide drop-shadow-md mb-3">{project.title}</p>
                        <div className="mt-4 px-3 py-1 bg-retro-rust/20 text-retro-rust border border-retro-rust/50 rounded text-xs font-mono inline-block">
                            CLICK TO EXPAND
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setIsFullscreen(false)}
                >
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button
                            onClick={() => setIsFullscreen(false)}
                            className="absolute -top-12 right-0 text-white hover:text-retro-rust transition-colors p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* iframe */}
                        <div className="w-full h-full bg-[#121212] rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl">
                            <div className="h-10 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                <div className="ml-4 flex-1 h-6 bg-[#3d3d3d] rounded-md text-white/60 text-sm flex items-center px-3">
                                    {project.url}
                                </div>
                            </div>
                            <iframe
                                src={project.url}
                                className="w-full h-[calc(100%-40px)] bg-white"
                                title={project.title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
