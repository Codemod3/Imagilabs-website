"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function RetroTerminal() {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
    const transformPerspective = 1000;

    return (
        <motion.div
            style={{
                perspective: transformPerspective,
            }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-[90%] md:w-[80%] h-[300px] md:h-[350px] bg-retro-black rounded-lg border border-retro-white/20 shadow-2xl relative"
            >
                {/* Terminal Header */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 rounded-t-lg flex items-center px-4 gap-2" style={{ transform: "translateZ(20px)" }}>
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>

                {/* Floating Elements (Parallax) */}
                <motion.div
                    style={{ transform: "translateZ(60px)" }}
                    className="absolute top-12 left-8 md:right-auto bg-retro-rust/90 text-retro-white p-4 rounded shadow-lg backdrop-blur-sm border border-white/10 w-48 font-mono text-xs"
                >
                    <p>{`> init_system`}</p>
                    <p>{`> loading_assets...`}</p>
                    <p className="text-green-300">{`> complete`}</p>
                </motion.div>

                <motion.div
                    style={{ transform: "translateZ(40px)" }}
                    className="absolute bottom-12 right-8 bg-retro-green/90 text-retro-white p-6 rounded shadow-lg backdrop-blur-sm border border-white/10 max-w-xs font-serif italic text-lg text-center"
                >
                    "Design is intelligence made visible."
                </motion.div>

                {/* Background Grid inside Terminal */}
                <div className="absolute inset-0 top-8 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] rounded-b-lg pointer-events-none"></div>
            </motion.div>
        </motion.div>
    );
}
