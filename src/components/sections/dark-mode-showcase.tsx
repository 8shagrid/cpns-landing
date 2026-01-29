"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function DarkModeShowcase() {
    const [isDark, setIsDark] = useState(true);

    return (
        <Section className="bg-slate-950 text-white overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Jaga Fokus & <br />
                            <span className="text-blue-400">Konsistensi Belajar.</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Jangan takut ketinggalan materi. Fitur <strong className="text-slate-200">Smart Notification</strong> akan mengingatkan jadwalmu, dan sistem <strong className="text-slate-200">Streak</strong> menjaga motivasi harianmu. Semua dalam tampilan Dark Mode yang nyaman di mata.
                        </p>

                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                            {isDark ? <Moon className="w-5 h-5 text-blue-400" /> : <Sun className="w-5 h-5 text-amber-400" />}
                            <span className="font-medium">
                                Coba mode {isDark ? "Terang" : "Gelap"}
                            </span>
                        </button>
                    </motion.div>

                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Interactive Card Demo */}
                        <div
                            className={cn(
                                "w-full max-w-sm rounded-3xl p-6 shadow-2xl transition-colors duration-500",
                                isDark ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200"
                            )}
                        >
                            {/* App Header with Streak */}
                            <div className="flex justify-between items-center mb-6">
                                <div className={cn("px-3 py-1 rounded-full flex items-center gap-2", isDark ? "bg-slate-800" : "bg-slate-100")}>
                                    <span className="text-orange-500">🔥</span>
                                    <span className={cn("text-xs font-bold", isDark ? "text-slate-200" : "text-slate-700")}>12 Hari Streak</span>
                                </div>
                                <div className={cn("w-8 h-8 rounded-full", isDark ? "bg-slate-800" : "bg-slate-100")} />
                            </div>

                            <div className="space-y-3">
                                {/* Notification Item 1 */}
                                <div
                                    className={cn(
                                        "p-3 rounded-xl flex items-start gap-3",
                                        isDark ? "bg-slate-800/50" : "bg-slate-50"
                                    )}
                                >
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                        <span className="text-xs">🔔</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className={cn("h-2 w-24 rounded-full", isDark ? "bg-slate-700" : "bg-slate-300")} />
                                        <div className={cn("h-2 w-32 rounded-full", isDark ? "bg-slate-800" : "bg-slate-200")} />
                                    </div>
                                </div>

                                {/* Notification Item 2 */}
                                <div
                                    className={cn(
                                        "p-3 rounded-xl flex items-start gap-3",
                                        isDark ? "bg-slate-800/50" : "bg-slate-50"
                                    )}
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                        <span className="text-xs">📚</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className={cn("h-2 w-20 rounded-full", isDark ? "bg-slate-700" : "bg-slate-300")} />
                                        <div className={cn("h-2 w-40 rounded-full", isDark ? "bg-slate-800" : "bg-slate-200")} />
                                    </div>
                                </div>

                                {/* Notification Item 3 */}
                                <div
                                    className={cn(
                                        "p-3 rounded-xl flex items-start gap-3",
                                        isDark ? "bg-slate-800/50" : "bg-slate-50"
                                    )}
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <span className="text-xs">💪</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className={cn("h-2 w-28 rounded-full", isDark ? "bg-slate-700" : "bg-slate-300")} />
                                        <div className={cn("h-2 w-16 rounded-full", isDark ? "bg-slate-800" : "bg-slate-200")} />
                                    </div>
                                </div>
                            </div>

                            <div className={cn("mt-6 text-center text-xs font-medium", isDark ? "text-slate-500" : "text-slate-400")}>
                                Preview: Streak & Notifikasi
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
