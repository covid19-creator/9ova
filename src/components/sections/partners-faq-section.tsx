'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const faqItems = [
  {
    question: "Where do I get started?",
    answer: "Getting started is easy! Simply reach out to us through our mail with details about your project, and we'll schedule a consultation to discuss your needs and how we can help.",
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

export function FaqSection() {
  const defaultOpenFaq = faqItems.find((item) => item.defaultOpen)?.question;
  const sectionRef = useIntersectionObserver();

  return (
    <section ref={sectionRef} className="w-full pb-16 md:pb-24 lg:pb-32 bg-background flex justify-center">
      <div className="w-[85%] space-y-16">
        {/* FAQ Section */}
        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">FAQ</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Some common questions and answers
          </p>
          <Accordion
            type="single"
            collapsible
            className="w-full animate-in fade-in-0 duration-700"
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
