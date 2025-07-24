import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Rocket, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const About = () => {
  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Cada projeto é único e merece atenção personalizada para garantir o melhor resultado."
    },
    {
      icon: Rocket,
      title: "Inovação",
      description: "Utilizamos as tecnologias mais modernas para criar soluções que fazem a diferença."
    },
    {
      icon: Shield,
      title: "Qualidade",
      description: "Código limpo, documentado e testado para garantir performance e segurança."
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Cumprimos prazos e mantemos você informado sobre o progresso do seu projeto."
    }
  ];

  const benefits = [
    "Atendemos startups, PMEs e grandes empresas",
    "Suporte 24/7 após a entrega",
    "Metodologia ágil de desenvolvimento",
    "Equipe especializada e certificada",
    "Garantia de qualidade e performance",
    "Orçamento transparente sem surpresas"
  ];

  return (
    <section id="sobre" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="bg-gradient-primary bg-clip-text text-transparent">Muvve</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos uma empresa de desenvolvimento de software especializada em transformar ideias em soluções digitais inovadoras. Nossa missão é impulsionar negócios através da tecnologia, oferecendo serviços que vão desde desenvolvimento web e mobile até automação de processos.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com uma abordagem centrada no cliente e foco em qualidade, ajudamos empresas de todos os portes a alcançarem seus objetivos através de soluções tecnológicas personalizadas e eficientes.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToServices}
              className="text-lg px-8 py-6"
            >
              Veja Nossos Serviços
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nosso <span className="bg-gradient-primary bg-clip-text text-transparent">Processo</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise", desc: "Entendemos suas necessidades e objetivos" },
              { step: "02", title: "Planejamento", desc: "Criamos a estratégia e arquitetura ideal" },
              { step: "03", title: "Desenvolvimento", desc: "Codificamos com qualidade e agilidade" },
              { step: "04", title: "Entrega", desc: "Implementamos e oferecemos suporte contínuo" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;