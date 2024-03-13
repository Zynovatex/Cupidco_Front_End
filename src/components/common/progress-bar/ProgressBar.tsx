'use client';

import React from 'react';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="mb-4 w-full max-w-lg">
                <div className="relative md:h-2.5 h-2 w-full bg-primary-purple bg-opacity-40 rounded-full overflow-hidden">
                    <div
                        className="absolute rounded-full top-0 left-0 h-full bg-primary-purple bg-opacity-65 transition-width duration-1000 ease-in-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
            <div className="text-center">
                <p className="text-lg font-normal font-playfair-display text-primary-purple">{progress}% Completed</p>
            </div>
        </div>
    );
};

export default ProgressBar;