import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

import heroImage from "@assets/generated_images/farm_hero_vegetables_spread.png";
import amaranthImage from "@assets/generated_images/fresh_amaranth_terere_leaves.png";
import nightshadeImage from "@assets/generated_images/black_nightshade_managu_leaves.png";
import cowpeasImage from "@assets/generated_images/cowpea_kunde_leaves.png";
import swisschardImage from "@assets/generated_images/swiss_chard_product_photo.png";
import kaleImage from "@assets/generated_images/sukuma_wiki_kale.png";
import thousandHeadedImage from "@assets/generated_images/thousand_headed_sukuma_wiki_leaves.webp";
import pumpkinImage from "@assets/generated_images/fresh_farm_pumpkins.png";
import butternutImage from "@assets/generated_images/butternut_squash.png";
import redChilliImage from "@assets/generated_images/red_cayenne_chillies.png";
import greenChilliImage from "@assets/generated_images/green_cayenne_chillies.png";
import cabbageImage from "@assets/generated_images/fresh_green_cabbage.png";

export const productImages: Record<string, string> = {
  hero: heroImage,
  amaranth: amaranthImage,
  nightshade: nightshadeImage,
  cowpeas: cowpeasImage,
  swisschard: swisschardImage,
  kale: kaleImage,
  "thousand-headed-sukuma-wiki": thousandHeadedImage,
  pumpkin: pumpkinImage,
  butternut: butternutImage,
  "red-chilli": redChilliImage,
  "green-chilli": greenChilliImage,
  cabbage: cabbageImage,
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = productImages[product.image] || productImages.hero;

  return (
    <Card className="group overflow-visible hover-elevate transition-all duration-300" data-testid={`card-product-${product.id}`}>
      <div className="aspect-square overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt={`Fresh ${product.name} from Mureithi's Farm`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground leading-tight" data-testid={`text-product-name-${product.id}`}>
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground italic">
              {product.localName}
            </p>
          </div>
          <Badge 
            variant="secondary" 
            className="shrink-0 capitalize text-xs"
          >
            {product.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <Badge key={index} variant="outline" className="text-xs font-normal">
              {benefit}
            </Badge>
          ))}
        </div>
        <Link href="/contact">
          <Button className="w-full mt-2" data-testid={`button-order-${product.id}`}>
            Order Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
