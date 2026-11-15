"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { SERVICE_CATEGORIES } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dmdark-950 text-white border-t border-dmdark-800 relative overflow-hidden">
      
      {/* Ambient gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-dmblue-600 blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-dmred-600 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10 text-left">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-dmdark-800">
          
          {/* Col 1: Brand & Narrative (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo in pristine light pill badge to preserve exact brand color fidelity */}
            <div className="inline-block bg-white px-4 py-2 rounded-xl shadow-md border border-white/10">
              <div className="relative h-9 w-40">
                <Image
                  src="/brand/logo-trimmed.png"
                  alt="DM Labs Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-dmdark-300 leading-relaxed max-w-sm">
              DM Labs is an established technology and digital solutions company delivering custom software, structured networking, brand systems, and reliable ICT support for organizations across Africa.
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold text-dmblue-400">
              <span className="w-2 h-2 rounded-full bg-dmblue-500 animate-pulse" />
              <span>Technology • Creativity • Innovation</span>
            </div>
          </div>

          {/* Col 2: Service Domains (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dmred-500">
              Service Categories
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-dmdark-300">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`#category-${cat.id}`}
                  className="hover:text-dmblue-400 transition-colors flex items-center group py-0.5"
                >
                  <ChevronRight className="w-3 h-3 mr-1 text-dmdark-500 group-hover:text-dmblue-400" />
                  <span className="truncate">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dmblue-400">
              Navigation
            </h4>
            <div className="space-y-2 text-xs text-dmdark-300">
              <div>
                <Link href="#home" className="hover:text-white transition-colors">Home</Link>
              </div>
              <div>
                <Link href="#about" className="hover:text-white transition-colors">About DM Labs</Link>
              </div>
              <div>
                <Link href="#services" className="hover:text-white transition-colors">Services Directory</Link>
              </div>
              <div>
                <Link href="#solutions" className="hover:text-white transition-colors">Solutions &amp; Sectors</Link>
              </div>
              <div>
                <Link href="#projects" className="hover:text-white transition-colors">Our Projects</Link>
              </div>
              <div>
                <Link href="#why-us" className="hover:text-white transition-colors">Why Choose Us</Link>
              </div>
              <div>
                <Link href="#contact" className="hover:text-white transition-colors">Contact &amp; Inquiries</Link>
              </div>
              <div>
                <Link href="/admin/inquiries" className="text-dmdark-400 hover:text-dmblue-400 flex items-center pt-1 font-mono">
                  <span>Admin Portal</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Location (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Channels
            </h4>
            <div className="space-y-2.5 text-xs text-dmdark-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-dmblue-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.location}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-3.5 h-3.5 text-dmred-500 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white truncate">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-3.5 h-3.5 text-dmblue-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-3.5 h-3.5 text-dmdark-400 flex-shrink-0 mt-0.5" />
                <span>Mon – Fri: 8am – 6pm</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Brand statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-dmdark-400 gap-4">
          <p>
            &copy; {currentYear} {COMPANY_INFO.fullName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-white transition-colors">Security Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
