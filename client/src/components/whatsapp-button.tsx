import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254712700008?text=Hello%2C%20I%27m%20interested%20in%20ordering%20fresh%20vegetables%20from%20Mureithi%27s%20Farm."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Contact us on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <SiWhatsapp className="h-7 w-7" />
    </a>
  );
}
