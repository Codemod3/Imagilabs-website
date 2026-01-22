import Link from "next/link";
import { ArrowLeft, Award, Users, Target, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import MotherboardCard from "@/components/MotherboardCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function About() {
    const values = [
        { icon: Award, title: "Excellence", desc: "We pursue excellence in every pixel, every line of code, and every client interaction." },
        { icon: Users, title: "Collaboration", desc: "Your success is our success. We work closely with clients as true partners." },
        { icon: Target, title: "Results-Driven", desc: "Beautiful design meets measurable outcomes. We focus on ROI and impact." },
        { icon: Zap, title: "Innovation", desc: "Staying ahead of trends and technologies to deliver cutting-edge solutions." },
    ];

    const stats = [
        { value: "20+", label: "Successful Projects" },
        { value: "2+", label: "Years Experience" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "80+", label: "Skilled Professionals" },
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
                        <h1 className="text-sm font-mono text-retro-rust uppercase tracking-widest mb-4">Who We Are</h1>
                        <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-6">About Imagilabs</h2>
                        <p className="text-foreground/60 text-lg md:text-xl max-w-3xl">
                            A creative digital agency based in Bengaluru, India, specializing in web design, development, and digital marketing.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Story */}
            <section className="px-6 lg:px-12 py-24 bg-background border-b border-retro-black/10 dark:border-retro-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                            Innovative Solutions, <br />Timeless Design.
                        </h2>
                        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                            <p>
                                Founded in 2023, Imagilabs emerged from a vision to bridge the gap between creative design and technical excellence. We believe that great digital experiences are built on a foundation of strategy, aesthetics, and cutting-edge technology.
                            </p>
                            <p>
                                Our team combines diverse expertise in design, development, marketing, and strategy to deliver comprehensive solutions that drive real results. We don't just build websites—we craft digital experiences that engage, convert, and scale.
                            </p>
                            <p>
                                From startups to established enterprises, we've partnered with clients across industries to elevate their digital presence and achieve measurable growth.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <MotherboardCard key={i} className="p-8 border-2 border-retro-black/10 dark:border-retro-white/30">
                                    <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-2">{stat.value}</h3>
                                    <p className="text-sm uppercase tracking-wider text-foreground/60">{stat.label}</p>
                                </MotherboardCard>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Values */}
            <section className="px-6 lg:px-12 py-24 bg-background">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-mono text-retro-rust uppercase tracking-widest mb-4">Our Values</h2>
                            <h3 className="text-4xl md:text-6xl font-serif text-foreground">What Drives Us</h3>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <MotherboardCard className="p-8 border-2 border-retro-black/10 dark:border-retro-white/30 group">
                                        <div className="mb-4">
                                            <div className="w-12 h-12 rounded-full bg-retro-rust/10 flex items-center justify-center group-hover:bg-retro-rust transition-colors">
                                                <Icon className="w-6 h-6 text-retro-rust group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                        <h4 className="text-2xl font-serif text-foreground mb-3">{value.title}</h4>
                                        <p className="text-foreground/70 leading-relaxed">{value.desc}</p>
                                    </MotherboardCard>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-12 bg-retro-black dark:bg-retro-rust text-white text-center transition-colors duration-300">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Let's Work Together</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Ready to transform your digital presence? Get in touch with our team.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-retro-rust dark:bg-white text-white dark:text-black font-bold hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
