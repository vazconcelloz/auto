import logoAbla from "@/assets/Logo-Abla.png";
import logoAmma from "@/assets/Logo-Amma.png";
import logoFrison from "@/assets/Logo-Frison.png";
import logoLaav from "@/assets/Logo-LAAV.png";
import logoSindirepa from "@/assets/Logo-Sindirepa.jpg";
import logoSpecialist from "@/assets/Logo-Specialist.jpg";
import logoAmigaDaOficina from "@/assets/Amiga-da-oficina.png";

type ClientLogo = {
  name: string;
  logo: string;
  logoClassName?: string;
};

const clientsRow1: ClientLogo[] = [
  { name: "ABLA", logo: logoAbla },
  { name: "AMMA", logo: logoAmma, logoClassName: "scale-[1.1]" },
  { name: "LAAV", logo: logoLaav, logoClassName: "scale-[1.65]" },
  { name: "Frison", logo: logoFrison },
  { name: "Sindirepa", logo: logoSindirepa, logoClassName: "scale-[1.2]" },
  { name: "Specialist", logo: logoSpecialist, logoClassName: "scale-[1.65]" },
];

const MarqueeRow = ({ clients, direction }: { clients: ClientLogo[]; direction: "left" | "right" }) => {
  const doubled = [...clients, ...clients];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative w-full overflow-hidden py-2 [touch-action:pan-y]">
      <div className={`flex min-w-max will-change-transform ${animationClass}`}>
        {doubled.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className={`flex items-center justify-center h-20 md:h-24 w-44 p-3 shrink-0 overflow-hidden ${client.name === "Specialist" ? "mr-3 md:mr-4" : "mr-8 md:mr-10"}`}
          >
            <img
              src={client.logo}
              alt={`Logo ${client.name}`}
              className={`h-full w-full object-contain origin-center ${client.logoClassName ?? ""}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  return (
    <section className="pt-4 pb-16 md:pt-8 md:pb-24 bg-background overflow-x-clip">
      <div className="container px-4 md:px-8 mb-7 md:mb-8">
        <div className="relative max-w-5xl mx-auto rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 pr-20 md:px-6 md:py-5 md:pr-24 text-center overflow-hidden">
          <img
            src={logoAmigaDaOficina}
            alt="Selo Empresa Amiga da Oficina"
            className="absolute right-3 top-[42%] w-20 -translate-y-1/2 rotate-12 opacity-80 pointer-events-none select-none md:right-5 md:w-24"
            loading="lazy"
          />
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Reconhecimento no <span className="text-primary">mercado automotivo</span>
          </h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
            Empresa "Amiga da Oficina", título concedido pelo Sindirepa, Sindicato Nacional da Reparação Automotiva.
          </p>
        </div>
      </div>
      <MarqueeRow clients={clientsRow1} direction="left" />
    </section>
  );
};

export default ClientsSection;
