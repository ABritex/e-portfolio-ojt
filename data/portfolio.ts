const PERSON = {
    name: "Nicholas Abeleda",
    title: "Full-Stack Developer & Builder",
    location: "Philippines",
    email: "you@email.com",
    id: "MA22-IT-02673",
    course: "Bachelor of Science in Information Technology, 4th Year",
    academicYear: "2024–2025",
    tagline: "node · next · postgres",
    internshipPeriod: "January 30, 2026 - May 4, 2026",
    adviser: "Ailen B. Garcia, EdD, DIT",
};

const OJT_INFO = {
    company: "LGU Bids and Awards Committee",
    hours: "504",
    law: "RA 9184",
    companyDescription:
        "The Bids and Awards Committee (BAC) of the Local Government Unit is the body responsible for ensuring that procurement of goods, services, and infrastructure projects follows the Government Procurement Reform Act (RA 9184). The office handles bidding documents, resolutions, notices, and all related procurement activities for the LGU.",
    location: {
        embedSrc:
            "https://www.google.com/maps/embed?pb=!4v1777448483233!6m8!1m7!1soP8c0ZiCOy5PCesTUjq7sQ!2m2!1d12.35326287488153!2d121.0687760359174!3f193.52110464495752!4f12.981733570573411!5f1.8847211613135837",
    },
};

// ── Title Page Info ───────────────────────────────────────────────────────────
const TITLE_PAGE_INFO = {
    university: "Your University Name Here",
    college: "College of Arts, Science, and Technology",
    department: "Department of Information Technology",
    supervisor: "Your OJT Supervisor Name",
    philosophy: [
        "I believe that technology, at its core, is a tool for people — and the value of any system is measured not by its elegance in code, but by the lives it makes easier and the problems it genuinely solves.",
        "My OJT experience reinforced this conviction. Working in a government office, handling real procurement documents and deadlines, I learned that discipline, accuracy, and accountability are not soft skills — they are the foundation of everything that works.",
        "I don't wait until I'm ready. I ship, I learn, I iterate. Every line of code, every filed document, every process understood is a brick in something that will outlast the moment it was built.",
    ],
};

// ── Acknowledgement Data ──────────────────────────────────────────────────────
const ACKNOWLEDGEMENT_INFO = {
    opening:
        "I would like to express my heartfelt thanks to everyone who supported me throughout my On-the-Job Training journey.",
    coordinator: "Your OJT Coordinator Name Here",
    supervisors: [
        "Supervisor One",
        "Supervisor Two",
        "Supervisor Three",
    ],
    interns: [
        "Intern One",
        "Intern Two",
        "Intern Three",
    ],
    closing: "I will carry the lessons and memories from this journey into my future career.",
};

// ── Student Trainee Prayer ────────────────────────────────────────────────────
const STUDENT_PRAYER = {
    paragraphs: [
        "Dear Heavenly Father,",
        "Thank You for walking with me during this internship experience. Your guidance strengthened me to overcome every obstacle and imparted in me wisdom to learn and understand. I thank You for the lessons, for the experience, and for the skills that I have acquired during the process. I seek Your forgiveness for where I came short, and thank You for never leaving my side.",
        "Please continue to bless me and my fellow interns as we proceed in life. Guide us into good work, keep us grounded in our values, and apply what we have learned to develop into the individuals You have intended us to be. May we always hold the lessons of this season close and use them to serve others well.",
        "Bless also our mentors, supervisors, and the institution that gave us this opportunity. May their dedication to teaching the next generation be rewarded many times over.",
    ],
    closing: "In Your name, Amen.",
};

// ── Career Plan ───────────────────────────────────────────────────────────────
const CAREER_PLAN = [
    {
        title: "Immediate Goals (0–6 Months)",
        items: [
            "Secure a full-time role in software or web development after graduation",
            "Target positions such as junior developer, support technician, or entry-level business analyst",
            "Continue developing my online portfolio showcasing real projects built during my studies",
            "Maintain and update my GitHub repositories with relevant, production-quality work",
            "Expand my network through developer communities and industry events",
        ],
    },
    {
        title: "Skill Development Focus",
        items: [
            "Study and master technologies like React, Next.js, Node.js, PostgreSQL, and Docker",
            "Learn business analysis techniques and data analytics fundamentals",
            "Acquire hands-on experience through freelance projects, open-source contributions, or volunteer work",
            "Remain active in developer communities such as GitHub and Stack Overflow",
            "Develop both technical depth and analytical thinking abilities",
        ],
    },
    {
        title: "Long-Term Vision",
        items: [
            "Progress to become a full-stack developer or senior software engineer",
            "Apply technology to address real-world problems and meaningful challenges",
            "Focus on creating solutions for underserved communities and public-sector systems",
            "Contribute to technological advancement in my local community",
            "Balance career growth with lasting social impact",
        ],
    },
];

