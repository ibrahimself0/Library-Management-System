import React from "react";

interface PageProps {
    children: React.ReactNode;
    className?: string;
}

function Page({ children, className = "" }: PageProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Page;