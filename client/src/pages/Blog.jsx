import { useEffect,useState } from "react";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getUsers`);
        const data = await res.json();
        if (res.ok) {
          setUser(data.users);
          if (data.users.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
      fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Blogs</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
  )
}
