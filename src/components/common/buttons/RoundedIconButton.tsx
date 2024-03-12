'use client';

import React, { ReactNode } from 'react';

type Icon = ReactNode;

interface RoundedButtonProps {
    icon: Icon;
    bgColor?: string;
    width?: string;
    height?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
    icon,
    bgColor = 'bg-[#4D194D]',
    width = "px-[5%] sm:px-[3%] md:px-[3%] lg:px-[1%]",
    height = "py-[5%] sm:py-[3%] md:py-[3%] lg:py-[1%]",
    onClick
}) => {
    return (
        <button onClick={onClick} className={`rounded-full ${width} ${height} flex items-center justify-center focus:outline-none ${bgColor}`}>
            {icon && <div className="text-white">{icon}</div>}
        </button>
    );
}

export default RoundedButton;
