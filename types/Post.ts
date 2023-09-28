import { Category } from "./Category";

export interface Post {
  category_id: number;
  category: Category;
  content: string;
  created_at: string;
  img_url: string;
  id: number;
  title: string;
}

export interface PostContextType {
  posts: Post[];
  page: number;
  isLoading: boolean;
  isCreating: boolean;
  postsPerPage: number | undefined;
  total: number;
  fetch: (isInitial: boolean) => void;
  create: (post: FormData) => void;
  nextPage: () => void;
  setPage: (page: number) => void;
  setPostsPerPage: (perPage: number) => void;
  setPaginationMode: (mode: string) => void;
}

export interface PostForm {
  category_id: string;
  content: string;
  image: File;
  title: string;
}

export interface PostFields {
  label: string;
  placeholder?: string | undefined;
  name: string;
  type: string;
  defaultValue?: string | undefined;
  rules: { required: string };
  selectOptions?: { value: number; name: string }[] | undefined;
}
