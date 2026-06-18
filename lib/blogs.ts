import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  author?: string;
  published?: boolean;
  createdAt?: any;
};

const getTimestampValue = (date: any) => {
  if (!date) return 0;

  if (typeof date?.toDate === "function") {
    return date.toDate().getTime();
  }

  if (typeof date === "string") {
    return new Date(date).getTime();
  }

  return 0;
};

export const formatBlogDate = (date: any) => {
  if (!date) return "";

  if (typeof date?.toDate === "function") {
    return date.toDate().toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  if (typeof date === "string") {
    return new Date(date).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return "";
};

export const getPublishedBlogs = async (): Promise<BlogPost[]> => {
  const blogsRef = collection(db, "blogs");

  const blogsQuery = query(blogsRef, where("published", "==", true));

  const snapshot = await getDocs(blogsQuery);

  const blogs = snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as BlogPost[];

  return blogs.sort(
    (a, b) => getTimestampValue(b.createdAt) - getTimestampValue(a.createdAt)
  );
};

export const getLatestBlogs = async (limitCount = 3): Promise<BlogPost[]> => {
  const blogs = await getPublishedBlogs();

  return blogs.slice(0, limitCount);
};

export const getBlogBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  const blogsRef = collection(db, "blogs");

  const blogsQuery = query(blogsRef, where("slug", "==", slug));

  const snapshot = await getDocs(blogsQuery);

  if (snapshot.empty) return null;

  const docSnap = snapshot.docs[0];

  const blog = {
    id: docSnap.id,
    ...docSnap.data(),
  } as BlogPost;

  if (blog.published === false) return null;

  return blog;
};