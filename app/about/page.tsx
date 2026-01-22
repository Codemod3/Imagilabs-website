import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-retro-white dark:bg-retro-black text-retro-black dark:text-retro-white p-6 lg:p-12">
            <Link href="/" className="inline-flex items-center text-retro-black/60 dark:text-retro-white/60 hover:text-retro-rust transition-colors mb-12">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif mb-16">About Imagilabs</h1>
                <p>We are a creative agency...</p>
            </div>
        </main>
    );
}
