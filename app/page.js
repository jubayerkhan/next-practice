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
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Posts from "./components/Posts";
import FetchData from "./components/FetchData";
import LoadingError from "./components/LoadingError";
import ShowHide from "./components/ShowHide";
import Glass from "./components/Glass";
import UserIcon from "./assets/user.svg";
import ParallaxCard from "./components/ParallaxCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <header className="pt-5 mb-5">
        <FavoriteColor />
      </header> */}
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
      <div className="parallax"></div>
      <ParallaxCard />
      <LoadingError />
      {/* <ShowHide /> */}
      {/* <Glass /> */}
    </div>
  );
}
