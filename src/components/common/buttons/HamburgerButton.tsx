import React, { ReactNode } from 'react';

interface HamburgerButtonProps {
    label: string;
    icon?: ReactNode;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
    label,
    icon
}) => {
    return (
        <button className="flex items-center px-4 py-2 text-left text-white focus:outline-none">
            {icon && <span className="w-5 h-5 mr-3" aria-hidden="true">{icon}</span>}
            <span>{label}</span>
        </button>
    );
};

export default HamburgerButton;
