import IconProps from "@/shared/types/IconProps";

export function ChevronDownIcon({
  size = 24,
  className = "",
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={`transition-transform duration-500 ease-in-out ${className}`}
      {...props}
    >
      <path d="m4 9 8 8 8-8" />
    </svg>
  );
}
