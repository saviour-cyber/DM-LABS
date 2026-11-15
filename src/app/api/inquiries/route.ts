import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ServiceInquiry } from "@/types";

// Path to inquiries store
const dataDir = path.join(process.cwd(), "src", "data");
const inquiriesFilePath = path.join(dataDir, "inquiries.json");

// Ensure data directory and file exist
function getStoredInquiries(): ServiceInquiry[] {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(inquiriesFilePath)) {
      fs.writeFileSync(inquiriesFilePath, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const fileContent = fs.readFileSync(inquiriesFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading inquiries:", error);
    return [];
  }
}

function saveInquiries(inquiries: ServiceInquiry[]) {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(inquiriesFilePath, JSON.stringify(inquiries, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving inquiries:", error);
  }
}

export async function GET() {
  const inquiries = getStoredInquiries();
  return NextResponse.json({ inquiries });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation
    const { fullName, email, phone, category, serviceId, serviceTitle, description, preferredContact } = body;

    if (!fullName || !email || !phone || !category || !serviceId || !description) {
      return NextResponse.json(
        { error: "Please provide all required fields (Name, Email, Phone, Service Category, and Description)." },
        { status: 400 }
      );
    }

    // Generate unique inquiry ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newId = `DML-${Date.now().toString().slice(-4)}-${randomSuffix}`;

    const newInquiry: ServiceInquiry = {
      id: newId,
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      organization: body.organization ? String(body.organization).trim() : undefined,
      category,
      serviceId,
      serviceTitle: serviceTitle || serviceId,
      budgetRange: body.budgetRange || undefined,
      description: String(description).trim(),
      preferredContact: preferredContact || "email",
      createdAt: new Date().toISOString(),
      status: "new",
    };

    const existing = getStoredInquiries();
    existing.unshift(newInquiry);
    saveInquiries(existing);

    return NextResponse.json(
      { 
        success: true, 
        message: "Inquiry successfully recorded", 
        inquiry: newInquiry 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry submission." },
      { status: 500 }
    );
  }
}
