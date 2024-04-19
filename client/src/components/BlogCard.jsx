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
      <Link to='/blog'>
        <div className="p-4">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={user.avatar}
              alt="Profile"
            />
            <div>
              <h2 className=" flex items-center">
                <CiUser className="text-slate-500 text-sm" />
                Username : {user.username}
              </h2>
              <p className="flex items-center">
                <MdOutlineEmail className="text-slate-500 text-sm" />
                Contact : {user.email}
              </p>
              <p className="flex items-center">
                <MdOutlineDateRange className="text-slate-500 text-sm"/>
                Created at : {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
          <p className="flex items-center mt-4">Comment : "{post.title}"</p>
        </div>
      </Link>
    </div>
  );
}
