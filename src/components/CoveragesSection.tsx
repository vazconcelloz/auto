import { BriefcaseBusiness, ChartNoAxesColumn, Handshake, LayoutDashboard, ShieldCheck, MapPinned } from "lucide-react";

const coverages = [
  {
    icon: BriefcaseBusiness,
    title: "Cobertura personalizada para o seu perfil",
    description:
      "Estruturamos o seguro de acordo com o uso do veículo, região de circulação e nível de risco para evitar falhas de proteção.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Análise de risco e custo-benefício",
    description:
      "Comparamos opções entre seguradoras para equilibrar franquia, coberturas e valor final sem perder qualidade.",
  },
  {
    icon: Handshake,
    title: "Cobertura para terceiros e danos materiais",
    description:
      "Proteção para responsabilidade civil e imprevistos que envolvam outros veículos, pessoas e patrimônio.",
  },
  {
    icon: LayoutDashboard,
    title: "Assistência 24h completa",
    description:
      "Guincho, pane seca, troca de pneu, chaveiro e suporte emergencial para você não ficar parado na rua.",
  },
  {
    icon: ShieldCheck,
    title: "Proteções adicionais",
    description:
      "Inclua coberturas como vidros, carro reserva, eventos da natureza e perda parcial conforme sua necessidade.",
  },
  {
    icon: MapPinned,
    title: "Suporte em sinistro do início ao fim",
    description:
      "Acompanhamos todo o processo de junto à seguradora para reduzir burocracia e acelerar cada etapa da sua indenização.",
  },
];

const CoveragesSection = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-10 bg-section-gray">
      <div className="container px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-12">
          Coberturas e <span className="text-primary">Assistências</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverages.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoveragesSection;
