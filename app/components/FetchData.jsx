import { motion } from "framer-motion";

export default async function FetchData() {
  const data = await fetch("https://api.vercel.app/blog");
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
    <ul >
      {blogs.map((blog) => (
        <li key={blog.id}>{blog.title}</li>
      ))}
    </ul>
  );
}
