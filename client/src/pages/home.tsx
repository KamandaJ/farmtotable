import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard, productImages } from "@/components/product-card";
import { products } from "@shared/schema";
import { Leaf, Truck, Award, Phone, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import farmerImage from "@assets/generated_images/farmer_in_vegetable_fields.png";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${productImages.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-headline">
            Fresh Indigenous Vegetables,<br />
            <span className="text-primary">Direct From Our Farm</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Experience the authentic taste of traditional African vegetables, 
            grown with care using sustainable farming practices. 
            From our family farm to your table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
              <Button size="lg" className="text-base px-8" data-testid="button-hero-products">
                <Leaf className="mr-2 h-5 w-5" />
                View Products
              </Button>
            </Link>
            <a
              href="https://wa.me/254712700008?text=Hello%2C%20I%27m%20interested%20in%20ordering%20fresh%20vegetables%20from%20Mureithi%27s%20Farm."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-whatsapp"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src={farmerImage}
                alt="Farmer tending to vegetables at Mureithi's Farm"
                className="w-full h-auto object-cover"
                data-testid="img-farmer-story"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-story-headline">
                Our Farm Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Mureithi's Farm To Table, we believe in preserving Kenya's rich agricultural heritage 
                while nourishing our community with the healthiest produce possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our indigenous vegetables — from the iron-rich <strong>Terere</strong> (Amaranth) to 
                the beloved <strong>Sukuma Wiki</strong> — are grown using time-honored sustainable methods 
                that respect both the land and our traditions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every leaf we harvest carries the dedication of our family's commitment to quality. 
                We grow only what we would proudly serve on our own table.
              </p>
              <Link href="/about">
                <Button variant="secondary" size="lg" data-testid="button-learn-more">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-featured-headline">
              Our Fresh Produce
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-featured-subtitle">
              Discover our selection of nutritious indigenous vegetables, 
              handpicked fresh from our farm every morning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" data-testid="button-view-all-products">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-why-choose-headline">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6" data-testid="card-benefit-fresh">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  100% Fresh
                </h3>
                <p className="text-muted-foreground">
                  Harvested fresh every morning and delivered the same day. 
                  No cold storage, no preservatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6" data-testid="card-benefit-indigenous">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Indigenous Varieties
                </h3>
                <p className="text-muted-foreground">
                  Traditional African vegetables packed with nutrients 
                  our ancestors have valued for generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6" data-testid="card-benefit-direct">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Direct From Farm
                </h3>
                <p className="text-muted-foreground">
                  No middlemen. Buy directly from us and get the best quality 
                  at fair prices while supporting local farming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4" data-testid="text-cta-headline">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Contact us today to place your order. We deliver fresh produce 
            and are happy to help you choose the best vegetables for your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:0712700008">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base px-8"
                data-testid="button-cta-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 0712 700 008
              </Button>
            </a>
            <a
              href="https://wa.me/254712700008?text=Hello%2C%20I%27m%20interested%20in%20ordering%20fresh%20vegetables%20from%20Mureithi%27s%20Farm."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
                data-testid="button-cta-whatsapp"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
            <a href="mailto:johnkamanda331@gmail.com">
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
                data-testid="button-cta-email"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
