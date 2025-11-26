import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <Leaf className="h-12 w-12 text-primary" />
        </div>
        <div className="space-y-2">
          <h1 className="font-display text-4xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Looks like this page has gone to seed! Let's get you back to our fresh produce.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="gap-2" data-testid="button-go-home">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Link href="/products">
            <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-products">
              <Leaf className="h-5 w-5" />
              View Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
