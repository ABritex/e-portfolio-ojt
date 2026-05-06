const TECH_CATEGORIES = [
    {
        id: "frontend",
        label: "Frontend",
        color: "text-primary",
        borderColor: "border-primary/30",
        bgColor: "bg-primary/10",
        techs: [
            { name: "Next.js", level: 90, note: "App Router, SSR, RSC", icon: "/icons/nextjs.svg" },
            { name: "React", level: 90, note: "Hooks, Context, Suspense", icon: "/icons/react.svg" },
            { name: "TypeScript", level: 85, note: "Strict mode, generics", icon: "/icons/typescript.svg" },
            { name: "Tailwind CSS", level: 95, note: "Utility-first, design systems", icon: "/icons/tailwind.svg" },
            { name: "Framer Motion", level: 70, note: "Animations, layout effects", icon: "/icons/framer.svg" },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        color: "text-accent",
        borderColor: "border-accent/30",
        bgColor: "bg-accent/10",
        techs: [
            { name: "Node.js", level: 90, note: "REST APIs, middleware", icon: "/icons/nodejs.svg" },
            { name: "PostgreSQL", level: 90, note: "Relational, Prisma ORM", icon: "/icons/postgresql.svg" },
            { name: "Drizzle", level: 87, note: "Schema design, migrations", icon: "/icons/prisma.svg" },
            { name: "Express.js", level: 73, note: "Routing, auth flows", icon: "/icons/express.svg" },
            { name: "tRPC", level: 86, note: "End-to-end type safety", icon: "/icons/trpc.svg" },
        ],
    },
    {
        id: "devops",
        label: "DevOps & OS",
        color: "text-secondary",
        borderColor: "border-secondary/30",
        bgColor: "bg-secondary/10",
        techs: [
            { name: "Linux", level: 94, note: "Daily driver, Arch & Ubuntu", icon: "/icons/linux.svg" },
            { name: "Git", level: 90, note: "Branching, rebasing, CLI", icon: "/icons/git.svg" },
            { name: "Docker", level: 82, note: "Containers, compose", icon: "/icons/docker.svg" },
            { name: "Vercel", level: 86, note: "CI/CD, edge functions", icon: "/icons/vercel.svg" },
            { name: "Bash / Zsh", level: 90, note: "Scripting, dotfiles", icon: "/icons/bash.svg" },
        ],
    },
];

const TOOLS = [
    { name: "Neovim", tag: "editor", color: "text-accent", icon: "/icons/nvim.svg" },
    { name: "Tmux", tag: "terminal", color: "text-primary", icon: "/icons/tmux.svg" },
    { name: "Alacritty", tag: "terminal emulator", color: "text-secondary", icon: "/icons/alacritty.svg" },
    { name: "Figma", tag: "design", color: "text-primary", icon: "/icons/figma.svg" },
    { name: "Postman", tag: "api testing", color: "text-accent", icon: "/icons/postman.svg" },
    { name: "TablePlus", tag: "database", color: "text-secondary", icon: "/icons/tableplus.svg" },
    { name: "GitHub", tag: "vcs", color: "text-foreground", icon: "/icons/github.svg" },
    { name: "VSCode", tag: "editor", color: "text-primary", icon: "/icons/vscode.svg" },
    { name: "Insomnia", tag: "api client", color: "text-accent", icon: "/icons/insomnia.svg" },
    { name: "Obsidian", tag: "notes", color: "text-secondary", icon: "/icons/obsidian.svg" },
    { name: "Raycast", tag: "launcher", color: "text-primary", icon: "/icons/raycast.svg" },
    { name: "Warp", tag: "terminal", color: "text-accent", icon: "/icons/warp.svg" },
];

export { TECH_CATEGORIES, TOOLS };