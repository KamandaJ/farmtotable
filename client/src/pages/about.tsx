import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Leaf, Heart, Sprout, Users, Sun, Droplets } from "lucide-react";
import farmerImage from "@assets/generated_images/farmer_in_vegetable_fields.png";
import heroImage from "@assets/generated_images/farm_hero_vegetables_spread.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-about-title">
            About Mureithi's Farm
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Preserving Kenya's agricultural heritage, one vegetable at a time.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-story-title">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mureithi's Farm To Table began with a simple vision: to bring the nutritious, 
                flavorful indigenous vegetables of our ancestors back to modern Kenyan tables.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For generations, vegetables like <strong>Terere</strong>, <strong>Managu</strong>, 
                and <strong>Kunde</strong> sustained our communities with their rich nutritional profiles. 
                As modern agriculture shifted toward imported varieties, these traditional crops 
                became harder to find.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We decided to change that. Our family farm now specializes in growing these 
                heritage vegetables using sustainable methods that honor both the land and 
                our cultural traditions.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={farmerImage}
                alt="Mureithi's Farm vegetables field"
                className="w-full h-auto object-cover"
                data-testid="img-about-farmer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-values-title">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-values-subtitle">
              Every decision we make is guided by these core principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6" data-testid="card-value-sustainability">
              <CardContent className="pt-4 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sprout className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Sustainability
                </h3>
                <p className="text-muted-foreground">
                  We practice regenerative farming that enriches the soil, conserves water, 
                  and protects local biodiversity for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6" data-testid="card-value-heritage">
              <CardContent className="pt-4 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Cultural Heritage
                </h3>
                <p className="text-muted-foreground">
                  By growing indigenous vegetables, we preserve the agricultural knowledge 
                  and food traditions passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6" data-testid="card-value-community">
              <CardContent className="pt-4 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Community First
                </h3>
                <p className="text-muted-foreground">
                  We support local farmers, create employment opportunities, 
                  and contribute to food security in our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-why-indigenous-title">
              Why Indigenous Vegetables?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src={heroImage}
                alt="Fresh indigenous vegetables from Mureithi's Farm"
                className="w-full h-auto object-cover"
                data-testid="img-about-vegetables"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Superior Nutrition
                  </h3>
                  <p className="text-muted-foreground">
                    Indigenous vegetables are packed with vitamins, minerals, and antioxidants 
                    often in higher concentrations than imported varieties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Climate Adapted
                  </h3>
                  <p className="text-muted-foreground">
                    These vegetables naturally thrive in our local climate, requiring less water 
                    and fewer inputs to grow successfully.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Drought Resistant
                  </h3>
                  <p className="text-muted-foreground">
                    Many indigenous vegetables are naturally drought-tolerant, making them 
                    reliable food sources even during challenging weather conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit our farm section removed per request */}
    </div>
  );
}
