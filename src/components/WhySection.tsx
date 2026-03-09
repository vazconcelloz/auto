import { HandCoins, BadgeCheck, ChartNoAxesCombined, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: HandCoins,
    title: "8 Milhões\nem economia",
    description: "Com nossas análises de contrato, garantimos para nossos clientes uma economia de R$ 8.000.000 em 2025.",
  },
  {
    icon: BadgeCheck,
    title: "Atendimento eficiente de verdade",
    description: "O mercado oferece respostas genéricas e tabelas. Nós entregamos soluções adaptadas à realidade da sua empresa.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Antecipação e contenção de reajustes",
    description: "Estratégias validadas para proteger sua empresa nos reajustes anuais.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte contínuo e especializado",
    description: "Nosso suporte não termina após a contratação. Nos tornamos parte da sua equipe.",
  },
];

const WhySection = () => {
  return (
    <section className="pt-5 pb-13 md:pt-12 md:pb-24 bg-background">
      <div className="container px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground">
          Por que{" "}
          <span className="text-primary">mais de 1.200</span>{" "}
          empresas escolheram a FBN?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-heading font-bold text-foreground leading-snug whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
