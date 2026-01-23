import Image from "next/image";
import FavoriteColor from "./components/FavoriteColor";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

export default function Home() {
  return (
    <div>
      <header className="pt-5 mb-5">
        <FavoriteColor />
      </header>
      <Counter />
      <Toggle />
    </div>
  );
}
