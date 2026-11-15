"use client";

import React from "react";
import { 
  Lightbulb, 
  Target, 
  Eye, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Users2,
  Workflow
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-dmdark-50/50 border-t border-b border-dmdark-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dmblue-100 text-dmblue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-dmblue-600" />
            <span>About DM Labs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dmdark-950 tracking-tight">
            Where Technology Engineering Meets Creative Digital Solutions.
          </h2>
          <p className="mt-4 text-lg text-dmdark-600 leading-relaxed">
            {COMPANY_INFO.about.overview}
          </p>
        </div>

        {/* Mission & Vision Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="relative rounded-2xl bg-white p-8 shadow-premium border border-dmdark-200/80 hover:border-dmblue-500/50 transition-all text-left group">
            <div className="w-12 h-12 rounded-xl bg-dmblue-50 text-dmblue-600 flex items-center justify-center mb-6 group-hover:bg-dmblue-600 group-hover:text-white transition-colors">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-dmblue-600 tracking-wider uppercase mb-1">Our Purpose</div>
            <h3 className="text-2xl font-bold text-dmdark-950 mb-3">Our Mission</h3>
            <p className="text-dmdark-600 leading-relaxed text-base">
              {COMPANY_INFO.about.mission}
            </p>
            <div className="mt-6 pt-4 border-t border-dmdark-100 flex items-center text-xs font-semibold text-dmdark-500">
              <span className="w-1.5 h-1.5 rounded-full bg-dmblue-600 mr-2" />
              Empowering people and organizations with practical engineering.
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-2xl bg-white p-8 shadow-premium border border-dmdark-200/80 hover:border-dmred-500/50 transition-all text-left group">
            <div className="w-12 h-12 rounded-xl bg-dmred-50 text-dmred-600 flex items-center justify-center mb-6 group-hover:bg-dmred-600 group-hover:text-white transition-colors">
              <Eye className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-dmred-600 tracking-wider uppercase mb-1">Our Horizon</div>
            <h3 className="text-2xl font-bold text-dmdark-950 mb-3">Our Vision</h3>
            <p className="text-dmdark-600 leading-relaxed text-base">
              {COMPANY_INFO.about.vision}
            </p>
            <div className="mt-6 pt-4 border-t border-dmdark-100 flex items-center text-xs font-semibold text-dmdark-500">
              <span className="w-1.5 h-1.5 rounded-full bg-dmred-600 mr-2" />
              Setting benchmark standards in multi-disciplinary ICT execution.
            </div>
          </div>

        </div>

        {/* Our Approach to Technology */}
        <div className="mb-20">
          <div className="text-left mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-dmblue-600 mb-1">Methodology</div>
            <h3 className="text-2xl sm:text-3xl font-black text-dmdark-950">Our Approach to Technology</h3>
            <p className="text-sm text-dmdark-600 mt-1 max-w-xl">
              We apply a disciplined 5-stage engineering lifecycle to deliver robust, zero-surprise solutions on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_INFO.about.approach.map((item, idx) => (
              <div 
                key={item.step} 
                className="bg-white rounded-xl p-5 border border-dmdark-200 shadow-sm hover:shadow-md hover:border-dmblue-300 transition-all text-left relative"
              >
                <div className="text-2xl font-black text-dmblue-600/30 mb-2">
                  {item.step}
                </div>
                <h4 className="text-base font-bold text-dmdark-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-dmdark-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Grid */}
        <div>
          <div className="text-left mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-dmred-600 mb-1">Principles</div>
            <h3 className="text-2xl sm:text-3xl font-black text-dmdark-950">Our Core Values</h3>
            <p className="text-sm text-dmdark-600 mt-1">
              Guiding principles that govern how we interact with clients, write code, and configure physical networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.about.values.map((val) => (
              <div 
                key={val.title}
                className="bg-white rounded-xl p-6 border border-dmdark-200/80 shadow-sm hover:shadow-subtle-blue hover:border-dmblue-300 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-dmblue-50 text-dmblue-600 flex items-center justify-center mb-3">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-dmdark-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-dmdark-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