// ── Full Table of Contents Structure ─────────────────────────────────────────
const TOC_STRUCTURE = [
    // ── Front Matter ──────────────────────────────────────────────────────────
    {
        group: "Front Matter",
        color: "primary" as const,
        items: [
            { id: "title-page", label: "Title Page", href: "/ojt/title", subs: [] },
            { id: "toc", label: "Table of Contents", href: "/ojt/toc", subs: [] },
            { id: "acknowledgement", label: "Acknowledgment", href: "/ojt/acknowledgement", subs: [] },
            { id: "prayer", label: "Student Trainee Prayer", href: "/ojt/prayer", subs: [] },
            { id: "philosophy", label: "Personal Philosophy", href: "/ojt/philosophy", subs: [] },
            { id: "career", label: "Career Plan", href: "/ojt/career", subs: [] },
        ],
    },
    // ── Chapter I ─────────────────────────────────────────────────────────────
    {
        group: "Chapter I: Introduction",
        color: "accent" as const,
        items: [
            {
                id: "ch1-a", label: "A. Importance of Internship",
                href: "/ojt/ch1#importance", subs: [],
            },
            {
                id: "ch1-b", label: "B. Objectives of Internship",
                href: "/ojt/ch1#objectives", subs: [],
            },
            {
                id: "ch1-c", label: "C. Time and Place",
                href: "/ojt/ch1#time-place", subs: [],
            },
        ],
    },
    // ── Chapter II ────────────────────────────────────────────────────────────
    {
        group: "Chapter II: Company Profile",
        color: "secondary" as const,
        items: [
            {
                id: "ch2-a", label: "1. Nature of the Agency",
                href: "/ojt/ch2#nature", subs: [],
            },
            {
                id: "ch2-b", label: "2. Mission / Vision / Goal Statement",
                href: "/ojt/ch2#mission", subs: [],
            },
            {
                id: "ch2-c", label: "3. History / Background of the Agency",
                href: "/ojt/ch2#history", subs: [],
            },
            {
                id: "ch2-d", label: "4. Organizational Structure",
                href: "/ojt/ch2#org-chart", subs: [],
            },
        ],
    },
    // ── Chapter III ───────────────────────────────────────────────────────────
    {
        group: "Chapter III: Work Experiences",
        color: "primary" as const,
        items: [
            {
                id: "ch3-a", label: "1. Weekly Accomplishment Report",
                href: "/ojt/ch3#weekly", subs: [],
            },
            {
                id: "ch3-b", label: "2. Daily Time Record",
                href: "/ojt/ch3#dtr", subs: [],
            },
            {
                id: "ch3-c", label: "3. Internship Progress Report",
                href: "/ojt/ch3#progress", subs: [],
            },
            {
                id: "ch3-d", label: "4. Internship Analysis Report",
                href: "/ojt/ch3#analysis", subs: [],
            },
        ],
    },
    // ── Chapter IV ────────────────────────────────────────────────────────────
    {
        group: "Chapter IV: Assessment of the Practicum Program",
        color: "accent" as const,
        items: [
            {
                id: "ch4-a", label: "A. Student Internship Evaluation Form",
                href: "/ojt/ch4#evaluation", subs: [],
            },
        ],
    },
];

