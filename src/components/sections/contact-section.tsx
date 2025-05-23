import { ContactForm } from '@/components/forms/contact-form';
import { Mail, MapPin, Building } from 'lucide-react';

export function ContactSection() {
  const companyEmail = "ranagaurav687@gmail.com";
  const companyName = "9ova Tech Solutions";

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-card to-background">
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Get in Touch</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or just want to learn more? We&apos;d love to hear from you. Reach out and let&apos;s start the conversation.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 animate-in fade-in-0 slide-in-from-left-10 duration-1000">
            <h3 className="text-2xl font-bold text-primary">Contact Information</h3>
            <div className="space-y-4 text-foreground/80">
              <div className="flex items-start space-x-3">
                <Building className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">{companyName}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${companyEmail}`} className="hover:text-primary transition-colors">
                    {companyEmail}
                  </a>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              We typically respond within 24-48 business hours. For urgent inquiries, please indicate in your message.
            </p>
          </div>
          <div className="animate-in fade-in-0 slide-in-from-right-10 duration-1000">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
