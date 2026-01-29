"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2 cursor-pointer mb-4"
                        >
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                                C
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                CPNS<span className="text-secondary">Master</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Platform belajar CPNS terintegrasi dengan teknologi simulasi CAT modern dan kurikulum offline teruji.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Youtube className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Produk</h3>
                        <ul className="space-y-3">
                            <FooterLink href="#">Simulasi CAT</FooterLink>
                            <FooterLink href="#">Bimbel Offline</FooterLink>
                            <FooterLink href="#">Kelas Online</FooterLink>
                            <FooterLink href="#">Buku & Modul</FooterLink>
                            <FooterLink href="#">Tryout Nasional</FooterLink>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Perusahaan</h3>
                        <ul className="space-y-3">
                            <FooterLink href="#">Tentang Kami</FooterLink>
                            <FooterLink href="#">Karir</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                            <FooterLink href="#">Media Kit</FooterLink>
                            <FooterLink href="#">Hubungi Kami</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Kantor Pusat</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span>
                                    Jl. Pendidikan No. 123,<br />
                                    Jakarta Selatan, DKI Jakarta 12430
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>halo@cpnsmaster.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} CPNS Master. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-md"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-sm text-muted-foreground hover:text-secondary transition-colors block">
                {children}
            </Link>
        </li>
    );
}
