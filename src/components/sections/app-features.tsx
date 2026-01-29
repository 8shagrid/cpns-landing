"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { BarChart3, PlayCircle, FileText, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Tryout Akbar Nasional",
        description: "Uji kemampuanmu melawan ribuan peserta lain se-Indonesia secara serentak. Rasakan atmosfer ujian yang sesungguhnya.",
        icon: Trophy,
        className: "md:col-span-2",
    },
    {
        title: "Video Materi Eksklusif",
        description: "Akses ratusan video pembelajaran mendalam dari mentor ahli. Bisa diulang kapan saja sampai paham.",
        icon: PlayCircle,
        className: "md:col-span-1",
    },
    {
        title: "Bank Soal & Latihan",
        description: "Ribuan latihan soal SKD (TWK, TIU, TKP) terupdate sesuai kisi-kisi terbaru. Mode pengerjaan fleksibel.",
        icon: FileText,
        className: "md:col-span-1",
    },
    {
        title: "Analisis Kemampuan AI",
        description: "Teknologi Smart Analytics kami membedah performamu, mendeteksi kelemahan spesifik, dan merekomendasikan materi perbaikan.",
        icon: BarChart3,
        className: "md:col-span-2",
    },
];

export function AppFeatures() {
    return (
        <Section id="features">
            <Container>
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge variant="secondary" className="mb-4">
                        Coming Soon to Play Store
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Teknologi <span className="text-secondary">Cerdas</span> Untuk Hasil Maksimal
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Aplikasi kami sedang dalam tahap finalisasi. Didesain khusus untuk meningkatkan skor SKD Anda secara signifikan.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border bg-card p-8 hover:shadow-lg transition-all",
                                feature.className
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
