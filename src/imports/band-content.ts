const BAND_CONTENT: Record<Band, {
  range: string;
  meaning: string;
  priorities: string[];
  next3: string[];
}> = {
  Nascent: {
    range: '0–7',
    meaning: 'Hiring is happening, but the system is informal. Outcomes feel inconsistent and hard to diagnose.',
    priorities: [
      'Establish an EVP-lite: 3–5 defensible claims + proof.',
      'Fix conversion choke points (job clarity + apply flow) before adding spend.',
      'Stand up one always-on channel with a weekly publishing cadence.',
    ],
    next3: [
      'Define “qualified” for 1–2 mission-critical role families (beyond requirements).',
      'Set 2–3 baseline metrics (apply completion, time-to-decision, offer acceptance) and review monthly.',
      'Standardize candidate communication expectations (SLA + templates) to reduce drop-off.',
    ],
  },
  Developing: {
    range: '8–14',
    meaning: 'Pieces exist, but consistency and accountability are weak across channels and leaders.',
    priorities: [
      'Govern narrative across recruiters + hiring leaders; standardize job ad claims.',
      'Implement clean baselines by role family (source quality + conversion).',
      'Turn EVP themes into proof-led assets (specificity beats "culture language").',
    ],
    next3: [
      'Build a simple content cadence (weekly/biweekly) tied to priority roles.',
      'Identify the top 2 friction points (apply steps, screening lag, scheduling) and fix them.',
      'Create a lightweight proof map (claims → evidence → where it lives on-site/ads/AI-visible content).',
    ],
  },
  Aligned: {
    range: '15–20',
    meaning: 'You have a coherent foundation; performance is limited by optimization loops and scale discipline.',
    priorities: [
      'Optimize funnel: apply starts→completes, time-to-decision, offer→accept.',
      'Scale distribution: coordinate paid/owned/earned to reduce channel waste.',
      'Tighten AI/search/review footprint to reduce narrative drift.',
    ],
    next3: [
      'Segment by role family (2–3 variants) for message + channel strategy.',
      'Add quarterly governance checkpoints (job ads, landing pages, reviews, EVP proof).',
      'Enable hiring leaders with a simple talk track + proof points to keep the story consistent “in the room.”',
    ],
  },
  Optimized: {
    range: '21–26',
    meaning: 'Strong governance + measurement. The opportunity is scale, resilience, and defensibility.',
    priorities: [
      'Expand role-family segmentation (message + channel strategy).',
      'Operationalize narrative defense (monitoring + response playbook).',
      'Run a quarterly improvement cadence with benchmarks and decisions.',
    ],
    next3: [
      'Build a signal-monitoring routine (reviews, search, AI summaries, candidate feedback) with owner + SLA.',
      'Introduce test-and-learn discipline (message/creative tests tied to conversion + quality, not clicks).',
      'Create a 1-page quarterly readout (what moved, why, what’s next) for exec visibility.',
    ],
  },
};