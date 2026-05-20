import Image from "next/image";
import FavoriteColor from "./components/FavoriteColor";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Toggle from "./components/Toggle";
import ReactForm from "./components/ReactForm";
import AnimateButton from "./components/AnimateButton";
import FeaturesList from "./components/FeaturesList";
import DragCard from "./components/DragCard";
import StickyCards from "./components/StickyCards";
import StickyCards2 from "./components/StickyCards2";
import StickyCards3 from "./components/StickyCards3";
import ThemeSwitcher from "./components/ThemeSwitcher";
import UseEffectExample from "./components/UseEffectExample";
import Users from "./components/Users";
import Posts from "./components/Posts";
import FetchData from "./components/FetchData";
import LoadingError from "./components/LoadingError";
import ShowHide from "./components/ShowHide";
import Glass from "./components/Glass";
import UserIcon from "./assets/user.svg";

export default function Home() {
  return (
    <div>
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
              Contact
            </li>
            <li className="text-gray-500 hover:text-[#1EC8C8] transition-colors duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </nav>
      <header className="pt-5 mb-5">{/* <FavoriteColor /> */}</header>
      {/* <Counter2 /> */}
      {/* <Toggle /> */}
      {/* <FeaturesList /> */}
      {/* <DragCard /> */}
      {/* <StickyCards /> */}
      {/* <StickyCards3 /> */}
      {/* < ThemeSwitcher /> */}
      {/* <UseEffectExample /> */}
      {/* <ReactForm /> */}
      {/* <Users /> */}
      {/* <Posts /> */}
      {/* <FetchData /> */}
      <LoadingError />
      {/* <ShowHide /> */}
      {/* <Glass /> */}
    </div>
  );
}
