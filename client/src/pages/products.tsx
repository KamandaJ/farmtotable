import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { products } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Leaf, Carrot, Flame } from "lucide-react";

type Category = "all" | "leafy" | "vegetable" | "spice";

const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Products", icon: null },
  { value: "leafy", label: "Leafy Greens", icon: <Leaf className="h-4 w-4" /> },
  { value: "vegetable", label: "Vegetables", icon: <Carrot className="h-4 w-4" /> },
  { value: "spice", label: "Chillies", icon: <Flame className="h-4 w-4" /> },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-products-title">
            Our Fresh Produce
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Browse our selection of fresh, locally grown indigenous vegetables. 
            Each one carefully cultivated on our family farm.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="gap-2"
                data-testid={`button-filter-${category.value}`}
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground" data-testid="text-product-count">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-special-request-title">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6" data-testid="text-special-request-subtitle">
            We grow seasonal vegetables and can accommodate special requests. 
            Contact us to discuss your needs.
          </p>
          <a href="https://wa.me/254712700008" target="_blank" rel="noopener noreferrer">
            <Button size="lg" data-testid="button-contact-inquiry">
              Contact Us for Special Requests
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
