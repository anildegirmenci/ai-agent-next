"use client"

import { createContext, useState } from "react";

interface NavigationContextType {
    isMobileNavOpen: boolean;
    setIsMobileNavOpen: (isOpen: boolean) => void;
    closeMobileNav: () => void;
}

export const NavigationContext = createContext<NavigationContextType>({
    isMobileNavOpen: false,
    setIsMobileNavOpen: () => { },
    closeMobileNav: () => { },
});

2
export function NavigationProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const closeMobileNav = () => setIsMobileNavOpen(false);

    return (
        <NavigationContext
            value={{
                isMobileNavOpen,
                setIsMobileNavOpen,
                closeMobileNav
            }}>
            {children}
        </NavigationContext>
    )
}