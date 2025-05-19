import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CloudDrizzle, Triangle, Sparkles, PlusCircle } from "lucide-react";

const partnerIcons = [
  { icon: CloudDrizzle, color: "text-blue-500", bgColor: "bg-blue-100" },
  { icon: Triangle, color: "text-black", bgColor: "bg-neutral-800", iconFill: "fill-current" },
  { icon: Sparkles, color: "text-teal-500", bgColor: "bg-teal-100" },
  { icon: PlusCircle, color: "text-gray-500", bgColor: "bg-gray-200" },
];

const faqItems = [
  {
    question: "Where do I get started?",
    answer: "Getting started is easy! Simply reach out to us through our contact page with details about your project, and we'll schedule a consultation to discuss your needs and how we can help.",
  },
  {
    question: "How does it work?",
    answer: "Our process typically involves an initial consultation, proposal, design mockups, development, feedback iterations, and final delivery. We maintain clear communication throughout each stage.",
  },
  {
    question: "What if I don't like the design?",
    answer: "We value your satisfaction. Our design process includes iterative feedback rounds to ensure the design aligns with your vision. We'll work with you to make revisions until you're happy.",
  },
  {
    question: "I already have a Figma project, can you develop it?",
    answer: "Absolutely! We can take your existing Figma designs and bring them to life with high-quality development, ensuring pixel-perfect implementation and functionality.",
  },
  {
    question: "Can you do mobile apps?",
    answer: "Yes, we design and develop mobile applications for both iOS and Android platforms, focusing on user experience and performance.",
  },
  {
    question: "How about deliverables?",
    answer: "Deliverables vary by project but typically include all source files, design assets, and a fully functional website or application deployed to your preferred environment.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Due to the nature of our work, spending tens of hours to deliver exceptional results, we cannot offer refunds, but rest assured that we will do our best to make sure you are satisfied with your end-result. We are passionate about what we're doing and seeing our customers happy only makes us deliver over expectations.",
    defaultOpen: true,
  },
];

export function PartnersFaqSection() {
  const defaultOpenFaq = faqItems.find((item) => item.defaultOpen)?.question;

  return (
    <section className="w-full pb-16 md:pb-24 lg:pb-32 bg-background flex justify-center">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[70%] space-y-16">
        {/* Partners Section */}
        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Partners
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            We're honored to partner with innovative brands and creatives that trust in our design expertise.
          </p>
          <div className="flex flex-wrap gap-4">
            {partnerIcons.map((partner, index) => {
              const isLast = index === partnerIcons.length - 1;

              if (isLast) {
                return (
                  <a
                    key={index}
                    href="mailto:ranagaurav687@gmail.com?subject=Becoming%20a%20Partner&body=Hi, I'm interested in partnering with you."
                    className={`group relative flex items-center justify-start w-16 hover:w-36 h-16 rounded-lg ${partner.bgColor} p-3 shadow-sm transition-all duration-300 overflow-hidden`}
                  >
                    <div className="flex items-center gap-2">
                      <partner.icon
                        className={`h-8 w-8 ${partner.color} ${partner.iconFill || ""} transition-transform duration-300 group-hover:scale-105`}
                      />
                      <span
                        className="text-sm font-medium text-foreground opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap"
                      >
                        Be Next
                      </span>
                    </div>
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className={`flex items-center justify-center w-16 h-16 rounded-lg ${partner.bgColor} p-3 shadow-sm animate-in fade-in-0 duration-500`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <partner.icon className={`h-8 w-8 ${partner.color} ${partner.iconFill || ""}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-300">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">FAQ</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Some common questions and answers
          </p>
          <Accordion
            type="single"
            collapsible
            className="w-full animate-in fade-in-0 duration-700 delay-500"
            defaultValue={defaultOpenFaq}
          >
            {faqItems.map((item) => (
              <AccordionItem value={item.question} key={item.question}>
                <AccordionTrigger className="text-left hover:no-underline text-foreground font-medium text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
