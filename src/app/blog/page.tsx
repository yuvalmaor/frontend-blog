"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";


interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("https://blog.yuvallab.xyz/api/posts", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setPosts(response.data);
        setLoading(false);
      } catch {
        setError("Failed to fetch posts");
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center text-gray-600 mt-5">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-5">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Blog</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}