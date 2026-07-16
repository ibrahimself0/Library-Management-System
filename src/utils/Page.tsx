import React from "react";

interface PageProps {
    children: React.ReactNode;
    className?: string;
}

function Page({ children, className = "" }: PageProps) {
    return (
        <div className={className+ "w-full min-h-screen overflow-x-hidden"}>
            {children}
        </div>
    );
}

export default Page;