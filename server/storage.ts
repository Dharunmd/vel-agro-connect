import { type User, type InsertUser, type Contact, type InsertContact, type Crop, type InsertCrop, type Farmer, type InsertFarmer, type Exporter, type InsertExporter } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  getAllCrops(): Promise<Crop[]>;
  getCropsByCategory(category: string): Promise<Crop[]>;
  createCrop(crop: InsertCrop): Promise<Crop>;
  
  createFarmer(farmer: InsertFarmer): Promise<Farmer>;
  getAllFarmers(): Promise<Farmer[]>;
  
  createExporter(exporter: InsertExporter): Promise<Exporter>;
  getAllExporters(): Promise<Exporter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private crops: Map<string, Crop>;
  private farmers: Map<string, Farmer>;
  private exporters: Map<string, Exporter>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.crops = new Map();
    this.farmers = new Map();
    this.exporters = new Map();
    
    // Initialize with sample crop data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleCrops: Crop[] = [
      {
        id: randomUUID(),
        name: "Fresh Tomatoes",
        category: "vegetables",
        quantity: 500,
        location: "Maharashtra, India",
        farmerName: "Rajesh Kumar",
        imageUrl: "https://pixabay.com/get/gbf8ab45bd626d5707070b941639eef68a6db356fa3f46a910b1d29a9b5e87fb7bab06e626bf51b58c9b80df0902df9dda1067b259cc9839f0b6910a4189589a4_1280.jpg",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Premium Mangoes",
        category: "fruits",
        quantity: 1200,
        location: "Tamil Nadu, India",
        farmerName: "Suresh Patel",
        imageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Basmati Rice",
        category: "grains",
        quantity: 2000,
        location: "Punjab, India",
        farmerName: "Harjeet Singh",
        imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Fresh Onions",
        category: "vegetables",
        quantity: 3000,
        location: "Karnataka, India",
        farmerName: "Gopal Reddy",
        imageUrl: "https://pixabay.com/get/ge3f3d0af913d580b8ed5c878c475f13b65bbdf56d8535f9c1a5a8adc2f86b294df8b47f107d39fd2c4710a86e0669012ace57a7a6e59755d8db4822b49914427_1280.jpg",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Organic Apples",
        category: "fruits",
        quantity: 800,
        location: "Himachal Pradesh, India",
        farmerName: "Vikram Sharma",
        imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Premium Wheat",
        category: "grains",
        quantity: 5000,
        location: "Uttar Pradesh, India",
        farmerName: "Mohan Gupta",
        imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        createdAt: new Date(),
      }
    ];

    sampleCrops.forEach(crop => {
      this.crops.set(crop.id, crop);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getAllCrops(): Promise<Crop[]> {
    return Array.from(this.crops.values());
  }

  async getCropsByCategory(category: string): Promise<Crop[]> {
    return Array.from(this.crops.values()).filter(
      crop => crop.category === category
    );
  }

  async createCrop(insertCrop: InsertCrop): Promise<Crop> {
    const id = randomUUID();
    const crop: Crop = { 
      ...insertCrop, 
      id, 
      createdAt: new Date() 
    };
    this.crops.set(id, crop);
    return crop;
  }

  async createFarmer(insertFarmer: InsertFarmer): Promise<Farmer> {
    const id = randomUUID();
    const farmer: Farmer = { 
      ...insertFarmer, 
      id, 
      createdAt: new Date(),
      farmSize: insertFarmer.farmSize ?? null,
      cropTypes: insertFarmer.cropTypes ?? null
    };
    this.farmers.set(id, farmer);
    return farmer;
  }

  async getAllFarmers(): Promise<Farmer[]> {
    return Array.from(this.farmers.values());
  }

  async createExporter(insertExporter: InsertExporter): Promise<Exporter> {
    const id = randomUUID();
    const exporter: Exporter = { 
      ...insertExporter, 
      id, 
      createdAt: new Date(),
      interestedCrops: insertExporter.interestedCrops ?? null,
      exportRegions: insertExporter.exportRegions ?? null
    };
    this.exporters.set(id, exporter);
    return exporter;
  }

  async getAllExporters(): Promise<Exporter[]> {
    return Array.from(this.exporters.values());
  }
}

export const storage = new MemStorage();
