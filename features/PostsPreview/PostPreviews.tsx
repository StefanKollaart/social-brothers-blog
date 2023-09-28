"use client";

import PostPreviewItem from "./PostPreviewItem";
import Button from "@/ui/Button/Button";
import SpinnerOrChildren from "../../ui/Spinner/SpinnerOrChildren";
import { useEffect } from "react";
import { usePosts } from "@/context/PostContext";
import ReactPaginate from "react-paginate";

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

  // Define the callback function to handle page changes
  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const gridCols = perPage === 4 ? "grid-cols-2" : "grid-cols-4";

  if (posts) {
    return (
      <div className="flex flex-col justify-between h-full">
        <SpinnerOrChildren isLoading={isLoading}>
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
        </SpinnerOrChildren>

        {paginationMode === "infinite-scroll" && (
          <div className="mt-6 flex justify-center">
            <SpinnerOrChildren isLoading={isLoading}>
              <Button onClick={onLoadMoreClick}>Laad meer</Button>
            </SpinnerOrChildren>
          </div>
        )}

        {paginationMode !== "infinite-scroll" && (
          <div className="mt-6 flex justify-center">
            <ReactPaginate
              previousLabel={""}
              nextLabel={"Volgende pagina"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(total / perPage)}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        )}
      </div>
    );
  }
}

export default PostsPreviews;
