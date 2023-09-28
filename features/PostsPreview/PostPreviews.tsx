"use client";

import { useEffect } from "react";

import { usePosts } from "@/context/PostContext";

import PostPreviewItem from "./PostPreviewItem";
import SpinnerOrChildren from "../../ui/Spinner/SpinnerOrChildren";
import Pagination from "./Pagination";
import Spinner from "@/ui/Spinner/Spinner";

interface PostsPreviewsProps {
  perPage: number;
  paginationMode?: "paginate" | "infinite-scroll";
}

function PostsPreviews({
  perPage,
  paginationMode = "paginate",
}: PostsPreviewsProps) {
  const postsContext = usePosts();
  const {
    posts,
    total,
    isLoading,
    nextPage,
    setPostsPerPage,
    setPage,
    setPaginationMode,
  } = postsContext;

  const onLoadMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    nextPage();
  };

  useEffect(() => {
    setPostsPerPage(perPage);
  }, [perPage]);

  useEffect(() => {
    setPaginationMode(paginationMode);
  });

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const gridCols = perPage === 4 ? "grid-cols-2" : "grid-cols-4";

  if (posts) {
    return (
      <div className="flex flex-col justify-between h-full">
        <div className={`grid ${gridCols} gap-6 h-full`}>
          {posts.map((post) => (
            <PostPreviewItem
              key={`post-preview-item-${post.id}`}
              category={post.category}
              title={post.title}
              imgUrl={post.img_url}
              date={post.created_at}
              content={post.content}
            />
          ))}
        </div>

        <Pagination
          paginationMode={paginationMode}
          handlePageChange={handlePageChange}
          pageCount={Math.ceil(total / perPage)}
          isLoading={isLoading}
          onLoadMoreClick={onLoadMoreClick}
        />
      </div>
    );
  } else {
    <Spinner />;
  }
}

export default PostsPreviews;
