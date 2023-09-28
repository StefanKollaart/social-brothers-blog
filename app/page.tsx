"use client";

import Card from "@/ui/Card/Card";
import BlogForm from "@/features/BlogForm/BlogForm";
import PostsPreviews from "@/features/PostsPreview/PostPreviews";
import { usePage } from "@/context/PageContext";
import { useEffect } from "react";

function Home() {
  const postsPerPage = 4;

  const pageContext = usePage();
  const { setPageTitle } = pageContext;

  useEffect(() => {
    setPageTitle("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-5">
        <Card>
          <BlogForm />
        </Card>
      </div>
      <div className="col-span-7">
        <Card>
          <PostsPreviews
            perPage={postsPerPage}
            paginationMode={"infinite-scroll"}
          />
        </Card>
      </div>
    </div>
  );
}

export default Home;
