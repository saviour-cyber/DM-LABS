"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Network, 
  ShieldCheck, 
  Palette, 
  CheckCircle2, 
  Sparkles,
  Server,
  Layers
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface HeroProps {
  onRequestService?: () => void;
}

export function Hero({ onRequestService }: HeroProps) {
  const handleWorkTogether = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onRequestService) {
      onRequestService();
    } else {
      const el = document.getElementById("request-service");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-dmblue-600/10 blur-3xl" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-dmred-600/10 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-dmblue-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-tech-pattern opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-dmblue-50 border border-dmblue-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-dmblue-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-dmblue-700">
                End-to-End Technology &amp; ICT Partner
              </span>
              <span className="text-xs text-dmdark-400">|</span>
              <span className="text-xs font-semibold text-dmred-600">Enterprise Ready</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dmdark-950 tracking-tight leading-[1.12]">
              Technology. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dmblue-600 to-dmblue-700">
                Creativity.
              </span>{" "}
              <span className="text-dmred-600">Innovation.</span>
            </h1>

            {/* Alternative/Supporting Headline */}
            <p className="text-lg sm:text-xl font-semibold text-dmdark-800">
              Transforming Ideas Into Scalable Digital Solutions.
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-dmdark-600 max-w-2xl leading-relaxed">
              DM Labs delivers innovative technology solutions, custom software engineering, digital brand experiences, enterprise networking, and professional ICT services tailored to help businesses, schools, and individuals grow.
            </p>

            {/* 3 Call to Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-dmblue-600 hover:bg-dmblue-700 active:scale-95 shadow-subtle-blue transition-all group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-dmdark-800 bg-white hover:bg-dmdark-50 border border-dmdark-200 hover:border-dmdark-300 active:scale-95 transition-all shadow-sm"
              >
                <span>View Our Projects</span>
              </Link>

              <button
                onClick={handleWorkTogether}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-dmred-600 hover:bg-dmred-700 active:scale-95 shadow-subtle-red transition-all"
              >
                <span>Let&apos;s Work Together</span>
              </button>
            </div>

            {/* Key trust bullets */}
            <div className="pt-6 border-t border-dmdark-100 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-dmdark-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-dmblue-600 flex-shrink-0" />
                <span>Custom Software &amp; APIs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-dmblue-600 flex-shrink-0" />
                <span>Enterprise Cabling &amp; Wi-Fi</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-dmblue-600 flex-shrink-0" />
                <span>Security &amp; Cloud Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Visual Console */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Accent Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card with dark theme to showcase blue & red contrast */}
              <div className="relative rounded-2xl bg-dmdark-950 p-5 shadow-2xl border border-dmdark-800 overflow-hidden text-left">
                
                {/* Console header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-dmdark-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-dmred-600 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-xs text-dmdark-400 font-mono ml-2">dmlabs-engine.ts</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dmblue-950 text-dmblue-400 border border-dmblue-800">
                    STATUS: READY
                  </span>
                </div>

                {/* Tech capability modules */}
                <div className="space-y-3">
                  
                  {/* Module 1: Software & Systems */}
                  <div className="p-3 rounded-xl bg-dmdark-900/90 border border-dmdark-800 hover:border-dmblue-600/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-lg bg-dmblue-600/20 text-dmblue-400 flex items-center justify-center">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Full-Stack Software Architecture</div>
                          <div className="text-[11px] text-dmdark-400">Custom web, mobile &amp; school management</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">Active</span>
                    </div>
                  </div>

                  {/* Module 2: Enterprise Networking */}
                  <div className="p-3 rounded-xl bg-dmdark-900/90 border border-dmdark-800 hover:border-dmblue-600/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-lg bg-dmblue-600/20 text-dmblue-400 flex items-center justify-center">
                          <Network className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Networking &amp; Structured Cabling</div>
                          <div className="text-[11px] text-dmdark-400">Fiber backbones, LAN/WAN &amp; Wi-Fi 6</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-dmblue-400">Gigabit</span>
                    </div>
                  </div>

                  {/* Module 3: Digital Identity & UI/UX */}
                  <div className="p-3 rounded-xl bg-dmdark-900/90 border border-dmdark-800 hover:border-dmred-600/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-lg bg-dmred-600/20 text-dmred-400 flex items-center justify-center">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Digital Design &amp; Brand Systems</div>
                          <div className="text-[11px] text-dmdark-400">Corporate identity, UI/UX &amp; marketing</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-dmred-400">Creative</span>
                    </div>
                  </div>

                  {/* Module 4: CCTV & Security */}
                  <div className="p-3 rounded-xl bg-dmdark-900/90 border border-dmdark-800 hover:border-dmblue-600/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-lg bg-dmblue-600/20 text-dmblue-400 flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Security &amp; Biometric Access</div>
                          <div className="text-[11px] text-dmdark-400">4K IP cameras, NVRs &amp; attendance</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">Secured</span>
                    </div>
                  </div>
                </div>

                {/* Live System Diagnostics Feed */}
                <div className="mt-4 pt-3 border-t border-dmdark-800 flex items-center justify-between text-[11px] text-dmdark-400 font-mono">
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1.5 animate-pulse" />
                    9 Capability Verticals Online
                  </span>
                  <span className="text-dmblue-400">dmlabs.tech</span>
                </div>
              </div>

              {/* Floating Badge (Left bottom) */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3.5 shadow-xl border border-dmdark-200 hidden sm:flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-dmblue-50 text-dmblue-600 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-dmdark-900">Configurable Catalogue</div>
                  <div className="text-[11px] text-dmdark-500">80+ Modular Technology Services</div>
                </div>
              </div>

              {/* Floating Badge (Top right) */}
              <div className="absolute -top-6 -right-4 bg-white rounded-xl p-3 shadow-xl border border-dmdark-200 hidden sm:flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-dmred-50 text-dmred-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-dmdark-900">
                  Premium Standards
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
