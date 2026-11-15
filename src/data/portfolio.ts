import { ProjectItem } from "@/types";

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "apex-school-portal",
    title: "Integrated Educational & Fee Management Platform",
    category: "software",
    categoryLabel: "Software Development",
    shortDescription: "A centralized school portal for academic grading, student registration, fee invoicing, and SMS notifications.",
    fullDescription: "Architected a multi-role school management portal designed to streamline administrative operations. The system eliminates paperwork by automating grade calculation, generating instant termly report cards, and reconciling bank/mobile money fee payments with automated SMS confirmation.",
    image: "/projects/school-portal.svg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "REST API", "SMS Gateway"],
    completionDate: "2024",
    highlights: [
      "Automated grade calculation and PDF report generation",
      "Real-time fee payment verification via API gateway",
      "Parent and teacher role-based access portals"
    ]
  },
  {
    id: "strata-enterprise-network",
    title: "Multi-Floor Corporate Office Network & Fiber Backbone",
    category: "networking",
    categoryLabel: "Networking & Infrastructure",
    shortDescription: "Turnkey structured cabling, rack management, VLAN segmentation, and high-density Wi-Fi for a 4-floor commercial office.",
    fullDescription: "Engineered and deployed a complete enterprise networking architecture across four commercial office floors. Included Cat6A certified structured cabling with over 180 data drops, server rack consolidation, fiber optic vertical riser backbone, managed PoE switches, and unified multi-SSID wireless with fast roaming.",
    image: "/projects/network-infra.svg",
    technologies: ["Cat6A Cabling", "Fiber Optic Riser", "VLAN 802.1Q", "Managed PoE Switches", "Enterprise Wi-Fi APs", "Hardware Firewall"],
    completionDate: "2024",
    highlights: [
      "180+ certified Cat6A drops with neat patch cable management",
      "10Gbps optical fiber inter-floor riser links",
      "Zero dead-zone wireless coverage with guest isolation"
    ]
  },
  {
    id: "vanguard-pos-inventory",
    title: "Multi-Store Retail POS & Centralized Inventory System",
    category: "software",
    categoryLabel: "Software Development",
    shortDescription: "Offline-first point of sale software with real-time stock sync across multiple retail branches.",
    fullDescription: "Built an intuitive, touchscreen-optimized point of sale (POS) system integrated with barcode scanners, thermal receipt printers, and cash drawers. Features automatic cloud synchronization when online, ensuring multi-store inventory balances remain synchronized while allowing offline checkout during network dips.",
    image: "/projects/pos-system.svg",
    technologies: ["React", "Node.js", "SQLite Offline Cache", "Cloud Sync Engine", "Thermal ESC/POS"],
    completionDate: "2024",
    highlights: [
      "Offline transactional resilience with background sync",
      "Real-time low stock reorder alerts and purchase orders",
      "Instant end-of-day revenue and tax reconciliations"
    ]
  },
  {
    id: "zenith-corporate-brand-identity",
    title: "Modern Corporate Brand Identity & Design System",
    category: "design",
    categoryLabel: "Graphic Design",
    shortDescription: "Complete corporate brand identity, typography scale, stationery suite, and interactive pitch deck.",
    fullDescription: "Developed a comprehensive brand transformation package including iconic logo mark, visual brand guidelines, business cards, corporate letterhead, company profile presentation, and social media template kits engineered for high brand recall.",
    image: "/projects/brand-design.svg",
    technologies: ["Vector Brand Identity", "Figma", "Typography Hierarchy", "Print Pre-press CMYK", "Brand Style Guide"],
    completionDate: "2024",
    highlights: [
      "Modular logo system adaptable to digital and physical collateral",
      "32-page comprehensive brand execution handbook",
      "Complete print-ready pre-press stationery suite"
    ]
  },
  {
    id: "horizon-corporate-web-platform",
    title: "High-Performance Corporate Website & Client Portal",
    category: "websites",
    categoryLabel: "Web Development",
    shortDescription: "Ultra-fast corporate web presence with dynamic service directory, case studies, and lead capture workflows.",
    fullDescription: "Designed and engineered an authoritative digital platform featuring sub-second page loads, accessible typography, dynamic service inquiries, and comprehensive on-page search engine optimization (SEO) that improved inbound consultation requests.",
    image: "/projects/web-platform.svg",
    technologies: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Dynamic Form API", "Technical SEO"],
    completionDate: "2024",
    highlights: [
      "Perfect 100/100 Google Lighthouse performance score",
      "Dynamic inquiry routing and lead qualification",
      "Fully responsive architecture tested across all devices"
    ]
  },
  {
    id: "sentinel-security-surveillance",
    title: "Commercial Facility CCTV & Biometric Access Deployment",
    category: "ict",
    categoryLabel: "ICT & Security Solutions",
    shortDescription: "32-channel IP camera deployment with remote live monitoring and fingerprint access control doors.",
    fullDescription: "Designed and implemented physical premises security covering warehouses and office facilities. Installed 32 high-definition IP cameras with night vision and motion alerts, centralized 16TB NVR storage, and biometric door access locks preventing unauthorized personnel from entering high-security server and inventory rooms.",
    image: "/projects/security-cctv.svg",
    technologies: ["IP Surveillance PoE", "16TB NVR Array", "Biometric Access Control", "Encrypted Remote Viewing"],
    completionDate: "2024",
    highlights: [
      "100% perimeter and indoor blind-spot elimination",
      "Mobile live stream app with intrusion push notifications",
      "Audit trail logs of all physical door access attempts"
    ]
  }
];
