import { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail,MdOutlineDateRange } from "react-icons/md";
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
    <div className="w-full sm:w-[330px] bg-white shadow-md rounded-md overflow-hidden">
    <Link to='/blog' className="block hover:bg-gray-100 transition duration-300">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={user.avatar}
            alt="Profile"
          />
          <div>
            <h2 className="text-sm text-slate-500 font-medium">
              Username: {user.username}
            </h2>
            <p className="text-sm text-slate-500">
              Contact: {user.email}
            </p>
            <p className="text-sm text-slate-500">
              Created at: {moment(user.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          Comment: "{post.title}"
        </p>
      </div>
    </Link>
  </div>
  );
}
