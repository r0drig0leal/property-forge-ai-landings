import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How is PropertyForge different from Zillow or Redfin?",
      answer: "Zillow shows listings. We show intelligence—risk, ROI, and hidden costs they don't calculate. PropertyForge analyzes 100+ data points from government APIs to reveal deal-breakers before they cost you money.",
    },
    {
      question: "Where do the data and scores come from?",
      answer: "Government APIs: FEMA, HUD, Census, NOAA + county-level records. All data is automated and updated daily to ensure accuracy.",
    },
    {
      question: "Can I use it outside Florida?",
      answer: "Yes—launching Orlando-first with plans for statewide Florida coverage. Nationwide API available. Custom rollout on request for institutional clients.",
    },
    {
      question: "Does it integrate with my CRM?",
      answer: "Yes—REST API available. Works seamlessly with Salesforce, DealMachine, or any custom system. Full API documentation provided.",
    },
    {
      question: "Is this for investors, brokers, or homeowners?",
      answer: "All three. Each gets a tailored report to support smarter decisions. Individual investors get actionable insights, brokers get client-ready reports, and institutions get bulk API access.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about PropertyForge AI
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
