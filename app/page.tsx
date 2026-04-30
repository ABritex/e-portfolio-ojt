'use client'

import { useState, useEffect } from 'react'
import { Hero, HeroFooter, OJT, About, OJTNarrative } from "@/features/landing-page";
import Loading from '@/components/loading-startup'
import Header from '@/components/header';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.body.style.overflow = 'hidden'
        const timer = setTimeout(() => {
            setIsExiting(true)
            setTimeout(() => {
                setIsLoading(false)
                document.body.style.overflow = ''
                window.scrollTo(0, 0)
            }, 700)
        }, 3000)
        return () => {
            clearTimeout(timer)
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <div className="text-foreground font-mono">
            {isLoading && (
                <div
                    className="fixed inset-0 z-50 overflow-hidden transition-all duration-700 ease-in-out"
                    style={{
                        opacity: isExiting ? 0 : 1,
                        transform: isExiting ? 'translateY(-60px)' : 'translateY(0)',
                    }}
                >
                    <Loading />
                </div>
            )}

            {/* Hero — full screen */}
            <div id="top" className="h-screen flex flex-col overflow-hidden">
                <Header />
                <Hero />
                <HeroFooter />
            </div>

            {/* About — full screen feel */}
            <div className="min-h-screen flex flex-col items-center justify-center px-8 py-10">
                <About />
            </div>

            {/* OJT — full screen feel */}
            <div className="min-h-screen flex flex-col items-center justify-center px-8 py-10">
                <OJT />
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center px-8 py-10">
                <OJTNarrative />
            </div>

        </div>
    )
}