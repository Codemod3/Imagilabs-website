import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SpotlightCard from "@/components/SpotlightCard";
import RetroTerminal from "@/components/RetroTerminal";
import TiltContainer from "@/components/TiltContainer";
import ThemeToggle from "@/components/ThemeToggle";
import Code3D from "@/components/Code3D";
import MotherboardCard from "@/components/MotherboardCard";
import ProjectPreview from "@/components/ProjectPreview";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen font-sans bg-background text-foreground transition-colors duration-300">
            <ThemeToggle />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 border-b border-retro-black/10 bg-background dark:border-retro-white/10 overflow-hidden transition-colors duration-300">
                <MotherboardCard className="border-0">
                    <div className="max-w-7xl mx-auto w-full pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="z-10">
                            <FadeIn delay={0.1}>
                                <p className="text-retro-rust font-sans font-medium mb-6 tracking-widest uppercase text-sm">
                                    Established 2023 • Bengaluru, India
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-foreground tracking-tight leading-[0.9] mb-12">
                                    IMAGILABS
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="max-w-xl">
                                    <p className="text-xl md:text-3xl text-foreground/80 font-serif leading-relaxed text-balance">
                                        We specialize in web design, SEO, UI/UX, branding, and digital marketing.
                                        <span className="text-foreground/40"> Elevate your brand and transform your digital presence.</span>
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="mt-16 flex flex-wrap gap-6">
                                    <Link
                                        href="/contact"
                                        className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium hover:bg-retro-rust hover:text-white transition-all duration-300"
                                    >
                                        Start a Project
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="group flex items-center gap-3 px-8 py-4 border border-foreground/20 hover:border-foreground transition-all duration-300 text-foreground"
                                    >
                                        View Work
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="hidden lg:block z-0">
                            <FadeIn delay={0.5}>
                                <RetroTerminal />
                            </FadeIn>
                        </div>
                    </div>
                </MotherboardCard>
            </section>

            {/* About Summary */}
            <section className="px-6 lg:px-12 py-24 border-b border-retro-black/10 dark:border-retro-white/10 bg-retro-beige/20 dark:bg-white/5 transition-colors duration-300">
                <FadeIn>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground/60 mb-2">About Us</h2>
                            <p className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                                Innovative Solutions, <br />Timeless Design.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
                                We blend creativity and technology to deliver designs that stand the test of time. Partner with us to bring your ideas to life with precision and creativity. We create engaging and intuitive digital experiences tailored to your audience.
                            </p>
                            <Link href="/about" className="inline-flex items-center text-retro-rust font-medium hover:underline decoration-retro-rust/50 underline-offset-4">
                                More about our team <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Metrics Grid */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-retro-black/10 dark:border-retro-white/10 bg-background transition-colors duration-300">
                {[
                    { label: "Successful Projects", value: "20+" },
                    { label: "Years Experience", value: "2+" },
                    { label: "Satisfied Clients", value: "20+" },
                    { label: "Client Satisfaction", value: "98%" },
                    { label: "Skilled Pros", value: "80+" },
                    { label: "Avg Sales Increase", value: "45%" },
                ].map((stat, i) => (
                    <FadeIn key={i} delay={i * 0.1} className={`p-8 md:p-12 border-r border-b lg:border-b-0 border-retro-black/10 dark:border-retro-white/10 ${i % 2 === 1 ? 'bg-black/5 dark:bg-white/5' : ''} ${i === 5 ? 'border-r-0' : ''}`}>
                        <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-2">{stat.value}</h3>
                        <p className="text-xs md:text-sm font-sans uppercase tracking-wider text-foreground/60">{stat.label}</p>
                    </FadeIn>
                ))}
            </section>

            {/* Services / Core Systems */}
            <section className="px-6 lg:px-12 py-32 border-b border-retro-black/10 dark:border-retro-white/10 bg-background transition-colors duration-300 relative overflow-hidden">
                {/* Decorative floating code */}
                <div className="absolute top-20 right-0 hidden lg:block opacity-20 pointer-events-none z-0">
                    <Code3D delay={0.5} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                            <div>
                                <h2 className="text-sm font-mono text-retro-rust uppercase tracking-widest mb-4">System Capabilities</h2>
                                <h2 className="text-4xl md:text-6xl font-serif text-foreground">Core Modules</h2>
                            </div>
                            <Link href="/services" className="hidden md:flex items-center text-foreground hover:text-retro-rust transition-colors font-mono text-sm uppercase tracking-wider">
                                [ View Full Schematics ] <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[300px]">
                        {[
                            {
                                title: "Web Design",
                                desc: "Architecting pixel-perfect, responsive digital environments tailored for maximum engagement.",
                                span: "md:col-span-4",
                                icon: "01"
                            },
                            {
                                title: "SEO Systems",
                                desc: "Advanced algorithmic optimization to ensure maximum visibility in search data streams.",
                                span: "md:col-span-2",
                                icon: "02"
                            },
                            {
                                title: "UI/UX Logic",
                                desc: "Intuitive interface protocols designed for seamless user interaction and retention.",
                                span: "md:col-span-2",
                                icon: "03"
                            },
                            {
                                title: "Brand Identity",
                                desc: "Forging distinctive visual signals and narrative structures for strong market presence.",
                                span: "md:col-span-4",
                                icon: "04"
                            },
                            {
                                title: "E-commerce Protocol",
                                desc: "Robust transactional architectures built for scale and security.",
                                span: "md:col-span-3",
                                icon: "05"
                            },
                            {
                                title: "Digital Marketing",
                                desc: "Strategic signal boosting across all major digital communication channels.",
                                span: "md:col-span-3",
                                icon: "06"
                            },
                        ].map((service, i) => (
                            <FadeIn key={i} delay={i * 0.1} className={service.span}>
                                <MotherboardCard className="h-full border-2 border-retro-black/10 dark:border-retro-white/30 transition-colors group relative">
                                    <div className="p-8 h-full flex flex-col justify-between bg-transparent relative z-10 pointer-events-none">
                                        <div className="flex justify-between items-start">
                                            <div className="w-10 h-10 rounded bg-foreground/5 flex items-center justify-center text-foreground/50 font-mono text-xs border border-foreground/10">
                                                {service.icon}
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="w-2 h-2 bg-retro-rust rounded-full animate-pulse"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-serif text-foreground mb-3">{service.title}</h3>
                                            <p className="text-foreground/70 leading-relaxed text-sm max-w-sm">{service.desc}</p>
                                        </div>

                                        {/* Tech decoration lines */}
                                        <div className="absolute bottom-6 right-6 flex space-x-1 opacity-20">
                                            <div className="w-1 h-1 bg-foreground rounded-full"></div>
                                            <div className="w-1 h-1 bg-foreground rounded-full"></div>
                                            <div className="w-1 h-1 bg-foreground rounded-full"></div>
                                        </div>
                                    </div>
                                </MotherboardCard>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-12 md:hidden">
                        <Link href="/services" className="flex items-center text-foreground hover:text-retro-rust transition-colors font-mono text-sm uppercase">
                            [ View All Services ] <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="bg-retro-black text-retro-white py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-serif mb-16">Selected Work</h2>
                    </FadeIn>

                    <div className="space-y-24">
                        {[
                            {
                                title: "DirectSeatz Website",
                                type: "Web Design",
                                url: "https://directseatz.com",
                                desc: "A sleek, powerful website optimized to convert."
                            },
                            {
                                title: "Gyaniversity",
                                type: "Web Design Platform",
                                url: "https://gyaniversity.com",
                                desc: "Modern educational platform design."
                            },
                            {
                                title: "Shree Maruthi Industries",
                                type: "Manufacturing Leader",
                                url: "https://shreemaruthiindustries.com",
                                desc: "Clean, professional corporate presence."
                            }
                        ].map((project, i) => (
                            <FadeIn key={i} delay={0.2}>
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

            {/* Client Perspectives - Redesigned */}
            <section className="px-6 lg:px-12 py-32 bg-background transition-colors duration-300 border-b border-retro-black/10 dark:border-retro-white/10 relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-retro-rust/5 dark:bg-retro-rust/10 blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-mono text-retro-rust uppercase tracking-widest mb-4">Testimonials</h2>
                            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">What Clients Say</h2>
                            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">Real feedback from real projects</p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: "Rangappa K", company: "Shree Maruthi Industries", quote: "The Imagilabs team made the entire process seamless and efficient... delivered a clean, professional website.", rating: 5 },
                            { name: "Frank P", company: "Direct Seatz", quote: "Imagilabs took our vision and brought it to life with a sleek, powerful website... fast, mobile-friendly, and optimized to convert.", rating: 5 },
                            { name: "Manjunath G", company: "BlueStar Metacraft", quote: "Working with Imagilabs was a game-changer... The design is modern and functional.", rating: 5 },
                            { name: "Shipley India", company: "Enterprise Client", quote: "Professional, responsive, and delivered exactly what we needed—on time.", rating: 5 },
                        ].map((t, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-retro-rust/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                                    <div className="relative bg-background border-2 border-foreground/10 dark:border-foreground/20 rounded-lg p-8 hover:border-retro-rust/50 transition-all duration-300 hover:shadow-2xl">
                                        {/* Rating Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {Array.from({ length: t.rating }).map((_, s) => (
                                                <svg key={s} className="w-5 h-5 fill-retro-rust" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="text-foreground/90 text-lg leading-relaxed mb-8 font-serif italic">
                                            "{t.quote}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-4 pt-6 border-t border-foreground/10">
                                            <div className="w-12 h-12 rounded-full bg-retro-rust/10 flex items-center justify-center text-retro-rust font-bold text-lg">
                                                {t.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-foreground">{t.name}</p>
                                                <p className="text-sm text-foreground/60">{t.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 lg:px-12 bg-retro-black dark:bg-retro-rust text-retro-white text-center transition-colors duration-300">
                <FadeIn>
                    <h2 className="text-4xl md:text-7xl font-serif mb-8">Ready to elevate your brand?</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                        Tell us about your project, and we'll provide a tailored quote.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-retro-rust dark:bg-retro-white text-white dark:text-retro-black font-bold hover:bg-white hover:text-retro-black dark:hover:bg-retro-black dark:hover:text-white transition-all duration-300 shadow-2xl"
                    >
                        Get a Customized Quote
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
