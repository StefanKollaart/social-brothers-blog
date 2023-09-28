"use client";

import { usePage } from "@/context/PageContext";

function HeaderTitle() {
  const pageContext = usePage();
  const { pageTitle } = pageContext;

  return <h1 className="text-5xl font-bold text-white">{pageTitle}</h1>;
}

export default HeaderTitle;
