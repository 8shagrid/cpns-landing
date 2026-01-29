"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
    return (
        <section id="waitlist" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-primary dark:bg-slate-950">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-secondary/20 blur-[100px]" />
            </div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-6 backdrop-blur-sm border border-secondary/20">
                            <Sparkles className="w-4 h-4" />
                            <span>Prioritas Akses Early Bird</span>
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight text-white mb-6 sm:text-5xl">
                            Jangan Sampai <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Tertinggal Start.
                            </span>
                        </h2>

                        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                            Kuota kelas offline terbatas dan waitlist aplikasi terus bertambah setiap hari.
                            Amankan posisimu sekarang untuk persiapan CPNS yang lebih matang.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="relative">
                                <input
                                    id="email-input"
                                    type="email"
                                    placeholder="Masukkan email Anda"
                                    className="h-12 w-full sm:w-80 rounded-full border-0 bg-white/10 px-6 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-secondary focus:outline-none backdrop-blur-sm"
                                />
                            </div>
                            <Button size="lg" className="rounded-full gap-2 w-full sm:w-auto font-semibold bg-white text-slate-950 hover:bg-slate-100 shadow-xl shadow-white/10 hover:shadow-white/20 border-0">
                                Gabung Waitlist <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>

                        <p className="mt-8 text-sm text-slate-500">
                            *Kami akan memberitahu Anda saat aplikasi tersedia di Play Store.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
