"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Users } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-16 lg:pt-40 lg:pb-32">
            <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full" />

            <Container className="relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col items-start gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="accent" className="mb-4">
                                10+ Tahun Pengalaman Offline
                            </Badge>
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Cara Paling{" "}
                            <span className="text-secondary">Tepat</span>{" "}
                            Menembus CPNS.
                        </motion.h1>

                        <motion.p
                            className="text-lg text-muted-foreground leading-relaxed max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Kombinasi kurikulum bimbel offline teruji dengan teknologi simulasi CAT modern. Siapkan masa depan Anda bersama mentor terbaik.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Button size="lg" className="rounded-full gap-2">
                                Gabung Waitlist <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full gap-2">
                                Info Bimbel Offline <Users className="w-4 h-4" />
                            </Button>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-4 text-sm text-muted-foreground pt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-background flex items-center justify-center text-xs font-bold text-slate-500">
                                        {/* Placeholder for user avatars */}
                                        U{i}
                                    </div>
                                ))}
                            </div>
                            <p>Bergabung dengan 1,000+ alumni lainnya.</p>
                        </motion.div>
                    </div>

                    {/* Image/Mockup */}
                    <motion.div
                        className="relative lg:h-[700px] flex items-center justify-center z-20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1 // Wait a bit after entrance before floating
                            }
                        }}
                    >
                        <div className="relative w-full max-w-[450px] lg:max-w-[600px] aspect-[9/19] lg:scale-85 lg:origin-center">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-[3rem] blur-2xl opacity-30 animate-pulse" />

                            <Image
                                src="/app_mockup-2.png"
                                alt="CPNS App Mockup"
                                fill
                                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] z-10"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
