import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const crops = pgTable("crops", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(), // vegetables, fruits, grains
  quantity: integer("quantity").notNull(), // in kg
  location: text("location").notNull(),
  farmerName: text("farmer_name").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const farmers = pgTable("farmers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  farmSize: text("farm_size"),
  cropTypes: text("crop_types"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const exporters = pgTable("exporters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactPerson: text("contact_person").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  interestedCrops: text("interested_crops"),
  exportRegions: text("export_regions"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  fullName: true,
  email: true,
  phone: true,
  message: true,
});

export const insertCropSchema = createInsertSchema(crops).pick({
  name: true,
  category: true,
  quantity: true,
  location: true,
  farmerName: true,
  imageUrl: true,
});

export const insertFarmerSchema = createInsertSchema(farmers).pick({
  fullName: true,
  email: true,
  phone: true,
  location: true,
  farmSize: true,
  cropTypes: true,
});

export const insertExporterSchema = createInsertSchema(exporters).pick({
  companyName: true,
  contactPerson: true,
  email: true,
  phone: true,
  location: true,
  interestedCrops: true,
  exportRegions: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertCrop = z.infer<typeof insertCropSchema>;
export type Crop = typeof crops.$inferSelect;
export type InsertFarmer = z.infer<typeof insertFarmerSchema>;
export type Farmer = typeof farmers.$inferSelect;
export type InsertExporter = z.infer<typeof insertExporterSchema>;
export type Exporter = typeof exporters.$inferSelect;
