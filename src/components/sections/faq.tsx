"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const faqs = [
    {
        question: "Apakah aplikasi ini gratis?",
        answer: "Aplikasi CPNS Master dapat diunduh gratis dengan fitur dasar. Untuk akses penuh ke ribuan bank soal dan simulasi CAT tak terbatas, tersedia paket langganan premium yang terjangkau.",
    },
    {
        question: "Apakah soal-soalnya sesuai dengan kisi-kisi terbaru?",
        answer: "Ya, tim kurikulum kami selalu memperbarui bank soal sesuai dengan Permenpan RB terbaru setiap tahunnya. Kami menjamin relevansi materi 100%.",
    },
    {
        question: "Bagaimana sistem bimbingan offline-nya?",
        answer: "Bimbingan offline diadakan di center kami di Jakarta dengan jadwal intensif. Termasuk modul cetak, seragam, dan sesi konsultasi one-on-one dengan mentor.",
    },
    {
        question: "Apakah ada garansi kelulusan?",
        answer: "Kami memberikan garansi uang kembali (sesuai syarat & ketentuan) untuk program karantina super intensif jika peserta tidak lulus passing grade SKD.",
    },
];

export function FAQ() {
    return (
        <Section id="faq">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Pertanyaan yang Sering <span className="text-secondary">Diajukan</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Masih ragu? Temukan jawaban atas pertanyaanmu di sini atau hubungi tim support kami.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
