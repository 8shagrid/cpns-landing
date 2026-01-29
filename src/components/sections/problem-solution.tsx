"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { XCircle, CheckCircle } from "lucide-react";

export function ProblemSolution() {
    return (
        <Section className="bg-muted/30">
            <Container>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Mengapa Banyak Peserta <span className="text-red-500">Gagal</span> di Tahap Awal?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Persaingan CPNS bukan hanya soal pintar, tapi soal strategi dan ketahanan mental.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Creates Problem Card */}
                    <motion.div
                        className="rounded-2xl bg-white dark:bg-slate-900/50 p-8 border border-red-100 dark:border-red-900/30 shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                                <XCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Belajar Sendiri</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Materi terlalu luas, bingung mulai dari mana.</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Tidak ada evaluasi progress yang akurat.</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Mudah bosan dan kehilangan motivasi.</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Terjebak soal-soal lama yang tidak relevan.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Solution Card */}
                    <motion.div
                        className="rounded-2xl bg-white dark:bg-slate-900 p-8 border border-green-100 dark:border-green-900/30 shadow-lg relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle className="w-32 h-32 text-green-500" />
                        </div>

                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="p-2 rounded-full bg-secondary/10 text-secondary dark:bg-secondary/20">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Bersama Ecosystem Kami</h3>
                        </div>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span className="font-medium">Kurikulum terstruktur oleh mentor 10+ tahun.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span className="font-medium">Analisis kelemahan otomatis dengan AI.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span className="font-medium">Simulasi CAT mirip asli (BKN standard).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span className="font-medium">Komunitas belajar yang suportif.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
