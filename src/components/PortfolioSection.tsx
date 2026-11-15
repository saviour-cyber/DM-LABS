"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  FolderGit2, 
  ExternalLink, 
  Calendar, 
  Layers, 
  Check, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { ProjectItem } from "@/types";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software" },
    { id: "websites", label: "Websites" },
    { id: "design", label: "Graphic Design" },
    { id: "networking", label: "Networking" },
    { id: "ict", label: "ICT Solutions" },
  ];

  const filteredProjects = activeCategory === "all"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dmblue-50 text-dmblue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-dmblue-200">
              <FolderGit2 className="w-3.5 h-3.5 text-dmblue-600" />
              <span>Technical Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dmdark-950 tracking-tight">
              Our Projects &amp; Capabilities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-dmdark-600 leading-relaxed">
              Explore concrete engineering demonstrations spanning custom enterprise software, campus-scale structured networking, retail point of sale, and corporate digital identities.
            </p>
          </div>

          {/* Quick Stats or CTA */}
          <div className="mt-6 md:mt-0">
            <a
              href="#request-service"
              className="inline-flex items-center text-xs font-bold text-dmblue-600 hover:text-dmblue-700 bg-dmblue-50 hover:bg-dmblue-100 px-4 py-2.5 rounded-xl transition-colors"
            >
              <span>Have a project in mind? Let&apos;s talk</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === c.id
                  ? "bg-dmdark-950 text-white shadow-md"
                  : "bg-dmdark-100 text-dmdark-700 hover:bg-dmdark-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-dmdark-200/90 shadow-sm hover:shadow-premium-hover hover:border-dmblue-400 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                
                {/* Project Visual / SVG Preview */}
                <div className="relative h-52 w-full bg-dmdark-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-dmdark-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                      {project.categoryLabel}
                    </span>
                  </div>
                  {project.completionDate && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-dmblue-600 text-white text-[10px] font-bold shadow-sm">
                        {project.completionDate}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dmdark-950 group-hover:text-dmblue-600 transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-dmdark-600 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-dmdark-100">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs text-dmdark-700">
                        <Check className="w-3.5 h-3.5 text-dmblue-600 mr-1.5 flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-dmdark-100 text-dmdark-600 text-[10px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <a
                  href="#request-service"
                  className="w-full inline-flex items-center justify-center text-xs font-bold text-dmblue-600 hover:text-white bg-dmblue-50 hover:bg-dmblue-600 py-2.5 rounded-xl transition-all"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
