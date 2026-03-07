import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Do you work under our brand or as Thompson & Co Collective?",
    answer: "You can decide. We default to your brand — inside your tools, aligned to your quality standards, invisible to the client if that's what the relationship requires. When credible expert presence adds value, we can show up as a named specialist under your banner. Your account, your call.",
  },
  {
    question: "How do you plug into our workflow and tools?",
    answer: "Smoothly. We adapt to how your team operates — communication cadence, project management, reporting formats, platform access. The goal is to add senior capacity without adding coordination overhead. You won't be managing us; you'll be working with us.",
  },
  {
    question: "What's the ramp time?",
    answer: "We work to meet you where you are. Most partners are in motion within 7–10 days — sooner when the situation calls for it. We start with a focused onboarding to understand your playbook and priorities — then we move. No lengthy discovery phases, no slide decks before work begins. Just clarity and momentum.",
  },
  {
    question: "Can you be client-facing when needed?",
    answer: "Yes. We're comfortable in the room — client meetings, workshops, executive presentations — while equally content behind the scenes exclusively. You decide the level of visibility based on what the engagement needs.",
  },
  {
    question: "How do you protect quality and prevent delivery drift?",
    answer: "We follow your standards, not ours. You set the playbook, approve the work, and own the client relationship. From day one, we align on scope and ownership — what's ours to drive, what requires your input, and where the handoffs live. That clarity is what prevents drift. We show up as committed partners, not an open-ended resource. Boundaries protect the work. They protect the relationship too.",
  },
  {
    question: "What types of accounts are the best fit for this model?",
    answer: "The best fit is an account where the relationship is solid but the delivery bandwidth isn't. The work is strategic, the client has real expectations, and you need someone who can operate at that level without hand-holding. If you're protecting a relationship and need the execution to match, that's exactly where we work best.",
  },
  {
    question: "How is partner support scoped and priced?",
    answer: "Every engagement is scoped to the account — we don't sell packages. After a brief partner conversation, we'll recommend a model that fits the work, the timeline, and your margin requirements. Pricing is straightforward and built around scope, not retainer bloat.",
  },
  {
    question: "What's the best next step to get started?",
    answer: "Book a 30-minute conversation. We'll talk through where you need capacity, what the work looks like, and whether this is the right fit — for both of us. No pitch. Just a clear path forward or an honest answer if it's not the right match.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section eyebrow */}
        <div 
          className="text-center mb-3"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(14,90,106,0.7)',
          }}
        >
          FAQs
        </div>

        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 
            className="mb-6 text-[#0A1220]"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-gray-600"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Clear answers to common questions about partner support and how we integrate with agencies.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-white hover:border-[#117C92] transition-colors"
            >
              <AccordionTrigger 
                className="text-left py-6 hover:no-underline"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: '#0A1220',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="pb-6 text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA under FAQ */}
        <div className="mt-12 pt-12 border-t border-gray-200 text-center">
          <p 
            className="text-gray-600 mb-6"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem' }}
          >
            Ready to see if we're a fit?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded text-white transition-all hover:shadow-xl hover:scale-105"
            style={{ 
              minHeight: '56px',
              fontSize: '1.0625rem',
              fontWeight: 600,
              fontFamily: 'var(--font-serif)',
              background: 'linear-gradient(180deg, var(--accentHero), var(--accentHero2))',
              boxShadow: '0 12px 34px rgba(17,124,146,.22)',
            }}
          >
            Book a Clarity Call
          </a>
        </div>
      </div>
    </section>
  );
}
