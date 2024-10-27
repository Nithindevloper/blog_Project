"use client";

import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdAccountCircle, MdCreate } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openModal } from "@/app/pages/store/modalSlice";
import Modal from "@/components/Modal";
import { FaUserPlus } from "react-icons/fa";

import logo from "@/assets/Blog Logo png.png";
import Image from "next/image";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <nav className="flex w-full p-[10px] bg-slate-200 justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Link href="/pages/profile" aria-label="Profile">
          <MdAccountCircle className="text-sky-700 text-2xl" />
        </Link>
        <Link href="/pages/addblog" aria-label="Create Blog">
          <MdCreate className="text-sky-700 text-2xl" />
        </Link>
        <Link href="/pages/add" aria-label="Search">
          <IoSearch className="text-sky-700 text-2xl" />
        </Link>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center items-center">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="Blog Logo" className="w-[40px]" />
        </Link>
      </div>

      {/* Navigation Links and Modal Trigger */}
      <div className="flex items-center gap-6">
        <ul className="flex space-x-4 list-none text-sky-700 font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pages/about">About</Link>
          </li>
          <li>
            <Link href="/pages/contact">Contact</Link>
          </li>
          <li>
            <Link href="/pages/profile">Profile</Link>
          </li>
        </ul>
        <FaUserPlus
          onClick={() => dispatch(openModal())}
          className="cursor-pointer text-2xl text-blue-500"
        />
        <Modal />
      </div>
    </nav>
  );
};

export default Navbar;
