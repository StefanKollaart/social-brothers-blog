"use client";

import { usePage } from "@/context/PageContext";
import PostPreviews from "@/features/PostsPreview/PostPreviews";
import { useEffect } from "react";

function Blog() {
  const postsPerPage = 8;

  const pageContext = usePage();
  const { setPageTitle } = pageContext;

  useEffect(() => {
    setPageTitle("Blog");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PostPreviews perPage={postsPerPage} />
    </div>
  );
}

export default Blog;
