import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, Clock, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-contact-title">
            Contact Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Ready to order fresh vegetables? Have questions about our produce? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6" data-testid="text-get-in-touch-title">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8" data-testid="text-get-in-touch-subtitle">
                  The fastest way to reach us is through WhatsApp or phone call. 
                  We typically respond within minutes during business hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-4" data-testid="card-contact-phone">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call or Text</p>
                      <a 
                        href="tel:0712700008" 
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                        data-testid="link-contact-phone"
                      >
                        0712 700 008
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4" data-testid="card-contact-whatsapp">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                      <SiWhatsapp className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <a 
                        href="https://wa.me/254712700008"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                        data-testid="link-contact-whatsapp"
                      >
                        Chat with us
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4" data-testid="card-contact-email">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:johnkamanda331@gmail.com"
                        className="font-semibold text-foreground hover:text-primary transition-colors text-sm"
                        data-testid="link-contact-email"
                      >
                        johnkamanda331@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4" data-testid="card-contact-hours">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hours</p>
                      <p className="font-semibold text-foreground" data-testid="text-business-hours">
                        Mon - Sat: 6am - 6pm
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/254712700008?text=Hello%2C%20I%27m%20interested%20in%20ordering%20fresh%20vegetables%20from%20Mureithi%27s%20Farm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" className="w-full sm:w-auto gap-2" data-testid="button-whatsapp-order">
                    <SiWhatsapp className="h-5 w-5" />
                    Order via WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <Card data-testid="card-contact-form">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground" data-testid="text-success-title">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground" data-testid="text-success-message">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Doe" 
                                  {...field} 
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="john@example.com" 
                                  {...field} 
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number (Optional)</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="0712 345 678" 
                                  {...field} 
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us what vegetables you're interested in, quantities needed, or any questions you have..."
                                  className="min-h-[120px]"
                                  {...field} 
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full gap-2"
                          disabled={mutation.isPending}
                          data-testid="button-submit-message"
                        >
                          {mutation.isPending ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-quick-call-title">
            Prefer a Quick Call?
          </h2>
          <p className="text-muted-foreground mb-6" data-testid="text-quick-call-subtitle">
            For urgent orders or immediate assistance, give us a call. 
            We're happy to help you choose the perfect vegetables for your needs.
          </p>
          <a href="tel:0712700008">
            <Button size="lg" variant="outline" className="gap-2" data-testid="button-call-now">
              <Phone className="h-5 w-5" />
              Call Now: 0712 700 008
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
