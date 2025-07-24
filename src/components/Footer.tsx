import { Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              MUVVE
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Transformando ideias em soluções digitais inovadoras. 
              Sua parceira em tecnologia para impulsionar seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contatomuvve@gmail.com"
                className="text-background/60 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://instagram.com/muvvetech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-background/80">
              <li>Desenvolvimento Web</li>
              <li>Desenvolvimento Mobile</li>
              <li>Sistemas Personalizados</li>
              <li>Manutenção de Software</li>
              <li>Consultoria</li>
              <li>Automação de Sistemas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-background/80">
              <p>contatomuvve@gmail.com</p>
              <p>@muvvetech</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p className="flex items-center justify-center">
            © {currentYear} - Muvve. Feito com{" "}
            <Heart className="mx-1 text-blue-500" size={16} fill="currentColor" />
            e muita tecnologia by Henrique Salomão.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;