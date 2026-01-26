import Image from "next/image";
import FavoriteColor from "./components/FavoriteColor";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import ReactForm from "./components/ReactForm";
import AnimateButton from "./components/AnimateButton";
import FeaturesList from "./components/FeaturesList";

export default function Home() {
  return (
    <div>
      <header className="pt-5 mb-5">
        <FavoriteColor />
      </header>
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <ReactForm /> */}
      {/* <AnimateButton stiffness={300} damping={15}>Blue</AnimateButton> */}
      <FeaturesList />
    </div>
  );
}
