const TOC_STRUCTURE = [
    {
        group: "Front Matter",
        color: "primary" as const,
        items: [
            { id: "title-page", label: "Title Page", href: "#title-card", subs: [] },
            { id: "toc", label: "Table of Contents", href: "#table-of-contents", subs: [] },
            { id: "acknowledgement", label: "Acknowledgment", href: "#acknowledgement", subs: [] },
            { id: "prayer", label: "Student Trainee Prayer", href: "#student-prayer", subs: [] },
            { id: "philosophy", label: "Personal Philosophy", href: "#personal-philosophy", subs: [] },
            { id: "career", label: "Career Plan", href: "#career-plan", subs: [] },
        ],
    },
    {
        group: "Chapter I: Introduction",
        color: "accent" as const,
        items: [
            {
                id: "ch1-a", label: "A. Importance of Internship",
                href: "/introduction#importance", subs: [],
            },
            {
                id: "ch1-b", label: "B. Objectives of Internship",
                href: "/introduction#objectives", subs: [],
            },
            {
                id: "ch1-c", label: "C. Time and Place",
                href: "/introduction#time-place", subs: [],
            },
        ],
    },
    {
        group: "Chapter II: Company Profile",
        color: "secondary" as const,
        items: [
            {
                id: "ch2-a", label: "1. Nature of the Agency",
                href: "/company-profile#cp-nature", subs: [],
            },
            {
                id: "ch2-b", label: "2. Mission / Vision / Goal Statement",
                href: "/company-profile#cp-mission", subs: [],
            },
            {
                id: "ch2-c", label: "3. History / Background of the Agency",
                href: "/company-profile#cp-history", subs: [],
            },
            {
                id: "ch2-d", label: "4. Organizational Structure",
                href: "/company-profile#cp-org", subs: [],
            },
        ],
    },
    {
        group: "Chapter III: Work Experiences",
        color: "primary" as const,
        items: [
            {
                id: "ch3-a", label: "1. Weekly Accomplishment Report",
                href: "/work-experience#we-weekly", subs: [],
            },
            {
                id: "ch3-b", label: "2. Daily Time Record",
                href: "/work-experience#we-dtr", subs: [],
            },
            {
                id: "ch3-c", label: "3. Internship Progress Report",
                href: "/work-experience#we-progress", subs: [],
            },
            {
                id: "ch3-d", label: "4. Internship Analysis Report",
                href: "/work-experience#we-analysis", subs: [],
            },
        ],
    },
    {
        group: "Chapter IV: Assessment of the Practicum Program",
        color: "accent" as const,
        items: [
            {
                id: "ch4-a", label: "A. Student Internship Evaluation Form",
                href: "/assessment", subs: [],
            },
        ],
    },
];

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
    { id: "appM", label: "Appendix M", desc: "Performance/Proficiency Rating Sheet (Placement Agency/Office)" },
    { id: "appN", label: "Appendix N", desc: "Pictures during Pre-service Seminar" },
    { id: "appO", label: "Appendix O", desc: "Pictures during Office Works" },
    { id: "appP", label: "Appendix P", desc: "Code of Ethics for CAST Student Internship" },
    { id: "appQ", label: "Appendix Q", desc: "Curriculum Vitae" },
    { id: "appR", label: "Appendix R", desc: "On-the-Job Training Portfolio Evaluation Form" },
];


export { TOC_STRUCTURE, APPENDICES_FULL };

// In @/data/portfolio.ts

