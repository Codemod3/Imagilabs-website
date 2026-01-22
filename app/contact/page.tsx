import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TiltContainer from "@/components/TiltContainer";
import RetroTerminal from "@/components/RetroTerminal";
import SlideInLeft from "@/components/FadeIn"; // Reuse FadeIn but naming it differently to import the default export

export default function Contact() {
    return (
        <main className="min-h-screen bg-retro-white dark:bg-retro-black text-retro-black dark:text-retro-white p-6 lg:p-12">
            <Link href="/" className="inline-flex items-center text-retro-black/60 dark:text-retro-white/60 hover:text-retro-rust transition-colors mb-12">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif mb-8">Start a Project</h1>
                <p className="text-xl text-retro-black/80 dark:text-retro-white/80 mb-12">
                    Let's create something amazing together. Reach out to us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-retro-black/20 dark:border-retro-white/20 py-3 focus:outline-none focus:border-retro-rust transition-colors" />
                            <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-retro-black/20 dark:border-retro-white/20 py-3 focus:outline-none focus:border-retro-rust transition-colors" />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-retro-black/20 dark:border-retro-white/20 py-3 focus:outline-none focus:border-retro-rust transition-colors" />
                        <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-transparent border-b border-retro-black/20 dark:border-retro-white/20 py-3 focus:outline-none focus:border-retro-rust transition-colors"></textarea>
                        <button className="px-8 py-4 bg-retro-black dark:bg-retro-white text-retro-white dark:text-retro-black font-medium hover:bg-retro-rust dark:hover:bg-retro-rust transition-all">
                            Send Message
                        </button>
                    </form>
                    <div className="hidden md:block">
                        <TiltContainer>
                            <RetroTerminal />
                        </TiltContainer>
                    </div>
                </div>
            </div>
        </main>
    );
}
