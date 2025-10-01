export type CropCategory = "vegetables" | "fruits" | "grains";

export interface Crop {
  id: string;
  name: string;
  category: CropCategory;
  quantity: number;
  location: string;
  farmerName: string;
  imageUrl: string;
  createdAt: Date;
}

export interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

export interface Farmer {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  farmSize?: string | null;
  cropTypes?: string | null;
  createdAt: Date;
}

export interface Exporter {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  interestedCrops?: string | null;
  exportRegions?: string | null;
  createdAt: Date;
}