import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Settings, 
  Wrench, 
  Users, 
  Zap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance e conversão.",
      features: ["React/Next.js", "E-commerce", "PWA", "SEO Otimizado"]
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Mobile",
      description: "Apps nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
      features: ["React Native", "Flutter", "iOS/Android", "UI/UX Design"]
    },
    {
      icon: Settings,
      title: "Sistemas Personalizados",
      description: "Soluções sob medida para atender às necessidades específicas do seu negócio.",
      features: ["ERP/CRM", "APIs", "Integrações", "Dashboard"]
    },
    {
      icon: Wrench,
      title: "Manutenção de Software",
      description: "Mantenha seus sistemas atualizados, seguros e funcionando perfeitamente.",
      features: ["Atualizações", "Bugs", "Performance", "Segurança"]
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Orientação especializada para escolher as melhores tecnologias para seu projeto.",
      features: ["Arquitetura", "Tecnologias", "Estratégia", "Planejamento"]
    },
    {
      icon: Zap,
      title: "Automação de Sistemas",
      description: "Automatize processos e integre sistemas para aumentar a eficiência operacional.",
      features: ["Workflows", "Integrações", "APIs", "Robôs"]
    }
  ];

  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="text-primary-foreground" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  onClick={scrollToAbout}
                >
                  Saiba Mais
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada serviço é desenvolvido com foco na qualidade, inovação e nas necessidades específicas do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;