import { motion } from "framer-motion";

export default async function FetchData() {
  const data = await fetch(process.env.BLOG_API_URL);
  const blogs = await data.json();

  // container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // item animation
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };
  return (
    <ul>
      {blogs.map((blog) => (
        <li className="bg-gray-200 p-2 mb-1 rounded-lg" key={blog.id}>
          {blog.title}
        </li>
      ))}
    </ul>
  );
}
