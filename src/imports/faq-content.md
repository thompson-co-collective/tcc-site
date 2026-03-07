{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does an employer brand consultant do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An employer brand consultant builds the strategic foundation that makes talent attraction work..."
      }
    }
  ]
}
Repeat the Question/Answer pattern for all eight questions. This is the single highest-impact structured data implementation for AEO — FAQ schema is consistently pulled into AI Overviews, Google featured snippets, and generative engine responses.
Question headings must be verbatim in the HTML H3 tags — AI systems match question headings to natural language queries. Do not abbreviate or reword headings in the markup.
First sentence of each answer is the citation sentence — AI systems pull the first declarative sentence as the standalone answer. Every answer above opens with a direct, complete response to the question. Do not reorder paragraphs.
Section anchor: Add id="faq" to the FAQ section wrapper. Internal links from other pages can reference /#faq as a destination.

Design direction and section heading next — or do you want to review the copy first?design direction The Questions worth asking as header and full prompt for figma make3:16 PMSynthesized design direction and Figma prompt for FAQ sectionSynthesized design direction and Figma prompt for FAQ sectionThe user wants design direction and a full Figma Make prompt for the FAQ section with "The questions worth asking." as the header.DoneDESIGN DIRECTION
Section register: Clean, functional, editorial. This section is the most text-dense on the homepage — the design needs to get out of the way and let the content work. No decorative elements, no icons, no cards. Typography does all the heavy lifting.
Background: White — same as What We Do. The FAQ sits between the Proof section (light gray) and the Bottom CTA (dark navy). White creates a clean visual breath before the dark close.
Section heading: "The questions worth asking." — editorial serif, dark navy, centered, display scale. Period is intentional — it's a declarative statement, not a label. Same heading register as "Work that holds up where it matters." on Capabilities.
Eyebrow: COMMON QUESTIONS — teal, small caps, tracked wide, centered. Sits above the heading with consistent eyebrow spacing used throughout the site.
Subhead beneath heading: One quiet line in italic Georgia, muted gray, centered — "Straight answers. No deflection." — sets the tone before the first question opens.
Layout: Two-column accordion grid on desktop. Four questions left column, four questions right column. Equal width columns. 48px gap between columns. Single column stacked on mobile — all eight questions in sequence.
Accordion behavior: Questions closed by default. Click to expand. One question can be open at a time — opening a new question closes the previous. Clean and focused — prevents the section from feeling like a wall of text on load.
Question styling: Bold Georgia, dark navy, 17px. Full width of the column. Teal plus/minus indicator on the right edge — + when closed, − when expanded. The entire question row is clickable. 24px padding top and bottom on each question row. A very light gray border rule (#EEEEEE, 1px) beneath each question row.
Answer styling: Regular Arial, dark navy, 15px, line height 1.7. Generous padding — 20px top, 24px bottom, 0 left (flush with question text), 32px right. Answer fades in on expand — opacity 0 to 1 at 200ms, slight downward translate (4px) — consistent with the micro-interaction register established in the Market Reality cards.
Keyword phrases within answers: No special styling — do not bold or highlight keyword phrases. The SEO value is in the text itself, not the visual treatment. Bold text in FAQ answers creates a scanning pattern that competes with the question headings.
Column distribution:
Left column: Questions 1, 2, 3, 4
Right column: Questions 5, 6, 7, 8
Bottom of section: 64px space below the last question row before the next section begins. No CTA in this section — the Bottom CTA section immediately follows and carries that weight.
No ampersand motif here. Same reasoning as the Proof section — evidence-led, functional content. The ampersand is reserved for brand-expressive moments.

FIGMA MAKE PROMPT — FULL DETAILS
"Build a FAQ accordion section for the homepage. White background (#FFFFFF). Section padding: 96px top, 96px bottom, 80px left and right on desktop.
Section header — centered:
Eyebrow: 'COMMON QUESTIONS' in teal (#0D7377), bold Arial, 11px, all caps, letter-spacing 0.12em. 24px gap below eyebrow.
Heading: 'The questions worth asking.' in dark navy (#0A1628), Georgia bold, 44px, centered. The period is part of the heading — do not remove it. 16px gap below heading.
Subhead: 'Straight answers. No deflection.' in italic Georgia, 16px, muted gray (#888888), centered. 64px gap between subhead and the accordion grid below.
Accordion grid:
Two equal columns on desktop, 48px gap between columns. Single column on mobile. Left column contains questions 1–4. Right column contains questions 5–8.
All questions closed by default. One open at a time — opening a new question closes the previous.
Each accordion row:
Full column width. 1px bottom border rule in #EEEEEE. 24px padding top and bottom.
Question text: Georgia bold, dark navy (#0A1628), 17px. Left-aligned. Occupies full row width minus the indicator.
Indicator: teal (#0D7377), 20px, right-aligned. Shows + when closed, − when open. Transitions between states at 200ms.
Entire row is clickable — not just the text or indicator.
Hover state on closed row: question text transitions from dark navy (#0A1628) to teal (#0D7377) at 140ms cubic-bezier(0.25, 0.1, 0.25, 1).
Answer panel (expanded state):
Background: white. No border, no background fill change.
Answer text: Arial regular, dark navy (#0A1628), 15px, line height 1.7.
Padding: 20px top, 24px bottom, 0px left (flush with question), 32px right.
Expand animation: opacity 0 to 1, translateY 4px to 0, duration 200ms, easing cubic-bezier(0.25, 0.1, 0.25, 1).
Collapse animation: same in reverse, 160ms.
Question and answer content — exact copy:
LEFT COLUMN:
Row 1:
Question: 'What does an employer brand consultant do?'
Answer: 'An employer brand consultant builds the strategic foundation that makes talent attraction work — aligning your employee value proposition, recruitment marketing, and candidate experience so every touchpoint tells a consistent, credible story. At Thompson & Co Collective, that means more than recommendations. We build operating systems: EVP architecture, messaging frameworks, channel governance, and proof structures that hold up in search, in AI-assisted candidate research, and in the room with leadership. The work is grounded in a diagnostic audit before any strategy is defined — so every recommendation is based on your current reality, not assumptions.'
Row 2:
Question: 'What is an employee value proposition and why does it matter for hiring?'
Answer: 'An employee value proposition (EVP) is the structured promise an organization makes to current and prospective employees — the sum of what you offer in exchange for their skills, time, and commitment. A well-developed EVP is the strategic core of employer brand — it defines what makes your organization a distinct place to work and provides the foundation for every piece of candidate-facing content, job ad, and recruitment marketing campaign. When an EVP is vague, unverifiable, or inconsistent across channels, it creates a credibility gap that costs organizations qualified applicants and offer acceptances. We develop EVPs grounded in evidence — so the claims you make are claims you can stand behind.'
Row 3:
Question: 'Who needs employer brand strategy and recruitment marketing services?'
Answer: 'Any organization where talent attraction directly affects business outcomes — and where current hiring results suggest the existing approach is not working efficiently. Our clients range from growth-stage companies building their first structured employer brand to established enterprises whose narrative has drifted and needs governance. The common signal is the same across all of them: leadership that recognizes the connection between employer brand clarity, recruitment marketing performance, and bottom-line hiring costs — and wants the work to be accountable to measurable outcomes, not just deliverables produced.'
Row 4:
Question: 'How do you price employer brand and recruitment marketing engagements?'
Answer: 'Most employer brand strategy and recruitment marketing engagements are structured as fixed-fee projects with defined scope, deliverables, and timelines — so you know exactly what you are buying before work begins. Ongoing recruitment marketing optimization, media governance, and advisory support are available on a fractional retainer basis for organizations that want sustained performance after the foundational work is complete. We recommend the right engagement model based on your goals, urgency, and where you are in the talent attraction maturity curve. The first conversation is a diagnosis — not a pitch.'
RIGHT COLUMN:
Row 5:
Question: 'Do you only work on employer brand, or do you cover the full recruitment marketing ecosystem?'
Answer: 'Employer brand strategy and EVP development are the foundation of our work — but in practice, effective talent attraction requires governing the full ecosystem. Thompson & Co Collective services extend across recruitment marketing campaign strategy and execution, media governance and vendor accountability, candidate experience design, careers page and job ad optimization, ATS tracking and attribution, and employer brand visibility in AI-assisted search through generative engine optimization (GEO) and answer engine optimization (AEO). We work wherever narrative consistency and strategic clarity have a direct impact on application volume, candidate quality, cost-per-hire, and offer acceptance rates.'
Row 6:
Question: 'What does your employer brand engagement process look like?'
Answer: 'Every engagement follows our four-phase methodology: Discover, Envision, Activate, and Measure and Optimize. The process begins with a comprehensive employer brand audit — establishing a baseline across narrative consistency, channel performance, candidate experience gaps, and AI search visibility before any strategy is defined. From that foundation we develop the EVP architecture, messaging framework, and channel strategy together. Activation follows with campaigns, content, and candidate experiences built to the benchmarks established in the strategy phase. Foundational employer brand engagements typically run eight to sixteen weeks. We stay accountable to outcomes after launch — not just to deliverables at completion.'
Row 7:
Question: 'How do you measure the success of employer brand and recruitment marketing work?'
Answer: 'We measure employer brand and recruitment marketing performance against the specific benchmarks established at the start of each engagement — not against generic industry averages. Key metrics include application volume and quality, conversion rates at each stage of the candidate funnel, cost-per-hire reduction, time-to-fill for priority roles, offer acceptance rates, and employer brand visibility across traditional search and AI-powered candidate research platforms. We report against those benchmarks in clear, leadership-ready summaries and use the data to decide what to optimize next. Success is measurable improvement in hiring outcomes — not a report delivered at project close.'
Row 8:
Question: 'What do you need from us to get started with employer brand or recruitment marketing work?'
Answer: 'Not much to begin a conversation. We will want to understand your current hiring challenges, where you believe the gaps are, and what success looks like for your leadership. If you have existing brand assets, recruitment marketing campaign data, EVP documentation, or prior audit work — bring it. If you do not have any of that yet, the free Talent Maturity Audit is a structured starting point that establishes your employer brand baseline in under five minutes. The first conversation is a diagnosis — we will tell you honestly what we see, where we think the highest-impact opportunities are, and whether Thompson & Co Collective is the right fit to address them.'
Mobile breakpoint (match existing site typography breakpoint):
Single column, all eight rows in sequence — rows 1 through 8 top to bottom. Full width accordion rows. Same question and answer styling. Section padding reduces to 64px top and bottom, 24px left and right. Heading reduces to 32px. Subhead reduces to 14px."

DEVELOPER NOTES
FAQ Schema markup — implement on this section at launch, not post-MVP:
json{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does an employer brand consultant do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An employer brand consultant builds the strategic foundation that makes talent attraction work — aligning your employee value proposition, recruitment marketing, and candidate experience so every touchpoint tells a consistent, credible story."
      }
    },
    {
      "@type": "Question",
      "name": "What is an employee value proposition and why does it matter for hiring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An employee value proposition (EVP) is the structured promise an organization makes to current and prospective employees — the sum of what you offer in exchange for their skills, time, and commitment."
      }
    },
    {
      "@type": "Question",
      "name": "Who needs employer brand strategy and recruitment marketing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any organization where talent attraction directly affects business outcomes — and where current hiring results suggest the existing approach is not working efficiently."
      }
    },
    {
      "@type": "Question",
      "name": "How do you price employer brand and recruitment marketing engagements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most employer brand strategy and recruitment marketing engagements are structured as fixed-fee projects with defined scope, deliverables, and timelines — so you know exactly what you are buying before work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Do you only work on employer brand, or do you cover the full recruitment marketing ecosystem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Employer brand strategy and EVP development are the foundation of our work — but in practice, effective talent attraction requires governing the full ecosystem."
      }
    },
    {
      "@type": "Question",
      "name": "What does your employer brand engagement process look like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every engagement follows our four-phase methodology: Discover, Envision, Activate, and Measure and Optimize."
      }
    },
    {
      "@type": "Question",
      "name": "How do you measure the success of employer brand and recruitment marketing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We measure employer brand and recruitment marketing performance against the specific benchmarks established at the start of each engagement — not against generic industry averages."
      }
    },
    {
      "@type": "Question",
      "name": "What do you need from us to get started with employer brand or recruitment marketing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not much to begin a conversation. We will want to understand your current hiring challenges, where you believe the gaps are, and what success looks like for your leadership."
      }
    }
  ]
}
Section anchor: Add id="faq" to the FAQ section wrapper for internal linking.
Accordion accessibility:
Each question button needs aria-expanded="false" when closed, aria-expanded="true" when open. Answer panel needs aria-hidden="true" when collapsed, aria-hidden="false" when expanded. Associate each button with its answer panel via aria-controls. Keyboard navigation — Enter and Space open and close accordion rows. Focus moves to the opened answer panel on expand.
Question headings in HTML: Each question must be wrapped in an H3 tag inside the button element — this is what search engines and AI systems read for FAQ schema matching. Do not use div or span for question text.
Analytics tracking:
javascriptevent: 'faq_question_opened'
properties: { question: '[question text]', position: [1-8] }
Track which questions get opened most — this is a direct signal of what objections visitors have before reaching out.