"use client";
import React, { useRef, useState } from 'react';

export default function MotherboardCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: -500, y: -500 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden bg-background border border-retro-black/10 dark:border-retro-white/10 ${className}`}
        >
            {/* 1. Base Content (Always visible) */}
            <div className="relative z-20 h-full">
                {children}
            </div>

            {/* 2. Motherboard Pattern (The "X-Ray" Reveal) */}
            <div
                className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
                style={{
                    opacity: opacity,
                    maskImage: `radial-gradient(350px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(350px circle at ${position.x}px ${position.y}px, black, transparent)`,
                }}
            >
                {/* Realistic PCB Pattern */}
                <div
                    className="absolute inset-0 bg-retro-rust/10 dark:bg-retro-rust/20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23eb5e28' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23grid)'/%3E%3C!-- IC Chip --%3E%3Crect x='30' y='30' width='40' height='40' fill='none' stroke='%23eb5e28' stroke-width='2' opacity='0.6'/%3E%3Crect x='35' y='35' width='30' height='30' fill='%23eb5e28' opacity='0.15'/%3E%3Ccircle cx='40' cy='40' r='2' fill='%23eb5e28' opacity='0.8'/%3E%3Ccircle cx='60' cy='40' r='2' fill='%23eb5e28' opacity='0.8'/%3E%3Ccircle cx='40' cy='60' r='2' fill='%23eb5e28' opacity='0.8'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23eb5e28' opacity='0.8'/%3E%3C!-- Resistor --%3E%3Crect x='120' y='50' width='30' height='8' rx='2' fill='none' stroke='%23eb5e28' stroke-width='1.5' opacity='0.6'/%3E%3Cline x1='115' y1='54' x2='120' y2='54' stroke='%23eb5e28' stroke-width='1.5' opacity='0.6'/%3E%3Cline x1='150' y1='54' x2='155' y2='54' stroke='%23eb5e28' stroke-width='1.5' opacity='0.6'/%3E%3C!-- Capacitor --%3E%3Cline x1='80' y1='120' x2='80' y2='140' stroke='%23eb5e28' stroke-width='2' opacity='0.6'/%3E%3Cline x1='90' y1='120' x2='90' y2='140' stroke='%23eb5e28' stroke-width='2' opacity='0.6'/%3E%3Cline x1='80' y1='130' x2='75' y2='130' stroke='%23eb5e28' stroke-width='1.5' opacity='0.6'/%3E%3Cline x1='90' y1='130' x2='95' y2='130' stroke='%23eb5e28' stroke-width='1.5' opacity='0.6'/%3E%3C!-- Via Holes --%3E%3Ccircle cx='100' cy='100' r='3' fill='none' stroke='%23eb5e28' stroke-width='1.5' opacity='0.7'/%3E%3Ccircle cx='150' cy='150' r='3' fill='none' stroke='%23eb5e28' stroke-width='1.5' opacity='0.7'/%3E%3Ccircle cx='50' cy='150' r='3' fill='none' stroke='%23eb5e28' stroke-width='1.5' opacity='0.7'/%3E%3C!-- Traces (connection lines) --%3E%3Cpath d='M 50 100 L 100 100 L 100 150' fill='none' stroke='%23eb5e28' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M 150 100 L 100 100' fill='none' stroke='%23eb5e28' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M 70 50 L 70 80 L 120 80' fill='none' stroke='%23eb5e28' stroke-width='2' opacity='0.5'/%3E%3C!-- Solder Pads --%3E%3Crect x='25' y='75' width='6' height='6' rx='1' fill='%23eb5e28' opacity='0.4'/%3E%3Crect x='165' y='125' width='6' height='6' rx='1' fill='%23eb5e28' opacity='0.4'/%3E%3Crect x='120' y='165' width='6' height='6' rx='1' fill='%23eb5e28' opacity='0.4'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                    }}
                />

                {/* Additional circuit detail layer */}
                <div className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `linear-gradient(to right, #eb5e28 1px, transparent 1px), linear-gradient(to bottom, #eb5e28 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            {/* 3. Hover Highlight (Subtle glow) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: opacity * 0.3,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(235, 94, 40, 0.08), transparent 40%)`,
                }}
            />
        </div>
    );
}
