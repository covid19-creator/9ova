import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import {
  Code,
  Sparkles,
  SquareDot,
  LoaderCircle,
  CheckCircle2,
  IterationCcw,
  MessageCircle,
  LayoutGrid,
  PencilRuler,
  Layers3,
  PlusCircle,
  Briefcase,
  Headphones,
  Cpu,
  Rocket,
  Zap,
} from "lucide-react";
import Link from "next/link";

const EMAIL_ADDRESS = "ranagaurav687@gmail.com";
const mailto = (
  subject: string,
  body: string = "Hi, I'm interested in learning more."
) =>
  `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 bg-background flex justify-center"
    >
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[70%]">
        <div className="text-left mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Pricing
          </h2>
          <p className="max-w-[700px] text-left text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            We provide both fully coded solutions and WordPress/no-code apps,
            tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-12 md:mb-16">
          {" "}
          {/* Card 1: Landing Page */}
          <Card
            className="bg-card text-card-foreground rounded-xl shadow-lg flex flex-col p-6 md:p-8 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
            style={{ animationDelay: "100ms" }}
          >
            <CardHeader className="p-0 mb-4">
              <div className="flex justify-between items-start mb-3">
                <Code className="h-8 w-8 text-foreground" />
                <span className="text-xs text-muted-foreground font-medium">
                  ❖ modern
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium text-foreground">
                  Next.js Project
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-semibold text-foreground">
                  Landing Page
                </h3>
                <p className="text-2xl font-bold text-foreground">$899</p>
              </div>
              <CardDescription className="text-sm text-muted-foreground !mt-2">
                Single-page, high-conversion landing page—perfect for campaigns
                and product launches.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow space-y-2.5 text-sm">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Single page</span>
              </div>
              <div className="flex items-center">
                <PencilRuler className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Modern design</span>
              </div>
              <div className="flex items-center">
                <IterationCcw className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Multiple iterations
                </span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Direct communication
                </span>
              </div>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
              >
                <Link
                  href={mailto(
                    "Inquiry: Landing Page",
                    "Hi, I'm interested in the Landing Page package."
                  )}
                >
                  Get Started
                </Link>
              </Button>
            </CardFooter>
          </Card>
          {/* Card 2: Full Website */}
          <Card
            className="bg-card text-card-foreground rounded-xl shadow-lg flex flex-col p-6 md:p-8 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
            style={{ animationDelay: "250ms" }}
          >
            <CardHeader className="p-0 mb-4">
              <div className="flex justify-between items-start mb-3">
                <Cpu className="h-8 w-8 text-foreground" />
                <span className="text-xs text-muted-foreground font-medium">
                  ❖ advanced
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <SquareDot className="h-4 w-4 text-primary" />
                <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium text-foreground">
                  Full Stack
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-semibold text-foreground">
                  Full Website
                </h3>
                <p className="text-sm text-muted-foreground">
                  Starting at{" "}
                  <span className="text-2xl font-bold text-foreground">
                    $5K+
                  </span>
                </p>
              </div>
              <CardDescription className="text-sm text-muted-foreground !mt-2">
                Multi-page websites—WordPress, Next.js or no-code—scalable,
                SEO-optimized, and performance-driven.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow space-y-2.5 text-sm">
              <div className="flex items-center">
                <LayoutGrid className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Multiple pages</span>
              </div>
              <div className="flex items-center">
                <Layers3 className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Component library</span>
              </div>
              <div className="flex items-center">
                <Code className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Custom code</span>
              </div>
              <div className="flex items-center">
                <IterationCcw className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Multiple iterations
                </span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Direct communication
                </span>
              </div>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
              >
                <Link
                  href={mailto(
                    "Inquiry: Full Website",
                    "Hi, I'm interested in the Full Website package."
                  )}
                >
                  Get Started
                </Link>
              </Button>
            </CardFooter>
          </Card>
          {/* Card 3: Custom Application */}
          <Card
            className="bg-primary text-primary-foreground rounded-xl shadow-lg flex flex-col p-6 md:p-8 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
            style={{ animationDelay: "400ms" }}
          >
            <CardHeader className="p-0 mb-4">
              <div className="flex justify-between items-start mb-3">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex justify-between items-baseline mt-8 mb-3">
                <h3 className="text-2xl font-semibold">Custom Project</h3>
                <p className="text-sm text-primary-foreground/80">
                  Starting at{" "}
                  <span className="text-2xl font-bold text-primary-foreground">
                    $10K+
                  </span>
                </p>
              </div>
              <CardDescription className="text-sm text-primary-foreground/80 !mt-2">
                Bespoke applications—web, mobile or desktop—built with
                cutting-edge tech to fit your vision.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow space-y-3 text-sm">
              <div className="bg-primary-foreground/10 p-3 rounded-md text-sm flex items-center">
                <Cpu className="h-4 w-4 mr-2 text-primary-foreground/80 flex-shrink-0" />{" "}
                Next.js, React Native, Electron
              </div>
              <div className="flex items-center">
                <Rocket className="h-4 w-4 mr-2.5 text-primary-foreground/80 flex-shrink-0" />
                <span>Web & Desktop Apps</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2.5 text-primary-foreground/80 flex-shrink-0" />
                <span>Mobile Apps</span>
              </div>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button
                asChild
                variant="outline"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-md"
              >
                <Link
                  href={mailto(
                    "Inquiry: Custom Project",
                    "Hi, I'm interested in a Custom project."
                  )}
                >
                  Request Quote
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Web Design */}
          <Card className="bg-muted text-foreground rounded-xl shadow-lg flex flex-col h-full p-6 md:p-8 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-between mb-3">
                <Layers3 className="h-8 w-8 text-foreground" />
                <span className="text-xs text-muted-foreground font-medium">
                  ❖ Design only
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Web Design
              </h3>
              <CardDescription className="text-sm text-muted-foreground !mt-2">
                Already have a dev team or building with no-code tools? We can
                design your entire site beautifully and hand over the files.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 text-sm text-muted-foreground">
              <p>
                Includes high-fidelity Figma files, responsive layouts, and
                design assets. Starting at <strong>$2K+</strong>.
              </p>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
              >
                <Link
                  href={mailto(
                    "Inquiry: Web Design Only",
                    "Hi, I'm interested in design-only services."
                  )}
                >
                  Get a Quote
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Still unsure or on a tight budget */}
          <Card className="bg-primary text-primary-foreground rounded-xl shadow-lg p-6 md:p-8 flex flex-col animate-in fade-in-0 slide-in-from-bottom-5 duration-500 lg:col-span-2">
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              <div className="flex items-center flex-shrink-0 mr-4">
                <Headphones className="h-10 w-10 text-primary-foreground/80" />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Still unsure or on a tight budget?
                </h3>
                <p className="text-sm text-primary-foreground/80 max-w-3xl leading-relaxed mb-4">
                  We're flexible! Whether you'd prefer a quick call or a fully
                  async discussion over email, we're here to help. Let us know
                  what works best for you and we'll tailor the approach
                  accordingly.
                </p>

                <blockquote className="text-sm italic text-primary-foreground/80 border-l-4 border-primary-foreground/50 pl-4 mb-6 max-w-3xl">
                  “I felt lost at first and wasn’t sure what I needed. But the
                  team listened, explained everything clearly, and helped me
                  pick the right option for my budget and goals — no rush, no
                  hassle. Made the whole thing way less stressful.”
                </blockquote>

                <ul className="flex flex-wrap gap-4 text-xs text-primary-foreground/80 max-w-3xl">
                  <li className="flex items-center space-x-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Fast response</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <IterationCcw className="h-4 w-4" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>Personalized support</span>
                  </li>
                </ul>

                {/* Button container */}
                <div className="mt-6 self-start w-full sm:w-auto">
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 border border-primary-foreground/30 shadow-sm"
                  >
                    <Link
                      href={mailto(
                        "General Inquiry: Need Help Deciding",
                        "Hi, I'm not sure which option is right for me or I have a limited budget. Can you help?"
                      )}
                    >
                      Send us an email
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          
        </div> */}
    </section>
  );
}
