"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Inbox, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Filter, 
  Search, 
  Phone, 
  Mail, 
  Building, 
  MessageSquare,
  Layers,
  RefreshCw,
  ExternalLink,
  Sliders,
  Check
} from "lucide-react";
import { ServiceInquiry } from "@/types";
import { SERVICE_CATEGORIES, SERVICES_CATALOGUE } from "@/data/services";

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<ServiceInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"inquiries" | "services">("inquiries");

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries");
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (err) {
      console.error("Failed to load inquiries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = statusFilter === "all" || inq.status === statusFilter;
    const matchesSearch = 
      search === "" ||
      inq.fullName.toLowerCase().includes(search.toLowerCase()) ||
      inq.email.toLowerCase().includes(search.toLowerCase()) ||
      inq.serviceTitle.toLowerCase().includes(search.toLowerCase()) ||
      (inq.organization && inq.organization.toLowerCase().includes(search.toLowerCase()));

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-dmdark-50 text-dmdark-900">
      
      {/* Top Admin Header */}
      <header className="bg-white border-b border-dmdark-200 sticky top-0 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-9 w-40">
                <Image
                  src="/brand/logo-trimmed.png"
                  alt="DM Labs"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-dmblue-100 text-dmblue-700">
              Admin Workspace
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-bold text-dmdark-600 hover:text-dmblue-600 bg-dmdark-100 hover:bg-dmdark-200 px-3.5 py-2 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              <span>Back to Corporate Site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-4 mb-8 border-b border-dmdark-200">
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`pb-3 text-sm font-bold flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === "inquiries"
                ? "border-dmblue-600 text-dmblue-600"
                : "border-transparent text-dmdark-500 hover:text-dmdark-800"
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Service Inquiries</span>
            <span className="px-2 py-0.5 rounded-full bg-dmblue-50 text-dmblue-700 text-xs">
              {inquiries.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`pb-3 text-sm font-bold flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === "services"
                ? "border-dmblue-600 text-dmblue-600"
                : "border-transparent text-dmdark-500 hover:text-dmdark-800"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Services Catalogue Management</span>
            <span className="px-2 py-0.5 rounded-full bg-dmdark-200 text-dmdark-700 text-xs">
              {SERVICES_CATALOGUE.length}
            </span>
          </button>
        </div>

        {activeTab === "inquiries" ? (
          <div>
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-dmdark-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by client name, email, organization..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-dmdark-200 text-xs bg-white focus:outline-none focus:border-dmblue-600"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={fetchInquiries}
                  className="p-2.5 rounded-xl border border-dmdark-200 bg-white text-dmdark-600 hover:text-dmblue-600 hover:bg-dmdark-50 text-xs font-bold"
                  title="Refresh inquiries"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                </button>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl border border-dmdark-200 bg-white text-xs font-bold text-dmdark-700 outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New Inquiries</option>
                  <option value="reviewing">In Review</option>
                  <option value="contacted">Contacted</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            {/* Inquiries List */}
            {loading ? (
              <div className="p-16 text-center text-xs text-dmdark-400">Loading incoming inquiries...</div>
            ) : filteredInquiries.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-dmdark-200">
                <Inbox className="w-12 h-12 text-dmdark-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-dmdark-800">No Inquiries Found</h4>
                <p className="text-xs text-dmdark-500 mt-1 max-w-sm mx-auto">
                  Customer project requests submitted through the corporate website will automatically appear here.
                </p>
                <div className="mt-4">
                  <Link
                    href="/#request-service"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-dmblue-600 text-white text-xs font-bold hover:bg-dmblue-700"
                  >
                    <span>Test the Service Request Form</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="bg-white rounded-2xl p-6 border border-dmdark-200/90 shadow-sm hover:shadow-md transition-all text-left"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-dmdark-100 mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-dmblue-50 text-dmblue-700 border border-dmblue-200">
                          {inq.id}
                        </span>
                        <h4 className="text-base font-bold text-dmdark-950">
                          {inq.fullName}
                        </h4>
                        {inq.organization && (
                          <span className="text-xs text-dmdark-500 flex items-center">
                            <Building className="w-3.5 h-3.5 mr-1" />
                            {inq.organization}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 text-xs text-dmdark-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{new Date(inq.createdAt).toLocaleDateString()} at {new Date(inq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-xs">
                      <div>
                        <span className="text-dmdark-400 font-semibold uppercase tracking-wider block mb-1">Requested Service</span>
                        <span className="font-bold text-dmblue-700">{inq.serviceTitle}</span>
                        <span className="text-dmdark-500 block text-[11px] capitalize">Category: {inq.category}</span>
                      </div>

                      <div>
                        <span className="text-dmdark-400 font-semibold uppercase tracking-wider block mb-1">Contact Channels</span>
                        <div className="space-y-0.5">
                          <a href={`mailto:${inq.email}`} className="text-dmdark-700 hover:text-dmblue-600 flex items-center">
                            <Mail className="w-3 h-3 mr-1 text-dmdark-400" />
                            {inq.email}
                          </a>
                          <a href={`tel:${inq.phone}`} className="text-dmdark-700 hover:text-dmblue-600 flex items-center">
                            <Phone className="w-3 h-3 mr-1 text-dmdark-400" />
                            {inq.phone}
                          </a>
                        </div>
                      </div>

                      <div>
                        <span className="text-dmdark-400 font-semibold uppercase tracking-wider block mb-1">Preferences</span>
                        <div className="text-dmdark-700">Budget: <strong className="font-semibold">{inq.budgetRange || "Flexible / Not Stated"}</strong></div>
                        <div className="text-dmdark-700">Preferred Channel: <strong className="capitalize font-semibold text-dmred-600">{inq.preferredContact}</strong></div>
                      </div>
                    </div>

                    {/* Inquiry Message */}
                    <div className="p-4 rounded-xl bg-dmdark-50 border border-dmdark-100 text-xs text-dmdark-800 leading-relaxed">
                      <div className="text-[10px] font-bold text-dmdark-400 uppercase tracking-wider mb-1">Project Requirements</div>
                      {inq.description}
                    </div>

                    {/* Quick Action bar */}
                    <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-dmdark-100">
                      <div className="flex items-center space-x-2">
                        <span className="text-dmdark-400 font-semibold">Status:</span>
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {inq.status}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <a
                          href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(inq.fullName)},%20this%20is%20DM%20Labs%20following%20up%20on%20your%20inquiry%20regarding%20${encodeURIComponent(inq.serviceTitle)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 inline-flex items-center"
                        >
                          <MessageSquare className="w-3 h-3 mr-1" />
                          <span>WhatsApp Client</span>
                        </a>

                        <a
                          href={`mailto:${inq.email}?subject=DM%20Labs%20—%20Inquiry%20Response%20(${inq.id})&body=Hello%20${encodeURIComponent(inq.fullName)},%0D%0A%0D%0AThank%20you%20for%20contacting%20DM%20Labs%20regarding%20${encodeURIComponent(inq.serviceTitle)}.`}
                          className="px-3 py-1.5 rounded-lg bg-dmblue-600 text-white font-bold hover:bg-dmblue-700 inline-flex items-center"
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          <span>Email Client</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        ) : (
          /* Services Management Tab */
          <div>
            <div className="bg-white rounded-2xl p-6 border border-dmdark-200 mb-6 text-left">
              <h3 className="text-lg font-bold text-dmdark-950 mb-1">
                Configurable Service Directory Architecture
              </h3>
              <p className="text-xs text-dmdark-500">
                Services can be toggled between Active, Available, and Coming Soon. This architecture supports immediate scaling as DM Labs expands without modifying website markup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {SERVICES_CATALOGUE.map((serv) => (
                <div
                  key={serv.id}
                  className="bg-white rounded-xl p-4 border border-dmdark-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-dmblue-600">
                        {serv.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold capitalize bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {serv.status}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-dmdark-900 mb-1">{serv.title}</h5>
                    <p className="text-xs text-dmdark-500 line-clamp-2">{serv.shortDescription}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-dmdark-100 text-[11px] text-dmdark-400 flex items-center justify-between">
                    <span>{serv.deliverables.length} Deliverables</span>
                    <span className="text-dmblue-600 font-semibold">Configured</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
