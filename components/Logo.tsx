export default function Logo({ tagline = true, size = "md" }: { tagline?: boolean; size?: "md" | "lg" }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-[family-name:var(--font-display)] font-extrabold tracking-wide ${
          size === "lg" ? "text-3xl" : "text-xl"
        }`}
      >
        <span className="text-fog">MAHA</span>
        <span className="text-accent">VIRAL</span>
      </span>
      {tagline && (
        <span className={`mt-1 text-mist ${size === "lg" ? "text-sm" : "text-[11px]"}`}>Every village. Every group.</span>
      )}
    </span>
  );
}
