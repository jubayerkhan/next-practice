"use client";
import UserIcon from "../assets/user.svg";

export default function Glass() {
  return (
    <>
      <nav className="flex justify-between items-center mt-5">
        <div className="p-4 rounded-full bg-gray-200 flex justify-center items-center group cursor-pointer">
          <UserIcon className="cursor-pointer w-6 h-6 text-gray-500 group-hover:text-[#1EC8C8] transition-colors duration-300" />
        </div>
        <div>
          <ul className="flex gap-8 font-semibold text-xl items-center">
            <li className="text-gray-500 hover:text-[#1EC8C8] transition-colors duration-300 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 hover:text-[#1EC8C8] transition-colors duration-300 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 hover:text-[#1EC8C8] transition-colors duration-300 cursor-pointer">
              Blogs
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
