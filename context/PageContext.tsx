"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface PageContextType {
  pageTitle: string;
  setPageTitle: (title: string) => void;
}

interface PageProviderProps {
  children: ReactNode;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

function PageProvider({ children }: PageProviderProps) {
  const [pageTitle, setPageTitle] = useState<string>("");

  const value: PageContextType = {
    pageTitle,
    setPageTitle,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

function usePage(): PageContextType {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
}

export { PageProvider, usePage };
