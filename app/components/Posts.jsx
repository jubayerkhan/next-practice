"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

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
    <div>
      {loading ? (
        <ul>
          {Array.from({ length: 20 }).map((_, i) => (
            <li
              key={i}
              className="p-2 mb-2 bg-gray-300 animate-pulse rounded h-6"
            />
          ))}
        </ul>
      ) : (
        <AnimatePresence>
          {posts.slice(0, visible).map((post) => (
            <motion.li
              key={post.id}
              variants={item}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="p-2 bg-gray-200 mb-1 rounded list-none"
            >
              {post.title}
            </motion.li>
          ))}
        </AnimatePresence>
      )}

      {visible < posts.length && (
        <button
          className="button_style"
          onClick={() => setVisible(visible + 25)}
        >
          Load more
        </button>
      )}
    </div>
  );
}
