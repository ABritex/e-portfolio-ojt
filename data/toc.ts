const TOC_STRUCTURE = [
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

export { TOC_STRUCTURE, APPENDICES_FULL };