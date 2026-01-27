import Image from "next/image";
import FavoriteColor from "./components/FavoriteColor";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import ReactForm from "./components/ReactForm";
import AnimateButton from "./components/AnimateButton";
import FeaturesList from "./components/FeaturesList";
import DragCard from "./components/DragCard";
import StickyCards from "./components/StickyCards";
import StickyCards2 from "./components/StickyCards2";
import StickyCards3 from "./components/StickyCards3";

export default function Home() {
  return (
    <div>
      <header className="pt-5 mb-5">
        <FavoriteColor />
      </header>
      {/* <Counter /> */}
      {/* <Toggle /> */}
      <FeaturesList />
      {/* <DragCard /> */}
      {/* <StickyCards /> */}
      <StickyCards3 />
      <ReactForm />
    </div>
  );
}
