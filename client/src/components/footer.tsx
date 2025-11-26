import { Link } from "wouter";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-foreground leading-tight">
                  Mureithi's
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  Farm To Table
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-description">
              Growing fresh, indigenous vegetables with sustainable farming practices. 
              From our farm directly to your table.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-products">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Our Produce</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Amaranth (Terere)</li>
              <li className="text-sm text-muted-foreground">Black Nightshade (Managu)</li>
              <li className="text-sm text-muted-foreground">Cowpeas (Kunde)</li>
              <li className="text-sm text-muted-foreground">Sukuma Wiki</li>
              <li className="text-sm text-muted-foreground">Pumpkins & Butternut</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0712700008"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-4 w-4" />
                  0712 700 008
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/254712700008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:johnkamanda331@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="h-4 w-4" />
                  johnkamanda331@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            &copy; {currentYear} Mureithi's Farm To Table. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
