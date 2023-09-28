import { API_BASE_URL, API_TOKEN } from "@/config";

const fetchCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/categories`, {
    headers: {
      token: API_TOKEN,
    },
  });

  const categories = await res.json();

  return categories;
};

export { fetchCategories };
