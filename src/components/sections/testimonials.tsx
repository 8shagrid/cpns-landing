"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        content: "Awalnya skeptis, tapi setelah ikut bimbingan offline-nya, ternyata metodenya beda banget. Sekarang di aplikasi jadi makin praktis buat latihan soal TIU.",
        author: "Rina Wati",
        role: "Lulusan SKD 2024 (Skor 450)",
        rating: 5,
        className: "md:col-span-2 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30",
    },
    {
        content: "Anak saya jadi lebih disiplin belajar. Fitur ranking nasionalnya bikin dia termotivasi terus.",
        author: "Ibu Hartini",
        role: "Orang Tua Peserta",
        rating: 5,
        className: "md:col-span-1 bg-white dark:bg-slate-900 border-inherit",
    },
    {
        content: "Mentornya sabar banget. Penjelasan TWK yang biasanya ngebosenin jadi seru. Gak sabar nunggu full rilis aplikasinya!",
        author: "Dimas Anggara",
        role: "Calon ASN Kemenkumham",
        rating: 5,
        className: "md:col-span-1 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30",
    },
    {
        content: "Simulasi CAT-nya beneran mirip BKN. Pas tes asli jadi nggak kaget sama sekali. Worth it banget nungguin waitlist-nya.",
        author: "Sarah Putri",
        role: "Lulusan CPNS Pemprov DKI",
        rating: 5,
        className: "md:col-span-2 bg-white dark:bg-slate-900 border-inherit",
    },
];

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-slate-50/50 dark:bg-black/20">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Kata Mereka yang <span className="text-green-600">Berhasil</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan alumni yang telah mewujudkan mimpinya menjadi Abdi Negara.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className={cn(
                                "p-8 rounded-3xl border shadow-sm relative",
                                item.className
                            )}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Quote className="w-10 h-10 text-slate-200 dark:text-slate-800 absolute top-6 right-6" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-lg font-medium leading-relaxed mb-6 relative z-10">
                                &quot;{item.content}&quot;
                            </p>

                            <div>
                                <p className="font-bold text-foreground">{item.author}</p>
                                <p className="text-sm text-muted-foreground">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
