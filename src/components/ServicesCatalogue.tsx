"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  X,
  SlidersHorizontal,
  ChevronRight
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_CATALOGUE } from "@/data/services";
import { ServiceCategory, ServiceItem } from "@/types";
import { DynamicIcon } from "./DynamicIcon";

interface ServicesCatalogueProps {
  onSelectServiceForInquiry?: (category: ServiceCategory, serviceId: string) => void;
}

export function ServicesCatalogue({ onSelectServiceForInquiry }: ServicesCatalogueProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Filtered services
  const filteredServices = useMemo(() => {
    return SERVICES_CATALOGUE.filter((service) => {
      const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === "" ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleRequestService = (service: ServiceItem) => {
    setActiveModalService(null);
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(service.category, service.id);
    } else {
      const el = document.getElementById("request-service");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getCategoryMeta = (catId: ServiceCategory) => {
    return SERVICE_CATEGORIES.find(c => c.id === catId);
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dmblue-50 text-dmblue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-dmblue-200">
            <Layers className="w-3.5 h-3.5 text-dmblue-600" />
            <span>Comprehensive Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dmdark-950 tracking-tight">
            Our Services &amp; Technical Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dmdark-600 leading-relaxed">
            DM Labs delivers a versatile catalog of technology solutions across 9 specialized domains. Each service is engineered for scalability, dependability, and measurable organizational impact.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 space-y-5">
          
          {/* Search bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dmdark-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 80+ services (e.g. Fiber, POS, School System, CCTV, UI/UX)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 bg-white text-sm text-dmdark-900 placeholder-dmdark-400 transition-all outline-none shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-dmdark-400 hover:text-dmdark-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                selectedCategory === "all"
                  ? "bg-dmdark-950 text-white shadow-md"
                  : "bg-dmdark-100 text-dmdark-700 hover:bg-dmdark-200"
              }`}
            >
              <span>All Capabilities</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedCategory === "all" ? "bg-white/20 text-white" : "bg-white text-dmdark-600"}`}>
                {SERVICES_CATALOGUE.length}
              </span>
            </button>

            {SERVICE_CATEGORIES.map((cat) => {
              const count = SERVICES_CATALOGUE.filter(s => s.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  id={`category-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-2 ${
                    isSelected
                      ? "bg-dmblue-600 text-white shadow-subtle-blue"
                      : "bg-dmdark-100 text-dmdark-700 hover:bg-dmdark-200"
                  }`}
                >
                  <DynamicIcon name={cat.icon} className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? "bg-white/20 text-white" : "bg-white text-dmdark-600"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Category Description Banner when category selected */}
        {selectedCategory !== "all" && (
          <div className="mb-8 p-6 rounded-2xl bg-dmblue-50/70 border border-dmblue-200 text-left animate-in fade-in duration-200">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-dmblue-600">Category Overview</span>
                <h3 className="text-xl font-bold text-dmdark-950 mt-0.5">
                  {getCategoryMeta(selectedCategory)?.name}
                </h3>
                <p className="text-sm text-dmdark-600 mt-1 max-w-3xl">
                  {getCategoryMeta(selectedCategory)?.description}
                </p>
              </div>
              <button 
                onClick={() => setSelectedCategory("all")}
                className="text-xs font-semibold text-dmdark-500 hover:text-dmblue-600 underline ml-4 flex-shrink-0"
              >
                Reset Filter
              </button>
            </div>
          </div>
        )}

        {/* Results Count & Services Grid */}
        <div className="mb-4 text-xs font-semibold text-dmdark-500 text-left">
          Showing {filteredServices.length} {filteredServices.length === 1 ? "service" : "services"}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>

        {filteredServices.length === 0 ? (
          <div className="py-16 text-center bg-dmdark-50 rounded-2xl border border-dashed border-dmdark-200">
            <Search className="w-10 h-10 text-dmdark-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-dmdark-800">No matching services found</h4>
            <p className="text-xs text-dmdark-500 mt-1 max-w-md mx-auto">
              We couldn&apos;t find any service matching &quot;{searchQuery}&quot;. Try a broader search term or explore all categories.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="mt-4 px-4 py-2 bg-dmblue-600 text-white rounded-lg text-xs font-bold hover:bg-dmblue-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 border border-dmdark-200/90 shadow-sm hover:shadow-premium-hover hover:border-dmblue-500/80 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  
                  {/* Top Bar: Icon + Category Badge + Popular tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-dmblue-50 text-dmblue-600 flex items-center justify-center group-hover:bg-dmblue-600 group-hover:text-white transition-colors">
                      <DynamicIcon name={service.icon} className="w-5 h-5" />
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {service.popular && (
                        <span className="px-2 py-0.5 rounded-full bg-dmred-50 text-dmred-600 text-[10px] font-bold uppercase tracking-wider border border-dmred-200">
                          Popular
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-dmdark-100 text-dmdark-600 text-[10px] font-semibold">
                        {getCategoryMeta(service.category)?.name.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-dmdark-950 group-hover:text-dmblue-600 transition-colors mb-2">
                    {service.title}
                  </h4>

                  {/* Short Description */}
                  <p className="text-xs text-dmdark-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-dmdark-100">
                    <div className="text-[11px] font-bold text-dmdark-400 uppercase tracking-wider">Key Deliverables</div>
                    {service.deliverables.slice(0, 3).map((del, i) => (
                      <div key={i} className="flex items-center text-xs text-dmdark-700">
                        <Check className="w-3.5 h-3.5 text-dmblue-600 mr-1.5 flex-shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                    {service.deliverables.length > 3 && (
                      <div className="text-[11px] text-dmdark-400 font-medium pl-5">
                        +{service.deliverables.length - 3} more deliverables
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-dmdark-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-dmdark-600 hover:text-dmblue-600 transition-colors flex items-center"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => handleRequestService(service)}
                    className="inline-flex items-center text-xs font-bold text-white bg-dmblue-600 hover:bg-dmblue-700 px-3.5 py-1.5 rounded-lg shadow-sm transition-all group-hover:bg-dmblue-700"
                  >
                    <span>Request</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dmdark-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-dmdark-200 relative text-left max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-dmdark-400 hover:text-dmdark-700 hover:bg-dmdark-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-dmblue-100 text-dmblue-600 flex items-center justify-center">
                <DynamicIcon name={activeModalService.icon} className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-dmblue-600">
                  {getCategoryMeta(activeModalService.category)?.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-dmdark-950">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm text-dmdark-700 leading-relaxed mb-6">
              {activeModalService.detailedDescription}
            </p>

            {/* Complete Deliverables */}
            <div className="mb-8 p-4 rounded-xl bg-dmdark-50 border border-dmdark-100">
              <h4 className="text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-3">
                Deliverables &amp; Technical Scope
              </h4>
              <div className="space-y-2">
                {activeModalService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start text-xs text-dmdark-800">
                    <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-dmdark-100">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-dmdark-600 hover:bg-dmdark-100"
              >
                Close
              </button>
              <button
                onClick={() => handleRequestService(activeModalService)}
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-dmblue-600 hover:bg-dmblue-700 shadow-subtle-blue"
              >
                <span>Request This Service Now</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
