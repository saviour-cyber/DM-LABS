"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesCatalogue } from "@/components/ServicesCatalogue";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { Footer } from "@/components/Footer";
import { ServiceCategory } from "@/types";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("software");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("");

  const handleSelectServiceForInquiry = (category: ServiceCategory, serviceId: string) => {
    setSelectedCategory(category);
    setSelectedServiceId(serviceId);
    const formElement = document.getElementById("request-service");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRequestServiceNav = () => {
    const formElement = document.getElementById("request-service");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-dmdark-900 selection:bg-dmblue-600 selection:text-white">
      {/* Global Navigation */}
      <Navbar onRequestService={handleRequestServiceNav} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onRequestService={handleRequestServiceNav} />

        {/* 2. About DM Labs */}
        <AboutSection />

        {/* 3. Comprehensive Services Catalogue */}
        <ServicesCatalogue onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 4. Industries & Sectors We Serve */}
        <IndustriesSection onSelectService={handleSelectServiceForInquiry} />

        {/* 5. Projects & Portfolio Showcase */}
        <PortfolioSection />

        {/* 6. Why Choose DM Labs */}
        <WhyChooseUs />

        {/* 7. Interactive Service Request & Contact System */}
        <ServiceRequestForm 
          initialCategory={selectedCategory} 
          initialServiceId={selectedServiceId} 
        />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
