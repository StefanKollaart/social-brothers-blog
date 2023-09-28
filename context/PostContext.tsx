"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createPost, fetchPosts } from "@/api/posts";
import { Post, PostContextType } from "@/types/Post";

const PostContext = createContext<PostContextType | undefined>(undefined);

function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [paginationMode, setPaginationMode] = useState<string>("paginate");

  const fetch = async (isInitial: boolean) => {
    if (!postsPerPage || !page) return;

    const tempPage = isInitial ? 1 : page;
    setPage(tempPage);

    setIsLoading(true);

    try {
      const { posts: fetchedPosts, total } = await fetchPosts(
        tempPage,
        postsPerPage
      );
      setTotal(total);
      setPosts((prevPosts) =>
        paginationMode === "paginate" || page === 1
          ? fetchedPosts
          : [...prevPosts, ...fetchedPosts]
      );
    } catch (error) {
      toast.error("Oeps, we konden deze data helaas niet laden.");
    } finally {
      setIsLoading(false);
    }
  };

  const create = async (post: FormData) => {
    setIsCreating(true);

    try {
      const newPost = await createPost(post);
      setPosts([newPost, ...posts]);
    } catch {
      toast.error(
        "Sorry, ik kon dit blog op dit moment niet posten. Gelukkig was de deadline zelf opgelegd, dus kan je er makkelijk onderuit :)"
      );
    } finally {
      setIsCreating(false);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(false);
  }, [page]);

  useEffect(() => {
    fetch(true);
  }, [postsPerPage, paginationMode]);

  const value: PostContextType = {
    posts,
    page,
    isLoading,
    isCreating,
    postsPerPage,
    total,
    fetch,
    create,
    nextPage,
    setPage,
    setPostsPerPage,
    setPaginationMode,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
