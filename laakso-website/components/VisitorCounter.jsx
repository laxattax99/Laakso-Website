import { useEffect, useState } from "react";

const VisitorCounter = ({ visitCount, isOpen, onClose }) => {

    return (
        <div 
            className="h-screen flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
            >
            <div className="text-center space-y-6">
                <p className="text-white/70 text-lg tracking-wide">YOU ARE VISITOR</p>
                <h1 className="text-8xl md:text-9xl font-bold text-white">{visitCount}</h1>
                <div className="mt-12 animate-bounce">
                    <p className="text-white/50 text-sm uppercase tracking-widest">Scroll to continue</p>
                    <div className="mt-2 flex justify-center">
                        <svg 
                            className="w-6 h-6 text-white/50" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitorCounter;