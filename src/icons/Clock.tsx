import React, { FC, SVGProps } from 'react'

export const Clock: FC<SVGProps<SVGSVGElement>> = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10.5" stroke="#E40000" strokeWidth="3" />
        <path d="M6.40002 12.8H12V4.80002" stroke="black" strokeWidth="3" />
    </svg>
)
