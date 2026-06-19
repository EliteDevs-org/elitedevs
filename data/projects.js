window.PROJECTS = [
  {
    id: "zoande-brokersim",
    title: "BrokerSIM",
    owner: "Dima & Pablo",
    repoUrl: "https://github.com/Zoande/BrokerSIM",
    localPath: "repos/Zoande__BrokerSIM",
    tech: ["TypeScript", "Vite", "Browser Game"],
    stage: "Playable prototype",
    summary:
      "Hybrid broker roleplay prototype with a 2D deal desk and a 3D warehouse flow for sourcing, negotiating, and dispatch.",
    details: [
      "Daily cycle with supplier offers, customer requests, and deal outcomes.",
      "Warehouse mode with keyboard controls for package handling.",
      "README includes clear next build targets around persistence and negotiation depth."
    ],
    status:
      "Runs as a Vite app. Core loop is present; deeper systems like long-term progression are still in-progress.",
    deliverableSteps: [
      "Lock a stable gameplay loop for one full in-game day.",
      "Persist inventory/cash/reputation to local storage.",
      "Add balancing pass and issue tracking for next milestone."
    ]
  },
  {
    id: "dh-polymarket-bot",
    title: "Polymarket-Bot",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/Polymarket-Bot",
    localPath: "repos/DH4410__Polymarket-Bot",
    tech: ["React", "Vite", "JavaScript"],
    stage: "Feature-rich frontend prototype",
    summary:
      "Trading assistant-style frontend with market scanning, signal logic, news sentiment hooks, and portfolio-facing utilities.",
    details: [
      "Large App.jsx implements API fetch layers and decision heuristics.",
      "Includes CORS proxy fallback strategy and multi-source data pulls.",
      "Project is code-heavy and suitable for modularization into smaller services."
    ],
    status:
      "Substantial logic exists in one large file; functionality is broad but maintainability should be improved.",
    deliverableSteps: [
      "Split API, strategy, and UI concerns into separate modules.",
      "Move keys/secrets to environment variables only.",
      "Add deterministic tests for signal-confidence math."
    ]
  },
  {
    id: "dh-typing-platformer",
    title: "typing-platformer",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/typing-platformer",
    localPath: "repos/DH4410__typing-platformer",
    tech: ["Next.js", "TypeScript", "Canvas"],
    stage: "Playable concept",
    summary:
      "Typing-based action runner where typed commands control jump/crouch/sprint and influence score/combo.",
    details: [
      "Canvas loop and keyboard handling are in place.",
      "Tutorial and restart behavior already implemented.",
      "Several systems are still marked as stubs for future expansion."
    ],
    status:
      "Good gameplay direction with clear mechanics; not yet fully production-tuned.",
    deliverableSteps: [
      "Replace placeholder obstacle logic with full word/action generation.",
      "Complete collision/game-over balancing.",
      "Add mobile-friendly input mode."
    ]
  },
  {
    id: "dh-citybuilder",
    title: "CityBuilder",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/CityBuilder",
    localPath: "repos/DH4410__CityBuilder",
    tech: ["Vanilla JS", "HTML5 Canvas", "CSS"],
    stage: "Browser prototype",
    summary:
      "Megacity simulation prototype featuring terrain generation, building categories, and camera controls.",
    details: [
      "Plain HTML/CSS/JS stack keeps it lightweight.",
      "README outlines economy/service systems and controls.",
      "Good candidate for quick static deployment demos."
    ],
    status:
      "Straightforward static project; easiest to package as a standalone playable demo.",
    deliverableSteps: [
      "Add save/load state in local storage.",
      "Surface in-game onboarding for controls.",
      "Create performance profile presets for low-end devices."
    ]
  },
  {
    id: "dh-task-sorter-app",
    title: "task-sorter-app",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/task-sorter-app",
    localPath: "repos/DH4410__task-sorter-app",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    stage: "Advanced UI prototype",
    summary:
      "Planly-style productivity app with calendar, routines, file upload analysis flow, and task scheduling.",
    details: [
      "App shell and view system are already structured.",
      "Upload flow integrates API-based assignment analysis endpoint.",
      "Rich component set indicates strong design-system foundation."
    ],
    status:
      "Frontend is strong; backend/API integration hardening and deployment wiring are next for production readiness.",
    deliverableSteps: [
      "Implement robust /api/analyze processing with validation.",
      "Add persisted auth/user model if multi-user is required.",
      "Add end-to-end tests for scheduling flow."
    ]
  },
  {
    id: "dh-isrlo-ibdp-subject",
    title: "ISRLO-IBDP-subject",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/ISRLO-IBDP-subject",
    localPath: "repos/DH4410__ISRLO-IBDP-subject",
    tech: ["HTML", "CSS", "Vanilla JS"],
    stage: "Static tool",
    summary:
      "Interactive IB Diploma subject selector with clash rules, grouped subjects, and visual validation summaries.",
    details: [
      "Single-page static app with polished UI styling.",
      "Designed for practical subject-combination planning.",
      "Great fit for direct static hosting."
    ],
    status:
      "Already close to deployable static utility.",
    deliverableSteps: [
      "Add export/share of chosen subject package.",
      "Persist selection state in local storage.",
      "Add keyboard navigation accessibility pass."
    ]
  },
  {
    id: "dh-sticky-notes-app",
    title: "sticky-notes-app",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/sticky-notes-app",
    localPath: "repos/DH4410__sticky-notes-app",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    stage: "Collaborative app prototype",
    summary:
      "Collaborative sticky notes board with color-coded notes, optional lock codes, and styled board interface.",
    details: [
      "Server actions and DB table initialization hooks are present.",
      "Board UI and note creation panel are fully styled.",
      "Likely needs production DB/env setup for hosted use."
    ],
    status:
      "Feature-rich frontend with server-side dependencies that need deployment-ready data configuration.",
    deliverableSteps: [
      "Switch to managed database provider for Vercel deployment.",
      "Add note ownership/auth boundaries.",
      "Implement rate-limiting and content validation."
    ]
  },
  {
    id: "dh-studymaster",
    title: "studymaster",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/studymaster",
    localPath: "repos/DH4410__studymaster",
    tech: ["React", "Vite", "Tailwind"],
    stage: "Multi-page frontend",
    summary:
      "Study efficiency app frontend with router-based pages for dashboard, practice, pricing, analytics, and support chat widget.",
    details: [
      "Router skeleton and key pages/components are wired.",
      "Visual and navigation structure are established.",
      "Can be matured with real data integrations."
    ],
    status:
      "Usable frontend shell with clear expansion path into a full product.",
    deliverableSteps: [
      "Connect dashboards to real analytics/state.",
      "Add auth and account-level persistence.",
      "Profile bundle and lazy-load heavier views."
    ]
  },
  {
    id: "dh-swapspot",
    title: "Swapspot",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/Swapspot",
    localPath: "repos/DH4410__Swapspot",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    stage: "Playable game prototype",
    summary:
      "Memory/swap game with difficulty progression, rounds, lives, scoring, settings, and audio feedback systems.",
    details: [
      "Typed game state model and round verification flow are in place.",
      "Includes dark mode and modal overlays.",
      "Code comments indicate iterative fixes and UI improvements."
    ],
    status:
      "Most complete game architecture among the game repos; good candidate for polishing into a standout demo.",
    deliverableSteps: [
      "Add session persistence and leaderboard storage.",
      "Finalize balancing across higher difficulty tiers.",
      "Add touch-first controls and QA for mobile."
    ]
  },
  {
    id: "dima-tab-sorter-pro",
    title: "Tab Sorter Pro",
    owner: "Dima",
    extUrl: "https://chromewebstore.google.com/detail/tab-sorter-pro/iicmneboehhnamjbbnfblejfgemgihnd",
    edgeUrl: "https://microsoftedge.microsoft.com/addons/detail/tab-sorter-pro/knijhblmdgkokapjnghamplmlpmiohpm",
    chromeUrl: "https://chromewebstore.google.com/detail/tab-sorter-pro/iicmneboehhnamjbbnfblejfgemgihnd",
    tech: ["Browser Extension", "TypeScript", "Chrome", "Edge"],
    stage: "Published & Live",
    summary:
      "Cross-browser extension for smart tab management with automatic sorting, grouping, and productivity features. Available on Chrome Web Store and Microsoft Edge Add-ons.",
    details: [
      "Automatic tab organization and intelligent grouping system.",
      "One-click sorting and cleaning for cluttered workspaces.",
      "Active user base spanning Australia, Brazil, Canada, China, Czechia, France, Germany, Hong Kong SAR, Hungary, India, Indonesia, Japan, Korea, Malaysia, Netherlands, Philippines, Singapore, Sweden, Switzerland, United Kingdom, United States, and Vietnam.",
      "125+ total installs with consistent 4+ star ratings.",
      "Lightweight, fast extension that integrates seamlessly with Edge browser workflows."
    ],
    highlights: {
      activeUsers: "64+",
      totalInstalls: "125+",
      countries: 22,
      countryList: "Australia, Brazil, Canada, China, Czechia, France, Germany, Hong Kong SAR, Hungary, India, Indonesia, Japan, Korea, Malaysia, Netherlands, Philippines, Singapore, Sweden, Switzerland, United Kingdom, United States, Vietnam"
    },
    status:
      "Production-ready extension in Microsoft Edge Add-ons store with continuous user growth and international reach.",
    features: [
      "Smart Auto-Sort: Intelligently organize tabs by domain and purpose",
      "Group Management: Create and manage tab groups with custom colors",
      "One-Click Cleanup: Remove duplicates and inactive tabs instantly",
      "Tab Search: Quick find any tab across your browser session",
      "Keyboard Shortcuts: Power user shortcuts for speed",
      "Sync Across Devices: Keep your organization synchronized"
    ]
  },
  {
    id: "pablo-focus-blocker",
    title: "Focus Blocker - DNR Redirect",
    owner: "Dima",
    extUrl: "https://chromewebstore.google.com/detail/focus-blocker-dnr-redirec/dlbjkoeipepfliekbhiojgalkbdhhogi",
    edgeUrl: "https://microsoftedge.microsoft.com/addons/detail/focus-blocker-dnr-redire/blbdfgcopalolnckkhfbdnnfpmaillpl",
    chromeUrl: "https://chromewebstore.google.com/detail/focus-blocker-dnr-redirec/dlbjkoeipepfliekbhiojgalkbdhhogi",
    tech: ["Browser Extension", "Declarative Net Request", "Chrome", "Edge"],
    stage: "Published & Live",
    summary:
      "Privacy-focused cross-browser extension that blocks distracting websites and redirects using Declarative Net Request. Available on Chrome Web Store and Microsoft Edge Add-ons.",
    details: [
      "Uses Microsoft Edge's Declarative Net Request API for efficient blocking.",
      "Customizable blocklist with preset categories and custom rules.",
      "Users across 22 countries benefit from distraction-free browsing.",
      "Active in Australia, Brazil, Canada, China, Czechia, France, Germany, Hong Kong SAR, Hungary, India, Indonesia, Japan, Korea, Malaysia, Netherlands, Philippines, Singapore, Sweden, Switzerland, United Kingdom, United States, and Vietnam.",
      "Privacy-first design with no data collection or tracking.",
      "Lightweight implementation for minimal resource usage."
    ],
    highlights: {
      downloads: "50+",
      installations: "113+",
      countries: 22,
      countryList: "Australia, Brazil, Canada, China, Czechia, France, Germany, Hong Kong SAR, Hungary, India, Indonesia, Japan, Korea, Malaysia, Netherlands, Philippines, Singapore, Sweden, Switzerland, United Kingdom, United States, Vietnam"
    },
    status:
      "Live and actively used across the globe with a growing international user base seeking privacy and focus.",
    features: [
      "Efficient Blocking: Uses Edge's Declarative Net Request for zero-lag performance",
      "Customizable Rules: Create specific blocklists for work, study, or relaxation modes",
      "Preset Categories: Pre-configured categories for social media, news, gaming, etc.",
      "Redirect Support: Intelligently redirect blocked sites to focus pages",
      "No Data Collection: Your browsing habits stay private",
      "Cross-Device Sync: Sync your preferences across Windows, Mac, and Linux"
    ]
  },
  {
    id: "dima-human-doc-typer",
    title: "HumanDocTyper",
    owner: "Dima",
    extUrl: "https://chromewebstore.google.com/detail/human-doc-typer/jnogomlcblccgnpnodfgeecahhpcfaod",
    chromeUrl: "https://chromewebstore.google.com/detail/human-doc-typer/jnogomlcblccgnpnodfgeecahhpcfaod",
    tech: ["Browser Extension", "Chrome", "Google Docs"],
    stage: "Published & Live",
    summary:
      "Chrome extension that types text into Google Docs with natural, human-like cadence — variable speed, realistic pauses, and configurable typing profiles.",
    details: [
      "Configurable WPM range and pause distribution to mimic real-person typing rhythm.",
      "Pasteboard-aware: paste from clipboard or load from a saved snippet, then play back at human pace.",
      "Pause, resume, and abort controls integrated directly in the Docs page.",
      "Lightweight Manifest V3 architecture with no external network calls — content stays local to the tab."
    ],
    highlights: {
      platform: "Chrome Web Store",
      target: "Google Docs",
      privacy: "100% local"
    },
    status:
      "Live on the Chrome Web Store and used daily for personal workflow automation.",
    features: [
      "Variable WPM: Set min/max typing speed for a natural distribution",
      "Realistic Pauses: Pause patterns that match real typing behavior",
      "Profile Presets: Swap between calm, normal, and fast typing personalities",
      "In-Doc Controls: Start, pause, and stop from inside Google Docs",
      "Clipboard Sync: Paste from clipboard with a single click",
      "Privacy First: No telemetry, no external requests, no account required"
    ]
  },
  {
    id: "zoande-stellarfronts",
    title: "StellarFronts",
    owner: "Pablo",
    repoUrl: "https://github.com/Zoande/stellarfronts",
    playUrl: "https://stellarfronts.com",
    localPath: "repos/Zoande__stellarfronts",
    tech: ["React 19", "Vite", "BabylonJS 7", "WebSocket", "TypeScript", "SQLite"],
    stage: "Real-time multiplayer prototype",
    summary:
      "Browser-based real-time space strategy game with a split client/server architecture: React+BabylonJS frontend, WebSocket game server, separate HTTP auth server, and an orchestrator that hosts multiple game versions on isolated worktrees in parallel.",
    details: [
      "End-to-end real-time loop: login, claim a country, explore the galaxy, expand with starbases and districts, manage economy and research over time.",
      "Three account tiers — player, observer, admin — with map visibility scoped to role and in-game admin debug commands.",
      "BabylonJS 7 command view with procedural skybox, loaded GLB ships and starbases, and HUD-style overlays.",
      "Auth server uses HttpOnly session cookies and PBKDF2-hashed passwords backed by SQLite.",
      "Game state persists per-game to JSON on a dirty-write timer; the orchestrator runs each game version as its own isolated server process behind a single gateway, so live games stay pinned to the code they started on while new games can run updated code.",
      "Built around logistics, expansion, economy, research, and market trading — not just direct combat."
    ],
    status:
      "In active development. Local stack runs end-to-end (client + auth + game server + orchestrator). Systems and balance are explicitly still a work in progress.",
    deliverableSteps: [
      "Wire up Google/Microsoft OAuth (endpoints stubbed but return 501).",
      "Balancing pass on economy, research, and market trading systems.",
      "Public hosted demo via the orchestrator gateway."
    ]
  }
];
