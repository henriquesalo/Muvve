import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Instagram, 
  MapPin,
  Clock,
  Phone
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça mais sobre nossos serviços e como podemos ajudar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Nos envie um email</p>
              <a 
                href="mailto:contatomuvve@gmail.com"
                className="text-primary hover:text-primary-glow transition-colors font-medium"
              >
                contatomuvve@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <Instagram className="text-primary-foreground" size={24} />
                </div>
                Instagram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Siga-nos no Instagram</p>
              <a 
                href="https://instagram.com/muvvetech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors font-medium"
              >
                @muvvetech
              </a>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="bg-gradient-primary text-primary-foreground shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Clock className="mr-3" size={24} />
                Informações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm">Atendimento comercial disponível</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm">Atendemos todo o Brasil</span>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm">Resposta em até 24 horas</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Info Section */}
        <div className="text-center bg-accent/50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">
            Sobre a <span className="bg-gradient-primary bg-clip-text text-transparent">Muvve</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2025</div>
              <div className="text-muted-foreground">Fundada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Digital</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Suporte</div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Transformando ideias em soluções digitais inovadoras. 
            Somos especialistas em desenvolvimento de software com foco em qualidade e resultado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;