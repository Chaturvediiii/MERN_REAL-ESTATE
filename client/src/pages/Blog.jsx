import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?limit=4");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
      {posts && posts.length > 0 && (
        <div className="">
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">
              Recent Testimonials
            </h2>
            <Link
              className="text-sm text-blue-800 hover:underline"
              to={"/blog"}
            >
              Show more testimonials
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
