import SearchBar from "./SearchBar";
import LocationButton from "./LocationButton";

export default function Header() {
  return (
    <div
      className="
      flex
      justify-end
      mb-6
      "
    >
      <div
        className="
        flex
        items-center
        gap-2
        w-full
        md:w-[420px]
        "
      >
        <SearchBar />
        <LocationButton />
      </div>
    </div>
  );
}