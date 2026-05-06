import { PERSON, OJT_INFO } from "./personal";

const FRONT_MATTER = [
    {
        id: "title-page",
        label: "Title Page",
        content: `On-the-Job Training Narrative Report\nSubmitted by: ${PERSON.name}\n${PERSON.course}\nAcademic Year ${PERSON.academicYear}`,
    },
    {
        id: "title-page#table-of-contents",
        label: "Table of Contents",
        content: "Chapter I — Introduction\nChapter II — Company Profile\nChapter III — Work Experience\nChapter IV — Assessment of the Practicum Program\nAppendix A–Q",
    },
    {
        id: "title-page#acknowledgement",
        label: "Acknowledgement",
        content: `Heartfelt thanks to the ${OJT_INFO.company} for accepting me as a trainee. To my supervisors and colleagues who guided me throughout ${OJT_INFO.hours} hours — thank you for the patience, the real work, and the trust.`,
    },
    {
        id: "title-page#student-prayer",
        label: "Student Trainee Prayer",
        content: "Lord, guide my hands as I work and my mind as I learn. May every document I handle reflect honesty, every task I complete reflect diligence, and every challenge I face strengthen my character. Amen.",
    },
    {
        id: "title-page#personal-philosophy",
        label: "Personal Philosophy",
        content: "I believe in building things that work — not just on localhost, but in the real world. Every line of code, every filed document, every process learned is a brick in something that lasts.",
    },
    {
        id: "title-page#career-plan",
        label: "Career Plan",
        content: "Short-term: Land a full-stack developer role. Mid-term: System architecture and open-source. Long-term: Build tools developers worldwide use.",
    },
];

const CHAPTERS = [
    {
        id: "introduction",
        label: "Chapter I — Introduction",
        content: `Narrative of my OJT at ${OJT_INFO.company} covering importance, objectives, and time/place of training.`,
    },
    {
        id: "company-profile",
        label: "Chapter II — Company Profile",
        content: OJT_INFO.companyDescription,
    },
    {
        id: "work-experience",
        label: "Chapter III — Work Experience",
        content:
            "Weekly accomplishment reports, daily time records, progress and analysis reports from the BAC Secretariat.",
    },
    {
        id: "assessment",
        label: "Chapter IV — Assessment of the Practicum Program",
        content:
            "Student internship evaluation reflecting on academic preparation, skills applied, and areas for growth.",
    },
    {
        id: "appendices",
        label: "Appendices",
        content:
            "Student internship evaluation reflecting on academic preparation, skills applied, and areas for growth.",
    },
];

const PHOTOS = [
    {
        src: "/images/loggin-svp.webp",
        caption: "Digital Records Login System",
        tag: "SVP",
        color: "text-primary",
    },
    {
        src: "/images/scanning-bidding-papers.webp",
        caption: "Scanning Bidding Documents",
        tag: "Document Processing",
        color: "text-accent",
    },
    {
        src: "/images/segregation-svp.webp",
        caption: "Records Segregation",
        tag: "SVP",
        color: "text-secondary",
    },
    {
        src: "/images/bac-meeting.webp",
        caption: "BAC Meeting Proceedings",
        tag: "Bid Opening",
        color: "text-accent",
    },
];

export { FRONT_MATTER, CHAPTERS, PHOTOS };