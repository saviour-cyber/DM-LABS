"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  MapPin,
  Building,
  Sparkles,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_CATALOGUE } from "@/data/services";
import { ServiceCategory } from "@/types";
import { COMPANY_INFO } from "@/data/company";

interface ServiceRequestFormProps {
  initialCategory?: ServiceCategory;
  initialServiceId?: string;
}

export function ServiceRequestForm({ initialCategory, initialServiceId }: ServiceRequestFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [category, setCategory] = useState<ServiceCategory>(initialCategory || "software");
  const [serviceId, setServiceId] = useState<string>(initialServiceId || "");
  const [budgetRange, setBudgetRange] = useState("");
  const [description, setDescription] = useState("");
  const [preferredContact, setPreferredContact] = useState<"email" | "phone" | "whatsapp">("email");

  // State management
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [referenceCode, setReferenceCode] = useState("");

  // Sync external props if passed
  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialServiceId) {
      setServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Dynamically filtered services for selected category
  const availableServices = useMemo(() => {
    return SERVICES_CATALOGUE.filter((s) => s.category === category);
  }, [category]);

  // Ensure selected serviceId belongs to current category
  useEffect(() => {
    if (availableServices.length > 0) {
      const exists = availableServices.some((s) => s.id === serviceId);
      if (!exists) {
        setServiceId(availableServices[0].id);
      }
    }
  }, [category, availableServices, serviceId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      // Find selected service title
      const currentService = SERVICES_CATALOGUE.find((s) => s.id === serviceId);
      const serviceTitle = currentService ? currentService.title : serviceId;

      const payload = {
        fullName,
        email,
        phone,
        organization,
        category,
        serviceId,
        serviceTitle,
        budgetRange,
        description,
        preferredContact,
      };

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setReferenceCode(data.inquiry?.id || `DML-${Date.now().toString().slice(-6)}`);
      setSubmitSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setDescription("");
    setBudgetRange("");
    setSubmitSuccess(false);
    setSubmitError("");
    setReferenceCode("");
  };

  return (
    <section id="contact" className="py-24 bg-dmdark-50/60 border-t border-dmdark-200 relative">
      <div id="request-service" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dmblue-50 text-dmblue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-dmblue-200">
            <Send className="w-3.5 h-3.5 text-dmblue-600" />
            <span>Service Inquiries &amp; Consultations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dmdark-950 tracking-tight">
            Request a Service or Project Consultation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dmdark-600 leading-relaxed">
            Ready to build a system, wire an office network, or design your next digital product? Fill out the inquiry form below, and our engineering team will evaluate your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Office Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-dmdark-200">
              <h3 className="text-lg font-bold text-dmdark-950 mb-1">
                Direct Communication Channels
              </h3>
              <p className="text-xs text-dmdark-500 mb-6">
                Prefer immediate messaging? Reach out directly via WhatsApp, phone, or corporate email.
              </p>

              <div className="space-y-4">
                
                {/* Email Card */}
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-center p-3.5 rounded-xl border border-dmdark-100 hover:border-dmblue-300 hover:bg-dmblue-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-dmblue-50 text-dmblue-600 flex items-center justify-center mr-3 group-hover:bg-dmblue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-dmdark-400 uppercase tracking-wider">Official Email</div>
                    <div className="text-sm font-bold text-dmdark-900 group-hover:text-dmblue-600 transition-colors">
                      {COMPANY_INFO.contact.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Quick Chat */}
                <a 
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20DM%20Labs,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3.5 rounded-xl border border-dmdark-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mr-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">WhatsApp Direct</div>
                    <div className="text-sm font-bold text-dmdark-900 group-hover:text-emerald-700 transition-colors">
                      Chat with an Engineer
                    </div>
                  </div>
                </a>

                {/* Telephone */}
                <a 
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="flex items-center p-3.5 rounded-xl border border-dmdark-100 hover:border-dmred-300 hover:bg-dmred-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-dmred-50 text-dmred-600 flex items-center justify-center mr-3 group-hover:bg-dmred-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-dmdark-400 uppercase tracking-wider">Direct Phone</div>
                    <div className="text-sm font-bold text-dmdark-900 group-hover:text-dmred-600 transition-colors">
                      {COMPANY_INFO.contact.phone}
                    </div>
                  </div>
                </a>

              </div>
            </div>

            {/* Operating Hours & Location */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-dmdark-200 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dmblue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-dmdark-900 uppercase">Headquarters</div>
                  <div className="text-xs text-dmdark-600 mt-0.5">{COMPANY_INFO.contact.location}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-dmdark-100">
                <Clock className="w-5 h-5 text-dmred-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-dmdark-900 uppercase">Operating Hours</div>
                  <div className="text-xs text-dmdark-600 mt-0.5">{COMPANY_INFO.contact.hours}</div>
                </div>
              </div>
            </div>

            {/* Admin Inquiries View Shortcut */}
            <div className="p-4 rounded-xl bg-dmdark-100/60 border border-dmdark-200 flex items-center justify-between text-xs text-dmdark-600">
              <span>Are you a DM Labs administrator?</span>
              <a 
                href="/admin/inquiries" 
                className="font-bold text-dmblue-600 hover:text-dmblue-700 flex items-center"
              >
                <span>View Inquiries Portal</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic Service Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-premium border border-dmdark-200 text-left">
              
              {submitSuccess ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-dmdark-950">
                    Service Request Received!
                  </h3>
                  <p className="text-sm text-dmdark-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-dmdark-900">{fullName}</strong>. Your project inquiry has been securely stored and routed to the DM Labs technical team.
                  </p>

                  <div className="inline-block p-4 rounded-xl bg-dmdark-50 border border-dmdark-200 my-4 text-xs">
                    <div className="text-dmdark-500 uppercase tracking-wider font-semibold">Reference Inquiry Code</div>
                    <div className="font-mono text-base font-bold text-dmblue-600 mt-1">{referenceCode}</div>
                  </div>

                  <p className="text-xs text-dmdark-500">
                    A representative will contact you via your preferred channel (<span className="capitalize font-semibold">{preferredContact}</span>) within 24 hours.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-dmdark-900 hover:bg-dmdark-950 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {submitError && (
                    <div className="p-4 rounded-xl bg-dmred-50 border border-dmred-200 text-dmred-700 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-dmred-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. John Mwangi"
                        className="w-full px-4 py-3 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-dmred-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-dmred-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +254 712 345 678"
                        className="w-full px-4 py-3 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Organization (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                        Organization / Company <span className="text-dmdark-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Apex High School or Tech Ltd"
                        className="w-full px-4 py-3 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 text-sm outline-none transition-all"
                      />
                    </div>

                  </div>

                  {/* Cascading Category & Specific Service Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    
                    {/* Category Selection */}
                    <div>
                      <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                        Service Category <span className="text-dmred-600">*</span>
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as ServiceCategory)}
                        className="w-full px-4 py-3 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 text-sm outline-none bg-white font-medium"
                      >
                        {SERVICE_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dynamically Filtered Specific Service */}
                    <div>
                      <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                        Specific Service <span className="text-dmred-600">*</span>
                      </label>
                      <select
                        value={serviceId}
                        onChange={(e) => setServiceId(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 text-sm outline-none bg-white font-medium"
                      >
                        {availableServices.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Project Budget & Preferred Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                        Project Budget <span className="text-dmdark-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 text-sm outline-none bg-white"
                      >
                        <option value="">Select budget range...</option>
                        <option value="Under KES 50,000">Under KES 50,000</option>
                        <option value="KES 50,000 – 150,000">KES 50,000 – 150,000</option>
                        <option value="KES 150,000 – 500,000">KES 150,000 – 500,000</option>
                        <option value="KES 500,000 – 1,500,000">KES 500,000 – 1,500,000</option>
                        <option value="Above KES 1,500,000">Above KES 1,500,000</option>
                        <option value="To Be Determined">To Be Determined</option>
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                        Preferred Contact Method <span className="text-dmred-600">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(["email", "phone", "whatsapp"] as const).map((method) => (
                          <button
                            type="button"
                            key={method}
                            onClick={() => setPreferredContact(method)}
                            className={`py-3 px-2 rounded-xl text-xs font-bold capitalize border transition-all text-center ${
                              preferredContact === method
                                ? "bg-dmblue-50 border-dmblue-600 text-dmblue-700 ring-2 ring-dmblue-100"
                                : "border-dmdark-200 text-dmdark-600 hover:bg-dmdark-50"
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold text-dmdark-900 uppercase tracking-wider mb-1.5">
                      Project Description &amp; Requirements <span className="text-dmred-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Please outline your objectives, estimated timeline, number of users, or specific hardware/software preferences..."
                      className="w-full px-4 py-3 rounded-xl border border-dmdark-200 focus:border-dmblue-600 focus:ring-2 focus:ring-dmblue-100 text-sm outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-dmblue-600 hover:bg-dmblue-700 active:scale-[0.99] disabled:opacity-70 shadow-subtle-blue transition-all flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Service Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Service Inquiry</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-dmdark-400 text-center mt-2.5">
                      All inquiries are securely logged. We respect your confidentiality.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
