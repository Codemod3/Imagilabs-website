"use client";
import { motion } from "framer-motion";

export default function Code3D({ className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 20, rotateY: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 10, rotateY: -10 }}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
            className={`relative group ${className}`}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
            <motion.div
                animate={{
                    rotateX: [10, 15, 10],
                    rotateY: [-10, -5, -10],
                    y: [0, -10, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                }}
                className="bg-[#282a36] rounded-lg p-4 shadow-2xl border border-white/10 font-mono text-xs text-left"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Header dots */}
                <div className="flex gap-1.5 mb-3 opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5555]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f1fa8c]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#50fa7b]"></div>
                </div>

                {/* Code Content */}
                <div className="space-y-1 text-[#f8f8f2]">
                    <p><span className="text-[#ff79c6]">const</span> <span className="text-[#50fa7b]">idea</span> = <span className="text-[#bd93f9]">new</span> <span className="text-[#8be9fd]">Project</span>();</p>
                    <p><span className="text-[#50fa7b]">idea</span>.<span className="text-[#8be9fd]">launch</span>({`{`}</p>
                    <p className="pl-4"><span className="text-[#f1fa8c]">mode</span>: <span className="text-[#f1fa8c]">'creative'</span>,</p>
                    <p className="pl-4"><span className="text-[#f1fa8c]">style</span>: <span className="text-[#f1fa8c]">'retro'</span></p>
                    <p>{`});`}</p>
                </div>

                {/* Reflection/Glass effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-lg"></div>
            </motion.div>
        </motion.div>
    );
}
