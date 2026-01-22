"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Spotlight from "./Spotlight";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    return (
        <Spotlight className={`h-full ${className}`}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                className="group relative h-full overflow-hidden border border-retro-black/10 bg-white"
            >
                <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: `
              radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(196, 106, 43, 0.05), transparent 40%)
            `
                    }}
                />
                <div className="relative h-full">
                    {children}
                </div>
            </motion.div>
        </Spotlight>
    );
}
