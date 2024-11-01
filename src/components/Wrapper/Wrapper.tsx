import React from 'react'

interface WrapperProps {
    children: React.ReactNode;
    className: string;
}
export default function WrapperComponent({children, className}: WrapperProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}