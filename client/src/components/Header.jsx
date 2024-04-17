import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const path = useLocation().pathname;
  return (
    <Navbar>
      <Navbar.Brand className="font-bold text-10xl sm:text-xl">
        <span className="text-slate-500">Real</span>
        <span className="text-slate-700">Estate</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/dashboard">
          {currentUser ? (
            <img
              className="rounded-full h-7 w-7 object-cover"
              src={currentUser.avatar}
              alt="profile"
            />
          ) : (
            <Button className="bg-slate-700">
              <Link to="sign-in">Sign In</Link>
            </Button>
          )}
          <Navbar.Toggle />
        </Link>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About Us</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/properties"} as={"div"}>
          <Link to="/properties">Properties</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/our-agents"} as={"div"}>
          <Link to="/our-agents">Our Agents</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/blog"} as={"div"}>
          <Link to="/blog">Testimonials</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link to="/contact">Contact Us</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