// ── Appendices A–Q ────────────────────────────────────────────────────────────
const APPENDICES_FULL = [
    { id: "appA", label: "Appendix A", desc: "Evaluation Form" },
    { id: "appB", label: "Appendix B", desc: "Photocopy Registration Form" },
    { id: "appC", label: "Appendix C", desc: "Photocopy Validated ID" },
    { id: "appD", label: "Appendix D", desc: "Parent's Consent" },
    { id: "appE", label: "Appendix E", desc: "Medical Certificate" },
    { id: "appF", label: "Appendix F", desc: "Certificate of Good Moral Character & Application Letter" },
    { id: "appG", label: "Appendix G", desc: "Application Letter" },
    { id: "appH", label: "Appendix H", desc: "Endorsement Letter" },
    { id: "appI", label: "Appendix I", desc: "Memorandum of Agreement" },
    { id: "appJ", label: "Appendix J", desc: "Daily Time Record (Time Card)" },
    { id: "appK", label: "Appendix K", desc: "Certificate of Completion" },
    { id: "appL", label: "Appendix L", desc: "Certificate of Clearance" },
    { id: "appM", label: "Appendix M", desc: "Pictures during Pre-service Seminar" },
    { id: "appN", label: "Appendix N", desc: "Pictures during Office Works" },
    { id: "appO", label: "Appendix O", desc: "Code of Ethics for CAST Student Internship" },
    { id: "appP", label: "Appendix P", desc: "Curriculum Vitae" },
    { id: "appQ", label: "Appendix Q", desc: "On-the-Job Training Portfolio Evaluation Form" },
];

// ── Legacy flat lists (used by OJTNarrative component) ───────────────────────
const FRONT_MATTER = [
    {
        id: "title",
        label: "Title Page",
        content: `On-the-Job Training Narrative Report\nSubmitted by: ${PERSON.name}\n${PERSON.course}\nAcademic Year ${PERSON.academicYear}`,
    },
    {
        id: "table-of-contents",
        label: "Table of Contents",
        content:
            "Chapter 1 — Introduction\nChapter 2 — Company Profile\nChapter 3 — Work Experience\nChapter 4 — Assessment of the Practicum Program\nAppendix A–Q",
    },
    {
        id: "acknowledgement",
        label: "Acknowledgement",
        content: `Heartfelt thanks to the ${OJT_INFO.company} for accepting me as a trainee. To my supervisors and colleagues who guided me throughout ${OJT_INFO.hours} hours — thank you for the patience, the real work, and the trust.`,
    },
    {
        id: "prayer",
        label: "Student Trainee Prayer",
        content:
            "Lord, guide my hands as I work and my mind as I learn. May every document I handle reflect honesty, every task I complete reflect diligence, and every challenge I face strengthen my character. Amen.",
    },
    {
        id: "philosophy",
        label: "Personal Philosophy",
        content:
            "I believe in building things that work — not just on localhost, but in the real world. Every line of code, every filed document, every process learned is a brick in something that lasts.",
    },
    {
        id: "career",
        label: "Career Plan",
        content:
            "Short-term: Land a full-stack developer role. Mid-term: System architecture and open-source. Long-term: Build tools developers worldwide use.",
    },
];

const CHAPTERS = [
    {
        id: "ch1",
        label: "Chapter I — Introduction",
        content: `Narrative of my OJT at ${OJT_INFO.company} covering importance, objectives, and time/place of training.`,
    },
    {
        id: "ch2",
        label: "Chapter II — Company Profile",
        content: OJT_INFO.companyDescription,
    },
    {
        id: "ch3",
        label: "Chapter III — Work Experience",
        content:
            "Weekly accomplishment reports, daily time records, progress and analysis reports from the BAC Secretariat.",
    },
    {
        id: "ch4",
        label: "Chapter IV — Assessment of the Practicum Program",
        content:
            "Student internship evaluation reflecting on academic preparation, skills applied, and areas for growth.",
    },
];

const APPENDICES = [
    { id: "appA", label: "Appendix A" },
    { id: "appB", label: "Appendix B" },
    { id: "appC", label: "Appendix C" },
    { id: "appD", label: "Appendix D" },
];

const PHOTOS = [
    {
        src: "https://placehold.co/600x400/1a1a1a/888?text=Office+Documentation+Work",
        caption: "Office Documentation Work",
        tag: "BAC Secretariat",
        color: "text-accent",
    },
    {
        src: "https://placehold.co/600x400/1a1a1a/888?text=System+Development+Tasks",
        caption: "System Development Tasks",
        tag: "Digital Records",
        color: "text-primary",
    },
    {
        src: "https://placehold.co/600x400/1a1a1a/888?text=Procurement+Documentation",
        caption: "Procurement Documentation",
        tag: "RA 9184 Compliance",
        color: "text-secondary",
    },
    {
        src: "https://placehold.co/600x400/1a1a1a/888?text=BAC+Meetings",
        caption: "BAC Meetings & Deliberations",
        tag: "Bid Opening",
        color: "text-accent",
    },
];

