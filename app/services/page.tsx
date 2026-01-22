import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import MotherboardCard from "@/components/MotherboardCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function Services() {
    const services = [
        { title: "Web Design & Development", desc: "Custom, responsive websites built with modern frameworks and best practices.", cat: "Digital", span: "md:col-span-3" },
        { title: "E-commerce Solutions", desc: "Scalable online stores with payment gateways, inventory management, and analytics.", cat: "Commerce", span: "md:col-span-3" },
        { title: "SEO Optimization", desc: "Strategic keyword research, on-page optimization, and technical SEO for better rankings.", cat: "Marketing", span: "md:col-span-2" },
        { title: "UI/UX Design", desc: "User-centered design focused on creating intuitive and engaging experiences.", cat: "Design", span: "md:col-span-2" },
        { title: "Branding & Identity", desc: "Logo design, brand guidelines, and visual identity systems that stand out.", cat: "Design", span: "md:col-span-2" },
        { title: "Content Strategy", desc: "Content planning, creation, and management that aligns with business goals.", cat: "Marketing", span: "md:col-span-3" },
        { title: "Social Media Marketing", desc: "Strategic campaigns across platforms to boost engagement and reach.", cat: "Marketing", span: "md:col-span-3" },
        { title: "Pay-Per-Click Advertising", desc: "Google Ads, Facebook Ads, and other PPC campaigns with ROI tracking.", cat: "Marketing", span: "md:col-span-2" },
        { title: "Email Marketing", desc: "Automated campaigns, newsletters, and drip sequences that convert.", cat: "Marketing", span: "md:col-span-2" },
        { title: "Web Hosting & Maintenance", desc: "Reliable hosting, regular updates, security patches, and performance monitoring.", cat: "Technical", span: "md:col-span-2" },
        { title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android.", cat: "Digital", span: "md:col-span-3" },
        { title: "API Integration", desc: "Connect third-party services, payment processors, and automation tools.", cat: "Technical", span: "md:col-span-3" },
        { title: "Analytics & Reporting", desc: "Data tracking, dashboards, and actionable insights for decision-making.", cat: "Strategy", span: "md:col-span-2" },
        { title: "Conversion Rate Optimization", desc: "A/B testing, landing page optimization, and user journey improvement.", cat: "Strategy", span: "md:col-span-2" },
        { title: "WordPress Development", desc: "Custom themes, plugins, and WordPress solutions tailored to your needs.", cat: "Technical", span: "md:col-span-2" },
        { title: "Shopify Development", desc: "Theme customization, app integration, and Shopify store optimization.", cat: "Commerce", span: "md:col-span-3" },
        { title: "Video Production", desc: "Promotional videos, product demos, and social media content creation.", cat: "Content", span: "md:col-span-3" },
        { title: "Graphic Design", desc: "Marketing materials, infographics, presentations, and print design.", cat: "Design", span: "md:col-span-2" },
        { title: "Digital Consulting", desc: "Strategic planning, technology stack selection, and digital transformation guidance.", cat: "Strategy", span: "md:col-span-2" },
        { title: "Security & Compliance", desc: "SSL certificates, GDPR compliance, data protection, and security audits.", cat: "Technical", span: "md:col-span-2" },
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
                        <h1 className="text-sm font-mono text-retro-rust uppercase tracking-widest mb-4">Full Service Catalog</h1>
                        <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Our Services</h2>
                        <p className="text-foreground/60 text-lg md:text-xl max-w-3xl">
                            Comprehensive digital solutions to elevate your brand and drive growth. From design to deployment, we cover every aspect of your digital journey.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-6 lg:px-12 py-24 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[250px]">
                        {services.map((service, i) => (
                            <FadeIn key={i} delay={i * 0.05} className={service.span}>
                                <MotherboardCard className="h-full border-2 border-retro-black/10 dark:border-retro-white/30 transition-colors group relative">
                                    <div className="p-6 h-full flex flex-col justify-between bg-transparent relative z-10 pointer-events-none">
                                        <div className="flex justify-between items-start">
                                            <span className="px-2 py-1 bg-retro-rust/10 text-retro-rust text-xs font-mono border border-retro-rust/30 rounded">
                                                {service.cat}
                                            </span>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="w-2 h-2 bg-retro-rust rounded-full animate-pulse"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl md:text-2xl font-serif text-foreground mb-2">{service.title}</h3>
                                            <p className="text-foreground/70 leading-relaxed text-sm">{service.desc}</p>
                                        </div>
                                    </div>
                                </MotherboardCard>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-12 bg-retro-black dark:bg-retro-rust text-white text-center transition-colors duration-300">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Let's Build Something Amazing</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Ready to get started? Contact us to discuss your project.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-retro-rust dark:bg-white text-white dark:text-black font-bold hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Get in Touch
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
