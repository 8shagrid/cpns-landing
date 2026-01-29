"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const mentors = [
    {
        name: "Dr. Budi Santoso, M.Pd",
        role: "Ahli Tes Wawasan Kebangsaan (TWK)",
        exp: "15 Tahun Mengajar",
        desc: "Dosen PKN yang memahami seluk beluk pilar kebangsaan. Mengubah hafalan menjadi pemahaman logika.",
        color: "bg-blue-100 text-blue-700",
    },
    {
        name: "Siti Aminah, S.Si",
        role: "Master Tes Intelegensi Umum (TIU)",
        exp: "10 Tahun Mengajar",
        desc: "Mantan juara Olimpiade Matematika. Spesialis trik cepat hitungan dan logika analitik tanpa rumus rumit.",
        color: "bg-amber-100 text-amber-700",
    },
    {
        name: "Rizky Pratama, S.Psi",
        role: "Coach Tes Karakteristik Pribadi (TKP)",
        exp: "8 Tahun Mengajar",
        desc: "Psikolog industri yang paham betul profil ASN yang dicari negara. Fokus pada integritas dan pelayanan publik.",
        color: "bg-emerald-100 text-emerald-700",
    },
];

/* Placeholder Avatar Component */
function AvatarPlaceholder({ name }: { name: string }) {
    const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
    return (
        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-4xl font-bold text-slate-400 select-none">
            {initials}
        </div>
    )
}

export function Mentors() {
    return (
        <Section id="mentors" className="bg-slate-50 dark:bg-slate-900/50">
            <Container>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Belajar Langsung dari <span className="text-secondary">Ahlinya</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Bukan sekadar pengajar, mereka adalah praktisi dan akademisi yang telah mengantar ribuan siswa menjadi ASN.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-64 w-full relative overflow-hidden group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <AvatarPlaceholder name={mentor.name} />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button className="p-2 bg-white rounded-full text-slate-900 hover:text-blue-600 transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 bg-white rounded-full text-slate-900 hover:text-pink-600 transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className={`mb-4 inline-flex self-start rounded-full px-3 py-1 text-xs font-medium ${mentor.color}`}>
                                    {mentor.exp}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                                <p className="text-sm text-secondary font-medium mb-4">{mentor.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                                    {mentor.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
