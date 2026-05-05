import { PERSON, OJT_INFO } from "./personal";

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
            "Chapter I — Introduction\nChapter II — Company Profile\nChapter III — Work Experience\nChapter IV — Assessment of the Practicum Program\nAppendix A–Q",
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

export { FRONT_MATTER, CHAPTERS, APPENDICES, PHOTOS };