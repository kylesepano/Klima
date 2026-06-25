import { FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      glass

      mt-8

      py-8

      text-center

      rounded-t-3xl
      "
    >
      <h2
        className="
        text-3xl
        font-bold
        mb-2
        "
      >
        Klima
      </h2>

      <p
        className="
        text-slate-400
        "
      >
        Your daily forecast, beautifully simple.
      </p>

      <div
        className="
        flex
        justify-center
        gap-6
        my-4
        "
      >
        <FaGithub />
        <FaEnvelope />
        <FaGlobe />
      </div>

      <p
        className="
        text-slate-500
        text-sm
        "
      >
        Designed by Kyle Dacalos © 2025
      </p>
    </footer>
  );
}
