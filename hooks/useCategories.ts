import { fetchCategories } from "@/api/categories";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = async () => {
    setIsLoading(true);

    try {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    } catch {
      toast.error("Oeps, we konden deze data helaas niet laden.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, []);

  return { categories, isLoading };
};

export default useCategories;
