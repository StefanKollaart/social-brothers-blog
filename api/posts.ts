import { API_BASE_URL, API_TOKEN } from "@/config";

const fetchPosts = async (page: number, perPage: number) => {
  const res = await fetch(
    `${API_BASE_URL}/posts?page=${page}&perPage=${perPage}&sortBy=created_at&sortDirection=desc`,
    {
      headers: {
        token: API_TOKEN,
      },
    }
  );

  const { data: posts, total } = await res.json();

  return { posts, total };
};

const createPost = async (post: FormData) => {
  const res = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      token: API_TOKEN,
    },
    body: post,
  });

  const data = await res.json();

  return data;
};

export { fetchPosts, createPost };
