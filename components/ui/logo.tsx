type LogoProps = {
  // Rendered height in px. The mark is wider than it is tall.
  size?: number;
  className?: string;
};

// The favicon's mark without its badge, recolored for the light site and
// cropped to the strokes so it lines up with text.
const VIEWBOX = { x: 3, y: 8.5, width: 26, height: 15 };

export function Logo({ size = 24, className }: LogoProps) {
  return (
    <svg
      width={Math.round((size * VIEWBOX.width) / VIEWBOX.height)}
      height={size}
      viewBox={`${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.width} ${VIEWBOX.height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 10 L4.5 16 L9 22"
        fill="none"
        stroke="#0f766e"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 ease-out-soft group-hover/logo:-translate-x-[1.5px]"
      />
      <path
        d="M23 10 L27.5 16 L23 22"
        fill="none"
        stroke="#0f766e"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 ease-out-soft group-hover/logo:translate-x-[1.5px]"
      />
      <path
        d="M12.3 21.5 L16 10.5 L19.7 21.5"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
