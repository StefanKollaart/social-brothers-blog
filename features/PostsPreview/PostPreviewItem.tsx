import { STORAGE_BASE_URL } from "@/config";
import { formatDate } from "@/helpers/date";

interface Category {
  name: string;
}

interface PostPreviewItemProps {
  category: Category;
  title: string;
  imgUrl: string;
  date: string;
  content: string;
}

function PostPreviewItem({
  category,
  title,
  imgUrl,
  date,
  content,
}: PostPreviewItemProps) {
  const imageFullUrl = `${STORAGE_BASE_URL}/${imgUrl}`;

  return (
    <div className="shadow-preview-item">
      <div
        className="h-20 flex justify-between text-white text-xxxs items-end py-2 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageFullUrl})` }}
      >
        <div>{formatDate(new Date(date))}</div>
        <div>{category.name}</div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-xs leading-5 text-lighter-grey">{content}</p>
      </div>
    </div>
  );
}

export default PostPreviewItem;