// ── Showcase Data ─────────────────────────────────────────────────────────────
const TECH_CATEGORIES = [
    {
        id: "frontend",
        label: "Frontend",
        color: "text-primary",
        borderColor: "border-primary/30",
        bgColor: "bg-primary/10",
        techs: [
            { name: "Next.js", level: 90, note: "App Router, SSR, RSC" },
            { name: "React", level: 88, note: "Hooks, Context, Suspense" },
            { name: "TypeScript", level: 82, note: "Strict mode, generics" },
            { name: "Tailwind CSS", level: 92, note: "Utility-first, design systems" },
            { name: "Framer Motion", level: 70, note: "Animations, layout effects" },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        color: "text-accent",
        borderColor: "border-accent/30",
        bgColor: "bg-accent/10",
        techs: [
            { name: "Node.js", level: 85, note: "REST APIs, middleware" },
            { name: "PostgreSQL", level: 80, note: "Relational, Prisma ORM" },
            { name: "Prisma", level: 78, note: "Schema design, migrations" },
            { name: "Express.js", level: 83, note: "Routing, auth flows" },
            { name: "tRPC", level: 68, note: "End-to-end type safety" },
        ],
    },
    {
        id: "devops",
        label: "DevOps & OS",
        color: "text-secondary",
        borderColor: "border-secondary/30",
        bgColor: "bg-secondary/10",
        techs: [
            { name: "Linux", level: 88, note: "Daily driver, Arch & Ubuntu" },
            { name: "Git", level: 90, note: "Branching, rebasing, CLI" },
            { name: "Docker", level: 72, note: "Containers, compose" },
            { name: "Vercel", level: 86, note: "CI/CD, edge functions" },
            { name: "Bash / Zsh", level: 80, note: "Scripting, dotfiles" },
        ],
    },
];

const TOOLS = [
    { name: "Neovim", tag: "editor", color: "text-accent" },
    { name: "Tmux", tag: "terminal", color: "text-primary" },
    { name: "Alacritty", tag: "terminal emulator", color: "text-secondary" },
    { name: "Figma", tag: "design", color: "text-primary" },
    { name: "Postman", tag: "api testing", color: "text-accent" },
    { name: "TablePlus", tag: "database", color: "text-secondary" },
    { name: "GitHub", tag: "vcs", color: "text-foreground" },
    { name: "VSCode", tag: "editor", color: "text-primary" },
    { name: "Insomnia", tag: "api client", color: "text-accent" },
    { name: "Obsidian", tag: "notes", color: "text-secondary" },
    { name: "Raycast", tag: "launcher", color: "text-primary" },
    { name: "Warp", tag: "terminal", color: "text-accent" },
];

const ACHIEVEMENTS = [
    {
        title: "Dean's Lister",
        period: "S.Y. 2022–2024",
        desc: "Consistently ranked in the top academic tier for four consecutive semesters.",
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
    },
    {
        title: "Capstone Best in Presentation",
        period: "2024",
        desc: "Awarded best technical presentation for a full-stack inventory system.",
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
    },
    {
        title: "Open Source Contributor",
        period: "2023–present",
        desc: "Active pull requests on public repos. Bug fixes, documentation, and tooling improvements.",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        borderColor: "border-secondary/20",
    },
    {
        title: "504 Hours OJT Certified",
        period: "2025–2026",
        desc: "Completed supervised training in a government procurement office with full-cycle document handling.",
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
    },
];

export {
    PERSON,
    OJT_INFO,
    TITLE_PAGE_INFO,
    ACKNOWLEDGEMENT_INFO,
    STUDENT_PRAYER,
    CAREER_PLAN,
    TOC_STRUCTURE,
    APPENDICES_FULL,
    FRONT_MATTER,
    CHAPTERS,
    APPENDICES,
    PHOTOS,
    TECH_CATEGORIES,
    TOOLS,
    ACHIEVEMENTS,
};