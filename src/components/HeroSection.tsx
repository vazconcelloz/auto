import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario-estudo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-primary">
      <div className="container px-4 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Video Side */}
          <div className="relative rounded-xl overflow-hidden h-52 md:h-64 lg:h-72 bg-primary-foreground/10">
            <img
              src={heroBg}
              alt="Planos de saúde"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-primary-foreground/20 blur-md animate-pulse" />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-primary-foreground/50 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground text-primary flex items-center justify-center shadow-lg animate-pulse">
                <Play className="h-7 w-7 fill-primary" />
              </div>
            </div>
            <p className="absolute bottom-4 left-4 right-4 text-center text-primary-foreground font-heading font-bold text-lg md:text-xl">
              Planos de saúde não são todos iguais
            </p>
          </div>

          {/* CTA Side */}
          <div className="text-primary-foreground text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
              O Plano de saúde
              <br />
              ideal para
              <br />
              <span className="block text-primary-foreground/90">
                <strong>sua empresa</strong>
              </span>
            </h1>

            <p className="mt-4 text-primary-foreground/85 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Mais de 1.200 empresas já encontraram o plano ideal
              <br />
              com nossos estudos personalizados.
            </p>

            <div className="mt-4 space-y-3 max-w-sm mx-auto md:mx-0">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="w-full justify-between bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-heading font-bold text-base h-14 shadow-lg"
              >
                <span>Realizar seu Estudo</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
