import { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${post.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [post]);
  return (
    <div className="w-full sm:w-[330px] p-1 rounded-xl shadow-md">
      <div className="bg-white p-6 rounded-lg">
        <blockquote className="text-gray-700 italic">
          <img src="/src/assets/comma.png" alt="" className="w-10 h-10" />
          <p className="mb-4">
            {post.title}
          </p>
        </blockquote>
        <div className="flex items-center">
          <img
            src={user.avatar}
            alt="Rachel Green"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-900 font-semibold">{user.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
