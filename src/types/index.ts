export type ServiceCategory = 
  | "software"
  | "web"
  | "design"
  | "networking"
  | "it-support"
  | "security"
  | "cloud"
  | "cybersecurity"
  | "consultancy";

export interface CategoryInfo {
  id: ServiceCategory;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  detailedDescription: string;
  icon: string;
  status: "active" | "available" | "coming-soon";
  deliverables: string[];
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "software" | "websites" | "design" | "networking" | "ict";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  completionDate?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: string[];
  featuredServices: string[];
}

export interface ServiceInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  category: ServiceCategory;
  serviceId: string;
  serviceTitle: string;
  budgetRange?: string;
  description: string;
  preferredContact: "email" | "phone" | "whatsapp";
  createdAt: string;
  status: "new" | "reviewing" | "contacted" | "archived";
}
