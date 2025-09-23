import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertFarmerSchema, insertExporterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contacts (for admin)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Get all crops
  app.get("/api/crops", async (req, res) => {
    try {
      const { category } = req.query;
      let crops;
      
      if (category && typeof category === 'string') {
        crops = await storage.getCropsByCategory(category);
      } else {
        crops = await storage.getAllCrops();
      }
      
      res.json(crops);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch crops" });
    }
  });

  // Farmer registration
  app.post("/api/farmers/register", async (req, res) => {
    try {
      const validatedData = insertFarmerSchema.parse(req.body);
      const farmer = await storage.createFarmer(validatedData);
      res.json({ success: true, farmer });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid registration data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to register farmer" 
        });
      }
    }
  });

  // Exporter registration
  app.post("/api/exporters/register", async (req, res) => {
    try {
      const validatedData = insertExporterSchema.parse(req.body);
      const exporter = await storage.createExporter(validatedData);
      res.json({ success: true, exporter });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid registration data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to register exporter" 
        });
      }
    }
  });

  // Get all farmers
  app.get("/api/farmers", async (req, res) => {
    try {
      const farmers = await storage.getAllFarmers();
      res.json(farmers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch farmers" });
    }
  });

  // Get all exporters
  app.get("/api/exporters", async (req, res) => {
    try {
      const exporters = await storage.getAllExporters();
      res.json(exporters);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch exporters" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
