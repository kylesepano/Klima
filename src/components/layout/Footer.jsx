export default function Footer({ collapsed = false }) {
  return (
    <footer
      className={`
        glass
        fixed
        bottom-0
        left-0
        right-0
        z-20
        rounded-t-2xl
        px-4
        py-3
        text-center
        transition-all
        duration-300
        ${collapsed ? "md:left-20" : "md:left-56"}
      `}
    >
      <h2 className="text-lg font-bold leading-tight">Klima</h2>

      <p className="text-xs text-slate-500">
        Designed by Kyle Dacalos © 2025
      </p>
    </footer>
  );
}
