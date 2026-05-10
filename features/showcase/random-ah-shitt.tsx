import { WebcamPixelGrid } from "@/components/webcam-pixel-grid";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function WebcamPixelGridDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <TerminalWindow command="webcam-pixel-grid">
            <div ref={ref} className="relative h-full w-full overflow-hidden rounded-b-2xl">
                {isInView ? (
                    <WebcamPixelGrid
                        gridCols={50}
                        gridRows={30}
                        maxElevation={20}
                        motionSensitivity={0.25}
                        elevationSmoothing={0.2}
                        colorMode="webcam"
                        backgroundColor="#030303"
                        mirror={true}
                        gapRatio={0.05}
                        invertColors={false}
                        darken={0.6}
                        borderColor="#ffffff"
                        borderOpacity={0.06}
                        className="w-full h-full"
                        onWebcamReady={() => console.log("Webcam ready!")}
                        onWebcamError={(err) => console.error("Webcam error:", err)}
                    />

                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#030303]">
                        <p className="text-white/40 text-sm mb-2">Scroll to activate webcam demo</p>
                        <p className="text-white/20 text-xs">Interactive pixel grid powered by your camera</p>
                    </div>
                )}
            </div>
        </TerminalWindow>
    );
}