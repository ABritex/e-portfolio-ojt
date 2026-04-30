'use client'
import { useEffect, useState } from 'react'

const LANGS = [
    { lang: 'Python', code: `print("Hello, World!")` },
    { lang: 'JavaScript', code: `console.log("Hello, World!")` },
    { lang: 'Java', code: `System.out.println("Hello, World!")` },
    { lang: 'C', code: `printf("Hello, World!\\n")` },
    { lang: 'C++', code: `cout << "Hello, World!"` },
    { lang: 'C#', code: `Console.WriteLine("Hello, World!")` },
    { lang: 'Ruby', code: `puts "Hello, World!"` },
    { lang: 'Go', code: `fmt.Println("Hello, World!")` },
    { lang: 'Rust', code: `println!("Hello, World!")` },
    { lang: 'Swift', code: `print("Hello, World!")` },
    { lang: 'Kotlin', code: `println("Hello, World!")` },
    { lang: 'PHP', code: `echo "Hello, World!"` },
    { lang: 'Perl', code: `print "Hello, World!\\n"` },
    { lang: 'R', code: `cat("Hello, World!\\n")` },
    { lang: 'Scala', code: `println("Hello, World!")` },
    { lang: 'Haskell', code: `putStrLn "Hello, World!"` },
    { lang: 'Lua', code: `print("Hello, World!")` },
    { lang: 'Dart', code: `print('Hello, World!')` },
    { lang: 'Elixir', code: `IO.puts "Hello, World!"` },
    { lang: 'Clojure', code: `(println "Hello, World!")` },
    { lang: 'F#', code: `printfn "Hello, World!"` },
    { lang: 'Bash', code: `echo "Hello, World!"` },
    { lang: 'Julia', code: `println("Hello, World!")` },
    { lang: 'Fortran', code: `PRINT *, 'Hello, World!'` },
    { lang: 'Pascal', code: `WriteLn('Hello, World!')` },
    { lang: 'Assembly', code: `mov eax, msg` },
]

export default function Loading() {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(i => (i + 1) % LANGS.length)
        }, 200)
        return () => clearInterval(interval)
    }, [])

    const { lang, code } = LANGS[idx]

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-background overflow-hidden">
            <div
                key={idx}
                className="flex flex-col items-center gap-2"
                style={{ animation: 'slideUp 0.3s ease-in-out both' }}
            >
                <p className="text-xs tracking-widest uppercase text-muted-foreground">
                    {lang}
                </p>
                <p className="text-xl font-bold text-accent">
                    {code}
                </p>
            </div>
        </div>
    )
}