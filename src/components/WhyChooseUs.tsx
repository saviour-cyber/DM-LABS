"use client";

import React, { useState } from "react";
import { 
  Lightbulb, 
  Layers, 
  ShieldCheck, 
  Users2, 
  Sparkles, 
  Award, 
  TrendingUp, 
  Check, 
  ArrowRight
} from "lucide-react";
import { WHY_CHOOSE_DM_LABS } from "@/data/whyChooseUs";
import { DynamicIcon } from "./DynamicIcon";

export function WhyChooseUs() {
  const [selectedPillar, setSelectedPillar] = useState(WHY_CHOOSE_DM_LABS[0].number);
  const currentPillar = WHY_CHOOSE_DM_LABS.find(p => p.number === selectedPillar) || WHY_CHOOSE_DM_LABS[0];

  return (
    <section id="why-us" className="py-24 bg-dmdark-950 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-dmblue-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-dmred-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-tech-pattern opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-dmblue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-dmred-500" />
            <span>The DM Labs Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Forward-Thinking Clients Choose DM Labs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dmdark-300 leading-relaxed">
            We bridge the gap between creative visual innovation and disciplined engineering. Here are the core pillars that guide every client partnership.
          </p>
        </div>

        {/* Interactive Layout: Left selector list + Right spotlight card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 5 cols: Interactive pillar selectors */}
          <div className="lg:col-span-5 space-y-2.5">
            {WHY_CHOOSE_DM_LABS.map((pillar) => {
              const isSelected = selectedPillar === pillar.number;
              return (
                <button
                  key={pillar.number}
                  onClick={() => setSelectedPillar(pillar.number)}
                  className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between border ${
                    isSelected
                      ? "bg-dmblue-600/20 border-dmblue-500 text-white shadow-lg"
                      : "bg-dmdark-900/60 border-dmdark-800 text-dmdark-300 hover:bg-dmdark-900 hover:text-white"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? "bg-dmblue-600 text-white" : "bg-dmdark-800 text-dmdark-400"
                    }`}>
                      {pillar.number}
                    </span>
                    <span className="text-sm font-bold tracking-tight">
                      {pillar.title}
                    </span>
                  </div>
                  <DynamicIcon 
                    name={pillar.icon} 
                    className={`w-4 h-4 ${isSelected ? "text-dmblue-400" : "text-dmdark-500"}`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right 7 cols: Spotlight Feature Showcase */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-br from-dmdark-900 to-dmdark-900/80 p-8 sm:p-10 border border-dmdark-800 shadow-2xl relative text-left">
              
              {/* Badge & Number */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-dmdark-800">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-dmblue-600 text-white flex items-center justify-center shadow-subtle-blue">
                    <DynamicIcon name={currentPillar.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-dmblue-400">PILLAR {currentPillar.number} OF 07</span>
                    <h3 className="text-2xl font-black text-white">{currentPillar.title}</h3>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-base font-bold text-dmred-400 mb-3">
                &ldquo;{currentPillar.tagline}&rdquo;
              </div>

              {/* Detailed narrative */}
              <p className="text-sm sm:text-base text-dmdark-300 leading-relaxed mb-8">
                {currentPillar.description}
              </p>

              {/* Concrete deliverables bullets */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-dmdark-400">
                  What This Means For Your Project
                </div>
                {currentPillar.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start text-xs sm:text-sm text-dmdark-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Trigger */}
              <div className="pt-6 border-t border-dmdark-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-dmdark-400">
                  Ready to experience the DM Labs standard?
                </span>
                <a
                  href="#request-service"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-dmblue-600 hover:bg-dmblue-500 shadow-subtle-blue transition-all"
                >
                  <span>Start Your Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
