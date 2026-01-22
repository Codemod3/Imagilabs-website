import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TiltContainer from "@/components/TiltContainer";
import SpotlightCard from "@/components/SpotlightCard";

export default function Projects() {
    return (
        <main className="min-h-screen bg-retro-white dark:bg-retro-black text-retro-black dark:text-retro-white p-6 lg:p-12">
            <Link href="/" className="inline-flex items-center text-retro-black/60 dark:text-retro-white/60 hover:text-retro-rust transition-colors mb-12">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif mb-16">All Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <TiltContainer key={i} className="h-full">
                            <SpotlightCard className="h-[300px] border border-retro-black/10 dark:border-retro-white/10 p-8 flex flex-col justify-end bg-retro-beige/20 dark:bg-retro-white/5">
                                <span className="text-retro-rust font-mono text-sm mb-2">0{i} / PROJECT</span>
                                <h3 className="text-2xl font-serif">Project Title {i}</h3>
                                <p className="text-sm opacity-60">Web-Development • Branding</p>
                            </SpotlightCard>
                        </TiltContainer>
                    ))}
                </div>
            </div>
        </main>
    );
}
