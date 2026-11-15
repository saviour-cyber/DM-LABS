"use client";

import React, { useState } from "react";
import { 
  Building2, 
  GraduationCap, 
  ShoppingBag, 
  Rocket, 
  Briefcase, 
  Landmark, 
  User, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from "lucide-react";
import { INDUSTRIES_SERVED } from "@/data/industries";
import { DynamicIcon } from "./DynamicIcon";
import { ServiceCategory } from "@/types";

interface IndustriesSectionProps {
  onSelectService?: (category: ServiceCategory, serviceId: string) => void;
}

export function IndustriesSection({ onSelectService }: IndustriesSectionProps) {
  const [activeTab, setActiveTab] = useState(INDUSTRIES_SERVED[0].id);
  const currentIndustry = INDUSTRIES_SERVED.find(i => i.id === activeTab) || INDUSTRIES_SERVED[0];

  return (
    <section id="solutions" className="py-24 bg-dmdark-50/70 border-t border-b border-dmdark-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dmred-50 text-dmred-700 text-xs font-bold uppercase tracking-wider mb-4 border border-dmred-200">
            <Building2 className="w-3.5 h-3.5 text-dmred-600" />
            <span>Target Sectors &amp; Environments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dmdark-950 tracking-tight">
            Industries &amp; Clients We Serve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dmdark-600 leading-relaxed">
            Technology needs vary across sectors. Discover how DM Labs engineers tailored software, reliable networking, and security solutions tailored to your unique operational scale.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {INDUSTRIES_SERVED.map((ind) => {
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-2 border ${
                  isActive
                    ? "bg-white text-dmblue-600 border-dmblue-300 shadow-md ring-2 ring-dmblue-100"
                    : "bg-white/60 text-dmdark-700 border-dmdark-200 hover:bg-white hover:text-dmdark-950"
                }`}
              >
                <DynamicIcon name={ind.icon} className={`w-4 h-4 ${isActive ? "text-dmblue-600" : "text-dmdark-500"}`} />
                <span>{ind.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Industry Solution Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-premium border border-dmdark-200 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 6 cols: Description & Key Challenges */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-dmblue-50 text-dmblue-600 flex items-center justify-center">
                  <DynamicIcon name={currentIndustry.icon} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-dmblue-600">Tailored Capability</span>
                  <h3 className="text-2xl font-black text-dmdark-950">{currentIndustry.title}</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-dmdark-600 leading-relaxed">
                {currentIndustry.description}
              </p>

              {/* Common Sector Bottlenecks */}
              <div className="p-4 rounded-xl bg-dmred-50/50 border border-dmred-100">
                <div className="flex items-center text-xs font-bold text-dmred-700 uppercase tracking-wider mb-2.5">
                  <ShieldAlert className="w-3.5 h-3.5 mr-1.5" />
                  Common Sector Bottlenecks
                </div>
                <div className="space-y-2">
                  {currentIndustry.challenges.map((ch, idx) => (
                    <div key={idx} className="flex items-start text-xs text-dmdark-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-dmred-500 mr-2 mt-1.5 flex-shrink-0" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 cols: DM Labs Solutions & Featured Capabilities */}
            <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-dmdark-100 lg:pl-8">
              <div>
                <h4 className="text-xs font-bold text-dmblue-600 uppercase tracking-wider mb-3">
                  How DM Labs Solves It
                </h4>
                <div className="space-y-3">
                  {currentIndustry.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start p-3.5 rounded-xl bg-dmdark-50 border border-dmdark-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-dmdark-900 leading-relaxed">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="pt-2">
                <a
                  href="#request-service"
                  className="inline-flex items-center text-xs font-bold text-white bg-dmblue-600 hover:bg-dmblue-700 px-5 py-3 rounded-xl shadow-subtle-blue transition-all"
                >
                  <span>Inquire for {currentIndustry.title.split("&")[0].trim()}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
