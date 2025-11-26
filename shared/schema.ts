import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export interface Product {
  id: string;
  name: string;
  localName: string;
  description: string;
  category: "leafy" | "vegetable" | "spice";
  image: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "amaranth",
    name: "Amaranth",
    localName: "Terere",
    description: "Nutrient-rich leafy green packed with iron, calcium, and vitamins. A traditional superfood perfect for stews and side dishes.",
    category: "leafy",
    image: "amaranth",
    benefits: ["High in iron", "Rich in protein", "Contains antioxidants"]
  },
  {
    id: "nightshade",
    name: "Black Nightshade",
    localName: "Managu",
    description: "Traditional African leafy vegetable with a slightly bitter taste. Excellent source of vitamins A and C, commonly enjoyed sautéed with onions.",
    category: "leafy",
    image: "nightshade",
    benefits: ["Rich in Vitamin A", "Immune boosting", "Traditional remedy"]
  },
  {
    id: "cowpeas",
    name: "Cowpea Leaves",
    localName: "Kunde",
    description: "Tender young leaves from the cowpea plant. Mild flavor, high in protein and fiber. Perfect complement to ugali.",
    category: "leafy",
    image: "cowpeas",
    benefits: ["High protein", "Rich in fiber", "Sustainable crop"]
  },
  {
    id: "swisschard",
    name: "Fordhook Swiss Chard",
    localName: "Swiss Chard",
    description: "Beautiful broad leaves with colorful stalks. Mild, slightly earthy flavor. Versatile for cooking, sautéing, or adding to soups.",
    category: "leafy",
    image: "swisschard",
    benefits: ["High in Vitamin K", "Low calorie", "Versatile cooking"]
  },
  {
    id: "kale",
    name: "Thousand Headed Kale",
    localName: "Sukuma Wiki",
    description: "Kenya's most beloved vegetable. Nutritious, affordable, and delicious. The backbone of East African cuisine.",
    category: "leafy",
    image: "kale",
    benefits: ["Nutrient dense", "Affordable", "Year-round availability"]
  },
  {
    id: "thousand-headed-sukuma-wiki",
    name: "Thousand headed Sukuma Wiki",
    localName: "Sukuma Wiki",
    description: "An abundant variety of Sukuma Wiki with multiple heads providing tender, nutritious leaves. Perfect for stews and quick sautés.",
    category: "leafy",
    image: "thousand-headed-sukuma-wiki",
    benefits: ["Tenders leaves", "High yield", "Rich in vitamins"]
  },
  {
    id: "pumpkin",
    name: "Pumpkins",
    localName: "Malenge",
    description: "Sweet, versatile orange-fleshed pumpkins. Perfect for soups, stews, and baking. Rich in beta-carotene and fiber.",
    category: "vegetable",
    image: "pumpkin",
    benefits: ["Rich in Vitamin A", "Natural sweetness", "Long shelf life"]
  },
  {
    id: "butternut",
    name: "Butternut Squash",
    localName: "Butternut",
    description: "Creamy, sweet squash with a nutty flavor. Excellent roasted, mashed, or in soups. A healthy carbohydrate source.",
    category: "vegetable",
    image: "butternut",
    benefits: ["Low glycemic", "High in potassium", "Creamy texture"]
  },
  {
    id: "red-chilli",
    name: "Red Cayenne Chillies",
    localName: "Pilipili Nyekundu",
    description: "Fiery red chillies adding heat and flavor to any dish. Naturally sun-dried for maximum potency and shelf life.",
    category: "spice",
    image: "red-chilli",
    benefits: ["Metabolism boost", "Pain relief", "Rich in Vitamin C"]
  },
  {
    id: "green-chilli",
    name: "Green Cayenne Chillies",
    localName: "Pilipili Kijani",
    description: "Fresh green chillies with a bright, sharp heat. Perfect for fresh salsas, stir-fries, and traditional dishes.",
    category: "spice",
    image: "green-chilli",
    benefits: ["Fresh flavor", "Digestive aid", "Natural preservative"]
  },
  {
    id: "cabbage",
    name: "Cabbage",
    localName: "Kabichi",
    description: "Crisp, crunchy cabbage heads. Excellent for salads, coleslaw, or cooking. A versatile kitchen staple.",
    category: "vegetable",
    image: "cabbage",
    benefits: ["High in fiber", "Long storage", "Versatile use"]
  }
];
