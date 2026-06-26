import SearchBar from "./SearchBar";
import LocationButton from "./LocationButton";

export default function Header() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div
      className="
      flex
      flex-col
      gap-4
      py-5
      md:flex-row
      md:items-center
      md:justify-between
      "
    >
      <div>
        <h2 className="text-2xl font-bold tracking-normal text-white md:text-3xl">
          {greeting}
        </h2>
        <p className="mt-1 text-sm text-slate-300">
          Here's what's happening with the weather today.
        </p>
      </div>

      <div
        className="
        flex
        items-center
        gap-2
        w-full
        md:w-[360px]
        lg:w-[420px]
        "
      >
        <SearchBar />
        <LocationButton />
      </div>
    </div>
  );
}
