"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MapPin, Users, Calendar } from "lucide-react";

export function OfflineCredibility() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        className="relative order-last lg:order-first"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/classroom.png"
                                alt="Kelas Offline Bimbel CPNS"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-5 h-5 text-amber-400" />
                                    <span className="font-medium">Pusat Belajar, Jakarta</span>
                                </div>
                                <p className="text-sm opacity-90">Fasilitas Lengkap & Nyaman</p>
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs hidden md:block">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">1,500+</p>
                                    <p className="text-sm text-muted-foreground">Alumni Lulus</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-amber-100 text-amber-600 rounded-full dark:bg-amber-900/30 dark:text-amber-400">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">10+</p>
                                    <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="outline" className="mb-4">
                            Sejak 2014
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-foreground">
                            Bukan Sekadar Aplikasi, <br />
                            <span className="text-primary dark:text-white">Kami Institusi Pendidikan.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Kami membangun reputasi selama satu dekade melalui bimbingan belajar tatap muka.
                            Sistem pembelajaran yang kami terapkan di aplikasi adalah hasil penyempurnaan dari ribuan jam interaksi nyata di kelas.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Kurikulum Terupdate sesuai Permenpan RB terbaru.",
                                "Metode 'Fast-Track' untuk pengerjaan soal kurang dari 50 detik.",
                                "Pendampingan intensif hingga hari H ujian.",
                                "Konsultasi pemilihan formasi yang strategis."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" variant="secondary" className="rounded-full">
                            Lihat Jadwal Kelas Offline
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
