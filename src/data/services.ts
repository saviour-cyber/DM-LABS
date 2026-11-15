import { CategoryInfo, ServiceItem } from "@/types";

export const SERVICE_CATEGORIES: CategoryInfo[] = [
  {
    id: "software",
    name: "Software Development",
    tagline: "Custom, scalable software engineered for enterprise and institutional workflows.",
    description: "From bespoke business platforms to automated web and mobile applications, we architect scalable software solutions that solve complex operational challenges.",
    icon: "Code2",
    badge: "Core Capability"
  },
  {
    id: "web",
    name: "Website & Digital Solutions",
    tagline: "High-performance websites, web portals, and digital customer touchpoints.",
    description: "Responsive, secure, SEO-optimized web platforms built with modern technology stacks to establish authority and drive conversions.",
    icon: "Globe",
    badge: "Popular"
  },
  {
    id: "design",
    name: "Graphic Design & Branding",
    tagline: "Cohesive brand identities, UI/UX systems, and marketing visual design.",
    description: "Distinctive visual storytelling that transforms corporate perception across digital, print, and interactive interfaces.",
    icon: "Palette"
  },
  {
    id: "networking",
    name: "Networking & Infrastructure",
    tagline: "Enterprise-grade LAN/WAN, structured cabling, fiber, and wireless architecture.",
    description: "Comprehensive networking design, deployment, configuration, and proactive monitoring for modern offices and institutions.",
    icon: "Network",
    badge: "Core Infrastructure"
  },
  {
    id: "it-support",
    name: "IT Support & Technical Services",
    tagline: "Professional hardware, system diagnostics, preventive maintenance, and support.",
    description: "Reliable technical support, equipment configuration, data backup, and proactive maintenance to guarantee zero downtime.",
    icon: "Wrench"
  },
  {
    id: "security",
    name: "CCTV & Security Systems",
    tagline: "Surveillance, IP cameras, biometric access control, and premises monitoring.",
    description: "End-to-end security hardware and software integration to protect physical premises and institutional facilities.",
    icon: "ShieldAlert"
  },
  {
    id: "cloud",
    name: "Cloud & Digital Transformation",
    tagline: "Cloud migration, business email, automated workflows, and digital infrastructure.",
    description: "Modernize legacy systems and adopt high-availability cloud services that enable remote collaboration and automated operations.",
    icon: "Cloud"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Data Protection",
    tagline: "Vulnerability assessments, network hardening, and disaster recovery planning.",
    description: "Protecting critical data, endpoints, and communications against threats with pragmatic, compliant security frameworks.",
    icon: "Lock"
  },
  {
    id: "consultancy",
    name: "ICT Consultancy & Solutions",
    tagline: "Strategic technology advisory, infrastructure audits, and procurement guidance.",
    description: "Independent technical guidance to help decision-makers invest wisely in technology that matches long-term strategic roadmaps.",
    icon: "Compass"
  }
];

