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
      <UserIcon className="mt-10 mx-auto cursor-pointer w-6 h-6 text-black hover:text-[#1EC8C8] transition-colors duration-300" />
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-10 mx-auto cursor-pointer w-6 h-6 text-black hover:text-[#1EC8C8] transition-colors duration-300"
      >
        <path
          d="M13 13C16.5899 13 19.5 10.0899 19.5 6.5C19.5 2.91015 16.5899 0 13 0C9.41015 0 6.5 2.91015 6.5 6.5C6.5 10.0899 9.41015 13 13 13Z"
          fill="currentColor"
        />
        <path
          d="M13 15.166C7.6177 15.172 3.25599 19.5337 3.25 24.916C3.25 25.5143 3.73501 25.9993 4.33332 25.9993H21.6666C22.2649 25.9993 22.7499 25.5143 22.7499 24.916C22.744 19.5337 18.3823 15.172 13 15.166Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
