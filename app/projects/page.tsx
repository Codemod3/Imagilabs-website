import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import TiltContainer from "@/components/TiltContainer";
import SpotlightCard from "@/components/SpotlightCard";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectPreview from "@/components/ProjectPreview";

export default function Projects() {
    const projects = [
        {
            title: "DirectSeatz Website",
            type: "Web Design",
            url: "https://directseatz.com",
            desc: "A sleek, powerful website optimized to convert. Built with Next.js and modern design principles."
        },
        {
            title: "Gyaniversity",
            type: "Educational Platform",
            url: "https://gyaniversity.com",
            desc: "Modern educational platform design with user-friendly interface and seamless navigation."
        },
        {
            title: "Shree Maruthi Industries",
            type: "Manufacturing",
            url: "https://shreemaruthiindustries.com",
            desc: "Clean, professional corporate presence for a leading manufacturing company."
        },
        {
            title: "BlueStar Metacraft",
            type: "Corporate Website",
            url: "https://bluestarconsultancy.com",
            desc: "Professional consultancy website with modern design and clear messaging."
        },
        {
            title: "Shipley India",
            type: "Enterprise Solutions",
            url: "https://shipleytechnicaltraining.in",
            desc: "Technical training platform with comprehensive course management system."
        },
        {
            title: "Portfolio Showcase",
            type: "Personal Branding",
            url: "https://example.com",
            desc: "Creative portfolio demonstrating design capabilities and technical expertise."
        },
    ];

    return (
        <main className="flex flex-col min-h-screen font-sans bg-background text-foreground transition-colors duration-300">
            <ThemeToggle />

            {/* Header */}
            <section className="px-6 lg:px-12 pt-24 pb-16 bg-background border-b border-retro-black/10 dark:border-retro-white/10">
                <div className="max-w-7xl mx-auto">
                    <Link href="/" className="inline-flex items-center text-foreground/60 hover:text-retro-rust transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <FadeIn>
                        <h1 className="text-sm font-mono text-retro-rust uppercase tracking-widest mb-4">Portfolio</h1>
                        <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Featured Projects</h2>
                        <p className="text-foreground/60 text-lg md:text-xl max-w-3xl">
                            A showcase of our recent work across web design, development, and digital strategy.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Projects List */}
            <section className="bg-retro-black text-retro-white py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-24">
                        {projects.map((project, i) => (
                            <FadeIn key={i} delay={0.1}>
                                <div className="group border-t border-white/20 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                    <div className="lg:col-span-4">
                                        <span className="text-retro-rust font-mono text-sm mb-4 block">0{i + 1} / PROJECT</span>
                                        <h3 className="text-3xl md:text-5xl font-serif mb-4 group-hover:text-retro-rust transition-colors">{project.title}</h3>
                                        <div className="flex gap-2 mb-6">
                                            <span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider">{project.type}</span>
                                        </div>
                                        <p className="text-white/60 mb-8 max-w-sm">{project.desc}</p>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-retro-rust transition-colors">
                                            <Globe className="w-4 h-4 mr-2" /> Live Demo
                                        </a>
                                    </div>
                                    <div className="lg:col-span-8">
                                        <TiltContainer>
                                            <SpotlightCard className="rounded-xl border border-white/10 bg-[#121212] overflow-hidden shadow-2xl">
                                                <ProjectPreview project={project} />
                                            </SpotlightCard>
                                        </TiltContainer>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-12 bg-retro-rust text-white text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Have a Project in Mind?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Let's collaborate and bring your vision to life.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Start Your Project
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
