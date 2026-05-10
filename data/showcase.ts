const TECH_CATEGORIES = [
    {
        id: "frontend",
        label: "Frontend",
        color: "text-primary",
        borderColor: "border-primary/30",
        bgColor: "bg-primary/10",
        techs: [
            { name: "Next.js", level: 90, note: "App Router, SSR, RSC", icon: "/icons/showcase/nextjs.svg" },
            { name: "React", level: 90, note: "Hooks, Context, Suspense", icon: "/icons/showcase/reactjs.svg" },
            { name: "TypeScript", level: 85, note: "Strict mode, generics", icon: "/icons/showcase/typescript.svg" },
            { name: "JavaScript", level: 92, note: "ES6+, async patterns", icon: "/icons/showcase/javascript-light.svg" },
            { name: "Tailwind CSS", level: 95, note: "Utility-first, design systems", icon: "/icons/showcase/tailwind.svg" },
        ],
    },

    {
        id: "backend",
        label: "Backend",
        color: "text-accent",
        borderColor: "border-accent/30",
        bgColor: "bg-accent/10",
        techs: [
            { name: "Node.js", level: 90, note: "REST APIs, middleware", icon: "/icons/showcase/nodejs.svg" },
            { name: "PostgreSQL", level: 90, note: "Relational databases", icon: "/icons/showcase/postgresql.svg" },
            { name: "Drizzle ORM", level: 87, note: "Schema design, migrations", icon: "/icons/showcase/drizzle-orm.svg" },
            { name: "Better Auth", level: 82, note: "Authentication & sessions", icon: "/icons/showcase/better-auth_light.svg" },
            { name: "Prisma", level: 78, note: "ORM, schema modeling", icon: "/icons/showcase/prisma-svgrepo-com.svg" },
            { name: "Supabase", level: 84, note: "Backend services, auth, storage", icon: "/icons/showcase/supabase.svg" },
            { name: "TanStack", level: 88, note: "Query, Table, Router", icon: "/icons/showcase/tanstack.svg" },
            { name: "Firebase", level: 80, note: "BaaS, real-time DB, auth", icon: "/icons/showcase/firebase.svg" },
            { name: "Redis", level: 75, note: "Caching, pub/sub", icon: "/icons/showcase/redis.svg" },
        ],
    },

    {
        id: "devops",
        label: "DevOps & OS",
        color: "text-secondary",
        borderColor: "border-secondary/30",
        bgColor: "bg-secondary/10",
        techs: [
            { name: "Linux", level: 94, note: "Daily driver, Arch & Ubuntu", icon: "/icons/showcase/linux.svg" },
            { name: "Git", level: 90, note: "Branching, rebasing, CLI", icon: "/icons/showcase/git.svg" },
            { name: "Docker", level: 82, note: "Containers, compose", icon: "/icons/showcase/docker.svg" },
            { name: "Vercel", level: 86, note: "CI/CD, edge functions", icon: "/icons/showcase/vercel.svg" },
            { name: "Railway", level: 78, note: "Deployments, hosting", icon: "/icons/showcase/railway.svg" },
            { name: "Cloudflare", level: 82, note: "CDN, Workers, R2", icon: "/icons/showcase/cloudflare.svg" },
            { name: "Bash / Zsh", level: 90, note: "Scripting, dotfiles", icon: "/icons/showcase/shell-light.svg" },
        ],
    },
];

const TOOLS = [
    { name: "Neovim", tag: "editor", color: "text-accent", icon: "/icons/showcase/neovim.svg" },
    { name: "VSCode", tag: "editor", color: "text-primary", icon: "/icons/showcase/vscode.svg" },
    { name: "Figma", tag: "ui/ux design", color: "text-primary", icon: "/icons/showcase/figma.svg" },
    { name: "Adobe Photoshop", tag: "photo editing", color: "text-accent", icon: "/icons/showcase/adobe-photoshop.svg" },
    { name: "Adobe Illustrator", tag: "vector design", color: "text-secondary", icon: "/icons/showcase/adobe-illustrator.svg" },
    { name: "Adobe", tag: "creative suite", color: "text-accent", icon: "/icons/showcase/adobe.svg" },
    { name: "GitHub", tag: "vcs", color: "text-foreground", icon: "/icons/github.svg" },
    { name: "Postman", tag: "api testing", color: "text-accent", icon: "/icons/showcase/postman.svg" },
    { name: "Neon.tech", tag: "database", color: "text-secondary", icon: "/icons/showcase/neon-tech.svg" },
    { name: "Obsidian", tag: "notes", color: "text-secondary", icon: "/icons/showcase/obsidian.svg" },
    { name: "Notion", tag: "notes", color: "text-accent", icon: "/icons/showcase/notion-light.svg" },
];

export { TECH_CATEGORIES, TOOLS };
