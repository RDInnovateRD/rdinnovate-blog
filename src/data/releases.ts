// Release notes for RnD Tax Workbench, newest first, shown on /workbench/ under "Release notes".
// An entry with `published: false` is drafted but hidden: flip it to true in the same commit
// that bumps `workbench.version` in site.ts, so the notes never appear before the download does.

export interface ReleaseSection { heading: string; items: string[] }
export interface Release {
  version: string;
  date: string; // YYYY-MM-DD, Sydney
  published: boolean;
  summary: string;
  sections: ReleaseSection[];
  /** Things a user must do to claims started in an earlier version. */
  actions?: string[];
}

export const releases: Release[] = [
  {
    version: '1.3.0',
    date: '', // set on the day it is published,
    published: false,
    summary: 'The new gambling and tobacco exclusion, claims that follow the Act and ATO guidance more closely, an accounting standards section, and AI matched to the kind of work.',
    sections: [
      {
        heading: 'New law: gambling and tobacco related activities',
        items: [
          'For income years starting on or after 1 July 2025, an activity that relates to gambling, or to tobacco, vaping or nicotine products, is not an R&D activity (s 355-25(2)(i) and (j) ITAA 1997, Act No. 58 of 2026), unless it is done solely to learn how to minimise the harm.',
          'The Summary asks the question for every activity. Time on an excluded activity is taken out of salaries automatically.',
          'Companies with a substituted accounting period enter the first day of their income year; the rule follows that date.',
        ],
      },
      {
        heading: 'Claims follow the Act and ATO guidance more closely',
        items: [
          'Depreciation is only claimed for tangible assets (s 355-305(1)(b)). Amortisation of software, licences, patents, IP and capitalised development is left out.',
          'New "R&D amounts not in the profit and loss": capitalised R&D costs (claimed for software and other intangibles, not for tangible assets — s 355-225(1)(b)), expenses a grant was netted against, and lease payments for assets used in R&D.',
          'Leases (AASB 16): right-of-use depreciation and lease interest are left out and lease payments claimed instead, unless the company owns the asset.',
          'Fees for preparing the R&D registration, claim or tax return are never claimed.',
          'R&D intensity, grant clawbacks and feedstock follow the ATO\'s published formulas; hours worked come from payroll, never an assumed full-time year.',
          'A per-employee check of each person\'s R&D share, with an audit trail.',
          'Feedstock (s 355-445) is worked out per output: the lesser of the feedstock expenditure and the feedstock revenue. An output processed further before sale uses the market value of the marketable product times the ratio of the two production costs, and outputs from inputs claimed in earlier years are split across those years.',
          'Part-time staff: hours worked come from the timesheet when payroll has none.',
        ],
      },
      {
        heading: 'Your decisions',
        items: [
          'Where the law is unsettled, or the answer depends on facts only you know, the app shows the question, the guidance and the dollar effect of each option, and uses the cautious option until you choose. Each is labelled "Question of fact" or "Point the law does not settle".',
        ],
      },
      {
        heading: 'Accounting standards',
        items: [
          'The accounting policy for the R&D tax offset (AASB 120, AASB 112 or split), journal entries, tax effect and a draft disclosure note, in the app and in the Excel and PDF exports.',
          'A "Basis and method" working paper (APES 220) explaining how every figure was worked out.',
        ],
      },
      {
        heading: 'AI and credits',
        items: [
          'Accounting and tax judgement goes to Claude Opus with extended thinking once it is available to us on AWS in Australia; writing and reading files use Claude Sonnet. Processing stays in Australia.',
          'Ledger classification was rebuilt for accuracy and repeatability and tested on accounts it had never seen: 100% correct, no over-claims, on the latest test set.',
          'Credit packs and Sonnet prices are unchanged. A step answered by Opus costs 3.5 times the Sonnet price; you are charged for the model that actually answered.',
        ],
      },
      {
        heading: 'Fixes',
        items: [
          'Every tab saves as you type, including the Feedstock and Grants wizards.',
          'Creating a project with AI can also write its activity narratives, with the credit cost shown first.',
          'Confirmations and errors appear inside the app instead of system pop-ups.',
          'The top-up amount no longer jumps back to $29.',
          'The new-claim wizard no longer skips the Address step.',
          'Apportionment opens without an error on a new claim.',
        ],
      },
    ],
    actions: [
      '2025-26 and later claims: answer the gambling and tobacco question for every activity on the Summary. The "Not ready to lodge" notice clears once every activity is answered (and, for an excluded activity, once its other costs are entered and confirmed).',
      'Capitalised amounts entered before 1.3.0: choose what each was capitalised into on Company details. Until then it is not added to the claim.',
      'Check any figure that moved: item 7 no longer includes amortisation of intangibles, and lease and interest lines are treated as above.',
      'Feedstock: open each product on Feedstock & Grants and check the recalculated adjustment. For an output processed further before sale, enter the market value of the marketable product and the two production costs.',
    ],
  },
  {
    version: '1.2.4',
    date: '2026-10-13',
    published: true,
    summary: 'AI model upgrade ahead of the retirement of Claude Sonnet 4.5.',
    sections: [
      {
        heading: 'AI',
        items: [
          'Moves to the newer Claude Sonnet models (Sonnet 5.5 where available, otherwise Sonnet 4.6). Sonnet 4.5 is no longer used.',
          'R&D Tax Incentive AI processing stays in Australia, with no offshore fallback.',
          'Credit prices are unchanged. The AI usage log records which model handled each request.',
        ],
      },
    ],
  },
  {
    version: '1.2.3',
    date: '2026-09-29',
    published: true,
    summary: 'Calculation, screen and reliability fixes.',
    sections: [
      {
        heading: 'Claim calculations',
        items: [
          'Salaries use each employee\'s own hours and payroll superannuation everywhere; the claim average R&D % is weighted by salary.',
          'Feedstock (Subdivision 355-H) and grant clawback (Subdivision 355-G) flow through to Part B, the schedule and the exports.',
          'Associates (s 355-480): only the amount paid in the income year is claimed.',
          'Overseas contractors are only counted where there is an overseas finding.',
        ],
      },
      {
        heading: 'Screens and reliability',
        items: [
          'Step numbers and Back/Next buttons match the sidebar; manual classifications survive a re-upload.',
          'Closing the app abruptly also stops its background server and database.',
          'The database starts without downloading anything on first launch.',
        ],
      },
    ],
  },
  {
    version: '1.2.0',
    date: '2026-09-24',
    published: true,
    summary: 'In-app updates and one calculation engine for the whole claim.',
    sections: [
      {
        heading: 'What\'s new',
        items: [
          'In-app updates: new versions download in the background; click the update bar to install.',
          'The Summary, Schedules, exports and compliance check all use the same R&D expenditure figures.',
          'Upload, timesheet, narrative and apportionment fixes; Apple silicon database engine bundled.',
        ],
      },
    ],
  },
];
