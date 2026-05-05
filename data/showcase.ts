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
        period: "2026–2026",
        desc: "Completed supervised training in a government procurement office with full-cycle document handling.",
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
    },
];

export { TECH_CATEGORIES, TOOLS, ACHIEVEMENTS };