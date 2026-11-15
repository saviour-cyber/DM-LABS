import { IndustryItem } from "@/types";

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: "enterprises",
    title: "Businesses & Enterprises",
    icon: "Building2",
    description: "Empowering growing companies with custom business management software, reliable enterprise networking, cloud systems, and dependable IT support.",
    challenges: [
      "Disparate legacy systems causing operational friction",
      "Network downtime and slow inter-branch connectivity",
      "Need for custom automated billing and client tracking"
    ],
    solutions: [
      "Custom ERP & Business Management Software",
      "Enterprise LAN/WAN & Structured Cabling",
      "High-availability Cloud & Business Email"
    ],
    featuredServices: ["custom-software", "office-network-setup", "business-email-solutions"]
  },
  {
    id: "education",
    title: "Educational Institutions & Schools",
    icon: "GraduationCap",
    description: "Modernizing primary, secondary, and tertiary institutions with integrated school management software, campus Wi-Fi, computer labs, and biometric attendance.",
    challenges: [
      "Manual paper-based student grading and fee tracking",
      "Unreliable campus-wide Wi-Fi for staff and students",
      "Lack of secure student record archives"
    ],
    solutions: [
      "DM Labs School Management Platform (SIS & Fees)",
      "Campus-wide High-Density Wi-Fi & Fiber Backbone",
      "Computer Lab Setup & Hardware Maintenance"
    ],
    featuredServices: ["school-management-systems", "wifi-installation", "computer-repair"]
  },
  {
    id: "retail",
    title: "Retail & Commercial Establishments",
    icon: "ShoppingBag",
    description: "Providing modern point of sale (POS) checkout stations, real-time inventory management, security cameras, and e-commerce platforms.",
    challenges: [
      "Stock leakages and inaccurate inventory reconciliation",
      "Slow queues during peak transaction periods",
      "Premises theft and blind spots in store surveillance"
    ],
    solutions: [
      "Integrated POS Systems with Receipt & Barcode Support",
      "Real-time Inventory Tracking with Reorder Alerts",
      "High-definition CCTV Surveillance with Remote Feeds"
    ],
    featuredServices: ["pos-systems", "inventory-management", "cctv-camera-installation"]
  },
  {
    id: "startups",
    title: "Startups & Entrepreneurs",
    icon: "Rocket",
    description: "Helping innovative founders turn ambitious ideas into market-ready products with agile web/mobile apps, impactful branding, and scalable cloud foundations.",
    challenges: [
      "Need to build an MVP rapidly without astronomical costs",
      "Lack of a distinct, cohesive brand identity",
      "Architecting infrastructure that can handle sudden growth"
    ],
    solutions: [
      "Agile MVP Web & Mobile Application Engineering",
      "Full Brand Identity & UI/UX Design Systems",
      "Elastic Cloud Architecture on AWS/GCP"
    ],
    featuredServices: ["web-app-dev", "brand-identity", "cloud-software-solutions"]
  },
  {
    id: "professional",
    title: "Professional Organizations & Law/Audit Firms",
    icon: "Briefcase",
    description: "Securing confidential client information, establishing corporate authority through polished web portals, and implementing encrypted data workflows.",
    challenges: [
      "Stringent client data privacy and confidentiality needs",
      "Unprofessional free email domains damaging reputation",
      "Risk of ransomware and unencrypted client document storage"
    ],
    solutions: [
      "Data Protection, BitLocker & Encrypted Storage",
      "Corporate Microsoft 365 / Google Workspace Setup",
      "High-Authority Corporate Website Development"
    ],
    featuredServices: ["corporate-websites", "data-protection-solutions", "business-email-solutions"]
  },
  {
    id: "government",
    title: "Government & Public Institutions",
    icon: "Landmark",
    description: "Delivering standards-compliant structured cabling, high-capacity networking, robust access control, and strategic ICT consultancy for public offices.",
    challenges: [
      "Need for transparent, standards-compliant ICT procurement",
      "Physical security and access tracking across sensitive departments",
      "Complex multi-building network integration"
    ],
    solutions: [
      "TIA/EIA Certified Structured Cabling & Fiber Backbones",
      "Biometric Access Control & Department Isolation",
      "Vendor-Neutral ICT Needs Assessment & Technical Advisory"
    ],
    featuredServices: ["structured-cabling", "access-control-systems", "ict-consultancy"]
  },
  {
    id: "individuals",
    title: "Individuals, Creatives & Professionals",
    icon: "User",
    description: "Assisting independent professionals, executives, and students with high-performance workstation configuration, laptop repair, data recovery, and personal portfolio sites.",
    challenges: [
      "Sudden laptop breakdown with urgent project deadlines",
      "Accidental file loss or corrupt hard drive",
      "Need for an impressive online portfolio to win clients"
    ],
    solutions: [
      "Rapid Precision Laptop & Desktop Component Repair",
      "Emergency File Recovery & Automated Cloud Backup",
      "Sleek Personal Portfolio Website Development"
    ],
    featuredServices: ["laptop-repair", "data-backup-recovery", "portfolio-websites"]
  }
];
