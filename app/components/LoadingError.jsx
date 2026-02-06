"use client";

import { useEffect, useState } from "react";

export default function LoadingError() {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        await delay(2000);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) {
          throw new Error("failed to fetch posts!");
        }

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  if (loading) {
    // return <p className="p-4">Loading posts...</p>;
    return (
        <div className="flex justify-center items-center">
            <span className="loading loading-infinity loading-xl text-black"></span>
        </div>
    );
  }
  if (error) {
    return <p className="p-4 text-red-500">Error: {error}</p>;
  }
  return (
    <div>
      <ul>
        {posts.slice(0, visible).map((post) => (
          <li className="p-2 bg-gray-200 mb-1 rounded" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      {visible < posts.length && (
        <button
          className="button_style"
          onClick={() => setVisible((v) => v + 25)}
        >
          Load more
        </button>
      )}
    </div>
  );
}