export const SERVICES_CATALOGUE: ServiceItem[] = [
  // CATEGORY A: SOFTWARE DEVELOPMENT
  {
    id: "custom-software",
    title: "Custom Software Development",
    category: "software",
    shortDescription: "Tailored software applications built to exact business logic and operational requirements.",
    detailedDescription: "We engineer bespoke software platforms designed specifically around your organizational workflows, eliminating redundant manual steps and bridging disparate operational gaps.",
    icon: "Cpu",
    status: "active",
    deliverables: ["Custom Architecture Design", "Modular Microservices / Monolith", "Automated Testing Suite", "Full Source Code & Documentation"],
    popular: true
  },
  {
    id: "web-app-dev",
    title: "Web Application Development",
    category: "software",
    shortDescription: "Interactive, cloud-ready web applications with rich user interfaces.",
    detailedDescription: "High-performance web apps built with modern single-page and server-rendered frameworks, backed by robust APIs and secure databases.",
    icon: "Layers",
    status: "active",
    deliverables: ["Responsive Progressive Web App", "State Management & Real-Time Sync", "Role-Based Access Control", "Cloud Deployment Pipeline"]
  },
  {
    id: "mobile-app-dev",
    title: "Mobile Application Development",
    category: "software",
    shortDescription: "Native and cross-platform iOS and Android mobile solutions.",
    detailedDescription: "Fluid, responsive mobile applications that provide intuitive user experiences, offline synchronization, and secure push notifications.",
    icon: "Smartphone",
    status: "active",
    deliverables: ["iOS & Android Builds", "App Store & Play Store Publishing", "Push Notification Integration", "Offline-First Data Storage"]
  },
  {
    id: "business-management-systems",
    title: "Business Management Systems",
    category: "software",
    shortDescription: "Centralized platforms for tracking daily operations, staff, and tasks.",
    detailedDescription: "A unified software control center for managing day-to-day operations, task delegation, approvals, and performance metrics across teams.",
    icon: "Briefcase",
    status: "active",
    deliverables: ["Operational Dashboards", "Staff Assignment & Tracking", "Custom Approval Workflows", "Automated Activity Logs"]
  },
  {
    id: "school-management-systems",
    title: "School Management Systems",
    category: "software",
    shortDescription: "Comprehensive administrative, academic, and fee tracking systems for schools.",
    detailedDescription: "Built specifically for primary, secondary, and tertiary educational institutions to manage student records, grading, fee collections, timetabling, and parent portals.",
    icon: "GraduationCap",
    status: "active",
    deliverables: ["Student Information System (SIS)", "Gradebook & Report Generation", "Fee Invoicing & Payment Gateway", "Parent & Teacher Portals"],
    popular: true
  },
  {
    id: "inventory-management",
    title: "Inventory Management Systems",
    category: "software",
    shortDescription: "Real-time stock tracking, reorder alerts, and multi-warehouse control.",
    detailedDescription: "Accurately monitor stock movements, set automated reorder thresholds, track batches and serial numbers, and eliminate stockouts or excess holding costs.",
    icon: "Boxes",
    status: "active",
    deliverables: ["Multi-Location Stock Auditing", "Barcode / QR Scanner Support", "Automated Low-Stock Alerts", "Supplier Purchase Order Generation"]
  },
  {
    id: "pos-systems",
    title: "Point of Sale (POS) Systems",
    category: "software",
    shortDescription: "Fast, reliable retail and hospitality checkout with hardware integration.",
    detailedDescription: "Modern point of sale software compatible with receipt printers, cash drawers, barcode readers, and mobile payment gateways.",
    icon: "CreditCard",
    status: "active",
    deliverables: ["Touch-Optimized Register UI", "Receipt Printer & Cash Drawer Setup", "End-of-Day Z-Report Reconciliation", "Offline Transaction Caching"]
  },
  {
    id: "crm-systems",
    title: "Customer Relationship Management (CRM)",
    category: "software",
    shortDescription: "Pipeline management, lead tracking, and automated client engagement.",
    detailedDescription: "Track leads from first touch to closed contract, record client communication histories, and automate follow-up reminders.",
    icon: "Users2",
    status: "active",
    deliverables: ["Visual Deal Pipelines", "Lead Scoring & Assignment", "Automated Email Sequences", "Customer History Timeline"]
  },
  {
    id: "erp-systems",
    title: "Enterprise Resource Planning (ERP)",
    category: "software",
    shortDescription: "Integrated enterprise modules spanning finance, operations, HR, and supply chain.",
    detailedDescription: "Tie together finance, human resources, procurement, manufacturing, and logistics into a single, cohesive source of truth.",
    icon: "Building2",
    status: "available",
    deliverables: ["Inter-departmental Ledger Sync", "Supply Chain Visibility", "HR & Payroll Integration", "Executive BI Reporting"]
  },
  {
    id: "database-design",
    title: "Database Design & Development",
    category: "software",
    shortDescription: "High-concurrency, normalized relational and NoSQL database architectures.",
    detailedDescription: "Design, schema optimization, indexing, and migration of relational (PostgreSQL, MySQL, SQL Server) and distributed data stores.",
    icon: "Database",
    status: "active",
    deliverables: ["Entity-Relationship Modeling", "Query Optimization & Indexing", "Data Partitioning & Replication", "Backup & Migration Scripts"]
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    category: "software",
    shortDescription: "RESTful and GraphQL APIs connecting third-party services and legacy systems.",
    detailedDescription: "Secure API gateways that enable cross-system data exchange, payment gateway connections, and microservice communications.",
    icon: "Webhook",
    status: "active",
    deliverables: ["OpenAPI / Swagger Documentation", "OAuth2 / JWT Token Authentication", "Rate Limiting & Webhook Endpoints", "Third-Party Service Connectors"]
  },
  {
    id: "system-automation",
    title: "System Automation",
    category: "software",
    shortDescription: "Automating repetitive data entry, file transfers, and scheduled workflows.",
    detailedDescription: "Eliminate human error by connecting disjointed software systems through programmatic pipelines, background workers, and webhooks.",
    icon: "Cog",
    status: "active",
    deliverables: ["Automated Data Pipelines", "Event-Driven Background Workers", "Error Notification & Self-Healing", "Audit Logging"]
  },
  {
    id: "software-maintenance",
    title: "Software Maintenance & Upgrades",
    category: "software",
    shortDescription: "Ongoing security patches, version updates, performance tuning, and refactoring.",
    detailedDescription: "Keep legacy codebases secure, fast, and compliant with current operating systems, dependency trees, and security benchmarks.",
    icon: "RefreshCw",
    status: "active",
    deliverables: ["Security Patching & Dependency Updates", "Database Optimization", "Bug Triage & Resolution", "SLA Support Agreement"]
  },

  // CATEGORY B: WEBSITE DEVELOPMENT & DIGITAL SOLUTIONS
  {
    id: "corporate-websites",
    title: "Corporate Website Development",
    category: "web",
    shortDescription: "Polished, high-authority web presence tailored to enterprise organizations.",
    detailedDescription: "Custom-designed corporate websites that communicate credibility, institutional capabilities, leadership, and service offerings with impeccable typography.",
    icon: "Monitor",
    status: "active",
    deliverables: ["Custom Responsive Frontend", "Executive Team & Service Showcase", "Interactive Inquiry Forms", "Comprehensive SEO Setup"],
    popular: true
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Website Development",
    category: "web",
    shortDescription: "Secure storefronts with product catalogues, cart workflows, and payment gateways.",
    detailedDescription: "Sell physical or digital products smoothly with integrated mobile money (M-Pesa, card, bank), customer portals, and order fulfillment.",
    icon: "ShoppingBag",
    status: "active",
    deliverables: ["Product Catalog & Filter Engine", "Secure Checkout & Payment Gateway", "Customer Account Dashboard", "Automated Order Notifications"]
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    category: "web",
    shortDescription: "Curated, high-impact portfolios for creatives, architects, and consultants.",
    detailedDescription: "Sleek, image-rich portfolio platforms designed to highlight case studies, past projects, testimonials, and creative achievements.",
    icon: "FolderGit2",
    status: "active",
    deliverables: ["Interactive Project Gallery", "Case Study Layouts", "Client Testimonials Section", "Fast Image CDN Loading"]
  },
  {
    id: "business-websites",
    title: "Business Websites",
    category: "web",
    shortDescription: "Cost-effective, modern websites for small and medium-sized enterprises.",
    detailedDescription: "Fast-loading, mobile-friendly websites that position growing businesses competitively on search engines and convert local inquiries.",
    icon: "Building",
    status: "active",
    deliverables: ["Essential 5-8 Page Architecture", "Google Maps & Contact Integration", "Mobile Optimization", "WhatsApp Direct Chat Link"]
  },
  {
    id: "landing-page-development",
    title: "Landing Page Development",
    category: "web",
    shortDescription: "High-conversion single-page campaigns for product launches and promotions.",
    detailedDescription: "Laser-focused landing pages engineered for speed, persuasive messaging, clear call-to-actions, and tracking pixel integration.",
    icon: "Target",
    status: "active",
    deliverables: ["A/B Test Ready Architecture", "Form Conversion Tracking", "Fast Sub-second Load Times", "Pixel & Analytics Tagging"]
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    category: "web",
    shortDescription: "Modernizing dated websites with fresh layouts, better UX, and modern tech.",
    detailedDescription: "Transform slow, legacy, or uninspiring websites into responsive, visually captivating digital assets without losing search rankings.",
    icon: "LayoutTemplate",
    status: "active",
    deliverables: ["UX Audit & Information Architecture", "Visual Overhaul & Brand Sync", "Content Migration & 301 Redirects", "Core Web Vitals Boost"]
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    category: "web",
    shortDescription: "Regular backups, CMS updates, uptime monitoring, and content edits.",
    detailedDescription: "Proactive care to protect your website against broken links, software vulnerabilities, expired certificates, and obsolete plugins.",
    icon: "CheckCircle2",
    status: "active",
    deliverables: ["Scheduled Weekly Backups", "Core & Plugin Security Updates", "24/7 Uptime Monitoring", "Dedicated Content Update Hours"]
  },
  {
    id: "domain-registration",
    title: "Domain Registration Assistance",
    category: "web",
    shortDescription: "Guidance and configuration for .com, .co.ke, .org, and international domains.",
    detailedDescription: "Assistance with selecting, securing, and properly configuring DNS records (A, CNAME, MX, SPF, DKIM) for professional domains.",
    icon: "AtSign",
    status: "active",
    deliverables: ["Domain Availability Search & Purchase", "DNS Zone Configuration", "Email Routing (MX/SPF/DKIM/DMARC)", "Domain Transfer & Renewal Support"]
  },
  {
    id: "web-hosting-solutions",
    title: "Web Hosting Solutions",
    category: "web",
    shortDescription: "Fast, reliable cloud hosting with 99.9% uptime and SSL certificates.",
    detailedDescription: "Managed hosting solutions provisioned with enterprise NVMe storage, daily snapshot backups, automated SSL encryption, and high-speed bandwidth.",
    icon: "Server",
    status: "active",
    deliverables: ["Managed Cloud / VPS Provisioning", "Free SSL Encryption Certificate", "Daily Automated Snapshots", "Staging Environment Setup"]
  },
  {
    id: "website-security-optimization",
    title: "Website Security & Optimization",
    category: "web",
    shortDescription: "Speed acceleration, code minification, WAF firewalls, and malware prevention.",
    detailedDescription: "Drastically reduce page load times and shield your web platform against brute-force attacks, SQL injections, and cross-site scripting.",
    icon: "ShieldCheck",
    status: "active",
    deliverables: ["Core Web Vitals Optimization", "Web Application Firewall (WAF)", "Malware Scanning & Hardening", "Content Delivery Network (CDN) Setup"]
  },
  {
    id: "seo-services",
    title: "Search Engine Optimization (SEO)",
    category: "web",
    shortDescription: "On-page optimization, technical SEO, structured data, and local search rankings.",
    detailedDescription: "Rank higher on Google for the terms that matter. We implement semantic HTML, metadata, XML sitemaps, schema markup, and speed improvements.",
    icon: "TrendingUp",
    status: "active",
    deliverables: ["Technical SEO Audit", "Schema & Rich Snippets Integration", "Local Google Business Optimization", "XML Sitemap & Robots.txt Config"]
  },

  // CATEGORY C: GRAPHIC DESIGN & CREATIVE SERVICES
  {
    id: "logo-design",
    title: "Logo Design",
    category: "design",
    shortDescription: "Memorable, distinctive logos engineered for versatile digital and print scaling.",
    detailedDescription: "We design iconic symbols and wordmarks that capture your brand's ethos, backed by mathematical balance and comprehensive vector asset packs.",
    icon: "Sparkles",
    status: "active",
    deliverables: ["Multiple Concept Explorations", "Vector Source Files (AI, EPS, SVG)", "High-Res PNGs & Transparent Assets", "Icon / Favicon Extraction"]
  },
  {
    id: "brand-identity",
    title: "Brand Identity Development",
    category: "design",
    shortDescription: "Complete brand guidelines covering color theory, typography, and visual rules.",
    detailedDescription: "Establish a cohesive identity system with defined typography hierarchies, primary and secondary color palettes, and usage rules.",
    icon: "Bookmark",
    status: "active",
    deliverables: ["Comprehensive Brand Style Guide", "Color Palette & Typography Specs", "Graphic Elements & Patterns", "Dos and Don'ts Usage Manual"],
    popular: true
  },
  {
    id: "business-card-design",
    title: "Business Card Design",
    category: "design",
    shortDescription: "Elegant, print-ready corporate business cards that leave lasting impressions.",
    detailedDescription: "Sophisticated business card layouts with precise bleed margins, CMYK color profiles, and modern finishes (matte, foil, spot UV).",
    icon: "CreditCard",
    status: "active",
    deliverables: ["Print-Ready PDF with Bleeds", "Front & Back Layout Design", "QR Code vCard Integration", "Editable Source Templates"]
  },
  {
    id: "company-profile-design",
    title: "Company Profile Design",
    category: "design",
    shortDescription: "Authoritative multi-page corporate profiles for tenders, investors, and clients.",
    detailedDescription: "Professionally formatted brochures that communicate organizational strength, capabilities, past track records, and team structure.",
    icon: "FileText",
    status: "active",
    deliverables: ["Custom 8-24 Page Editorial Layout", "Infographics & Org Charts", "Digital Interactive PDF Version", "High-Resolution Print Files"]
  },
  {
    id: "posters-banners",
    title: "Posters and Banners",
    category: "design",
    shortDescription: "Eye-catching large-format outdoor, indoor, and rollup banner designs.",
    detailedDescription: "High-visibility promotional materials engineered for conventions, trade fairs, storefronts, and event backdrops.",
    icon: "Image",
    status: "active",
    deliverables: ["Rollup & Teardrop Banner Layouts", "Large Format Billboard Vector Art", "High-DPI Print Ready CMYK Files", "Mockup Previews"]
  },
  {
    id: "brochure-flyer-design",
    title: "Brochure and Flyer Design",
    category: "design",
    shortDescription: "Bi-fold, tri-fold, and single-sheet promotional literature.",
    detailedDescription: "Clean, structured marketing handouts that articulate specific service offerings, product lines, or special promotions with clarity.",
    icon: "BookOpen",
    status: "active",
    deliverables: ["Bi-Fold / Tri-Fold Configurations", "Single & Double Sided Flyers", "Print-Ready Export", "Digital Web Distribution PDF"]
  },
  {
    id: "social-media-graphics",
    title: "Social Media Graphics",
    category: "design",
    shortDescription: "Engaging post templates, banners, and campaign graphics for all platforms.",
    detailedDescription: "Cohesive visual content tailored for LinkedIn, Facebook, Instagram, and X that amplifies brand recognition across digital channels.",
    icon: "Share2",
    status: "active",
    deliverables: ["Branded Social Post Templates", "Header / Cover Banners", "Story & Carousel Formats", "Editable Canva / Figma Templates"]
  },
  {
    id: "marketing-materials",
    title: "Marketing Materials",
    category: "design",
    shortDescription: "Coordinated sales collateral, product sheets, and event stationery.",
    detailedDescription: "Deliver consistent branding across letterheads, branded envelopes, folders, event badges, and corporate swag.",
    icon: "Package",
    status: "active",
    deliverables: ["Corporate Letterhead & Invoices", "Presentation Folders", "Event Badges & Lanyards", "Merchandise & Apparel Graphics"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "design",
    shortDescription: "User research, wireframing, and interactive design for digital apps.",
    detailedDescription: "Human-centered user experience design that eliminates friction, accelerates onboarding, and enhances user satisfaction across web and mobile platforms.",
    icon: "Layout",
    status: "active",
    deliverables: ["User Journey & Wireframes", "Interactive Figma Clickable Prototypes", "Design System & Component Library", "Developer Handoff Specs"]
  },
  {
    id: "interface-design",
    title: "Website and App Interface Design",
    category: "design",
    shortDescription: "Modern, pixel-perfect user interface layouts and component kits.",
    detailedDescription: "Modern interfaces adhering to responsive grid systems, accessible color contrasts, and subtle micro-interactions.",
    icon: "AppWindow",
    status: "active",
    deliverables: ["Desktop, Tablet & Mobile Views", "Icon & Asset Export Bundles", "Typography & Spacing Scale", "Interaction State Guidelines"]
  },
  {
    id: "presentation-design",
    title: "Presentation Design",
    category: "design",
    shortDescription: "High-impact pitch decks, keynote presentations, and corporate slides.",
    detailedDescription: "Transform dry bullet points into compelling visual narratives in PowerPoint, Keynote, or Google Slides for high-stakes investor or client meetings.",
    icon: "Presentation",
    status: "active",
    deliverables: ["Custom Master Slide Layouts", "Data Visualization & Chart Styling", "Icon & Graphic Asset Library", "Fully Editable Slide Decks"]
  },
  {
    id: "corporate-branding",
    title: "Corporate Branding",
    category: "design",
    shortDescription: "Comprehensive brand strategy and unified corporate identity transformation.",
    detailedDescription: "Strategic brand positioning, voice and tone definitions, and visual systems to align institutional perception with enterprise value.",
    icon: "Award",
    status: "active",
    deliverables: ["Brand Strategy & Voice Blueprint", "Corporate Asset Repository", "Internal Brand Implementation Manual", "Signage & Environmental Graphics"]
  },

  // CATEGORY D: NETWORKING & INFRASTRUCTURE
  {
    id: "lan-installation",
    title: "LAN Installation and Configuration",
    category: "networking",
    shortDescription: "High-speed local area network deployment for offices and facilities.",
    detailedDescription: "Design, cabling, termination, and testing of high-throughput local network topologies ensuring low latency and reliable data transmission.",
    icon: "Network",
    status: "active",
    deliverables: ["Network Topology Blueprint", "Cat6/Cat6A Cable Termination", "VLAN Segmentation Setup", "Packet Loss & Speed Certification"],
    popular: true
  },
  {
    id: "wan-solutions",
    title: "WAN Networking Solutions",
    category: "networking",
    shortDescription: "Secure wide area networking connecting branch offices and headquarters.",
    detailedDescription: "Multi-branch connectivity utilizing SD-WAN, MPLS, and site-to-site VPN tunnels to unite distributed enterprise teams seamlessly.",
    icon: "Globe2",
    status: "active",
    deliverables: ["Site-to-Site Encrypted Tunnels", "Failover Link Balancing", "Centralized Traffic Shaping", "WAN Bandwidth Optimization"]
  },
  {
    id: "office-network-setup",
    title: "Office Network Setup",
    category: "networking",
    shortDescription: "End-to-end IT network infrastructure deployment for new and expanding offices.",
    detailedDescription: "Complete turnkey office networking including server racks, patch panels, uninterruptible power supplies (UPS), and managed access points.",
    icon: "Building",
    status: "active",
    deliverables: ["Rack Mounting & Cable Management", "Patch Panel Numbering & Labeling", "Core Switch & Gateway Provisioning", "Staff Network & Guest Isolation"]
  },
  {
    id: "wifi-installation",
    title: "Wi-Fi Installation and Configuration",
    category: "networking",
    shortDescription: "High-density enterprise wireless networks with seamless roaming.",
    detailedDescription: "Deploy managed Wi-Fi access points configured for zero dead zones, multi-SSID broadcasting, bandwidth quotas, and guest captive portals.",
    icon: "Wifi",
    status: "active",
    deliverables: ["RF Heatmap & Coverage Survey", "Enterprise Access Point Mounting", "Seamless Fast Roaming Setup", "Guest Portal & Bandwidth Quotas"]
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling",
    category: "networking",
    shortDescription: "Neat, certified copper and fiber structured cabling according to TIA/EIA standards.",
    detailedDescription: "Professional cable trunking, conduits, patch racks, and certified cable termination that prevents signal crosstalk and simplifies long-term maintenance.",
    icon: "Cable",
    status: "active",
    deliverables: ["TIA/EIA Compliant Trunking", "Clear Point-to-Point Labeling", "Fluke Performance Testing", "As-Built Network Diagrams"]
  },
  {
    id: "fiber-optic-networking",
    title: "Fibre Optic Networking",
    category: "networking",
    shortDescription: "Ultra-fast fiber backbone cabling, fusion splicing, and optical transceivers.",
    detailedDescription: "Long-distance and high-bandwidth campus backbones with single-mode and multi-mode optical fiber splicing and testing.",
    icon: "Activity",
    status: "active",
    deliverables: ["Precision Fusion Splicing", "OTDR Optical Loss Verification", "Fiber Patch Panel Termination", "Optical Media Converter Setup"]
  },
  {
    id: "router-switch-config",
    title: "Router and Switch Configuration",
    category: "networking",
    shortDescription: "Enterprise Cisco, MikroTik, Ubiquiti, and Aruba hardware configuration.",
    detailedDescription: "Configuration of static and dynamic routing (OSPF, BGP), STP loop prevention, QoS packet prioritization, and access control lists (ACLs).",
    icon: "Cpu",
    status: "active",
    deliverables: ["Switch Port Security & 802.1Q VLANs", "Routing Protocol Configuration", "QoS Voice/Video Prioritization", "Configuration Backup & Documentation"]
  },
  {
    id: "network-troubleshooting",
    title: "Network Troubleshooting",
    category: "networking",
    shortDescription: "Rapid diagnostic resolution of packet drops, slow speeds, and outages.",
    detailedDescription: "Deep packet inspection, cable integrity verification, IP address conflict resolution, and hardware fault isolation to restore operational connectivity.",
    icon: "AlertTriangle",
    status: "active",
    deliverables: ["Root-Cause Analysis Report", "Packet Sniffer Diagnostics", "Hardware Fault Isolation", "Permanent Remediation Strategy"]
  },
  {
    id: "network-expansion",
    title: "Network Expansion",
    category: "networking",
    shortDescription: "Upgrading existing networks to accommodate increased staff and devices.",
    detailedDescription: "Scale existing switches, access points, and subnets to support growing headcounts, additional floors, or newly built campus buildings.",
    icon: "GitFork",
    status: "active",
    deliverables: ["Capacity & Bottleneck Assessment", "Subnet & DHCP Re-allocation", "Zero-Downtime Switch Addition", "Load Distribution Optimization"]
  },
  {
    id: "network-security-config",
    title: "Network Security Configuration",
    category: "networking",
    shortDescription: "Hardware firewalls, intrusion prevention, VPNs, and MAC filtering.",
    detailedDescription: "Deploy enterprise UTM firewalls (Fortinet, Sophos, pfSense), configuring strict ingress/egress rules, DMZ zones, and malware inspection.",
    icon: "Shield",
    status: "active",
    deliverables: ["Hardware Firewall Deployment", "Intrusion Detection/Prevention (IDS/IPS)", "DMZ & Internal Segment Isolation", "Secure Remote VPN Access"]
  },
  {
    id: "server-installation",
    title: "Server Installation and Configuration",
    category: "networking",
    shortDescription: "Windows Server and Linux server deployment, Active Directory, and RAID arrays.",
    detailedDescription: "Rackmount server setup, RAID storage arrays, Active Directory domain controllers, DNS/DHCP servers, and local file sharing repositories.",
    icon: "ServerCrash",
    status: "active",
    deliverables: ["Hardware RAID Configuration", "Active Directory & Group Policy", "Automated Local File Backups", "Server Health Monitoring Setup"]
  },
  {
    id: "network-monitoring",
    title: "Network Monitoring and Maintenance",
    category: "networking",
    shortDescription: "Proactive SNMP monitoring, bandwidth analysis, and scheduled maintenance.",
    detailedDescription: "24/7 telemetry monitoring switch ports, link saturation, router temperatures, and uptime to intercept problems before business impacts occur.",
    icon: "ActivitySquare",
    status: "active",
    deliverables: ["SNMP / NetFlow Dashboard", "Automated SMS / Email Alerting", "Monthly Bandwidth Usage Reports", "Firmware Patching Schedule"]
  },
  {
    id: "point-to-point-wireless",
    title: "Point-to-Point Wireless Networking",
    category: "networking",
    shortDescription: "Long-range wireless bridges connecting buildings without trenching fiber.",
    detailedDescription: "High-capacity wireless bridges (Ubiquiti airMAX, Cambium) delivering high throughput between separate facilities several kilometers apart.",
    icon: "Radio",
    status: "active",
    deliverables: ["Line-of-Sight & Fresnel Zone Check", "Mast Mounting & Dish Alignment", "Gigabit Wireless Throughput Test", "Weatherproof Surge Protection"]
  },

  // CATEGORY E: IT SUPPORT & TECHNICAL SERVICES
  {
    id: "computer-repair",
    title: "Computer Repair and Maintenance",
    category: "it-support",
    shortDescription: "Component repairs, thermal servicing, and cleaning for desktop computers.",
    detailedDescription: "Board-level troubleshooting, power supply replacements, motherboard repairs, thermal repasting, and deep dust extraction for enterprise desktop fleets.",
    icon: "Laptop",
    status: "active",
    deliverables: ["Hardware Diagnostic Audit", "Component Testing & Replacement", "Thermal Paste Renewal & Dusting", "Stress & Stability Benchmarking"]
  },
  {
    id: "laptop-repair",
    title: "Laptop Repair and Maintenance",
    category: "it-support",
    shortDescription: "Screen replacements, keyboard repairs, battery renewals, and hinge fixes.",
    detailedDescription: "Precision repair services for enterprise laptop fleets, including broken display panels, liquid spill remediation, keyboard replacements, and power jack repairs.",
    icon: "Laptop2",
    status: "active",
    deliverables: ["OEM Display & Keyboard Replacement", "Battery Health Diagnostic & Renewal", "Chassis & Hinge Realignment", "Logic Board Ultrasonic Cleaning"]
  },
  {
    id: "desktop-configuration",
    title: "Desktop Computer Configuration",
    category: "it-support",
    shortDescription: "Custom hardware assembly, workstation tuning, and peripheral setup.",
    detailedDescription: "Configuring high-performance workstations for engineering, architectural rendering, accounting, and general administrative personnel.",
    icon: "MonitorDot",
    status: "active",
    deliverables: ["BIOS / UEFI Optimization", "Dual-Monitor & Peripheral Wiring", "Workstation Role Configuration", "Performance Tuning"]
  },
  {
    id: "hardware-installation",
    title: "Hardware Installation",
    category: "it-support",
    shortDescription: "Upgrading RAM, high-speed NVMe SSDs, graphics cards, and expansion cards.",
    detailedDescription: "Extend the operational lifecycle of corporate computers by cloning mechanical hard drives to fast SSDs and expanding memory modules.",
    icon: "HardDrive",
    status: "active",
    deliverables: ["Zero-Loss OS & Data Cloning", "High-Speed SSD Installation", "RAM Capacity Expansion", "POST Verification Testing"]
  },
  {
    id: "software-installation",
    title: "Software Installation",
    category: "it-support",
    shortDescription: "Licensed enterprise productivity suites, accounting software, and utilities.",
    detailedDescription: "Standardized deployment of licensed business software including Microsoft 365, QuickBooks, CAD platforms, and PDF toolsets across machines.",
    icon: "Download",
    status: "active",
    deliverables: ["License Activation & Verification", "Standardized Workstation Image", "Default Profile Configuration", "Automated Update Settings"]
  },
  {
    id: "os-installation",
    title: "Operating System Installation",
    category: "it-support",
    shortDescription: "Clean installations, dual-boots, and migrations for Windows and Linux.",
    detailedDescription: "Installation of Windows 11/10 Pro and Enterprise Linux distributions with all required chipset drivers, security patches, and localized configs.",
    icon: "Terminal",
    status: "active",
    deliverables: ["Partitioning & Clean OS Install", "Manufacturer Driver Suite Setup", "Security Baseline Application", "Recovery Partition Creation"]
  },
  {
    id: "computer-troubleshooting",
    title: "Computer Troubleshooting",
    category: "it-support",
    shortDescription: "Eliminating blue screen errors, boot loops, freezes, and sluggish performance.",
    detailedDescription: "Methodical diagnostic troubleshooting to pinpoint and fix kernel crashes, memory leaks, corrupt registry keys, and malware infections.",
    icon: "HelpCircle",
    status: "active",
    deliverables: ["BSOD Dump Analysis", "Malware & Adware Elimination", "Registry & System File Repair", "Preventative Optimization"]
  },
  {
    id: "printer-installation",
    title: "Printer Installation and Configuration",
    category: "it-support",
    shortDescription: "Network printers, multifunction copiers, and print server queues.",
    detailedDescription: "Deploy network printers, configure static IP reservations, set up scan-to-email/scan-to-folder paths, and manage user print quotas.",
    icon: "Printer",
    status: "active",
    deliverables: ["Network IP Printer Provisioning", "Scan-to-Folder (SMB) Configuration", "Driver Deployment via GPO", "Print Accounting & Quota Setup"]
  },
  {
    id: "data-backup-recovery",
    title: "Data Backup and Recovery",
    category: "it-support",
    shortDescription: "Recovering lost files from failing drives and establishing automated backups.",
    detailedDescription: "Emergency recovery from corrupted partitions and formatted drives, alongside deploying automated local and cloud 3-2-1 backup strategies.",
    icon: "FileCheck",
    status: "active",
    deliverables: ["Corrupted Drive File Extraction", "Automated Daily Cloud Backup Setup", "NAS Backup Repository Config", "Disaster Recovery Drill Plan"],
    popular: true
  },
  {
    id: "it-equipment-setup",
    title: "IT Equipment Setup",
    category: "it-support",
    shortDescription: "Deploying projectors, boardroom video conferencing, and peripherals.",
    detailedDescription: "Complete setup for modern conference rooms, interactive whiteboards, boardroom audio systems, and executive desk environments.",
    icon: "Tv",
    status: "active",
    deliverables: ["Video Conference Camera Mounting", "Microphone Array Calibration", "Projector & Screen Alignment", "User Instruction Guide"]
  },
  {
    id: "technical-support",
    title: "Technical Support",
    category: "it-support",
    shortDescription: "Helpdesk support via remote assistance, telephone, and on-site visits.",
    detailedDescription: "Dedicated tier-1 and tier-2 IT support tickets to troubleshoot day-to-day user queries, printer hiccups, email access issues, and logins.",
    icon: "Headphones",
    status: "active",
    deliverables: ["Remote Desktop Helpdesk Access", "Dedicated Support Phone Line", "Rapid On-Site Dispatch", "Monthly Ticket Resolution Logs"]
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance",
    category: "it-support",
    shortDescription: "Scheduled quarterly hardware inspections, blowouts, and health audits.",
    detailedDescription: "Proactive care that prevents sudden breakdowns: deep physical cleaning, fan checks, capacitor inspection, OS defragmentation, and drive health checks.",
    icon: "ShieldAlert",
    status: "active",
    deliverables: ["Quarterly On-Site Physical Cleaning", "HDD/SSD S.M.A.R.T Health Audit", "Thermal Integrity Checks", "Comprehensive Fleet Status Report"]
  },
  {
    id: "it-consultancy-support",
    title: "IT Consultancy",
    category: "it-support",
    shortDescription: "Advisory on technology procurement, fleet renewals, and budgeting.",
    detailedDescription: "Helping business leaders make smart IT purchasing choices, avoiding substandard clone hardware and securing genuine manufacturer warranties.",
    icon: "Compass",
    status: "active",
    deliverables: ["Fleet Lifecycle Assessment", "Procurement Spec Sheets", "Vendor Quote Comparison", "5-Year IT Budget Projection"]
  },

  // CATEGORY F: CCTV & SECURITY SYSTEMS
  {
    id: "cctv-camera-installation",
    title: "CCTV Camera Installation",
    category: "security",
    shortDescription: "High-definition analog and digital surveillance camera deployments.",
    detailedDescription: "Strategic camera positioning covering entry points, perimeters, offices, and warehouses with weatherproof outdoor and vandal-resistant indoor domes.",
    icon: "Camera",
    status: "active",
    deliverables: ["Surveillance Coverage Mapping", "Concealed Conduit Cabling", "High-Resolution Night Vision Cameras", "Clean Power Distribution Setup"],
    popular: true
  },
  {
    id: "ip-camera-config",
    title: "IP Camera Configuration",
    category: "security",
    shortDescription: "PoE network cameras with crystal-clear 4K resolution and audio.",
    detailedDescription: "Deploy intelligent Power over Ethernet (PoE) cameras that stream high-definition video over your structured cabling with zero signal degradation.",
    icon: "Eye",
    status: "active",
    deliverables: ["PoE Switch Port Allocation", "Static IP & Subnet Isolation", "WDR & Motion Zone Calibration", "Two-Way Audio Configuration"]
  },
  {
    id: "dvr-nvr-config",
    title: "DVR and NVR Configuration",
    category: "security",
    shortDescription: "Centralized video recording units with multi-terabyte storage retention.",
    detailedDescription: "Setup of surveillance-grade hard drives (Western Digital Purple, Seagate SkyHawk), H.265+ video compression, and continuous or motion-triggered recording.",
    icon: "HardDrive",
    status: "active",
    deliverables: ["Surveillance HDD RAID / Mirroring", "H.265+ Compression Tuning", "Scheduled & Motion-Triggered Recording", "Video Export & Archival Workflow"]
  },
  {
    id: "remote-camera-monitoring",
    title: "Remote Camera Monitoring Setup",
    category: "security",
    shortDescription: "Watch live camera feeds on your smartphone, tablet, or laptop from anywhere.",
    detailedDescription: "Secure cloud P2P and DDNS configuration allowing business owners and managers to stream real-time video feeds with push motion alerts.",
    icon: "Smartphone",
    status: "active",
    deliverables: ["Mobile App Setup (iOS & Android)", "Encrypted P2P Cloud Connection", "Instant Intrusion Push Notifications", "Multi-User Access Permissions"]
  },
  {
    id: "access-control-systems",
    title: "Access Control Systems",
    category: "security",
    shortDescription: "Magnetic door locks, RFID keycards, and PIN keypad door controllers.",
    detailedDescription: "Restrict unauthorized entry to sensitive areas such as server rooms, executive suites, and storehouses with automated electromagnetic door locking.",
    icon: "KeyRound",
    status: "active",
    deliverables: ["Magnetic Door Locks (600lb / 1200lb)", "RFID Keycard / Fob Enrollment", "Emergency Break-Glass Release", "Door Access History Audit Logs"]
  },
  {
    id: "biometric-attendance",
    title: "Biometric Attendance Systems",
    category: "security",
    shortDescription: "Fingerprint and facial recognition clock-in terminals integrated with HR.",
    detailedDescription: "Accurately record employee clock-in and clock-out timestamps to eradicate buddy-punching, with automated payroll and attendance reporting exports.",
    icon: "Fingerprint",
    status: "active",
    deliverables: ["Fingerprint / Facial Terminals", "Attendance Management Software", "Late Coming & Overtime Reports", "Payroll CSV Export Integration"]
  },
  {
    id: "security-system-maintenance",
    title: "Security System Maintenance",
    category: "security",
    shortDescription: "Lens cleaning, focus calibration, PSU checks, and recording audits.",
    detailedDescription: "Routine servicing ensuring all cameras remain focused, power supplies deliver stable voltages, and hard drives record without bad sectors.",
    icon: "ShieldAlert",
    status: "active",
    deliverables: ["Optical Lens Cleaning & Focus Check", "DVR/NVR Recording Integrity Audit", "Backup Battery / UPS Test", "Firmware Vulnerability Patching"]
  },

  // CATEGORY G: CLOUD & DIGITAL TRANSFORMATION
  {
    id: "cloud-software-solutions",
    title: "Cloud-Based Software Solutions",
    category: "cloud",
    shortDescription: "SaaS application architecture and managed cloud software deployments.",
    detailedDescription: "Deploy multi-tenant, elastic applications that scale automatically on AWS, Azure, or Google Cloud Platform, delivering 99.99% availability.",
    icon: "CloudRain",
    status: "active",
    deliverables: ["Cloud Architecture Architecture", "Auto-Scaling & Load Balancing", "Secure Multi-Tenant DBs", "Containerized Docker Deploys"]
  },
  {
    id: "cloud-hosting",
    title: "Cloud Hosting",
    category: "cloud",
    shortDescription: "Managed virtual private servers (VPS) and dedicated cloud environments.",
    detailedDescription: "High-speed virtual server instances configured with Linux/Nginx/Apache, managed firewalls, automated daily backups, and SSL certificates.",
    icon: "Server",
    status: "active",
    deliverables: ["Cloud VPS Provisioning & Hardening", "Reverse Proxy & SSL Setup", "Automated Daily Snapshots", "Resource Utilization Telemetry"]
  },
  {
    id: "business-email-solutions",
    title: "Business Email Solutions",
    category: "cloud",
    shortDescription: "Professional domain emails via Google Workspace and Microsoft 365.",
    detailedDescription: "Set up professional email addresses (e.g., yourname@yourcompany.com) with spam filtering, calendar sync, cloud storage, and mobile device mail sync.",
    icon: "Mail",
    status: "active",
    deliverables: ["Google Workspace / M365 Setup", "MX, SPF, DKIM & DMARC Security", "Desktop Outlook & Mobile Sync", "Legacy Email Migration"],
    popular: true
  },
  {
    id: "cloud-storage-backup",
    title: "Cloud Storage and Backup",
    category: "cloud",
    shortDescription: "Secure enterprise file storage, collaborative folders, and sync tools.",
    detailedDescription: "Implement unified cloud drive solutions that allow your team to securely share files, collaborate in real time, and protect company documents.",
    icon: "FolderSync",
    status: "active",
    deliverables: ["Encrypted Cloud Drive Allocation", "Granular Folder Permissions", "Versioning & Deleted File Recovery", "Local Desktop Sync Clients"]
  },
  {
    id: "workflow-automation",
    title: "Digital Workflow Automation",
    category: "cloud",
    shortDescription: "Connecting applications to automate notifications, invoices, and handoffs.",
    detailedDescription: "Integrate existing software platforms using webhooks, APIs, and automation scripts so tasks happen instantly without human bottlenecks.",
    icon: "Zap",
    status: "active",
    deliverables: ["Multi-App Workflow Blueprints", "Automated Customer Alerts", "Spreadsheet-to-DB Sync", "Error Handling & Notifications"]
  },
  {
    id: "process-digitization",
    title: "Business Process Digitization",
    category: "cloud",
    shortDescription: "Eliminating physical paper forms through digital tablets and web forms.",
    detailedDescription: "Convert cumbersome paper forms, requisition sheets, and signatures into accessible digital web workflows accessible from any smartphone.",
    icon: "FileSpreadsheet",
    status: "active",
    deliverables: ["Digital Form Design & Validation", "Digital Signature Workflows", "Automated PDF Summary Dispatch", "Centralized Searchable Records"]
  },
  {
    id: "system-migration",
    title: "System Migration",
    category: "cloud",
    shortDescription: "Seamless data and application migrations to modern cloud platforms.",
    detailedDescription: "Safely transfer databases, files, and workloads from aging on-premises servers to modern cloud infrastructure with minimal downtime.",
    icon: "ArrowRightLeft",
    status: "active",
    deliverables: ["Migration Risk & Downtime Plan", "Data Transformation & Integrity Checks", "Staging Validation Dry-Run", "Cutover & Post-Migration Support"]
  },
  {
    id: "cloud-consultancy",
    title: "Cloud Infrastructure Consultancy",
    category: "cloud",
    shortDescription: "Cost optimization, cloud architecture planning, and provider selection.",
    detailedDescription: "Audit your current cloud expenditures and compute usage to slash wasted hosting bills and architect fault-tolerant environments.",
    icon: "Compass",
    status: "active",
    deliverables: ["Cloud Cost Optimization Audit", "Architecture Resilience Review", "Disaster Recovery Blueprint", "Provider Comparison Matrix"]
  },

  // CATEGORY H: CYBERSECURITY & DATA PROTECTION
  {
    id: "network-security-assessment",
    title: "Network Security Assessment",
    category: "cybersecurity",
    shortDescription: "Thorough auditing of network perimeters, open ports, and default passwords.",
    detailedDescription: "Identify weak points in your routers, switches, servers, and wireless access points before malicious actors exploit them.",
    icon: "ShieldAlert",
    status: "active",
    deliverables: ["External & Internal Port Scan", "Weak Password & Config Audit", "Network Topology Vulnerability Map", "Actionable Hardening Checklist"],
    popular: true
  },
  {
    id: "security-configuration",
    title: "Security Configuration",
    category: "cybersecurity",
    shortDescription: "Hardening firewalls, Wi-Fi security (WPA3), and workstation policies.",
    detailedDescription: "Apply proven CIS security benchmarks to your routers, servers, and computers, closing unnecessary ports and disabling vulnerable legacy protocols.",
    icon: "Sliders",
    status: "active",
    deliverables: ["CIS Baseline Implementation", "Strict Firewall Ruleset Deployment", "WPA3 / 802.1X Wireless Hardening", "USB Port Security Restrictions"]
  },
  {
    id: "endpoint-protection",
    title: "Endpoint Protection Setup",
    category: "cybersecurity",
    shortDescription: "Centralized enterprise antivirus, anti-ransomware, and EDR deployment.",
    detailedDescription: "Equip all company laptops, desktops, and servers with coordinated endpoint security that detects and isolates malware, phishing, and ransomware.",
    icon: "ShieldCheck",
    status: "active",
    deliverables: ["Centralized Admin Console", "Real-Time Ransomware Shield", "Automated Threat Quarantining", "Weekly Security Posture Reports"]
  },
  {
    id: "data-protection-solutions",
    title: "Data Protection Solutions",
    category: "cybersecurity",
    shortDescription: "Encryption for drives, data leak prevention, and secure file sharing.",
    detailedDescription: "Protect proprietary business data by enforcing full-disk encryption (BitLocker), encrypted file transfers, and role-based data isolation.",
    icon: "Lock",
    status: "active",
    deliverables: ["Full-Disk BitLocker Deployment", "Data Loss Prevention (DLP) Policies", "Secure Password Manager Rollout", "Compliance Audit Readiness"]
  },
  {
    id: "backup-disaster-recovery",
    title: "Backup & Disaster Recovery Planning",
    category: "cybersecurity",
    shortDescription: "Guaranteed business continuity against ransomware, theft, or fire.",
    detailedDescription: "Architect a resilient 3-2-1 backup strategy with immutable off-site backups so your business can restore operations within hours of any disaster.",
    icon: "DatabaseZap",
    status: "active",
    deliverables: ["RPO & RTO Definition", "Air-Gapped Immutable Backups", "Scheduled Recovery Drills", "Emergency Response Playbook"]
  },
  {
    id: "security-awareness",
    title: "Security Awareness Consultancy",
    category: "cybersecurity",
    shortDescription: "Staff cybersecurity training on phishing, social engineering, and passwords.",
    detailedDescription: "Equip your employees to recognize phishing emails, suspicious links, and social engineering tricks that represent 90% of all data breaches.",
    icon: "GraduationCap",
    status: "active",
    deliverables: ["Interactive Staff Workshop", "Simulated Phishing Drill", "Cyber Hygiene Best-Practices Guide", "Incident Reporting Procedure"]
  },
  {
    id: "vulnerability-assessment",
    title: "Basic Vulnerability Assessment",
    category: "cybersecurity",
    shortDescription: "Scanning web apps and systems for known CVE vulnerabilities and flaws.",
    detailedDescription: "Automated vulnerability scans of public-facing web applications, SSL certificates, and endpoints, ranked by severity with clear remediation paths.",
    icon: "AlertOctagon",
    status: "available",
    deliverables: ["Automated CVE Vulnerability Scan", "SSL / TLS Encryption Strength Audit", "Severity-Ranked Executive Summary", "Step-by-Step Patch Instructions"]
  },

  // CATEGORY I: ICT CONSULTANCY & TECHNOLOGY SOLUTIONS
  {
    id: "ict-consultancy",
    title: "ICT Consultancy",
    category: "consultancy",
    shortDescription: "Strategic technology guidance to align IT spending with business goals.",
    detailedDescription: "Independent, vendor-neutral advisory on technology adoption, digital modernization, and ICT budgeting for leadership and boardrooms.",
    icon: "Briefcase",
    status: "active",
    deliverables: ["Technology Maturity Review", "Strategic 3-Year ICT Roadmap", "Budget & ROI Projections", "Executive Board Presentation"],
    popular: true
  },
  {
    id: "technology-needs-assessment",
    title: "Technology Needs Assessment",
    category: "consultancy",
    shortDescription: "Comprehensive evaluation of existing hardware, software, and bottlenecks.",
    detailedDescription: "Our technical specialists interview staff, audit existing systems, and compile a clear analysis of operational friction and technology gaps.",
    icon: "ClipboardCheck",
    status: "active",
    deliverables: ["Current-State Infrastructure Audit", "Staff Workflow Bottleneck Report", "Prioritized Needs Matrix", "Quick-Win Recommendations"]
  },
  {
    id: "it-infrastructure-planning",
    title: "IT Infrastructure Planning",
    category: "consultancy",
    shortDescription: "Engineering blueprints for new office buildings, branches, and campuses.",
    detailedDescription: "Collaborating with architects, project managers, and builders to specify server room HVAC, cable trays, power redundancy, and network drops.",
    icon: "Layers",
    status: "active",
    deliverables: ["Architectural ICT Schematics", "Server Room Environmental Specs", "Power & Generator Requirements", "Bill of Quantities (BOQ)"]
  },
  {
    id: "software-requirements-analysis",
    title: "Software Requirements Analysis",
    category: "consultancy",
    shortDescription: "Translating business needs into precise functional specification documents.",
    detailedDescription: "Prevent expensive software development mistakes by capturing complete user stories, data schemas, entity models, and acceptance criteria upfront.",
    icon: "FileCode",
    status: "active",
    deliverables: ["Software Requirements Spec (SRS)", "User Story & Acceptance Criteria", "Data Flow Diagrams", "Vendor Scope RFP Document"]
  },
  {
    id: "system-implementation",
    title: "System Implementation",
    category: "consultancy",
    shortDescription: "Overseeing successful rollout, user acceptance, and adoption of new systems.",
    detailedDescription: "Hands-on project management to ensure new technology systems are installed on time, configured correctly, and eagerly adopted by end-users.",
    icon: "CheckSquare",
    status: "active",
    deliverables: ["Project Implementation Plan", "Change Management Guidance", "User Acceptance Testing (UAT)", "Cutover Milestone Signoff"]
  },
  {
    id: "technology-procurement",
    title: "Technology Procurement Assistance",
    category: "consultancy",
    shortDescription: "Vetting vendor quotes, hardware specs, and warranty commitments.",
    detailedDescription: "We act as your technical advocate when buying computers, servers, or software licenses, making sure you get authentic equipment at fair market pricing.",
    icon: "ShoppingBag",
    status: "active",
    deliverables: ["Vendor Tender Evaluation", "Technical Specification Verification", "Price Benchmark Review", "Warranty & SLA Negotiation Support"]
  },
  {
    id: "ict-project-planning",
    title: "ICT Project Planning",
    category: "consultancy",
    shortDescription: "Milestone scheduling, risk management, and budgeting for tech projects.",
    detailedDescription: "Structured project planning using agile and waterfall methods to keep complex technology deployments within budget and on schedule.",
    icon: "Calendar",
    status: "active",
    deliverables: ["Gantt Chart Work Breakdown Structure", "Risk & Mitigation Register", "Resource Allocation Plan", "Weekly Stakeholder Progress Reports"]
  },
  {
    id: "digital-transformation-consultancy",
    title: "Digital Transformation Consultancy",
    category: "consultancy",
    shortDescription: "Guiding organizations from analog and legacy habits into digital leadership.",
    detailedDescription: "Holistic modernization encompassing people, processes, and technology to increase operational agility and competitive differentiation.",
    icon: "Rocket",
    status: "active",
    deliverables: ["Transformation Roadmap Blueprint", "Process Re-engineering Analysis", "Digital Tool Selection Matrix", "Staff Enablement Strategy"]
  }
];
