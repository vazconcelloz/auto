import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como funciona o estudo da FBN?",
    answer: `O Estudo FBN é uma análise feita por especialistas para identificar o seguro automotivo mais adequado para o seu perfil.
    Avaliamos o tipo de veículo, rotina de uso, região de circulação e coberturas necessárias. Com base nisso, apresentamos opções com melhor equilíbrio entre proteção e investimento.`,
  },
  {
    question: "Quais informações são necessárias para realizar o estudo do seguro automotivo?",
    answer:
      "Normalmente solicitamos dados básicos do condutor principal, informações do veículo e histórico de uso. Esses dados ajudam a montar uma estudo preciso e alinhado ao seu risco.",
  },
  {
    question: "O seguro automotivo tem carência?",
    answer:
      "Em geral, o seguro passa a valer conforme as regras da proposta e a confirmação de vigência da seguradora. A equipe da FBN orienta cada etapa para que você saiba exatamente quando sua cobertura inicia.",
  },
  {
    question: "Posso personalizar as coberturas do meu seguro?",
    answer:
      "Sim. É possível ajustar franquia, cobertura para terceiros, vidros, carro reserva, assistência 24h e outras proteções adicionais conforme sua necessidade.",
  },
  {
    question: "Como faço para iniciar meu estudo?",
    answer:
      "Clique em [CTA_ESTUDO] e envie suas informações básicas. A equipe da FBN entra em contato para montar a melhor solução de seguro automotivo.",
  },
];

const FAQSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario-estudo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-8 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-4">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Tire suas dúvidas antes de solicitar seu estudo.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {faq.answer.split("[CTA_ESTUDO]").map((part, partIndex, allParts) => (
                  <span key={`${faq.question}-part-${partIndex}`}>
                    <span className="whitespace-pre-line">{part}</span>
                    {partIndex < allParts.length - 1 && (
                      <Button variant="link" className="h-auto p-0 align-baseline font-semibold" onClick={scrollToForm}>
                        Realizar Estudo
                      </Button>
                    )}
                  </span>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
