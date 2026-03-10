import logoAbla from "@/assets/Logo-Abla.png";
import logoAmma from "@/assets/Logo-Amma.png";
import logoFrison from "@/assets/Logo-Frison.png";
import logoLaav from "@/assets/Logo-LAAV.png";
import logoSindirepa from "@/assets/Logo-Sindirepa.jpg";
import logoSpecialist from "@/assets/Logo-Specialist.jpg";

type ClientLogo = {
  name: string;
  logo: string;
  logoClassName?: string;
};

const clientsRow1: ClientLogo[] = [
  { name: "ABLA", logo: logoAbla },
  { name: "AMMA", logo: logoAmma, logoClassName: "scale-[1.2]" },
  { name: "LAAV", logo: logoLaav, logoClassName: "scale-[2.2]" },
  { name: "Frison", logo: logoFrison },
  { name: "Sindirepa", logo: logoSindirepa, logoClassName: "scale-[1.2]" },
  { name: "Specialist", logo: logoSpecialist, logoClassName: "scale-[1.35]" },
];

const MarqueeRow = ({ clients, direction }: { clients: ClientLogo[]; direction: "left" | "right" }) => {
  const doubled = [...clients, ...clients];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative overflow-x-hidden overflow-y-visible py-2">
      <div className={`flex w-max ${animationClass}`}>
        {doubled.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className={`flex items-center justify-center h-20 md:h-24 w-44 p-3 shrink-0 ${client.name === "Specialist" ? "mr-3 md:mr-4" : "mr-8 md:mr-10"}`}
          >
            <img
              src={client.logo}
              alt={`Logo ${client.name}`}
              className={`h-full w-full object-contain ${client.logoClassName ?? ""}`}
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
    <section className="pt-4 pb-16 md:pt-8 md:pb-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-8 mb-7 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground">
          Empresas que confiam e são clientes da <span className="text-primary">FBN</span>
        </h2>
      </div>

      <MarqueeRow clients={clientsRow1} direction="left" />
    </section>
  );
};

export default ClientsSection;
