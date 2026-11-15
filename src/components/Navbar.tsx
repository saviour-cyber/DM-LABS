"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  Mail,
  ExternalLink
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { DynamicIcon } from "./DynamicIcon";
import { COMPANY_INFO } from "@/data/company";

interface NavbarProps {
  onRequestService?: () => void;
}

export function Navbar({ onRequestService }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRequestClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onRequestService) {
      onRequestService();
    } else {
      const el = document.getElementById("request-service");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-dmdark-200" 
          : "bg-white/90 backdrop-blur-sm py-4 border-b border-dmdark-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10" aria-label="DM Labs Home">
            <div className="relative h-10 sm:h-12 w-44 sm:w-52 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/brand/logo-trimmed.png"
                alt="DM Labs - Technology, Creativity, Innovation"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 176px, 208px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link 
              href="#home" 
              className="px-3.5 py-2 text-sm font-semibold text-dmdark-800 hover:text-dmblue-600 transition-colors rounded-lg hover:bg-dmblue-50/60"
            >
              Home
            </Link>

            <Link 
              href="#about" 
              className="px-3.5 py-2 text-sm font-semibold text-dmdark-800 hover:text-dmblue-600 transition-colors rounded-lg hover:bg-dmblue-50/60"
            >
              About Us
            </Link>

            {/* Services with Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link 
                href="#services"
                className="px-3.5 py-2 text-sm font-semibold text-dmdark-800 hover:text-dmblue-600 transition-colors rounded-lg hover:bg-dmblue-50/60 flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-dmblue-600" : "text-dmdark-400"}`} />
              </Link>

              {/* Mega-Menu Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-20 w-[840px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl shadow-2xl border border-dmdark-200 p-6 overflow-hidden">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-dmdark-100">
                      <div>
                        <div className="text-xs font-bold tracking-wider text-dmblue-600 uppercase">Comprehensive Technology Directory</div>
                        <h4 className="text-base font-bold text-dmdark-950">9 Professional Capabilities Designed to Scale</h4>
                      </div>
                      <Link 
                        href="#services" 
                        onClick={() => setServicesDropdownOpen(false)}
                        className="inline-flex items-center text-xs font-semibold text-dmred-600 hover:text-dmred-700 transition-colors"
                      >
                        <span>View All 80+ Services</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`#category-${cat.id}`}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group p-3 rounded-xl hover:bg-dmblue-50/70 border border-transparent hover:border-dmblue-200 transition-all text-left"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-dmblue-100 text-dmblue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-dmblue-600 group-hover:text-white transition-colors">
                              <DynamicIcon name={cat.icon} className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-dmdark-900 group-hover:text-dmblue-600 transition-colors line-clamp-1">
                                {cat.name}
                              </div>
                              <p className="text-xs text-dmdark-500 line-clamp-2 mt-0.5 leading-snug">
                                {cat.tagline}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-dmdark-100 bg-dmdark-50 -mx-6 -mb-6 p-4 px-6 flex items-center justify-between text-xs text-dmdark-600">
                      <span className="flex items-center">
                        <Sparkles className="w-4 h-4 text-dmred-600 mr-2" />
                        Custom technology engineering tailored to your workflow requirements.
                      </span>
                      <button 
                        onClick={handleRequestClick}
                        className="font-bold text-dmblue-600 hover:text-dmblue-700 hover:underline"
                      >
                        Request a custom solution &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="#solutions" 
              className="px-3.5 py-2 text-sm font-semibold text-dmdark-800 hover:text-dmblue-600 transition-colors rounded-lg hover:bg-dmblue-50/60"
            >
              Solutions
            </Link>

            <Link 
              href="#projects" 
              className="px-3.5 py-2 text-sm font-semibold text-dmdark-800 hover:text-dmblue-600 transition-colors rounded-lg hover:bg-dmblue-50/60"
            >
              Our Projects
            </Link>

            <Link 
              href="#why-us" 
              className="px-3.5 py-2 text-sm font-semibold text-dmdark-800 hover:text-dmblue-600 transition-colors rounded-lg hover:bg-dmblue-50/60"
            >
              Why DM Labs
            </Link>

            <Link 
              href="#contact" 
              className="px-3.5 py-2 text-sm font-semibold text-dmdark-800 hover:text-dmblue-600 transition-colors rounded-lg hover:bg-dmblue-50/60"
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleRequestClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-dmblue-600 hover:bg-dmblue-700 active:scale-95 shadow-subtle-blue transition-all group"
            >
              <span>Request a Service</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-dmdark-700 hover:text-dmblue-600 hover:bg-dmdark-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-dmdark-200 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="px-5 pt-4 pb-8 space-y-3">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-dmdark-900 hover:bg-dmblue-50 hover:text-dmblue-600"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-dmdark-900 hover:bg-dmblue-50 hover:text-dmblue-600"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-t border-b border-dmdark-100 py-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-bold text-dmdark-900 hover:text-dmblue-600"
              >
                <span>Services Directory</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-dmblue-600" : ""}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 pt-2 space-y-1.5 pb-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`#category-${cat.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-2.5 py-2 px-2.5 rounded-lg text-sm font-medium text-dmdark-700 hover:bg-dmblue-50 hover:text-dmblue-600"
                    >
                      <DynamicIcon name={cat.icon} className="w-4 h-4 text-dmblue-600" />
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block pt-2 text-xs font-bold text-dmred-600 hover:underline pl-2.5"
                  >
                    View All 9 Service Categories &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-dmdark-900 hover:bg-dmblue-50 hover:text-dmblue-600"
            >
              Solutions &amp; Industries
            </Link>

            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-dmdark-900 hover:bg-dmblue-50 hover:text-dmblue-600"
            >
              Our Projects
            </Link>

            <Link
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-dmdark-900 hover:bg-dmblue-50 hover:text-dmblue-600"
            >
              Why Choose DM Labs
            </Link>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-dmdark-900 hover:bg-dmblue-50 hover:text-dmblue-600"
            >
              Contact Us
            </Link>

            <div className="pt-4 space-y-2">
              <button
                onClick={handleRequestClick}
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl font-bold text-sm text-white bg-dmblue-600 hover:bg-dmblue-700 shadow-subtle-blue"
              >
                <span>Request a Service</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="pt-3 border-t border-dmdark-100 flex items-center justify-around text-xs text-dmdark-500">
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="flex items-center hover:text-dmblue-600">
                  <PhoneCall className="w-3.5 h-3.5 mr-1 text-dmblue-600" />
                  <span>Call Us</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="flex items-center hover:text-dmblue-600">
                  <Mail className="w-3.5 h-3.5 mr-1 text-dmred-600" />
                  <span>Email</span>
                </a>
                <Link href="/admin/inquiries" className="flex items-center hover:text-dmdark-900 font-medium">
                  <span>Portal</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
