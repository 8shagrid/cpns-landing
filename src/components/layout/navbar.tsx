"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Fitur", href: "#features" },
        { name: "Mentors", href: "#mentors" },
        { name: "Testimoni", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
        >
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-105 transition-transform">
                            C
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            CPNS<span className="text-secondary">Master</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">

                        <ModeToggle />
                        <Button
                            size="sm"
                            className="rounded-full px-5 shadow-lg shadow-primary/20"
                            onClick={() => {
                                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                                document.getElementById('email-input')?.focus();
                            }}
                        >
                            Daftar Waitlist
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border"
                    >
                        <Container className="py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium py-2 border-b border-border/50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">

                                <div className="flex justify-center">
                                    <ModeToggle />
                                </div>
                                <Button
                                    className="w-full justify-center"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                                        setTimeout(() => document.getElementById('email-input')?.focus(), 500);
                                    }}
                                >
                                    Daftar Waitlist
                                </Button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
