import Image from "next/image";
import FavoriteColor from "./components/FavoriteColor";

export default function Home() {
  return (
    <div>
      <header className="pt-5">
        <FavoriteColor />
      </header>
    </div>
  );
}
