export default function LoadingSkeleton({
  height = "h-40",
}) {
  return (
    <div
      className={`
      animate-pulse
      glass
      rounded-3xl
      ${height}
      `}
    />
  );
}