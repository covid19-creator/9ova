import { AISuggestions } from '@/components/ai/ai-suggestions';

export function AISuggestionsSection() {
  return (
    <section id="ai-suggestions" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">AI-Powered Insights</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Tailored For Your Success
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Leverage the power of AI to uncover personalized suggestions and ideas that can propel your project forward. Here’s what our AI thinks you might find interesting:
          </p>
        </div>
        <AISuggestions />
      </div>
    </section>
  );
}
